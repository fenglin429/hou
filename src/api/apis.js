// 引入 axios
import axios from 'axios'
// 默认的服务器地址
axios.defaults.baseURL='http://127.0.0.1:5000'
//接口
//1.登录 /users/checkLogin
// account	String	是	账号
// password	String	是	密码
export const API_CHECKLOGIN=(account,password)=> axios.post('/users/checkLogin',{account,password})
// const API_CHECKLOGIN=()=>axios.post('',{})
