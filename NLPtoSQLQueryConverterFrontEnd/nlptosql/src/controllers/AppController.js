// AppController.js
import React, { useState } from 'react';
import { QueryInput } from '../components/QueryInput';
import { ResultDisplay } from '../components/ResultDisplay';
import { processQuery } from '../models/queryService';

export function AppController() {
  const [results, setResults] = useState(null);
  const [sqlQuery, setSqlQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleQuery = async (naturalLanguage) => {
    setLoading(true);
    setError(null);

    try {
      const data = await processQuery(naturalLanguage);
      setResults(data.result);
      setSqlQuery(data.sqlQuery);
    } catch (err) {
      setError(err.message);
      // Clear previous results when there's an error
      setResults(null);
      setSqlQuery('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" role="main">
      <header>
        <h1>Natural Language to SQL Query Converter</h1>
      </header>
      <QueryInput onSubmit={handleQuery} disabled={loading} />
      {loading && (
        <div className="loading" role="status" aria-live="polite">
          Processing query...
        </div>
      )}
      {error && (
        <div className="error" role="alert" aria-label="Error Message">
          {error}
        </div>
      )}
      {sqlQuery && (
        <div className="query-box" role="region" aria-label="Generated SQL Query">
          <h2>Generated SQL Query:</h2>
          <pre>{sqlQuery}</pre>
        </div>
      )}
      {results && <ResultDisplay results={results} />}
    </div>
  );
}