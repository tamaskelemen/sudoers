package hu.sudoers.junction.dto;

import lombok.Data;

@Data
public class TransferCreateRequest {

    private int targetAccount;
    private String quoteUuid;
    private String customerTransactionId;
    private TransferDetails details;

}