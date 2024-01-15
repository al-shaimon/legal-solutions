import React from 'react';

export default function loading() {
  return (
    <div className="flex items-center justify-center gap-2 h-screen">
      <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
    </div>
  );
}
