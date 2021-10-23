package hu.sudoers.junction.controller;

import hu.sudoers.junction.dto.OrderStatusRequest;
import hu.sudoers.junction.dto.OrderDto;
import hu.sudoers.junction.entity.OrderEntity;
import hu.sudoers.junction.repository.OrderRepository;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.mongodb.core.query.Query;
import java.util.List;

@RestController
@RequestMapping(value="/api/order")
public class OrderController {
    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private OrderRepository orderRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping(value="/create", method = RequestMethod.POST)
    public ResponseEntity<String> save(@RequestBody OrderDto orderDto) {
        OrderEntity orderEntity = new OrderEntity(orderDto);

        orderRepository.save(orderEntity);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping(value="/status", method = RequestMethod.POST)
    @Transactional
    public ResponseEntity<String> status(@RequestBody OrderStatusRequest orderStatusRequest) {
        val orderEntity = orderRepository.findById(orderStatusRequest.getOrder_id()).orElseThrow();

        orderEntity.setStatus(orderEntity.getStatus());

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @CrossOrigin(origins= "*", allowedHeaders = "*")
    @RequestMapping(value = "/list")
    public List<OrderEntity> list() {
        Query query = new Query();
        query.addCriteria(Criteria.where("status").in(OrderEntity.STATUS_ACTIVE, OrderEntity.STATUS_INACTIVE));



        return mongoTemplate.find(query, OrderEntity.class);
    }

}
