package hu.sudoers.junction.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class RatesService {

    @Autowired
    private RestTemplate restTemplate;

    private final String apiHost = "https://api.sandbox.transferwise.tech/";

    public String fetchRates(
        String source,
        String target,
        ZonedDateTime time,
        ZonedDateTime from,
        ZonedDateTime to,
        String group
    ) {
        Map<String, String> params = new HashMap<>();
        params.put("source", source);
        params.put("target", target);
        params.put("time", time.toString());
        params.put("from", from.toString());
        params.put("to", to.toString());
        params.put("group", group);

        return restTemplate.exchange(apiHost + "v1/rates", HttpMethod.GET, null, String.class, params).getBody();
    }
}
