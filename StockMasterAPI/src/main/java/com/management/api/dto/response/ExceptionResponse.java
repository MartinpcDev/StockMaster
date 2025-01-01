package com.management.api.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record ExceptionResponse(
    String error,
    String message,
    List<String> details
) {

}
