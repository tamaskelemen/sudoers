package hu.sudoers.junction.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import hu.sudoers.junction.dto.OrderDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("orders")
@Data
@NoArgsConstructor
public class OrderEntity {

    public static final String STATUS_ACTIVE = "active";
    public static final String STATUS_INACTIVE = "inactive";
    public static final String STATUS_ARCHIVE = "archive";

    @Id
    @JsonProperty("_id")
    private String id;
    private String from;
    private String to;
    private Float amount;
    private Float threshold;
    private String source;
    private String target;
    private String status = OrderEntity.STATUS_ACTIVE;

    public OrderEntity(OrderDto orderDto) {
        this.amount = orderDto.getAmount();
        this.threshold = orderDto.getThreshold();
        this.from = orderDto.getFrom();
        this.to = orderDto.getTo();
        this.source = orderDto.getSource();
        this.target = orderDto.getTarget();
    }
}
