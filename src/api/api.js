import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL:
    'https://shenyou-2gq8psonedd6308a-1346398470.ap-shanghai.app.tcloudbase.com', // 替换为你的云函数域名
  timeout: 5000, // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 如果需要认证，可以在这里添加token
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 0) {
      console.error('接口错误:', res.message)
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
  },
  (error) => {
    console.error('请求错误:', error.message)
    return Promise.reject(error)
  }
)

// 发布留言
export function postComment(articleId, username, content) {
  return service({
    url: '/comment',
    method: 'post',
    data: {
      articleId,
      username,
      content,
    },
  })
}

// 获取留言列表
export function getComments(articleId) {
  return service({
    url: '/comments',
    method: 'get',
    params: {
      articleId,
    },
  })
}
