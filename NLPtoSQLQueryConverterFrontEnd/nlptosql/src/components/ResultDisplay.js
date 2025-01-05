// ResultDisplay.js
import React from 'react';

export function ResultDisplay({ results }) {
  if (!results || results.length === 0) {
    return (
      <div className="error" role="alert" aria-label="No results found">
        <p>No results found.</p>
      </div>
    );
  }

  const headers = Object.keys(results[0]);

  return (
    <div role="region" aria-label="Query Results">
      <table aria-label="Results Table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((row, i) => (
            <tr key={i}>
              {headers.map((header) => (
                <td key={header}>{row[header]?.toString() || ''}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}