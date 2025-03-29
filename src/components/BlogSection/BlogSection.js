import React from 'react'
import blogs from '../../api/blogs'
import { Link } from 'react-router-dom'
import bImg from '../../images/blog/shape.png'
import bImg2 from '../../images/blog/shape2.png'
import SectionTitle from '../SectionTitle/SectionTitle'

const ClickHandler = () => {
  window.scrollTo(10, 0)
}

const BlogSection = () => {
  return (
    <div
      id="BlogSection"
      className="wpo-blog-area-s2 section-padding section-bg"
    >
      <div className="container">
        <SectionTitle subTitle={''} Title={'金融论坛'} />
        <div className="wpo-blog-wrap">
          <div className="row align-items-center">
            {blogs.slice(0, 3).map((blog, bl) => (
              <div className="col-lg-4 col-md-6 col-12" key={bl}>
                <div className="blog-item">
                  <div className="blog-img">
                    <img src={blog.screens} alt="" />
                  </div>
                  <div className="blog-content">
                    <ul>
                      <li>
                        <a href="blog-single-fullwidth.html">
                          {blog.create_at}
                        </a>
                      </li>
                    </ul>
                    <h2>
                      <Link
                        onClick={ClickHandler}
                        to={`/blog-single-fullwidth/${blog.id}`}
                      >
                        {blog.title}
                      </Link>
                    </h2>
                    <Link
                      className="arrow-btn"
                      onClick={ClickHandler}
                      to={`/blog-single-fullwidth/${blog.id}`}
                    >
                      <i className="fi flaticon-right-arrow-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <Link
            className="row justify-content-center align-items-center"
            onClick={ClickHandler}
            style={{
              marginTop: 140,
              marginBottom: 40,
              borderRadius: 6,
              width: 120,
              height: 40,
              fontSize: 16,
              cursor: 'pointer',
              background: '#ed3400',
              transition: 'opacity 0.5s ease-out',
              color: 'white',
            }}
            to="/blog-fullwidth"
          >
            查看更多
          </Link>
        </div>
      </div>
      {/* <div className="shape-1">
        <img src={bImg} alt="" />
      </div>
      <div className="shape-2">
        <img src={bImg2} alt="" />
      </div> */}
    </div>
  )
}

export default BlogSection
