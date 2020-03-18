import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//ストアは複数に分割が可能

//数字用のサンプルストア
const numberStore = {
  state: {
    explanation: "numberStoreだよ",
    sampleNumber: 0
  },
  mutations: {
    setSampleNumber(state, num){
      state.sampleNumber = num
    }
  },
  actions: {
    setSampleNumber(context, num){
      context.commit('setSampleNumber', num)
    }
  },
  getters: {
    // getExplanation: state => {
    //   return state.explanation
    // },
    getSampleNumber: state => {
      return state.sampleNumber * 5
    }
  },
  namespaced: true
}

//文字列用のサンプルストア
const stringStore = {
  state: {
    explanation: "stringStoreだよ",
    sampleString: "初期値",
  },
  mutations: {
    setSampleString(state, str){
      state.sampleString = str
    }
  },
  actions: {
    setSampleString(context, str){
      context.commit('setSampleString', str)
    }
  },
  getters: {
    // getExplanation: state => {
    //   return state.explanation
    // },
    getSampleString: state => {
      return state.sampleString.split("").reverse().join("")
    }
  },
  namespaced: true
}

//配列用のサンプルストア
const arrayStore = {
  state: {
    explanation: "arrayStoreだよ",
    sampleArray: []
  },
  mutations: {
    push2SampleArray(state, elem){
      state.sampleArray.push(elem)
    }
  },
  actions: {
    push2SampleArray(context, elem){
      context.commit('push2SampleArray', elem)
    }
  },
  getters: {
    // getExplanation: state => {
    //   return state.explanation
    // },
    getSampleArray: state => {
      var array=[]
      for(var i=0; i<state.sampleArray.length;i++){
        array.push(state.sampleArray[i])
        array.push("区切り文字")
      }
      return array
    }
  },
  namespaced: true
}


export default new Vuex.Store({
  state: {
    explanation: "mainStoreだよ",
    sampleMain: "cSyu2611"
  },
  mutations: {
    setSampleMain(state, str){
      state.sampleMain = str
    }
  },
  actions: {
    setSampleMain(context, str){
      context.commit('setSampleMain', str)
    }
  },
  getters: {
    // getExplanation: state => {
    //   return state.explanation
    // },
    getSampleMain: state => {
      return state.sampleMain.split("").reverse().join("")
    }
  },
  //分割したストアをまとめてここに書く
  modules: {
    numberStore: numberStore,
    stringStore: stringStore,
    arrayStore: arrayStore
  }
})

//ちなみにactionsやmutationsは第3引数を取ることはできないので
//第2引数にオブジェクトを渡す。
//
// (例)
// [mutation]
//
// setSampleMain(state, {str,flag}){
//   if(flag=="on"){
//     state.sampleMain = str
//   }
// }
//
// [commitするとき]
//
// this.$store.commit('setSampleMain', {str: "example", flag: "on"})
