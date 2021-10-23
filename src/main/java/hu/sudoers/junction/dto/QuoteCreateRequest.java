package hu.sudoers.junction.dto;

import lombok.Data;

@Data
public class QuoteCreateRequest {

    private String sourceCurrency;
    private String targetCurrency;
    private Double sourceAmount;
    private Double targetAmount;
    private String payOut;
    private int profile;

}
