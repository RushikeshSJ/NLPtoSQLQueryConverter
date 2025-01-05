package org.generativeai.nlptosqlqueryconverter.Model;
import jakarta.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QueryRequest {
    @NotNull(message = "Natural language query cannot be null.")
    private String naturalLanguage;

}
