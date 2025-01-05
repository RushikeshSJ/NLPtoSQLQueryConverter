package org.generativeai.nlptosqlqueryconverter.Model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Setter
@Getter
public class QueryResponse {
    private String sqlQuery;
    private List<Map<String, Object>> results;

    public QueryResponse(String sqlQuery, List<Map<String, Object>> results) {
        this.sqlQuery = sqlQuery;
        this.results = results;
    }
}
