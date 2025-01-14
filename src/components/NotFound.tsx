import React from 'react';
import { Link } from 'react-router-dom';

interface NotFoundProps {
  message: string;
}

export function NotFound({ message }: NotFoundProps) {
  return (
    <div className="min-h-screen bg-orange-900 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl font-bold mb-4">Gallery not found {message}</h1>
        <Link to="/" className="text-orange-200 hover:text-orange-100">
          Return to home
        </Link>
      </div>
    </div>
  );
}