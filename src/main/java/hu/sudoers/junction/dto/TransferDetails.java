package hu.sudoers.junction.dto;

import lombok.Data;

@Data
public class TransferDetails {

    private String reference;
    private String transferPurpose;
    private String sourceOfFunds;
}
