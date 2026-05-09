import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import AuthProvider from './src/context/AuthContext';
import CartProvider from './src/context/CartContext';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <AppNavigator />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;