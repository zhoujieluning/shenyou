import cloudbase from '@cloudbase/js-sdk'
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

function formatDate(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // 月份从0开始，所以要+1
  const day = date.getDate()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  return `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`
}

// 直接操作数据库方式
export async function postComment(articleId, username, content) {
  try {
    const result = await app
      .database()
      .collection('comments')
      .add({
        articleId,
        username,
        content,
        createdAt: formatDate(new Date()),
      })
    return result
  } catch (error) {
    console.error('添加留言失败:', error)
    throw error
  }
}

export async function getComments(articleId) {
  try {
    const { data } = await app
      .database()
      .collection('comments')
      .where({ articleId })
      .orderBy('createdAt', 'desc')
      .get()
    return data
  } catch (error) {
    console.error('获取留言失败:', error)
    throw error
  }
}
