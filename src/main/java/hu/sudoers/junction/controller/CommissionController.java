package hu.sudoers.junction.controller;

import hu.sudoers.junction.dto.ComissionStatusRequest;
import hu.sudoers.junction.dto.CommissionDto;
import hu.sudoers.junction.entity.CommissionEntity;
import hu.sudoers.junction.repository.CommissionRepository;
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
@RequestMapping(value="/api/commission")
public class CommissionController {

    @Autowired
    private CommissionRepository commissionRepository;

    @RequestMapping(value="/create", method = RequestMethod.POST)
    public ResponseEntity<String> save(@RequestBody CommissionDto commissionDto) {
        CommissionEntity commissionEntity = new CommissionEntity(commissionDto);

        commissionRepository.save(commissionEntity);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @RequestMapping(value="/status", method = RequestMethod.POST)
    @Transactional
    public ResponseEntity<String> status(@RequestBody ComissionStatusRequest comissionStatusRequest) {
        val comissionEntity = commissionRepository.findById(comissionStatusRequest.getComission_id()).orElseThrow();

        comissionEntity.setStatus(comissionEntity.getStatus());

        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
