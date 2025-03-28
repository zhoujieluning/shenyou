// images
import blogImg1 from "../images/blog/img-1.jpg";
import blogImg2 from "../images/blog/img-2.jpg";
import blogImg3 from "../images/blog/img-3.jpg";

import blogSingleImg1 from "../images/blog/blog-single/img-1.jpg";
import blogSingleImg2 from "../images/blog/blog-single/img-2.jpg";
import blogSingleImg3 from "../images/blog/blog-single/img-3.jpg";

const blogs = [
  {
    id: "1",
    title: "教你如何成为首富",
    screens: blogImg1,
    description:
      "这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述",
    author: "比尔盖茨",
    authorTitle: "世界首富",
    create_at: "2020年3月",
    blogSingleImg: blogSingleImg1,
    comment: "35",
    blClass: "format-standard-image",
  },
  {
    id: "2",
    title: "We provide advanced solutions growin your online business",
    screens: blogImg2,
    description:
      "Consectetur adipiscing elit. Purusout phasellus malesuada lectus.",
    author: "Konal Biry",
    authorTitle: "Creative Director",
    create_at: "13 Dec,2022",
    blogSingleImg: blogSingleImg2,
    comment: "80",
    blClass: "format-standard-image",
  },
  {
    id: "3",
    title: "Many desktop publishing packag and web page editors use.",
    screens: blogImg3,
    description:
      "Consectetur adipiscing elit. Purusout phasellus malesuada lectus.",
    author: "Aliza Anny",
    authorTitle: "Art Director",
    create_at: "22 Dec,2022",
    blogSingleImg: blogSingleImg3,
    comment: "95",
    blClass: "format-video",
  },
];
export default blogs;
