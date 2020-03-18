# vuex-prototype

## 目的
あれ？Vuexの記法ってどんなだったっけ。って時に確認する用に作成しました。  
<!-- Vue初学者がコピペして使うのも🙆‍（非推奨）。 -->
自分のド忘れ用ですがご自由にどうぞ。  
actionsやmutationsはもちろんgettersやmodulesについてもフォローしてます。  
**modulesを用いる際のactionsやmutations,gettersへのアクセス（？）記法が少し特徴的**なのでまとめてます。  
また、**actionsやmutationsへの第3引数以降の受け渡し**についても言及しているのでVue初学者は再確認を。

## 主な参照場所
[src/components/StoreViewer.vue](https://github.com/cSyu2611/vuex-prototype/blob/master/src/components/StoreViewer.vue)
---コンポーネントからストアにアクセスする際のコード類。  
[src/store/index.js](https://github.com/cSyu2611/vuex-prototype/blob/master/src/store/index.js)
---ストア本体のコード類。

## イメージ
簡易ですが実際に値を変更しながらストアが更新されることを確認できます。
![イメージ](https://github.com/cSyu2611/vuex-prototype/blob/master/src/assets/ss.png)
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
