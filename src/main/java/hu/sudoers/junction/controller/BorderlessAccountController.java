package hu.sudoers.junction.controller;

import hu.sudoers.junction.dto.ConversionRequest;
import hu.sudoers.junction.dto.QuoteCreateRequest;
import hu.sudoers.junction.service.BorderlessAccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/borderless-accounts")
@RequiredArgsConstructor
public class BorderlessAccountController {

    private final BorderlessAccountService borderlessService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/profiles/{profile_id}")
    public ResponseEntity<String> createQuote(@PathVariable ("profile_id") String profileId) {
        return ResponseEntity.ok(borderlessService.checkAccountBalance(profileId));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/{borderlessAccountId}")
    public ResponseEntity<String> conversion(@RequestBody ConversionRequest request, @PathVariable String borderlessAccountId) {
        return ResponseEntity.ok(borderlessService.conversion(request, borderlessAccountId));
    }
}
