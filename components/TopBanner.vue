<template lang="pug">
.css-za4qqw
  .css-17ia555
    h1.css-1bk7ox4 {{ title }}
    .css-70qvj9
      figure.css-ium0zo
        picture
          source(srcset='https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400-300x300.webp 300w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400-150x150.webp 150w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400.webp 414w' sizes='(max-width: 300px) 100vw, 300px' type='image/webp')
          img.css-1a2v9hb(src='https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400.jpg' srcset='https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400-300x300.jpg 300w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400-150x150.jpg 150w, https://mk0apibacklinkov1r5n.kinstacdn.com/app/uploads/2020/02/meeB57W6_400x400.jpg 414w' sizes='(max-width: 300px) 100vw, 300px' alt='meeB57W6_400x400' loading='lazy')
      .css-1c7u7ph
        p {{ desc }}
    .css-2thhi1
      .css-79elbk
        .aweber-form-body(v-if='buttonOnly')
          button.caller-btn.without-input.e1fw58rm0(type='button' role='button') {{ buttonText }}
        .caller(v-else)
          .aweber-form-body
            ul.css-1vd0gw5
              li.aweber-form-field.form-group.css-1pkbgp8
                #aweber-field-email.aweber-input-container.aweber-input-container-email
                  input#form-item-email.css-1lj1a3e(:name='inputOption.name' :type='inputOption.type' :placeholder='inputOption.placeholder')
          .aweber-form-footer.left
            button.caller-btn.with-input.e1fw58rm0(type='button' role='button') {{ buttonText }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    buttonOnly: {
      type: Boolean,
      required: true
    },
    inputOption: {
      type: Object,
      required: false
    },
    buttonText: {
      type: String,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
.css-za4qqw {
  background-image: linear-gradient(180deg,#fff 10%,#eef0f7);
  padding: 60px 0 70px;
}

.css-17ia555 {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}

.css-1bk7ox4 {
  margin-bottom: 40px;
  font-size: 32px;
}

.css-70qvj9 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.css-ium0zo {
  width: 75px;
  min-width: 75px;
  height: 75px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #d6d6d6;
  margin-bottom: 0;
  margin-right: 20px;
}

.css-1a2v9hb {
  max-width: 100%;
  height: auto;
}

.css-1c7u7ph {
  text-align: left;
  line-height: 1.6;
  max-width: 330px;
}

.css-1c7u7ph strong {
  font-weight: 600;
}

.css-1c7u7ph *:last-child {
  margin-bottom: 0 !important;
}

.css-2thhi1 {
  width: 100%;
  margin: 35px 0 0;
  max-width: 460px;
}

.css-79elbk {
  position: relative;
}

.css-1vd0gw5 {
  position: relative;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
.css-1pkbgp8 {
  margin-bottom: 0;
  padding: 0;
}

.css-1lj1a3e {
  display: block;
  width: 100%;
  height: 3.7875rem;
  padding: 1.05rem 1.2rem;
  font-family: Inter;
  font-weight: 400;
  line-height: 1.4;
  color: #000;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
  -webkit-transition: background-color 0.2s ease-in-out,border-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out,border-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out;
  font-size: 11.25px;
  font-size: 1.125rem;
  border-color: #ccd3e8;
  font-family: "Inter";
}

.css-1lj1a3e::-ms-expand {
  background-color: transparent;
  border: 0;
}

.css-1lj1a3e:focus {
  color: #000;
  background-color: #fff;
  border-color: #00afff;
  outline: 0;
  box-shadow: none;
}

.css-1lj1a3e::-webkit-input-placeholder {
  color: #a5a5a5;
  opacity: 1;
}

.css-1lj1a3e::-moz-placeholder {
  color: #a5a5a5;
  opacity: 1;
}

.css-1lj1a3e:-ms-input-placeholder {
  color: #a5a5a5;
  opacity: 1;
}

.css-1lj1a3e::placeholder {
  color: #a5a5a5;
  opacity: 1;
}

.css-1lj1a3e:disabled,.css-1lj1a3e[readonly] {
  background-color: #e6e6e6;
  opacity: 1;
}

.caller-btn {
  font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 1.05rem 1.2rem;
  font-size: 1.125rem;
  line-height: 1.4;
  cursor: pointer;
  border-radius: 6px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-style: normal;
  white-space: normal;
  -webkit-letter-spacing: 0;
  -moz-letter-spacing: 0;
  -ms-letter-spacing: 0;
  letter-spacing: 0;
  margin: 0;
  cursor: pointer;
  text-transform: none;
  font-weight: 600;
  min-height: 3.7875rem;
  font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 1.05rem 1.2rem;
  font-size: 1.125rem;
  line-height: 1.4;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-style: normal;
  white-space: normal;
  -webkit-letter-spacing: 0;
  -moz-letter-spacing: 0;
  -ms-letter-spacing: 0;
  letter-spacing: 0;
  cursor: pointer;
  text-transform: none;
  font-weight: 600;
  min-height: 3.7875rem;
  outline: none;
  border-radius: 6px;
  top: 0;
  right: 0;
  min-width: 170px;
  color: #fff;
  background-color: #00afff;
  border-color: #00afff;
  
}

.caller-btn:disabled[disabled] {
  cursor: not-allowed;
}

.caller-btn:disabled[disabled] {
  cursor: not-allowed;
}

.caller-btn:hover {
  background-color: #0077ff;
  border-color: #0077ff;
}

.caller-btn:active {
  background-color: #0077ff;
  border-color: #0077ff;
}

@media (min-width: 576px) {
  .css-17ia555 {
    padding-right:10px;
    padding-left: 10px;
  }
}

@media (min-width: 540px) {
  .css-17ia555 {
    max-width:540px;
  }
}

@media (max-width: 767.98px) {
  .css-za4qqw {
    border-bottom:1 solid #ccd3e8;
  }
  .caller-btn {
    width:100%;
    margin-top: 10px;
  }
  
}

@media (min-width: 768px) {
  .css-17ia555 {
    max-width:720px;
  }
  .css-za4qqw {
    padding:90px 0 135px;
  }
  .css-1bk7ox4 {
    font-size:48px;
  }
  .css-ium0zo {
    margin-right:30px;
  }
  .css-2thhi1 {
    margin:45px 0 0;
  }
  .caller-btn.with-input {
    position: absolute;
  }
  .caller-btn.without-input {
    width: 100%;
  }
}

@media (min-width: 992px) {
  .css-17ia555 {
    max-width:960px;
  }
}

@media (min-width: 1200px) {
  .css-17ia555 {
    max-width:1140px;
  }
}

</style>
