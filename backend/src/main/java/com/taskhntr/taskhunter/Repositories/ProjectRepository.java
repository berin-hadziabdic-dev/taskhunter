package com.taskhntr.taskhunter.Repositories;

import com.taskhntr.taskhunter.Entities.Projects;

import org.springframework.context.annotation.DependsOn;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("projectRepository")
@DependsOn("datasource")
public interface ProjectRepository extends CrudRepository<Projects, Long> {

}
