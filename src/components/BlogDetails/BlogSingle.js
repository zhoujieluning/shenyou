import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import avatar1 from "../../images/blog-details/comments-author/avatar1.png";
import blog4 from "../../images/blog-details/comments-author/img-2.jpg";
import blog5 from "../../images/blog-details/comments-author/img-3.jpg";
import blog6 from "../../images/blog-details/author.jpg";
import gl1 from "../../images/blog/img-3.jpg";
import gl2 from "../../images/blog/img-2.jpg";
import blogs from "../../api/blogs";
import { useParams, useLocation } from "react-router-dom";
import BlogSidebar from "../BlogSidebar/BlogSidebar.js";
import { message } from "antd";

const BlogSingle = (props) => {
  useEffect(() => {
    window.scrollTo(10, 0);
  });
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const BlogDetails = location.state;

  return (
    <section
      className="wpo-blog-single-section section-padding"
      style={{ paddingTop: "50px" }}
    >
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content" style={{ padding: "0 10px" }}>
              <div className="post format-standard-image">
                <h2>{BlogDetails.title}</h2>

                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="fi flaticon-comment-white-oval-bubble"></i>{" "}
                      阅读 {BlogDetails.read}
                    </li>
                    <li>
                      <i className="fi flaticon-calendar"></i>{" "}
                      {BlogDetails.date}
                    </li>
                  </ul>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: BlogDetails.article }}
                />
                {/* <div>{BlogDetails.article}</div> */}
              </div>

              {/* <div className="tag-share clearfix"></div> */}
            </div>
          </div>
          <BlogSidebar blLeft={props.blLeft} />
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
