package hu.sudoers.junction.dto;

import lombok.Data;

@Data
public class OrderStatusRequest {
    private String order_id;
    private String status;
}
