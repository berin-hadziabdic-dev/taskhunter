import React from "react";
import "./LandingPage.css";
import uiIcon from "../../Images/Icons/ui.png";
import agileIcon from "../../Images/Icons/agile.png";

const UI_BLURB = {
  title: "Simple UI",
  text:
    "We've worked to make our UI as simple and hassle free as possible. Simplicity is userfriendly, after all. We've worked tirellessly to minimize uneccasary features and complex navigation trees, to maximize your time spent managing tasks.  ",
  icon: uiIcon,
};
const AGILE_SUPPORT = {
  title: "Agile",
  text:
    "We believe that the Agile methodology is the go to approach in managing large projects. Every company has their own flavor of agile, and we all have differences in our workflows. However, some processes and ideas are indispensible; taskhunter strive to hold on to the essence of agile while giving you that flexibility to do things as you see fit. ",
  icon: agileIcon,
};

function Card(props) {
  let { text, title, icon } = props;
  return (
    <div className="col-12 col-md-6 double-card">
      <div>
        <h2>{title}</h2>
        <img src={icon} className="double-card-icon float-right mx-2 my-2" />
        {text}
      </div>
    </div>
  );
}
function DoubleCard(props) {
  return (
    <section className="row bg-white my-3 py-2">
      <Card {...UI_BLURB} />
      <Card {...AGILE_SUPPORT} />
    </section>
  );
}

export { DoubleCard };
