package hu.sudoers.junction;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableMongoRepositories()
public class JunctionApplication {

	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			public void addCorsMappings(CorsRegistry registry) {
				System.out.println("gec");
				registry.addMapping("/*").allowedOrigins("*");
			}
		};
	}
	public static void main(String[] args) {
		SpringApplication.run(JunctionApplication.class, args);
	}

}
