import React from "react";
import first from "../Images/first.jpg";

const Home = () => {
  return (
    <div
      className="container-fluid"
      style={{ marginTop: 55, backgroundColor: "lightblue" }}
    >
      <div className="row" style={{ paddingTop: 50, paddingBottom: 50 }}>
        <div className="col-md-4 mb-4">
          <div
            className="card shadow"
            style={{ borderRadius: 10, borderColor: "#ddd" }}
          >
            <div className="card-body" style={{ padding: 20 }}>
              <h5
                className="card-title"
                style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}
              >
                Learn About Content Writing
              </h5>
              <p className="card-text" style={{ fontSize: 16, color: "#666" }}>
                Check out this blog to learn all about writing unique and
                original content for your website.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/Website_content_writer"
                className="btn btn-primary btn-sm"
                style={{ marginTop: 10 }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div
            className="card shadow"
            style={{ borderRadius: 10, borderColor: "#ddd" }}
          >
            <div className="card-body" style={{ padding: 20 }}>
              <h5
                className="card-title"
                style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}
              >
                Learn About React
              </h5>
              <p className="card-text" style={{ fontSize: 16, color: "#666" }}>
                React is a JavaScript library for building user interfaces.
              </p>
              <a
                href="https://www.w3schools.com/REACT"
                className="btn btn-primary btn-sm"
                style={{ marginTop: 10 }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div
            className="card shadow"
            style={{ borderRadius: 10, borderColor: "#ddd" }}
          >
            <div className="card-body" style={{ padding: 20 }}>
              <h5
                className="card-title"
                style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}
              >
                Learn About Content Writing
              </h5>
              <p className="card-text" style={{ fontSize: 16, color: "#666" }}>
                Blockchain Tutorial for Beginners to Advanced Level.
              </p>
              <a
                href="https://www.simplilearn.com/tutorials/blockchain-tutorial"
                className="btn btn-primary btn-sm"
                style={{ marginTop: 10 }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src={first}
          alt="First"
          style={{ marginBottom: 60, width: "100%", borderRadius: 10 }}
        />
      </div>
    </div>
  );
};

export default Home;
