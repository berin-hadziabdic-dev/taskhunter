package com.taskhntr.taskhunter.Entities;

import javax.persistence.*;

@Entity
@Table(name = "projects")
public class Projects {

    @Id
    @Column(name = "project_id")
    private int projectId;
    private String projectName;
    private String projectDescription;

    public int getProjectId() {
        return this.projectId;
    }

    public String getProjectName() {
        return this.projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectDescription() {
        return this.projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }

}
