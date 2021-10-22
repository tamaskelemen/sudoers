package hu.sudoers.junction.service;

import hu.sudoers.junction.dto.QuoteCreateRequest;
import hu.sudoers.junction.dto.RecipientCreateRequest;
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

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class PaymentService {

    @Autowired
    private RestTemplate restTemplate;

    private final String apiHost = "https://api.sandbox.transferwise.tech/";
    private final String authToken = "ad62bd55-903c-4c3d-b1ff-2b903aaa0a46";

    @SneakyThrows
    public String createQuote(final QuoteCreateRequest request) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("Authorization", "Bearer " + authToken);
        HttpEntity<QuoteCreateRequest> entity = new HttpEntity<>(request, headers);

        return restTemplate.exchange(apiHost + "v2/quotes", HttpMethod.POST, entity, String.class).getBody();
    }

    public String createRecipientAccount(RecipientCreateRequest request) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("Authorization", "Bearer " + authToken);
        HttpEntity<RecipientCreateRequest> entity = new HttpEntity<>(request, headers);

        return restTemplate.exchange(apiHost + "v1/accounts", HttpMethod.POST, entity, String.class).getBody();
    }
}
