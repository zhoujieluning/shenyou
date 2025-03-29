import React from 'react'
import { Link } from 'react-router-dom'
import avatar1 from '../../images/blog-details/comments-author/avatar1.png'
import blog4 from '../../images/blog-details/comments-author/img-2.jpg'
import blog5 from '../../images/blog-details/comments-author/img-3.jpg'
import blog6 from '../../images/blog-details/author.jpg'
import gl1 from '../../images/blog/img-3.jpg'
import gl2 from '../../images/blog/img-2.jpg'
import blogs from '../../api/blogs'
import { useParams } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar/BlogSidebar.js'

const BlogSingle = (props) => {
  const { id } = useParams()

  const BlogDetails = blogs.find((item) => item.id === id)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <section className="wpo-blog-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content">
              <div className="post format-standard-image">
                <div className="entry-media">
                  <img src={BlogDetails.blogSingleImg} alt="" />
                </div>
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="fi flaticon-user"></i>
                      <a>{BlogDetails.author}</a>
                    </li>
                    <li>
                      <i className="fi flaticon-comment-white-oval-bubble"></i>{' '}
                      评论 {BlogDetails.comment}
                    </li>
                    <li>
                      <i className="fi flaticon-calendar"></i>{' '}
                      {BlogDetails.create_at}
                    </li>
                  </ul>
                </div>
                <h2>{BlogDetails.title}</h2>
                <div>{BlogDetails.detail}</div>
                {/* <blockquote>
                  Combined with a handful of model sentence structures, generate
                  Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
                  is therefore always free from repetition, injected humour, or
                  non-characteristic words etc.
                </blockquote> */}
              </div>

              <div className="tag-share clearfix">
                {/* <div className="tag">
                  <span>Share: </span>
                  <ul>
                    <li>
                      <Link to="/blog-single/1">Planning</Link>
                    </li>
                    <li>
                      <Link to="/blog-single/1">Business</Link>
                    </li>
                    <li>
                      <Link to="/blog-single/1">Consulting</Link>
                    </li>
                  </ul>
                </div> */}
              </div>

              {/* <div className="author-box">
                <div className="author-avatar">
                  <a>
                    <img src={blog6} alt="" />
                  </a>
                </div>
                <div className="author-content">
                  <Link to="/blog-single/1" className="author-name">
                    Author: Jenny Watson
                  </Link>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                  </p>
                  <div className="socials">
                    <ul className="social-link">
                      <li>
                        <Link to="/blog-single/1">
                          <i className="ti-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-single/1">
                          <i className="ti-twitter-alt"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-single/1">
                          <i className="ti-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-single/1">
                          <i className="ti-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="more-posts">
                <div className="previous-post">
                  <Link to="/blog">
                    <span className="post-control-link">Previous Post</span>
                    <span className="post-name">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium.
                    </span>
                  </Link>
                </div>
                <div className="next-post">
                  <Link to="/blog-left-sidebar">
                    <span className="post-control-link">Next Post</span>
                    <span className="post-name">
                      Dignissimos ducimus qui blanditiis praesentiu deleniti
                      atque corrupti quos dolores
                    </span>
                  </Link>
                </div>
              </div> */}

              <div className="comments-area">
                <div className="comments-section">
                  <h3 className="comments-title">评论</h3>
                  <ol className="comments">
                    {BlogDetails.comments.map((comment) => (
                      <li
                        className="comment even thread-even depth-1"
                        id="comment-1"
                      >
                        <div id="div-comment-1">
                          <div className="comment-theme">
                            <div className="comment-image">
                              <img src={avatar1} alt="" />
                            </div>
                          </div>
                          <div className="comment-main-area">
                            <div className="comment-wrapper">
                              <div className="comments-meta">
                                <h4>
                                  {comment.author}{' '}
                                  <span className="comments-date">
                                    {comment.time}
                                  </span>
                                </h4>
                              </div>
                              <div className="comment-area">
                                <p>{comment.detail}</p>
                                {/* <div className="comments-reply">
                                <a className="comment-reply-link">
                                  <span>Reply</span>
                                </a>
                              </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <ul className="children">
                        <li className="comment">
                          <div>
                            <div className="comment-theme">
                              <div className="comment-image">
                                <img src={avatar1} alt="" />
                              </div>
                            </div>
                            <div className="comment-main-area">
                              <div className="comment-wrapper">
                                <div className="comments-meta">
                                  <h4>
                                    Lily Watson{' '}
                                    <span className="comments-date">
                                      January 12,2022 At 9.00am
                                    </span>
                                  </h4>
                                </div>
                                <div className="comment-area">
                                  <p>
                                    I will give you a complete account of the
                                    system, and expound the actual teachings of
                                    the great explorer of the truth,{' '}
                                  </p>
                                  <div className="comments-reply">
                                    <Link
                                      className="comment-reply-link"
                                      to="/blog-single/1"
                                    >
                                      <span>Reply</span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul>
                            <li className="comment">
                              <div>
                                <div className="comment-theme">
                                  <div className="comment-image">
                                    <img src={avatar1} alt="" />
                                  </div>
                                </div>
                                <div className="comment-main-area">
                                  <div className="comment-wrapper">
                                    <div className="comments-meta">
                                      <h4>
                                        John Abraham{' '}
                                        <span className="comments-date">
                                          January 12,2022 At 9.00am
                                        </span>
                                      </h4>
                                    </div>
                                    <div className="comment-area">
                                      <p>
                                        I will give you a complete account of
                                        the system, and expound the actual
                                        teachings of the great explorer of the
                                        truth,{' '}
                                      </p>
                                      <div className="comments-reply">
                                        <Link
                                          className="comment-reply-link"
                                          to="/blog-single/1"
                                        >
                                          <span>Reply</span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul> */}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="comment-respond">
                  <h3 className="comment-reply-title">发表评论</h3>
                  <form
                    onSubmit={submitHandler}
                    id="commentform"
                    className="comment-form"
                  >
                    <div className="form-textarea">
                      <textarea
                        id="comment"
                        placeholder="写下你的评论..."
                      ></textarea>
                    </div>
                    <div className="form-inputs">
                      {/* <input placeholder="Website" type="url" /> */}
                      <input placeholder="姓名" type="text" />
                      {/* <input placeholder="Email" type="email" /> */}
                    </div>
                    <div className="form-submit">
                      <input id="submit" value="提交" type="submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <BlogSidebar blLeft={props.blLeft} />
        </div>
      </div>
    </section>
  )
}

export default BlogSingle
