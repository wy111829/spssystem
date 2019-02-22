<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <div class="conent-box">
                        <keep-alive>
                            <router-view v-if="$route.meta.keepAlive"></router-view>
                        </keep-alive>
                        <router-view v-if="!$route.meta.keepAlive"></router-view>
                        <v-foot></v-foot>
                    </div>
                </transition>
            </div>
        </div>
    </div>

</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vTags from './Tags.vue';
    import vFoot from './Footer.vue';
    import bus from './bus';
    import {mapState, mapActions} from 'vuex'
    export default {
        data(){
            return {
                tagsList: ['orderDetail'],
                collapse: false
            }
        },
        computed: {
            ...mapState([
                'UserName',
                'UserRole'
           ])
        },
        components:{
            vHead, vSidebar, vTags,vFoot
        },
        methods: {
            ...mapActions([
              'GetLoginInfo'
            ])
        },
        created(){
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })

            // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
            bus.$on('tags', msg => {
                let arr = [];
                for(let i = 0, len = msg.length; i < len; i ++){
                    msg[i].name && arr.push(msg[i].name);
                }
                this.tagsList = arr;
            })
            this.GetLoginInfo()
        }
    }
</script>
