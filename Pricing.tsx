
import React from 'react';
import { Navigate } from 'react-router-dom';

const Pricing: React.FC = () => {
  // Redirect to home as pricing is removed
  return <Navigate to="/" replace />;
};

export default Pricing;
