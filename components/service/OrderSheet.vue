<template lang="pug">
.order-sheet-container
  .sheet-inner-container
    .sheet-title {{ sheetName }}
    p.sheet-desc 하단의 주문서 작성 후 제출하기를 눌러주세요.
    .sheet-form
      validation-observer(ref='form' v-slot='{ handleSubmit, reset }')
        form(@submit.prevent='handleSubmit(submit)' @reset.prevent='reset')
          v-col
            template(v-for='field in selectedSheet')
              .field
                p.field-name {{ field.name }}
                validation-provider(v-slot='{ errors }' :name='field.name' :rules='field.rules')
                  v-text-field(
                    v-if='field.type === "TEXT_FIELD"'
                    v-model='field.value' :error-messages='errors' :label='field.label' single-line
                    :style='{width: `${field.width}px`}'
                  )
                  v-select(
                    v-if='field.type === "SELECT"'
                    v-model='field.value' :items='field.items' :error-messages='errors' :label='field.label' single-line
                    :style='{width: `${field.width}px`}'
                  )
                  v-combobox.custom-keyword-combobox(
                    v-if='field.type === "COMBOBOX"'
                    small-chips multiple hide-selected
                    v-model='field.value'
                    :items='[]'
                    :label='field.label'
                    :hint='field.hint'
                    persistent-hint
                    single-line
                    :error-messages='errors'
                    @input='createAndSelectKeyword($event)'
                    :style='{width: `${field.width}px`}'
                  )
                    template(v-slot:selection='{ attrs, item, select, selected }')
                      v-chip(v-bind='attrs' small :input-value='selected' @click='select')
                        strong {{ item }}
                        v-btn.cancel-btn(x-small icon @click.stop='removeKeyword(item)' color='grey darken-4')
                          svg(xmlns='http://www.w3.org/2000/svg' fill='currentColor' width='16' height='16' viewBox='0 0 24 24')
                            path(d='M0 0h24v24H0V0z' fill='none')
                            path(d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z')
                ul.cautions
                  li(v-for='caution in field.cautions') {{ caution }}
          v-col.ordering
            v-btn.white--text(:loading='loading' color='#00afff' type='submit' x-large rounded width='200') 제출하기
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'OrderSheet',
  components: { ValidationObserver, ValidationProvider },
  props: {
    sheetType: {
      type: String,
      required: true,
      default: () => 'SETTING_SEO'
    }
  },
  data: () => ({
    loading: false,
    backlinkSheet: [
      { 
        id: 'name', type: 'TEXT_FIELD', width: 200, name: '입금자명', label: 'ex) 홍길동', rules: 'required|min:1|max:30', value: '',
        cautions: ['결제는 계좌이체를 통해 진행됩니다. 빠른 입금확인을 위해 입금자명을 정확히 입력해주세요.']
      },
      { 
        id: 'email', type: 'TEXT_FIELD', width: 400, name: '이메일', label: 'ex) jett.analysis@gmail.com', rules: 'required|email|min:4|max:256', value: '',
        cautions: ['결제완료 안내 및 결과 보고서를 전달 받을 이메일을 입력해주세요.']
      },
      { 
        id: 'url', type: 'TEXT_FIELD', width: 400, name: '사이트 URL', label: 'ex) https://jettanalysis.com/diagnosis', rules: 'required|url|min:4|max:256', value: '',
        cautions: ['검색엔진에 노출되고자 하는 페이지 링크를 입력해주세요.']
      },
      {
        id: 'keywords', type: 'COMBOBOX', width: 600, name: '키워드', label: 'ex) 사이트 진단', rules: 'required', hint: '키워드는 5개까지 설정 가능합니다.', value: ['사이트 진단(지워주세요!)'],
        cautions: ['검색엔진에 노출되고자 하는 검색어 키워드를 입력해주세요.', '띄어쓰기가 포함된 경우, 서로 다른 키워드로 인식됩니다. (ex. "사이트 진단"과 "사이트진단"은 서로 다른 키워드)']
      },
      {
        id: 'productClass', type: 'PRODUCT_CLASS_SELECT_BOX', name: '상품 선택', label: null, rules: null, value: null
      }
    ],
    settingSEOSheet: [
      {
        id: 'name', type: 'TEXT_FIELD', width: 200, name: '입금자명', label: 'ex) 홍길동', rules: 'required|min:1|max:30', value: '',
        cautions: ['결제는 계좌이체를 통해 진행됩니다. 빠른 입금확인을 위해 입금자명을 정확히 입력해주세요.']
      },
      {
        id: 'email', type: 'TEXT_FIELD', width: 400, name: '이메일', label: 'ex) jett.analysis@gmail.com', rules: 'required|email|min:4|max:256', value: '',
        cautions: ['결제완료 안내 및 결과 보고서를 전달 받을 이메일을 입력해주세요.']
      },
      {
        id: 'url', type: 'TEXT_FIELD', width: 400, name: '사이트 URL', label: 'ex) https://jettanalysis.com', rules: 'required|url|min:4|max:256', value: '',
        cautions: ['검색엔진에 노출되고자 하는 페이지 링크를 입력해주세요.']
      },
      {
        id: 'siteType', type: 'SELECT', width: 300, name: '사이트 종류', label: 'ex) 워드프레스', rules: 'required', value: '', items: ['워드프레스', 'WIX', '그누보드/제로보드', 'PHP 기반', 'ASP 기반', 'Node.js 기반', 'Java 기반', '기타 프레임워크 또는 모름'],
        cautions: ['사이트를 만들 때 사용한 툴 또는 프레임워크 종류를 선택해주세요.']
      },
      {
        id: 'siteCapacity', type: 'SELECT', width: 300, name: '사이트 규모', label: 'ex) 페이지 50개 이하', rules: 'required', value: '', items: ['페이지 50개 이하', '페이지 50개 초과', '페이지 100개 초과', '모름'],
        cautions: ['사이트의 규모에 따라 작업시간이 달라질 수 있습니다.']
      }
    ]
  }),
  methods: {
    createAndSelectKeyword (e) {
      if (this.backlinkSheet.find(s => s.id === 'keywords').value.length > 5) {
        this.$nextTick(() => {
          this.backlinkSheet.find(s => s.id === 'keywords').value.pop()
        })
      }
    },
    removeKeyword (item) {
      const index = this.backlinkSheet.find(s => s.id === 'keywords').value.indexOf(item)
      console.log(index)
      if (index > -1) {
        this.backlinkSheet.find(s => s.id === 'keywords').value.splice(index, 1)
      }
    },
    submit () {
      console.log('submit!!')
    }
  },
  computed: {
    sheetName () {
      switch (this.sheetType) {
        case 'SETTING_SEO': return '사이트 SEO 최적화 설정'
        case 'BACKLINK': return '고품질 기사형 백링크'
        default: return '알수 없음'
      }
    },
    selectedSheet () {
      switch (this.sheetType) {
        case 'SETTING_SEO': return this.settingSEOSheet
        case 'BACKLINK': return this.backlinkSheet
        default: return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.order-sheet-container {
  background:#fff;
  padding: 30px 0 70px;
}

.custom-keyword-combobox .v-chip.v-size--small {
  padding-right: 3px;
}

.cancel-btn {
  margin-left: 2px;
}

.sheet-inner-container {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5rem 3rem;
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
  .sheet-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 0;
  }
  .sheet-desc {
    color: #888;
  }
}

.field {
  margin-bottom: 3rem;
}

.sheet-form {
  margin-top: 2rem;
  text-align: left;
  width: 100%;
  .field-name {
    font-weight: bold;
    margin-bottom: 0;
  }
}

.cautions {
  list-style: square;
}

.ordering {
  text-align: center;
}

@media (min-width: 576px) {
  .sheet-inner-container {
    padding-right: 10px;
    padding-left: 10px;
    .sheet-title {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 0;
    }
  }
  .radio-box {
    flex-direction: row;
  }
}

@media (min-width: 540px) {
  .sheet-inner-container {
    max-width: 540px;
  }
}

@media (max-width: 767.98px) {
  .order-sheet-container {
    border-bottom: 1 solid #ccd3e8;
  }
}

@media (min-width: 768px) {
  .order-sheet-container {
    padding: 40px 0 135px;
  }
  .sheet-inner-container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .sheet-inner-container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .sheet-inner-container {
    max-width: 1140px;
  }
}
</style>