<template>
    <f7-page>
        <f7-navbar
                :title="languageJson[this.i].secondTitle"
                back-link="back"
        ></f7-navbar>
        <f7-block>
            <f7-row>
                <f7-col width="50">
                    <f7-button big fill
                               @click="langEng"
                    >{{ languageJson[this.i].engButton }}</f7-button>
                </f7-col>
                <f7-col width="50">
                    <f7-button big fill
                               @click="langRu"
                    >{{ languageJson[this.i].ruButton }}</f7-button>
                </f7-col>
            </f7-row>
        </f7-block>
    </f7-page>
</template>
<script>
    import language from "../../json/language.json"
    import store from '../../vuex/storage.js'

    export default {
        data(){
            return{
                languageJson: language,
                lang: true,
            }
        },
        computed: {
            i () {
                return store.state.i
            }
        },
        methods: {
            langEng() {
                store.commit('langEng')
            },
            langRu() {
                store.commit('langRu')
            }
        }
    };
</script>