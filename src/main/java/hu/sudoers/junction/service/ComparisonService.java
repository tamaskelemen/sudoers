package hu.sudoers.junction.service;

import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.http.HttpHeaders;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class ComparisonService {

    @Autowired
    private RestTemplate restTemplate;

    private final String apiHost = "https://api.transferwise.com/v3/comparisons";

    @SneakyThrows
    public String createDisclaimer(
            String sourceCurrency,
            String targetCurrency,
            String sendAmount
    ) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(apiHost)
            .queryParam("sourceCurrency", sourceCurrency)
            .queryParam("targetCurrency", targetCurrency)
            .queryParam("sendAmount", sendAmount);

        return restTemplate.exchange(
            builder.toUriString(),
            HttpMethod.GET,
            new HttpEntity<>(headers),
            String.class
        ).getBody();
    }
}
