package hu.sudoers.junction.controller;

import hu.sudoers.junction.entity.RateEntity;
import hu.sudoers.junction.repository.RateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api")
public class RatesController {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private RateRepository repository;
    @RequestMapping(value = "/rates", produces = "application/json")
    @ResponseBody
    public List<RateEntity> list(
            @RequestParam(name = "source") String source,
            @RequestParam(name = "target") String target,
            @RequestParam(name = "from") String from,
            @RequestParam(name = "to") String to
            ) {

        Query query = new Query();
        query.addCriteria(Criteria.where("source").is(source));
        query.addCriteria(Criteria.where("target").is(target));
        query.addCriteria(Criteria.where("date").gte(from).lte(to));

        return mongoTemplate.find(query, RateEntity.class);
    }

}
