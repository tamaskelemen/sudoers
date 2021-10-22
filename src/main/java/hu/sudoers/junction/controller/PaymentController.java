package hu.sudoers.junction.controller;

import hu.sudoers.junction.dto.FundRequest;
import hu.sudoers.junction.dto.QuoteCreateRequest;
import hu.sudoers.junction.dto.RecipientCreateRequest;
import hu.sudoers.junction.dto.TransferCreateRequest;
import hu.sudoers.junction.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping("/quote")
    public ResponseEntity<String> createQuote(@RequestBody QuoteCreateRequest request) {
        return ResponseEntity.ok(paymentService.createQuote(request));
    }

    @PostMapping("/recipient")
    public ResponseEntity<String> createRecipientAccount(@RequestBody RecipientCreateRequest request) {
        return ResponseEntity.ok(paymentService.createRecipientAccount(request));
    }

    @PostMapping("/transfers")
    public ResponseEntity<String> createTransfer(@RequestBody TransferCreateRequest request) {
        return ResponseEntity.ok(paymentService.createTransfer(request));
    }
    @PostMapping("/fund")
    public ResponseEntity<String> fundTransfer(@RequestBody FundRequest request) {
        return ResponseEntity.ok(paymentService.fundTransfer(request));
    }

}