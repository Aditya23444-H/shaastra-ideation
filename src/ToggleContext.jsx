import React, { createContext, useContext, useState } from 'react';

export const ToggleContext = createContext();



// Custom hook for using the context
export const useToggle = () => {
  return useContext(ToggleContext);
};
