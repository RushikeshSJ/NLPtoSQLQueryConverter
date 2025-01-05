package org.generativeai.nlptosqlqueryconverter.Controller;

import jakarta.validation.Valid;
import org.generativeai.nlptosqlqueryconverter.Model.QueryRequest;
import org.generativeai.nlptosqlqueryconverter.Model.QueryResponse;
import org.generativeai.nlptosqlqueryconverter.Service.QueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class DatabaseController {
    @Autowired
    private QueryService queryService;

    @GetMapping("/health")
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok("Service is running");
    }

    @PostMapping("/query")
    public ResponseEntity<?> processNaturalLanguage(@Valid @RequestBody QueryRequest request) {
        try {
            QueryResponse response = queryService.processQuery(request);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Return a more structured error response
            return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
        }
    }
}

// Add this class in the same file or create a new one
class ErrorResponse {
    private String message;

    public ErrorResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}