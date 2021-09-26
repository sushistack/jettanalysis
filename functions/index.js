const functions = require('firebase-functions');
const admin = require('firebase-admin');

// CORS Express middleware to enable CORS Requests.
const cors = require('cors')({
  origin: true,
});

require('dotenv').config();

const privateKey = (process.env.FIREBASE_ADMIN_PRIVATE_KEY || '')
    .split('\\n')
    .join('\n');

const serviceAccount = {
  'type': process.env.FIREBASE_ADMIN_TYPE,
  'project_id': process.env.FIREBASE_ADMIN_PROJECT_ID,
  'private_key_id': process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
  'private_key': privateKey,
  'client_email': process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  'client_id': process.env.FIREBASE_ADMIN_CLIENT_ID,
  'auth_uri': process.env.FIREBASE_ADMIN_AUTH_URI,
  'token_uri': process.env.FIREBASE_ADMIN_TOKEN_URI,
  'auth_provider_x509_cert_url': process.env.FIREBASE_ADMIN_AUTH_PROV_CERT_URL,
  'client_x509_cert_url': process.env.FIREBASE_ADMIN_CLIENT_CERT_URL,
};


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const request = require('request-promise');

const PROVIDER = {
  NAVER: 'NAVER',
  KAKAO: 'KAKAO',
};

const OAUTH = {
  NAVER: {
    TOKEN_API: 'https://nid.naver.com/oauth2.0/token',
    USER_INFO_API: 'https://openapi.naver.com/v1/nid/me',
    REQ_BODY_FOR_ACCESS_TOKEN: {
      grant_type: 'authorization_code',
      client_id: process.env.NUXT_APP_NAVER_CLIENT_ID,
      client_secret: process.env.NAVER_CLIENT_SECRET,
      code: null,
      redirect_uri: '',
    },
    USER_INFO_PROPERTIES: {
      displayName: ['name'],
      photoURL: ['profile_image'],
      email: ['email'],
    },
  },
  KAKAO: {
    TOKEN_API: 'https://kauth.kakao.com/oauth/token',
    USER_INFO_API: 'https://kapi.kakao.com/v2/user/me?secure_resource=true',
    REQ_BODY_FOR_ACCESS_TOKEN: {
      grant_type: 'authorization_code',
      client_id: process.env.KAKAO_CLIENT_ID,
      client_secret: process.env.KAKAO_CLIENT_SECRET,
      code: null,
      state: null,
    },
    USER_INFO_PROPERTIES: {
      displayName: ['properties', 'nickname'],
      photoURL: ['properties', 'profile_image'],
      email: ['kakao_account', 'email'],
    },
  },
};

/**
 * requestUserInfo - Returns user profile from oauth API
 *
 * @param  {String} token Access token retrieved by oauth Login API
 * @param  {String} provider
 * @return {Promiise<Response>}      User profile response in a promise
 */
function requestUserInfo(token, provider) {
  console.log('request user info');
  return request({
    method: 'GET',
    headers: {'Authorization': 'Bearer ' + token},
    url: OAUTH[provider].USER_INFO_API,
  });
}

/**
 * requestAccessToken - Returns user info from oauth API
 *
 * @param  {String} code code by oauth Login API
 * @param  {String} provider
 * @return {Promise<Response>}
 */
function requestAccessToken(code, provider) {
  console.log('request Access Token, provider', provider);

  const oauth = OAUTH[provider];
  const body = oauth.REQ_BODY_FOR_ACCESS_TOKEN;

  body.code = code;
  if (provider === PROVIDER.NAVER) {
    body.state = Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
  }

  return request({
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    url: oauth.TOKEN_API,
    form: body,
  });
}

/**
 * getUserInfo - Returns user info api response body
 *
 * @param  {Object} body
 * @param  {String} provider
 * @return {Object} UserInfo
 */
function getUserInfo(body, provider) {
  const userInfo = {
    userId: `${provider.toLowerCase()}:${body.id}`,
    claims: {
      displayName: null,
      photoURL: null,
      email: null,
      provider: provider,
    },
  };

  const properties = OAUTH[provider].USER_INFO_PROPERTIES;

  let b = null;
  Object.keys(properties).forEach((key) => {
    b = body;
    for (let i = 0; i < properties[key].length; i += 1) {
      b = b && b[properties[key][i]];
    }
    userInfo.claims[key] = b;
  });

  console.log('userInfo', userInfo);
  return userInfo;
}

/**
 * updateOrCreateUser - Update Firebase user with the give email, create if
 * none exists.
 *
 * @param  {Object} userInfo      user info
 * @return {Prommise<UserRecord>} Firebase user record in a promise
 */
function updateOrCreateUser(userInfo) {
  console.log('updating or creating a firebase user');
  // 사용자 정보 갱신
  return admin.auth().updateUser(userInfo.userId, userInfo.claims)
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          // 신규 사용자 등록
          userInfo.claims.uid = userInfo.userId;
          return admin.auth().createUser(userInfo.claims)
              .catch((err) => {
                if (err.code === 'auth/email-already-exists') {
                  console.log(err);
                  return admin.auth().getUserByEmail(userInfo.email);
                } else {
                  throw err;
                }
              });
        }
        throw error;
      });
}

/**
 * createFirebaseToken - returns Firebase token using Firebase Admin SDK
 *
 * @param  {String} token access token from Oauth Login API
 * @param  {String} provider
 * @return {Promise<String>}                  Firebase token in a promise
 */
function createFirebaseToken(token, provider) {
  return requestUserInfo(token, provider).then((res) => {
    let body = JSON.parse(res);

    console.log(body);

    const isNaverSuccess = provider === PROVIDER.NAVER &&
        body.resultcode === '00';
    const isKakaoSuccess = provider === PROVIDER.KAKAO && body.id;

    if (!body || !(isNaverSuccess || isKakaoSuccess)) {
      return res.status(404)
          .send({message: 'No user with given token.'});
    }

    if (provider === PROVIDER.NAVER) {
      body = body.response;
    }

    return updateOrCreateUser(getUserInfo(body, provider));
  }).then((userRecord) => {
    console.log(`Create a custom firebase token with uid [${userRecord.uid}]`);
    return admin.auth().createCustomToken(userRecord.uid, {provider: provider});
  }).catch((error) => {
    console.log('error ocurred: create token', error);
    throw error;
  });
}

exports.oauth = functions.https.onRequest((req, res) => {
  try {
    if (req.method !== 'POST') {
      return cors(req, res, () => {
        res.json({});
      });
    }

    const code = req.body.data.code;
    const provider = req.body.data.provider;

    console.log('code', code);
    console.log('provider', provider);

    if (!code) {
      return cors(req, res, () => {
        res
            .status(400)
            .json({
              error: 'There is no code',
              message: 'Getting Access token is a required parameter: code',
            });
      });
    }

    let token = null;

    requestAccessToken(code, provider).then((response) => {
      const body = JSON.parse(response);
      console.log(body);

      token = body.access_token;

      return createFirebaseToken(token, provider);
    }).then((fireToken) => {
      console.log(`fireToken: ${fireToken}`);

      return cors(req, res, () => {
        return res.status(200).json({
          data: {
            oauth_token: token,
            firebase_token: fireToken,
          },
        });
      });
    }).catch((error) => {
      console.log(error);

      return cors(req, res, () => {
        if (error.error) {
          const body = JSON.parse(error.error);
          res.status(error.statusCode).json({
            error: {
              status: error.statusCode,
              message: body.error,
              details: body.error_description,
            },
          });
        } else {
          res.status(500).json({error: 'Unrecognized Error'});
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
});
