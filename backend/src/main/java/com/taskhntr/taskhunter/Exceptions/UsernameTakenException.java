package com.taskhntr.taskhunter.Exceptions;

import javax.naming.AuthenticationException;

public class UsernameTakenException extends AuthenticationException {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Override
    public String getMessage() {
        return "The username is taken.";
    }

    @Override
    public String toString() {
        return "com.taskhntr.taskhunter.Exceptions.UsernameTakenException";
    }

}
