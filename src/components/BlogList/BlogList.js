import React from 'react'
import { Link } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar/BlogSidebar.js'
import VideoModal from '../ModalVideo/VideoModal'

import blogs from '../../api/blogs'

const ClickHandler = () => {
  window.scrollTo(10, 0)
}

const BlogList = (props) => {
  return (
    <section
      className="wpo-blog-pg-section section-padding"
      style={{ paddingTop: '50px' }}
    >
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content" style={{ padding: '0 10px' }}>
              {blogs.map((blog, bitem) => (
                <div className={`post  ${blog.blClass}`} key={bitem}>
                  <div className="entry-media video-holder">
                    <img src={blog.blogSingleImg} alt="" />
                    <VideoModal />
                  </div>
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="fi flaticon-user"></i>
                        <Link
                          onClick={ClickHandler}
                          to={`/blog-single-fullwidth/${blog.id}`}
                        >
                          {blog.authorTitle}
                        </Link>{' '}
                      </li>
                      <li>
                        <i className="fi flaticon-comment-white-oval-bubble"></i>{' '}
                        阅读 {blog.read}{' '}
                      </li>
                      <li>
                        <i className="fi flaticon-comment-white-oval-bubble"></i>{' '}
                        评论 {blog.comment}{' '}
                      </li>
                      <li>
                        <i className="fi flaticon-calendar"></i>{' '}
                        {blog.create_at}
                      </li>
                    </ul>
                  </div>
                  <div className="entry-details">
                    <h3>
                      <Link
                        onClick={ClickHandler}
                        to={`/blog-single-fullwidth/${blog.id}`}
                      >
                        {blog.title}
                      </Link>
                    </h3>
                    <p className="multi-line-ellipsis">{blog.detail}</p>
                    <Link
                      onClick={ClickHandler}
                      to={`/blog-single-fullwidth/${blog.id}`}
                      className="read-more"
                    >
                      阅读更多...
                    </Link>
                  </div>
                </div>
              ))}

              {/* <div className="pagination-wrapper pagination-wrapper-left">
                <ul className="pg-pagination">
                  <li>
                    <Link to="/blog-left-sidebar" aria-label="Previous">
                      <i className="fi ti-angle-left"></i>
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="/blog-left-sidebar">1</Link>
                  </li>
                  <li>
                    <Link to="/blog-left-sidebar">2</Link>
                  </li>
                  <li>
                    <Link to="/blog-left-sidebar">3</Link>
                  </li>
                  <li>
                    <Link to="/blog-left-sidebar" aria-label="Next">
                      <i className="fi ti-angle-right"></i>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <BlogSidebar blLeft={props.blLeft} />
        </div>
      </div>
    </section>
  )
}

export default BlogList
