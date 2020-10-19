package com.taskhntr.taskhunter.Details;

import com.taskhntr.taskhunter.Repositories.UserDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.DependsOn;
import org.springframework.context.annotation.Primary;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service(value = "userdetailsService")
@DependsOn({ "datasource", "userDetailsRepository", "passwordEncoder" })
@Primary
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    UserDetailsRepo detailsRepository;
    @Autowired
    PasswordEncoder bCryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws BadCredentialsException {
        // TODO Auto-generated method stub
        return detailsRepository.findById(username).get();
    }

    public UserDetails loadUserByUsernameAndPassword(String username, String password) throws BadCredentialsException {
        String encodedPassword = bCryptEncoder.encode(password);
        UserDetails result = detailsRepository.findByUsernameAndPassword(username, encodedPassword);

        if (result == null) // If user not found throw BadCredentialsException
            throw new BadCredentialsException("The requested username is already taken.");

        return result;
    }

}
