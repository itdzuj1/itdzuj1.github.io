<template>
    <!-- App -->
    <f7-app :params="f7params">
        <f7-statusbar></f7-statusbar>
        <f7-panel left cover>
            <f7-view url="/panel-left/" links-view=".view-main" />
        </f7-panel>
        <f7-view url="/" :main="true" class="ios-edges"></f7-view>
    </f7-app>
</template>
<script>
// Import Routes...
import routes from './routes.js'

let theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

export default {
    data() {
        return {
            f7params: {
                theme,
                routes,
                id: 'io.framework7.testapp',
            }
        }
    }
}
</script>

<!--<template>-->
    <!--<f7-page>-->
        <!--<f7-navbar-->
                <!--:title="languageJson[this.i].firstTitle"-->
                <!--back-link="back"-->
        <!--&gt;</f7-navbar>-->
        <!--<f7-block>-->
            <!--<f7-row>-->
                <!--<f7-col width="40">-->
                <!--</f7-col>-->
                <!--<f7-col width="60">-->
                    <!--<f7-button big fill-->
                               <!--href="/language/"-->
                    <!--&gt;{{ languageJson[this.i].langButton }}</f7-button>-->
                <!--</f7-col>-->
            <!--</f7-row>-->
        <!--</f7-block>-->
        <!--<f7-block-title-->
        <!--&gt;{{ languageJson[this.i].listTitle }}</f7-block-title>-->
        <!--<f7-list media-list>-->
            <!--<f7-list-item-->
                    <!--v-for="data in myJson"-->
                    <!--:title="data.title"-->
                    <!--:text="data.text"-->
            <!--&gt;</f7-list-item>-->
        <!--</f7-list>-->
    <!--</f7-page>-->
<!--</template>-->
<!--<script>-->


    <!--import json from "./assets/json/data.json"-->
    <!--import language from "./assets/json/language.json"-->
    <!--import store from './assets/vuex/storage.js'-->

    <!--export default {-->
        <!--data(){-->
            <!--return{-->
                <!--myJson: json,-->
                <!--languageJson: language-->
            <!--}-->
        <!--},-->
        <!--computed: {-->
            <!--i() {-->
                <!--return store.state.i-->
            <!--}-->
        <!--}-->
    <!--};-->
<!--</script>-->