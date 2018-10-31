<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive exclude="orderDetail">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vTags from './Tags.vue';
    import bus from './bus';
    import {mapState, mapActions} from 'vuex'
    export default {
        data(){
            return {
                tagsList: ['orderDetial'],
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
            vHead, vSidebar, vTags
        },
        methods: {
            ...mapActions([
              'GetUserInfo'
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
            this.GetUserInfo()
            console.log(this.$store)
        }
    }
</script>
