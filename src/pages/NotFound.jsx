import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}