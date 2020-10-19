import React from "react";
import "./LandingPage.css";
import createIcon from "../../Images/Icons/creating.png";
import featureIcon from "../../Images/Icons/feature.png";
import boardIcon from "../../Images/Icons/board.png";
import elipsisIcon from "../../Images/Icons/ellipsis.png";

const CREATE_CARD = {
  title: "Create Projects",
  text:
    "At the heart of every software gig, there's a project canvas. At our core, we're not only engineers, but we're artists. Taskhunter offers built in support for multiple projects to make your goals happen.",

  iconSrc: createIcon,
};

const FEATURE_CARD = {
  title: "Feature Silos",
  text:
    "What do bears, tigers, and projects have in common? They're scary and big. What do kittens, puppies, and features have in common? They're small and simple. Taskhunter supports project features right out the box. ",
  iconSrc: featureIcon,
};

const KANBAN_CARDS = {
  title: "Kanban-Boards",
  text:
    "Did I forget to turn off the stove? Did I forget to lock my castle? Did I leave my lights on? Don't second guess yourself. Use  TaskHunters kanban boards to track your project progress.",
  iconSrc: boardIcon,
};
function LandingTriCard(props) {
  let { title, text, iconSrc } = props;
  return (
    <div className="col-12 col-md-4 py-2 mx-0 bg-white my-1">
      <div className="d-flex flex-column align-items-center">
        <img src={iconSrc} className="tri-card-icon" />
        <h3 className="mx-auto text-info">{title}</h3>
        <p className="text-secondary text-center px-2">{text}</p>
        <img src={elipsisIcon} className="tri-card-icon" />
      </div>
    </div>
  );
}

function LandingTriCards(props) {
  return (
    <section className="row">
      <LandingTriCard {...CREATE_CARD} />
      <LandingTriCard {...FEATURE_CARD} />
      <LandingTriCard {...KANBAN_CARDS} />
    </section>
  );
}

export { LandingTriCards };
