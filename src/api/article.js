import cloudbase from '@cloudbase/js-sdk'
export const article1 = ''
export const article2 = ''

export const article3 = ''

const app = cloudbase.init({
  env: 'shenyou-2gq8psonedd6308a', // 您的环境id
})
var auth = app.auth()

async function login() {
  await auth.signInAnonymously()
  // 匿名登录成功检测登录状态isAnonymous字段为true
  const loginState = await auth.getLoginState()
  console.log(loginState.isAnonymous) // true
}

login()

export async function getArticles(pageNum) {
  try {
    const articlesCollection = await app.database().collection('articles')
    const pageSize = 5
    const countResult = await articlesCollection.count()
    const total = countResult.total

    // 计算总页数
    const totalPages = Math.ceil(total / pageSize)
    // 查询当前页数据
    const result = await articlesCollection
      .orderBy('createdAt', 'desc')
      .skip((pageNum - 1) * pageSize) // 跳过前面的记录
      .limit(pageSize) // 限制返回数量
      .get()
    console.log(result)
    return {
      list: result.data,
      pageSize,
      total: countResult.total,
      hasMore: result.data.length === pageSize,
    }
  } catch (error) {
    console.log(error)
  }
}
