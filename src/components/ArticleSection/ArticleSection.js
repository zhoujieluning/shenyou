import blogs from "../../api/blogs";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Avatar, Button, List, Skeleton } from "antd";
import { getArticles } from "../../api/article";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};
const ArticleSection = () => {
  const [pageNum, setPageNum] = useState(1);
  const navigate = useNavigate();
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log("触发");
    requestArticles();
  }, []);

  async function requestArticles() {
    console.log(list);
    const res = await getArticles(pageNum);
    setPageNum(pageNum + 1);
    console.log(res);
    setList(list.concat(res.list));
    setHasMore(res.hasMore);
  }

  const onLoadMore = () => {
    requestArticles();
    setLoading(true);
  };

  const loadMore = hasMore ? (
    <div
      style={{
        textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px",
      }}
    >
      <Button onClick={onLoadMore}>加载更多</Button>
    </div>
  ) : null;
  return (
    <section className="article-section" id="ArticleSection">
      <div className="article-container row justify-content-center">
        <div className="row justify-content-center article-head">最新资讯</div>
        <List
          className="demo-loadmore-list"
          loading={false}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              onClick={() =>
                navigate("/blog-single-fullwidth", { state: item })
              }
            >
              {/* <Skeleton avatar title={false} loading={item.loading} active> */}
              {/* <List.Item.Meta
                  // avatar={<Avatar src={item.picture.large} />}
                  title={item.title}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                /> */}
              <div className="row-wrapper">
                <div className="row1">
                  <div className="article-title">{item.title}</div>
                  <div className="date-wrapper">
                    <text>{item.date}</text>
                    <text>阅读：{item?.read}</text>
                  </div>
                </div>
                <div className="row2">{item?.desc}</div>
              </div>
              {/* </Skeleton> */}
            </List.Item>
          )}
        />
      </div>
    </section>
  );
};

export default ArticleSection;
