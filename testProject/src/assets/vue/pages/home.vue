<template>
    <f7-page>
        <f7-navbar
                :title="languageJson[this.i].firstTitle"
        ></f7-navbar>
        <f7-block>
            <f7-row>
                <f7-col width="40">
                </f7-col>
                <f7-col width="60">
                    <f7-button big fill
                               href="/language/"
                    >{{ languageJson[this.i].langButton }}</f7-button>
                </f7-col>
            </f7-row>
        </f7-block>
        <f7-block-title
        >{{ languageJson[this.i].listTitle }}</f7-block-title>
        <f7-list media-list>
            <f7-list-item
                    v-for="data in myJson"
                    :title="data.title"
                    :text="data.text"
            ></f7-list-item>
        </f7-list>
    </f7-page>
</template>
<script>
    import json from "../../json/data.json"
    import language from "../../json/language.json"
    import store from '../../vuex/storage.js'

    export default {
        data(){
            return{
                myJson: json,
                languageJson: language
            }
        },
        computed: {
            i() {
                return store.state.i
            }
        }
    };
</script>