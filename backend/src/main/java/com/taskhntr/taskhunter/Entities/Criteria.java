package com.taskhntr.taskhunter.Entities;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "criteria")
public class Criteria {
    @Id
    @Column(name = "criteria_id")
    long criteria_id;
    @Column(name = "description")
    private String description;
    @Column(name = "name")
    private String name;

}
