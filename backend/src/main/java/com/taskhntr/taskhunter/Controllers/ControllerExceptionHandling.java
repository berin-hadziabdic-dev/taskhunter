package com.taskhntr.taskhunter.Controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ControllerExceptionHandling {

    // Whenever the application is unable to parse a json input into an entity
    // object
    // send a 400 code back to the front end. This is most likely the result of
    // of bad user input.
    @ExceptionHandler({ JsonMappingException.class, JsonProcessingException.class, BadCredentialsException.class })
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    public void badRequest() {
        // nothing to do
    }

    // Return unauthorized access user exception
    @ExceptionHandler({ UsernameNotFoundException.class })
    @ResponseStatus(value = HttpStatus.UNAUTHORIZED)
    public void badAuthentication() {
        // nothing to do
    }

}
