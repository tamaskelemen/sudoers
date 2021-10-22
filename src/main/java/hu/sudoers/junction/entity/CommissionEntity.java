package hu.sudoers.junction.entity;

import hu.sudoers.junction.dto.CommissionDto;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("commissions")
@Data
@NoArgsConstructor
public class CommissionEntity {

    public static final String STATUS_ACTIVE = "active";
    public static final String STATUS_INACTIVE = "inactive";

    @Id
    private String _id;
    private String from;
    private String to;
    private Float amount;
    private Float threshold;
    private String source;
    private String target;
    private String status = CommissionEntity.STATUS_ACTIVE;

    public CommissionEntity(CommissionDto commissionDto) {
        this.amount = commissionDto.getAmount();
        this.threshold = commissionDto.getThreshold();
        this.from = commissionDto.getFrom();
        this.to = commissionDto.getTo();
        this.source = commissionDto.getSource();
        this.target = commissionDto.getTarget();
    }
}
