package com.taskhntr.taskhunter.Repositories;

import com.taskhntr.taskhunter.Entities.UserEntity;
import org.springframework.context.annotation.DependsOn;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("userRepository")
@DependsOn("datasource")
public interface UserRepository extends CrudRepository<UserEntity, String> {

}
