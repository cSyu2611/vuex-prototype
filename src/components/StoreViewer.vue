<template>
    <div>
        <p><h1>Store確認用コンポーネント</h1>
        <div class="store-view">
            <p><h2>メインストア</h2>
            <p><h3>--説明-- {{this.$store.getters.getExplanation}}</h3>
            <p><h3>--値-- {{this.$store.getters.getSampleMain}}</h3>
            <p><h3>--値変更-- <input type="text" v-model="sampleMain"/></h3>
        </div>
        <div class="store-view">
            <p><h2>数字用ストア</h2>
            <p><h3>--説明-- {{this.$store.getters["numberStore/getExplanation"]}}</h3>
            <p><h3>--値-- {{this.$store.getters["numberStore/getSampleNumber"]}}</h3>
            <p><h3>--値変更-- <input type="number" v-model="sampleNumber"/></h3>

        </div>
        <div class="store-view">
            <p><h2>文字列用ストア</h2>
            <p><h3>--説明-- {{this.$store.getters["stringStore/getExplanation"]}}</h3>
            <p><h3>--値-- {{this.$store.getters["stringStore/getSampleString"]}}</h3>
            <p><h3>--値変更-- <input type="text" v-model="sampleString"/></h3>
        </div>
        <div class="store-view">
            <p><h2>配列用ストア</h2>
            <p><h3>--説明-- {{this.sharedState.arrayStore.explanation}}</h3>
            <p><h3>--値-- {{this.sharedState.arrayStore.sampleArray}}</h3>
            <p><h3>--値変更-- <input type="text" v-model="sampleArrayElem"/><input type="button" @click="push2Array()" value="push"/></h3>
        </div>
    </div>
</template>

<script>

export default{
  name: "StoreViewer",
  computed:{
      sharedState(){
        return this.$store.state
    }
  },
  data(){
      return{
          sampleMain: "",
          sampleNumber: 0,
          sampleString: "",
          sampleArrayElem: ""
      }
  },
  methods: {
      push2Array(){
          this.$store.dispatch('arrayStore/push2SampleArray',this.sampleArrayElem)
      }
  },
  watch: {
      sampleMain: function(newval){
          if(newval==""){
              this.$store.dispatch('setSampleMain', "cSyu2611")
          }
          else{
            this.$store.dispatch('setSampleMain', this.sampleMain)
          }
      },
      sampleNumber: function(newval){
          if(newval==""){
              this.$store.dispatch('numberStore/setSampleNumber', 0)
          }
          else{
            this.$store.dispatch('numberStore/setSampleNumber', this.sampleNumber)
          }
      },
      sampleString: function(newval){
          if(newval==""){
              this.$store.dispatch('stringStore/setSampleString', "初期値")
          }
          else{
            this.$store.dispatch('stringStore/setSampleString', this.sampleString)
          }
      },
  }
}
</script>

<style>
.store-view{
    border: double;
    width: 40%;
    margin: auto;
}

</style>