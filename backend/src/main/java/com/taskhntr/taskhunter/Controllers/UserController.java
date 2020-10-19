package com.taskhntr.taskhunter.Controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.taskhntr.taskhunter.Details.CustomUserDetails;
import com.taskhntr.taskhunter.Entities.UserEntity;
import com.taskhntr.taskhunter.Exceptions.UsernameTakenException;
import com.taskhntr.taskhunter.Repositories.UserDetailsRepo;
import com.taskhntr.taskhunter.Repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.DependsOn;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
@RequestMapping(value = "/api/user")
@DependsOn({ "userRepository", "jsonParser", "passwordEncoder" })
@Scope("singleton")
public class UserController {

    @Autowired
    UserRepository userRepo;
    @Autowired
    ObjectMapper jsonParser;
    @Autowired
    UserDetailsRepo userDetailsRepo;

    @Autowired
    PasswordEncoder bCrypt;

    @GetMapping(path = "/test")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody String respond() {
        String tester = "tester";
        return "test";
    }

    @PostMapping(path = "/create", consumes = "application/json", produces = "text/html")
    @ResponseStatus(value = HttpStatus.OK)
    public void createUser(@RequestBody String jsonString)
            throws JsonMappingException, JsonProcessingException, UsernameTakenException {

        // attempt to parse user, if failure expection will be thrown and handler code
        // will exec.
        String encodedPassword = null;
        UserEntity userInfo = (UserEntity) jsonParser.readValue(jsonString, UserEntity.class);

        if (userRepo.findById(userInfo.getUsername()) != null)
            throw new UsernameTakenException(); // Attempting to use a username which has been already taken.

        // validation checks here.

        // if validation has passed and object was succesfully created, then save the
        // user.
        encodedPassword = bCrypt.encode(userInfo.getPassword()); // encode userpassword with Bcrypt
        userInfo.setPassword(encodedPassword); // set the userpassword to encrypted password
        userRepo.save(userInfo); // save the new user.

    }

    @PostMapping(path = "/read")
    @ResponseStatus(value = HttpStatus.OK)
    public @ResponseBody String readUser(String jsonString) {

        return null;

    }

    @DeleteMapping("/delete")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody void deleteUser(String jsonString) throws JsonMappingException, JsonProcessingException {

        UserDetails details = jsonParser.readValue(jsonString, CustomUserDetails.class);
        UserDetails result = userDetailsRepo.findByUsernameAndPassword(details.getUsername(), details.getPassword());

        if (result == null) // no user found to delete. Throw bad credentials exception.
            throw new BadCredentialsException("The requested username and password combination does not exist.");

        // user with matching password and username found. Delete the user.
        userRepo.deleteById(result.getUsername());
    }

}
