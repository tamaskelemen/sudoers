package hu.sudoers.junction.controller;

import hu.sudoers.junction.service.ComparisonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/comparison")
@RequiredArgsConstructor
public class ComparisonController {

    private final ComparisonService comparisonService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/disclaimer")
    public ResponseEntity<String> createQuote(
        @RequestParam String sourceCurrency,
        @RequestParam String targetCurrency,
        @RequestParam String sendAmount
    ) {
        return ResponseEntity.ok(comparisonService.createDisclaimer(sourceCurrency, targetCurrency, sendAmount));
    }
}
