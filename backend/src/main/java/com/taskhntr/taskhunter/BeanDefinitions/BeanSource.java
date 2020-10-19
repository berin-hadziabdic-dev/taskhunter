package com.taskhntr.taskhunter.BeanDefinitions;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class BeanSource {

    @Bean(name = "jsonParser")
    @Primary
    public ObjectMapper getMapper() {
        return new ObjectMapper();
    }

    @Bean(name = "passwordEncoder")
    @Primary
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder(16);
    }
}
