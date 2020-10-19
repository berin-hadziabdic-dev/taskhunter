import React, { useState } from "react";
import { FeatureCard } from "./FeatureCard";
import { FeatureOverlay } from "./FeatureBody";
import "./FeatureListing.css";

const FEATURE_DATA = [
  {
    feature_name: "feature-1",
    feature_description:
      "As a user, I want to be able to select so and so in order to do so and so.",
    story_points: 12,
    criteria: [
      {
        name: "Criteria-1",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-2",
        description: "Criteria 2 definition.",
      },
      {
        name: "Criteria-3",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-1",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-2",
        description: "Criteria 2 definition.",
      },
      {
        name: "Criteria-3",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-1",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-2",
        description: "Criteria 2 definition.",
      },
      {
        name: "Criteria-3",
        description: "Criteria 1 definition.",
      },
    ],
  },

  {
    feature_name: "feature-2",
    feature_description:
      "As a user, I want to be able to select so and so in order to do so and so.",
    story_points: 12,
    criteria: [
      {
        name: "Criteria-1",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-2",
        description: "Criteria 2 definition.",
      },
      {
        name: "Criteria-3",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-1",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-2",
        description: "Criteria 2 definition.",
      },
      {
        name: "Criteria-3",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-1",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-2",
        description: "Criteria 2 definition.",
      },
      {
        name: "Criteria-3",
        description: "Criteria 1 definition.",
      },
    ],
  },

  {
    feature_name: "feature-3",
    feature_description:
      "As a user, I want to be able to select so and so in order to do so and so.",
    story_points: 12,
    criteria: [
      {
        name: "Criteria-1",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-2",
        description: "Criteria 2 definition.",
      },
      {
        name: "Criteria-3",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-1",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-2",
        description: "Criteria 2 definition.",
      },
      {
        name: "Criteria-3",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-1",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-2",
        description: "Criteria 2 definition.",
      },
      {
        name: "Criteria-3",
        description: "Criteria 1 definition.",
      },
    ],
  },
  {
    feature_name: "feature-4",
    feature_description:
      "As a user, I want to be able to select so and so in order to do so and so.",
    story_points: 12,
    criteria: [
      {
        name: "Criteria-1",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-2",
        description: "Criteria 2 definition.",
      },
      {
        name: "Criteria-3",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-1",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-2",
        description: "Criteria 2 definition.",
      },
      {
        name: "Criteria-3",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-1",
        description: "Criteria 1 definition.",
      },
      {
        name: "Criteria-2",
        description: "Criteria 2 definition.",
      },
      {
        name: "Criteria-3",
        description: "Criteria 1 definition.",
      },
    ],
  },
];

function FeatureListing(props) {
  let [renderFeature, setRenderFeature] = useState(false);
  let [selectedFeature, setSelectedFeature] = useState(null);
  let [selectedData, setSelectedData] = useState(null);

  return (
    <div class="row bg-white mx-2">
      {renderFeature &&
      selectedData !== null &&
      selectedData !== undefined &&
      selectedData.feature_name == selectedFeature ? (
        <FeatureOverlay
          headerText={selectedFeature}
          data={selectedData}
          setRenderFeature={setRenderFeature}
        />
      ) : null}

      {FEATURE_DATA.map((element) => (
        <FeatureCard
          feature_name={element.feature_name}
          feature_description={element.feature_description}
          story_points={element.story_points}
          setSelectedFeature={setSelectedFeature}
          setSelectedData={setSelectedData}
          setRenderFeature={setRenderFeature}
          data={element}
        />
      ))}
    </div>
  );
}

export { FeatureListing };
