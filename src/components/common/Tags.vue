<template>
    <div class="tags" v-if="showTags">
        <ul>
            <li class="tags-li" v-for="(item,index) in tagsList" :class="{'active': isActive(item.name)}" :key="index">
                <router-link :to="item.path" class="tags-li-title">
                    {{item.title}}
                </router-link>
                <span class="tags-li-icon" @click="closeTags(item.name)"><i class="el-icon-close"></i></span>
            </li>
        </ul>
        <div class="tags-close-box">
            <el-dropdown @command="handleTags">
                <el-button size="mini" type="primary">
                    标签选项<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu size="small" slot="dropdown">
                    <el-dropdown-item command="other">关闭其他</el-dropdown-item>
                    <el-dropdown-item command="all">关闭所有</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    import bus from './bus';
    import { mapState, mapMutations} from 'vuex'
    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapState([
              'tagsList'
            ]),
            showTags() {
                return this.tagsList.length > 0;
            }
        },
        methods: {
            ...mapMutations([
              'closeTags',
              'closeAll',
              'closeOther',
              'setTagsList'
            ]),
            isActive(name) {
                return name === this.$route.name;
            },
            // 关闭单个标签
            // closeTags(name) {
            //     // const delItem = this.tagsList.splice(index, 1)[0];
            //     // const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
            //     // if (item) {
            //     //     delItem.path === this.$route.fullPath && this.$router.push(item.path);
            //     // }else{
            //     //     this.$router.push('/');
            //     // }
            //     // let index = 0
            //     // this.tagsList.map((item, i) => {
            //     //   if (item.name == name) {
            //     //     index = i
            //     //   }
            //     // })
            //     // const delItem = this.tagsList.splice(index, 1)[0];
            //     // // console.log(delItem, index)
            //     // const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
            //     // if (item) {
            //     //     delItem.path === this.$route.fullPath && this.$router.push(item.path);
            //     // }else{
            //     //     this.$router.push('/');
            //     // }
            //     // this.setTagsList(this.tagsList)
            // },
            // 关闭全部标签
            // closeAll(){
            //     // this.tagsList = [];
            //     this.setTagsList([])
            //     this.$router.push('/');
            // },
            // // 关闭其他标签
            // closeOther(){
            //     const curItem = this.tagsList.filter(item => {
            //         return item.path === this.$route.fullPath;
            //     })
            //     // this.tagsList = curItem;
            //     this.setTagsList(curItem)
            // },
            // 设置标签
            setTags(route){
                this.setTagsList(route)
                bus.$emit('tags', this.tagsList);
            },
            handleTags(command){
                command === 'other' ? this.closeOther() : this.closeAll();
            }
        },
        watch:{
            $route(newValue, oldValue){
                this.setTags(newValue);
            }
        },
        created(){
            this.setTags(this.$route);
        }
    }

</script>


<style>
    .tags {
        position: relative;
        /* height: 30px; */
        padding: 10px 0;
        overflow: hidden;
        background: #fff;
        padding-right: 120px;
        box-shadow: 0 5px 10px #ddd;
        z-index: 10;
    }

    .tags ul {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }

    .tags-li {
        float: left;
        margin: 3px 5px 2px 3px;
        border-radius: 3px;
        font-size: 12px;
        overflow: hidden;
        cursor: pointer;
        height: 25px;
        line-height: 25px;
        border: 1px solid #e9eaec;
        background: #fff;
        padding: 0 5px 0 12px;
        vertical-align: middle;
        color: #666;
        -webkit-transition: all .3s ease-in;
        -moz-transition: all .3s ease-in;
        transition: all .3s ease-in;
    }

    .tags-li:not(.active):hover {
        background: #f8f8f8;
    }

    .tags-li.active {
        color: #fff;
    }

    .tags-li-title {
        float: left;
        max-width: 80px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 5px;
        color: #666;
    }

    .tags-li.active .tags-li-title {
        color: #fff;
    }

    .tags-close-box {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        box-sizing: border-box;
        padding-top: 1px;
        text-align: center;
        width: 110px;
        /* height: 30px; */
        background: #fff;
        z-index: 10;
    }

</style>
