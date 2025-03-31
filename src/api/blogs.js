// images
import blogImg1 from '../images/blog/img1.webp'
import blogImg2 from '../images/blog/img2.webp'
import blogImg3 from '../images/blog/img3.webp'

import blogSingleImg1 from '../images/blog/blog-single/img-1.jpg'
import blogSingleImg2 from '../images/blog/blog-single/img-2.jpg'
import blogSingleImg3 from '../images/blog/blog-single/img-3.jpg'

import { article1, article2, article3 } from './article'

const blogs = [
  {
    id: '1',
    title: '第二十届数字金融联合宣传年智享2024特别活动',
    screens: blogImg1,
    description: '百家银行齐聚畅谈数字金融顶层设计与精准施策',
    author: '数字金融',
    authorTitle: '数字金融',
    create_at: '2020年3月',
    blogSingleImg: blogSingleImg1,
    comment: '35',
    read: '12833',
    blClass: 'format-standard-image',
    detail: article1,
  },
  {
    id: '2',
    title: '科技春晚CES来袭！聚焦四大看点',
    screens: blogImg2,
    description:
      '科技春晚”CES来袭！聚焦四大看点：英伟达或进军AI PC市场，AI眼镜将站“C位”',
    author: '国际资讯',
    authorTitle: '国际资讯',
    create_at: '2024年12月',
    blogSingleImg: blogSingleImg2,
    comment: '28',
    read: '8755',
    blClass: 'format-standard-image',
    detail: article2,
  },
  {
    id: '3',
    title: '战略布局银行体系稳健发展，5000亿注资四大行落地',
    screens: blogImg3,
    description: '百家银行齐聚畅谈数字金融顶层设计与精准施策',
    author: '后台管理员',
    authorTitle: '后台管理员',
    create_at: '2024年8月',
    blogSingleImg: blogSingleImg3,
    comment: '46',
    read: '5832',
    blClass: 'format-standard-image',
    detail: article3,
  },
]
export default blogs
