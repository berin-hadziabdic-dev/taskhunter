package com.taskhntr.taskhunter.Repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Service;

@Service("repoService")
@DependsOn({ "datasource", "criteriaRepository", "featureRepository", "projectAccessRepository" })
public class RepositoryService {

    @Autowired
    private CriteriaRepository criteriaRepo;
    @Autowired
    private FeatureRepository featureRepo;
    @Autowired
    private ProjectRepository projectRepo;
    @Autowired
    private ProjectAccessRepository projectAccessRepo;
    @Autowired
    private UserRepository userRepo;

    public CriteriaRepository getCriteriaRepo() {
        return this.criteriaRepo;
    }

    public FeatureRepository getFeatureRepo() {
        return this.featureRepo;
    }

    public ProjectRepository getProjectRepo() {
        return this.projectRepo;
    }

    public ProjectAccessRepository getProjectAccessRepo() {
        return this.projectAccessRepo;
    }

    public UserRepository getUserRepo() {
        return this.userRepo;
    }

}

/*
 * , "projectRepository", "userRepository"
 */