package hu.sudoers.junction.service;

import hu.sudoers.junction.dto.ConversionRequest;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Collections;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class BorderlessAccountService {

    @Autowired
    private RestTemplate restTemplate;

    private final String apiHost = "https://api.sandbox.transferwise.tech/";
    private final String authToken = "ad62bd55-903c-4c3d-b1ff-2b903aaa0a46";

    @SneakyThrows
    public String checkAccountBalance(String profileId) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("Authorization", "Bearer " + authToken);

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(apiHost + "/v1/borderless-accounts")
            .queryParam("profileId", profileId);

        return restTemplate.exchange(
            builder.toUriString(),
            HttpMethod.GET,
            new HttpEntity<>(headers),
            String.class
        ).getBody();
    }

    public String conversion(ConversionRequest request, String borderlessAccountId) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("Authorization", "Bearer " + authToken);
        headers.add("X-idempotence-uuid", UUID.randomUUID().toString());
        HttpEntity<ConversionRequest> entity = new HttpEntity<>(request, headers);

        val url = String.format(apiHost +
                "v1/borderless-accounts/%s/conversions", borderlessAccountId);
        return restTemplate.exchange(url, HttpMethod.POST, entity, String.class).getBody();
    }
}
