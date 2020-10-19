import React from "react";
import "./LandingPage.css";

function Teams(props) {
  return (
    <section className="row">
      <div className="col-12 team-card d-flex flex-column">
        <h1 className="text-warning">Teams</h1>
        <h3 className="ml-auto text-secondary">Built with teams in mind.</h3>
        <h4 className="mr-auto">Daily Stand ups.</h4>
        <h2>Feature chats.</h2>
        <h1 className="ml-auto text-secondary">Project collabarators.</h1>
        <h2 className="mr-auto ml-auto text-secondary"> And best of all ...</h2>
        <div className="ml-auto mr-auto">
          {" "}
          <a className="btn btn-warning" href="/register">
            {" "}
            Its free
          </a>
        </div>
      </div>
    </section>
  );
}

export { Teams };
