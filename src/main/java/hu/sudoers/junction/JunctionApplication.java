package hu.sudoers.junction;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories()
public class JunctionApplication {

	public static void main(String[] args) {
		SpringApplication.run(JunctionApplication.class, args);
	}

}
