package com.taskhntr.taskhunter.Repositories;

import com.taskhntr.taskhunter.Details.CustomUserDetails;

import org.springframework.context.annotation.DependsOn;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

@Repository("userDetailsRepository")
@DependsOn("datasource")
public interface UserDetailsRepo extends CrudRepository<CustomUserDetails, String> {

    public UserDetails findByUsernameAndPassword(String username, String password);

}
