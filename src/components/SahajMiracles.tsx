import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';

const queryClient = new QueryClient();

const SahajMiracles = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/resources/sahajmiracles" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default SahajMiracles;