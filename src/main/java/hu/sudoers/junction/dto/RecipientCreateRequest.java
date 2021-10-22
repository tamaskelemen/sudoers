package hu.sudoers.junction.dto;

import lombok.Data;

@Data
public class RecipientCreateRequest {

    private String currency;
    private String type;
    private int profile;
    private String accountHolderName;
    private String legalType;
    private Details details;

}
