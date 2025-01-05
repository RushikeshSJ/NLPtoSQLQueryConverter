// QueryInput.js
import React, { useState } from 'react';

export function QueryInput({ onSubmit, disabled }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="SQL Query Form">
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query in natural language (e.g., 'Show me all customers from New York')"
        disabled={disabled}
        aria-label="Natural Language Query Input"
        role="textbox"
      />
      <button
        type="submit"
        disabled={disabled || !query.trim()}
        aria-label="Convert to SQL and Execute Query"
      >
        Convert to SQL and Execute
      </button>
    </form>
  );
}