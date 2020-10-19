package com.taskhntr.taskhunter.Repositories;

import com.taskhntr.taskhunter.Entities.*;

import org.springframework.context.annotation.DependsOn;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository(value = "featureRepository")
@DependsOn("datasource")
public interface FeatureRepository extends CrudRepository<Feature, Integer> {

}
