
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// let state = {
//     userinfo:'',
//     isLogin:'',
// };
let state = JSON.parse(localStorage.getItem('state')) || {};
state.searchData = []
state.handleScroll = ''
/* 变动 */
const mutations = {
    setSearchData(state,data){
        state.searchData = data
    },
    setScrollHandle(state,cb){
        state.handleScroll = cb
    },
	Login : (state,isLogin) => {
        localStorage.setItem('isLogin',isLogin);
        state.isLogin = isLogin;
        /* 更新保存全局state变量 */
        localStorage.setItem('state',JSON.stringify(state))
    },
    userinfo : (state,userinfo) => {
        localStorage.setItem('userinfo',JSON.stringify(userinfo));
        state.userinfo = userinfo;
        /* 更新保存全局state变量 */
        localStorage.setItem('state',JSON.stringify(state))
    },
        updateUserInfo : (state,userinfo) => {
        state.userinfo = userinfo;
        localStorage.setItem('userinfo',JSON.stringify(state.userinfo));
        localStorage.setItem('state',JSON.stringify(state))
    },
        updateTTCount : (state,count) => {
        let userinfo = state.userinfo;
        userinfo.tt_count = count;
        localStorage.setItem('userinfo',JSON.stringify(state.userinfo));
        state.userinfo = userinfo;
        console.log(count);
        /* 更新保存全局state变量 */
        localStorage.setItem('state',JSON.stringify(state))
    },
    updateArticleCount : (state,count) => {
        state.userinfo.article_count = count;
        localStorage.setItem('userinfo',JSON.stringify(state.userinfo));
        /* 更新保存全局state变量 */
        localStorage.setItem('state',JSON.stringify(state))
    },
    logout : (state) =>{
        localStorage.setItem('isLogin',false);
        state.userinfo = '';

        state.isLogin = false;
        /* 更新保存全局state变量 */
        localStorage.setItem('userinfo','');
        localStorage.setItem('state',JSON.stringify(state))
    }
};

// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {

};

// 返回改变后的数值
const getters = {
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})