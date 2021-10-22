package hu.sudoers.junction.repository;

import hu.sudoers.junction.entity.RateEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RateRepository extends MongoRepository<RateEntity, String> {

}
