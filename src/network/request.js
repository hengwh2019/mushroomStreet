import axios from 'axios'

//第一种方法
// export function request(config,success,error){
//   const axios1 = axios.create({
//     baseURL:"static/data/homeData",
//     timeout:5000
//   })
//   axios1(config).then(
//     res => {
//       success(res)
//     }
//   ).catch(err => {
//       error(err)
//   })
// }

//第二种方法
//
// config={
//   url:{url:'/data.txt'},
//   success:(res) => {this.res = res.data},
//     error:(err) => {console.log(err);}
// }
// axios1({
//   url:"/data.txt"
// })
// export function request(config){
//   const axios1 = axios.create({
//     baseURL:"static/data/homeData",
//     timeout:5000
//   })
//   axios1(config.url).then(
//     res => {
//       config.success(res)
//     }
//   ).catch(err => {
//     config.error(err)
//   })
// }

//第三种方法
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const axios1 = axios.create({
//       baseURL:"static/data/homeData",
//       timeout:5000
//     })
//     axios1(config).then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//   })
// }

//最终方法：

export function request(config) {
    const axios1 = axios.create({
      baseURL:"static/data/homeData",
      timeout:5000
    })
    return axios1(config)
}


//拦截器使用
