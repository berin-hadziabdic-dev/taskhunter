package com.taskhntr.taskhunter.Repositories;

import com.taskhntr.taskhunter.Entities.*;

import org.springframework.context.annotation.DependsOn;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("projectAccessRepository")
@DependsOn("datasource")
public interface ProjectAccessRepository extends CrudRepository<ProjectAccess, Long> {

}
