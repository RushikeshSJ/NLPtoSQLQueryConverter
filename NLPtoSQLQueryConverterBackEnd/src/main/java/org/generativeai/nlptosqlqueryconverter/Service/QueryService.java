package org.generativeai.nlptosqlqueryconverter.Service;

import org.generativeai.nlptosqlqueryconverter.Model.QueryRequest;
import org.generativeai.nlptosqlqueryconverter.Model.QueryResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.List;
import java.util.Map;

@Service  // Add missing annotation
public class QueryService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Value("${openai.api.key}")
    private String openaiApiKey;

    public QueryResponse processQuery(QueryRequest request) throws Exception {
        // Convert natural language to SQL
        String sqlQuery = convertToSQL(request.getNaturalLanguage());

        // Execute SQL query
        List<Map<String, Object>> result = jdbcTemplate.queryForList(sqlQuery);

        return new QueryResponse(sqlQuery, result);
    }

    private String convertToSQL(String naturalLanguage) {
        // OpenAI API request configuration
        String prompt = String.format(
                "Convert this natural language query to SQL: %s\n" +
                        "Return only the SQL query without any explanation.",
                naturalLanguage
        );

        var headers = new org.springframework.http.HttpHeaders();
        headers.setBearerAuth(openaiApiKey);
        headers.setContentType(org.springframework.http.MediaType.APPLICATION_JSON);

        var body = Map.of(
                "model", "gpt-3.5-turbo",
                "messages", List.of(
                        Map.of("role", "system", "content", "You are a SQL expert. Convert natural language to SQL queries."),
                        Map.of("role", "user", "content", prompt)
                ),
                "temperature", 0.3
        );

        var request = new org.springframework.http.HttpEntity<>(body, headers);
        var restTemplate = new RestTemplate();

        var response = restTemplate.postForObject(
                "https://api.openai.com/v1/chat/completions",
                request,
                Map.class
        );

        // Correctly parse the OpenAI response
        if (response != null && response.containsKey("choices")) {
            List<?> choices = (List<?>) response.get("choices");
            if (!choices.isEmpty()) {
                Map<?, ?> firstChoice = (Map<?, ?>) choices.get(0);
                Map<?, ?> message = (Map<?, ?>) firstChoice.get("message");
                if (message != null && message.containsKey("content")) {
                    return ((String) message.get("content")).trim();
                }
            }
        }
        throw new RuntimeException("Failed to get valid response from OpenAI API");
    }
}