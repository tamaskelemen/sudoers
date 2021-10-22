package hu.sudoers.junction.controller;

import hu.sudoers.junction.entity.SampleEntity;
import hu.sudoers.junction.repository.SampleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class Sample {

    @Autowired
    private SampleRepository repository;

    @GetMapping("ping")
    public ResponseEntity<List<SampleEntity>> test() {
        return ResponseEntity.ok(repository.findAll());
    }

}
