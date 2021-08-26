import { required, email, max, min, size, length } from 'vee-validate/dist/rules'
import { extend, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_}을(를) 입력하세요.'
})

extend('max', {
  ...max,
  message: '{_field_}의 최대 길이는 {length}글자 입니다.'
})

extend('min', {
  ...min,
  message: '{_field_} 최소 길이는 {length}글자 입니다.'
})

extend('email', {
  ...email,
  message: 'Email must be valid'
})

extend('length', {
  ...length,
  message: '{_field_}는 최소 ${length} 이상 선택해야합니다.'
})

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value.toLowerCase() === target.toLowerCase()
  },
  message: '캡챠가 일치하지 않습니다.'
})

extend('size', {
  ...size,
  message: 'video size should be less than 5 MB!'
})
