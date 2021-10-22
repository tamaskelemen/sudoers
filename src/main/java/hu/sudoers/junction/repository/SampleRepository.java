package hu.sudoers.junction.repository;

import hu.sudoers.junction.entity.SampleEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SampleRepository extends MongoRepository<SampleEntity, UUID> {
//    public SampleEntity getLast() {
//
//    }
}
