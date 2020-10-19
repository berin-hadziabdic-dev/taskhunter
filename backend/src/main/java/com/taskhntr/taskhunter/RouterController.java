package com.taskhntr.taskhunter;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import com.taskhntr.taskhunter.Entities.UserEntity;
import com.taskhntr.taskhunter.Repositories.RepositoryService;
import com.taskhntr.taskhunter.Repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;

@Controller
@DependsOn("repoServiceBean")
public class RouterController {

    @Autowired
    RepositoryService repoDAO;

    @GetMapping(path = "/test")
    @Autowired
    public @ResponseBody String test() {

        String ret = "No admin12 user found";
        Optional<UserEntity> queryResult = repoDAO.getUserRepo().findById("Admin12");

        if (queryResult.isPresent()) {
            UserEntity userInfo = queryResult.get();
            ret = userInfo.getUsername() + " " + "password";
        }

        return ret;
    }

}
