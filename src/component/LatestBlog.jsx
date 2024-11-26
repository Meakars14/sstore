import React from "react";
// import "./LatestBlog.css"; // Make sure to create this CSS file if needed

const LatestBlog = () => {
  return (
    <section id="latest-blog" className="padding-large">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Latest Posts</h2>
            <div className="btn-right">
              <a href="blog.html" className="btn btn-medium btn-normal text-uppercase">
                Read Blog
              </a>
            </div>
          </div>
          <div className="post-grid d-flex flex-wrap justify-content-between">
            <div className="col-lg-4 col-sm-12">
              <div className="card border-none me-3">
                <div className="card-image">
                  <img
                    src="images/post-item1.jpg"
                    alt="Post 1"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="card-body text-uppercase">
                <div className="card-meta text-muted">
                  <span className="meta-date">Feb 22, 2023</span>
                  <span className="meta-category">- Gadgets</span>
                </div>
                <h3 className="card-title">
                  <a href="#">Get some cool gadgets in 2023</a>
                </h3>
              </div>
            </div>

            <div className="col-lg-4 col-sm-12">
              <div className="card border-none me-3">
                <div className="card-image">
                  <img
                    src="images/post-item2.jpg"
                    alt="Post 2"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="card-body text-uppercase">
                <div className="card-meta text-muted">
                  <span className="meta-date">Feb 25, 2023</span>
                  <span className="meta-category">- Technology</span>
                </div>
                <h3 className="card-title">
                  <a href="#">Technology Hack You Won't Get</a>
                </h3>
              </div>
            </div>

            <div className="col-lg-4 col-sm-12">
              <div className="card border-none me-3">
                <div className="card-image">
                  <img
                    src="images/post-item3.jpg"
                    alt="Post 3"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="card-body text-uppercase">
                <div className="card-meta text-muted">
                  <span className="meta-date">Feb 22, 2023</span>
                  <span className="meta-category">- Camera</span>
                </div>
                <h3 className="card-title">
                  <a href="#">Top 10 Small Camera In The World</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
