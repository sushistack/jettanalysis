<template lang="pug">
.diagnosis-input-container
  form(@submit.prevent='onSubmit')
    .form-body(v-if='!buttonOnly')
      ul.diagnosis-form
        li.form-item
          .diagnosis-txt-field
            input(
              :class='{ "inactive-diagnosis-txt-field": !activeInput, "active-diagnosis-txt-field": activeInput }'
              :name='inputOption.name' 
              :type='inputOption.type' 
              :placeholder='inputOption.placeholder'
              required
              @focus='activeTooltip = true'
              @blur='activeTooltip = false'
              @input='inputUrl'
              :value='url'
              ref='urlInput'
            )
        .tooltip(
          v-show='activeTooltip'
          role='tooltip'
          x-placement='top'
        )
          .arrow
          .tooltip-inner {{ tooltipText }}
    .diagnosis-btn-container
      button.diagnosis-btn(
        :class='{"without-input": buttonOnly, "with-input": !buttonOnly}'
        :disabled='loading'
        type='submit'
        role='button'
      )
        template(v-if='loading')
          .loader Loading...
        template(v-else) {{ buttonText }}
</template>

<script>
export default {
  name: 'DiagnosisInput',
  props: {
    buttonOnly: {
      type: Boolean,
      required: false,
      default: () => false
    },
    loading: {
      type: Boolean,
      required: false,
      default: () => false
    },
    buttonText: {
      type: String,
      required: true,
      default: () => '진단'
    },
    defaultUrl: {
      type: String,
      required: false,
      default: () => ''
    }
  },
  data: () => ({
    activeTooltip: false,
    activeInput: false,
    inputOption: {
      name: "dignosis",
      type: "text",
      placeholder: "https://jettanalysis.com"
    },
    tooltipText: '사이트 진단을 위해 유효한 URL을 입력해주세요',
    url: ''
  }),
  mounted () {
    this.url = this.defaultUrl
  },
  methods: {
    inputUrl(e) {
      if (!this.activeInput) {
        this.activeInput = !this.activeInput;
      }
      this.url = e.target.value;
    },
    onSubmit (e) {
      e.preventDefault()
      const regex = /^(http|https):\/\/[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])*(\.[a-zA-Z]{2,}){1,2}([:\/?][^ㄱ-ㅎㅏ-ㅣ가-힣\s]*)?$|^(market):\/\//

      this.activeInput = true
      this.$emit('onSubmit', { isValid: regex.test(this.url), url: this.url })
    },
    focus () {
      this.$refs.urlInput.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.diagnosis-input-container {
  position: relative;
}
.diagnosis-form {
  position: relative;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

.form-item {
  margin-bottom: 0;
  padding: 0;
}

.tooltip {
  position: absolute;
  left: 0px;
  right: 0px;
  top: calc((100% + 0.4rem) * -1);
  margin: 0px auto;
  z-index: 1;
  .arrow {
    position: absolute;
    display: block;
    bottom: -0.4rem;
    left: 0px;
    right: 0px;
    margin: 0px auto;
    width: 0px;
    height: 0px;
    border-left: 0.4rem solid transparent;
    border-right: 0.4rem solid transparent;
    border-top: 0.4rem solid rgb(0, 0, 0);
  }
  .tooltip-inner {
    max-width: 200px;
    margin: 0px auto;
    padding: 0.25rem 0.5rem;
    color: rgb(255, 255, 255);
    text-align: center;
    background-color: rgb(0, 0, 0);
    border-radius: 6px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    overflow-wrap: break-word;
  }
}

// for input

.inactive-diagnosis-txt-field {
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
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  font-size: 11.25px;
  font-size: 1.125rem;
  border-color: #ccd3e8;
  font-family: "Inter";
}

.inactive-diagnosis-txt-field::-ms-expand {
  background-color: transparent;
  border: 0;
}

.inactive-diagnosis-txt-field:focus {
  color: #000;
  background-color: #fff;
  border-color: #00afff;
  outline: 0;
  box-shadow: none;
}

.inactive-diagnosis-txt-field::-webkit-input-placeholder {
  color: #a5a5a5;
  opacity: 1;
}

.inactive-diagnosis-txt-field::-moz-placeholder {
  color: #a5a5a5;
  opacity: 1;
}

.inactive-diagnosis-txt-field:-ms-input-placeholder {
  color: #a5a5a5;
  opacity: 1;
}

.inactive-diagnosis-txt-field::placeholder {
  color: #a5a5a5;
  opacity: 1;
}

.inactive-diagnosis-txt-field:disabled,
.inactive-diagnosis-txt-field[readonly] {
  background-color: #e6e6e6;
  opacity: 1;
}

.active-diagnosis-txt-field {
  display: block;
  width: 100%;
  height: 3.7875rem;
  padding: 1.05rem 1.2rem;
  font-weight: 400;
  line-height: 1.4;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  background-clip: padding-box;
  border: 1px solid #00afff;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 1px inset;
  transition: background-color 0.2s ease-in-out 0s,
    border-color 0.2s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s;
  font-size: 1.125rem;
  font-family: Inter;
  position: relative;
}

.active-diagnosis-txt-field:focus {
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  border-color: #00afff;
  outline: 0px;
  box-shadow: none;
}

// for input

// btn

.diagnosis-btn {
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif;
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

.diagnosis-btn:hover {
  background-color: #0077ff;
  border-color: #0077ff;
}

.diagnosis-btn:active {
  background-color: #0077ff;
  border-color: #0077ff;
}

.diagnosis-btn:disabled[disabled] {
  cursor: not-allowed;
  background-color: #00afff;
  border-color: #00afff;
}

.loader,
.loader:after {
  border-radius: 50%;
  width: 25px;
  height: 25px;
}
.loader {
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 4px solid rgba(255, 255, 255, 0.2);
  border-right: 4px solid rgba(255, 255, 255, 0.2);
  border-bottom: 4px solid rgba(255, 255, 255, 0.2);
  border-left: 4px solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

// btn

@media (max-width: 767.98px) {
  .diagnosis-btn {
    width: 100%;
    margin-top: 10px;
  }
}

@media (min-width: 768px) {
  .diagnosis-btn.with-input {
    position: absolute;
  }
  .diagnosis-btn.without-input {
    width: 100%;
  }
  .diagnosis-txt-field > input {
    width: calc(100% - 162px);
  }
}

</style>