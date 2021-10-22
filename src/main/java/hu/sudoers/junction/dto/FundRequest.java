package hu.sudoers.junction.dto;

import lombok.Data;

@Data
public class FundRequest {
    private String profileId;
    private String transferId;
    private String type;
}
