package com.taskhntr.taskhunter;

import javax.sql.DataSource;

import com.taskhntr.taskhunter.Repositories.RepositoryService;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import org.springframework.context.annotation.*;

@Configuration
public class DatabaseBeans {

    @Bean(name = "datasource")
    @Primary
    public DataSource getHikariConnection() {

        HikariConfig connectionPoolConfig = new HikariConfig();
        connectionPoolConfig.setUsername("java");
        connectionPoolConfig.setPassword("java");
        connectionPoolConfig.setJdbcUrl(
                "jdbc:mysql://localhost:3306/taskhunter?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC");

        return new HikariDataSource(connectionPoolConfig);
    }

    @Bean(name = "repoServiceBean")
    @Scope("singleton")
    @DependsOn("repoService")
    @Primary
    public RepositoryService getRepositoryService() {

        return new RepositoryService();

    }

}