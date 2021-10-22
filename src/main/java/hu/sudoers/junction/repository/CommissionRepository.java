package hu.sudoers.junction.repository;

import hu.sudoers.junction.entity.CommissionEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CommissionRepository extends MongoRepository<CommissionEntity, String> {
}
