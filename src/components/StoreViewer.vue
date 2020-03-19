<template>
  <div>
    <h1>Store確認用コンポーネント</h1>
    <table class="my_table table1" border>
      <tbody>
        <th colspan="2">
          <h2>メインストア</h2>
        </th>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>--説明[$store.state.explanation]--</h3>
          </th>
          <td>
            {{ this.$store.state.explanation }}
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>--gettersの戻り値[$store.getters.getSampleMain]--</h3>
          </th>
          <td>
            {{ this.$store.getters.getSampleMain }}
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>--状態[$store.state.sampleMain]--</h3>
          </th>
          <td>
            {{ this.$store.state.sampleMain }}
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>--状態変更[$store.dispatch(),commit()]--</h3>
          </th>
          <td>
            <input type="text" v-model="sampleMain" />
          </td>
        </tr>
      </tbody>
    </table>

    <table class="my_table table2" border>
      <tbody>
        <th colspan="2">
          <h2>数字用ストア</h2>
        </th>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>--説明[$store.state.numberStore.explanation]--</h3>
          </th>
          <td>
            {{ this.$store.state.numberStore.explanation }}
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>
              --gettersの戻り値[$store.getters["numberStore/getSampleNumber"]]--
            </h3>
          </th>
          <td>
            {{ this.$store.getters["numberStore/getSampleNumber"] }}
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>--状態[$store.state.numberStore.sampleNumber]--</h3>
          </th>
          <td>
            {{ this.$store.state.numberStore.sampleNumber }}
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>--状態変更[$store.dispatch(),commit()]--</h3>
          </th>
          <td>
            <input type="number" v-model="sampleNumber" />
          </td>
        </tr>
      </tbody>
    </table>

    <table class="my_table table3" border>
      <tbody>
        <th colspan="2">
          <h2>文字列用ストア</h2>
        </th>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>--説明[$store.state.stringStore.explanation]--</h3>
          </th>
          <td>
            {{ this.$store.state.stringStore.explanation }}
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>
              --gettersの戻り値[this.$store.getters["stringStore/getSampleString"]]--
            </h3>
          </th>
          <td>
            {{ this.$store.getters["stringStore/getSampleString"] }}
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>--状態[$store.state.stringStore.sampleString]--</h3>
          </th>
          <td>
            {{ this.$store.state.stringStore.sampleString }}
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>--状態変更[$store.dispatch(),commit()]--</h3>
          </th>
          <td>
            <input type="text" v-model="sampleString" />
          </td>
        </tr>
      </tbody>
    </table>

    <table class="my_table table4" border>
      <tbody>
        <th colspan="2">
          <h2>配列用ストア</h2>
        </th>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>--説明[$store.state.arrayStore.explanation]--</h3>
          </th>
          <td>
            {{ this.$store.state.arrayStore.explanation }}
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>
              --gettersの戻り値this.$store.getters["arrayStore/getSampleArray"]--
            </h3>
          </th>
          <td>
            {{ this.$store.getters["arrayStore/getSampleArray"] }}
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>--状態[$store.state.arrayStore.sampleArray]--</h3>
          </th>
          <td>
            {{ this.$store.state.arrayStore.sampleArray }}
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th>
            <h3>--状態変更[$store.dispatch(),commit()]--</h3>
          </th>
          <td>
            <input type="text" v-model="sampleArrayElem" /><input
              type="button"
              @click="push2Array()"
              value="push"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "StoreViewer",
  computed: {
    sharedState() {
      return this.$store.state;
    }
  },
  data() {
    return {
      sampleMain: "",
      sampleNumber: 0,
      sampleString: "",
      sampleArrayElem: ""
    };
  },
  methods: {
    push2Array() {
      this.$store.dispatch("arrayStore/push2SampleArray", this.sampleArrayElem);
    }
  },
  watch: {
    sampleMain: function(newval) {
      if (newval == "") {
        this.$store.dispatch("setSampleMain", "cSyu2611");
      } else {
        this.$store.dispatch("setSampleMain", this.sampleMain);
      }
    },
    sampleNumber: function(newval) {
      if (newval == "") {
        this.$store.dispatch("numberStore/setSampleNumber", 0);
      } else {
        this.$store.dispatch("numberStore/setSampleNumber", this.sampleNumber);
      }
    },
    sampleString: function(newval) {
      if (newval == "") {
        this.$store.dispatch("stringStore/setSampleString", "初期値");
      } else {
        this.$store.dispatch("stringStore/setSampleString", this.sampleString);
      }
    }
  }
};
</script>

<style>
th td {
  border: dotted;
}
.my_table {
  border: double;
  width: 49%;
  margin: auto auto;
  margin-bottom: 20px;
  text-align: center;
}

.table1 {
  float: left;
}
.table3 {
  float: left;
}
</style>
