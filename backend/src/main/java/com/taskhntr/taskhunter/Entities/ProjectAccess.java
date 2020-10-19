package com.taskhntr.taskhunter.Entities;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "project_access")
public class ProjectAccess {

    @Id
    @Column(name = "access_id")
    private long access_id;

}
