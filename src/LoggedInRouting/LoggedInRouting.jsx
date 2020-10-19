import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ProjectListing } from "./Projects/ProjectListing";
import { FeatureListing } from "./Features/FeatureListing";
import { Overlay } from "./OverLay/Overlay";

//This logged in routing class provides logged in state.
//this logged in routing class also provides api operations that interface with the backend.
function LoggedInRouting(props) {
  let [projects, setProjects] = useState(null);

  let [selectedProject, setSelectedProject] = useState(null); // the project which the user has last selected.
  let [selectedProjectFeatures, setSelectedProjectFeatures] = useState(null); // the selected Project feature details.
  let [selectedProjectFeature, setSelectedProjectFeature] = useState(null); // the selected project feature

  function resetProjectFeatureState() {
    setSelectedProject(null);
    setSelectedProjectFeatures(null);
    setSelectedProjectFeature(null);
  }

  return (
    <>
      <section style={{ marginTop: "80px" }}></section>
      <p className="bg-white text-warning">TESTING MODE</p>
      <Router>
        <Switch>
          <Route exact path="/projectlist">
            {
              //resetProjectFeatureState()
              //whenever the user requests to see a projectlist, reset the projectFeatureState
            }
            <ProjectListing />
          </Route>
          <Route exact path="/featurelist">
            <FeatureListing />
          </Route>
          <Route>
            <FeatureListing />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export { LoggedInRouting };
