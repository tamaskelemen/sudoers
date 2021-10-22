package hu.sudoers.junction.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document
@Data
public class SampleEntity {

    @Id
    private UUID id;

    @JsonProperty
    private String text;

}
