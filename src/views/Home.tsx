import React from "react";

import HuskyFrontpage from "./husky-frontpage.png";

class Home extends React.Component {
  render() {
    return (
      <section className="hero is-info is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column">
                <h1 className="title">Welcome to Husky Corner</h1>
                <h2 className="subtitle">
                  This good boy will help you with what you need to do.
                </h2>
              </div>
              <div className="column">
                <img
                  alt="The good boy"
                  src={HuskyFrontpage}
                  style={{ maxHeight: "50%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
