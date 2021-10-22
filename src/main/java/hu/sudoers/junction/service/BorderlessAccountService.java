package hu.sudoers.junction.service;

import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Collections;

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
}
