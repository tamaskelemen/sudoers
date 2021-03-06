package hu.sudoers.junction.dto;

import lombok.Data;

@Data
public class OrderDto {
    private String from;
    private String to;
    private Float amount;
    private Float threshold;
    private String source;
    private String target;
}
