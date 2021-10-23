package hu.sudoers.junction.controller;

import hu.sudoers.junction.dto.OrderStatusRequest;
import hu.sudoers.junction.dto.OrderDto;
import hu.sudoers.junction.entity.OrderEntity;
import hu.sudoers.junction.repository.OrderRepository;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/api/order")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @RequestMapping(value="/create", method = RequestMethod.POST)
    public ResponseEntity<String> save(@RequestBody OrderDto orderDto) {
        OrderEntity orderEntity = new OrderEntity(orderDto);

        orderRepository.save(orderEntity);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @RequestMapping(value="/status", method = RequestMethod.POST)
    @Transactional
    public ResponseEntity<String> status(@RequestBody OrderStatusRequest orderStatusRequest) {
        val orderEntity = orderRepository.findById(orderStatusRequest.getOrder_id()).orElseThrow();

        orderEntity.setStatus(orderEntity.getStatus());

        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
