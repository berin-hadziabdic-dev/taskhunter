package com.taskhntr.taskhunter.Entities;

import javax.persistence.*;

@Entity
@Table(name = "feature")
public class Feature {

    @Id
    @Column(name = "feature_id")
    private int featureId;
    @Column(name = "project_id")
    private int projectId;
    private String featureName;
    private String featureDescription;
    private int storyPoints;

    public int getFeatureId() {
        return this.featureId;
    }

    public String getFeatureName() {
        return this.featureName;
    }

    public void setFeatureName(String featureName) {
        this.featureName = featureName;
    }

    public String getFeatureDescription() {
        return this.featureDescription;
    }

    public void setFeatureDescription(String featureDescription) {
        this.featureDescription = featureDescription;
    }

    public int getStoryPoints() {
        return this.storyPoints;
    }

    public void setStoryPoints(int storyPoints) {
        this.storyPoints = storyPoints;
    }

}
