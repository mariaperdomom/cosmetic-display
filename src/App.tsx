import React from 'react';
import './App.css';
import Product3D from './components/3DProduct';

const App: React.FC = () => {
  const products = [
    { name: 'Lipstick', image: '/lipstick.avif' },
    { name: 'Perfume', image: '/perfume.png' },
    { name: 'Eyeshadow', image: '/eyeshadow.png' },
  ];

  // Generar múltiples productos con posiciones aleatorias
  const randomProducts = Array.from({ length: 20 }, () => {
    const product = products[Math.floor(Math.random() * products.length)];
    const top = Math.random() * 100; // Valor de 0 a 100 para la posición top en porcentaje
    const left = Math.random() * 100; // Valor de 0 a 100 para la posición left en porcentaje
    return { ...product, top, left };
  });

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      {randomProducts.map((product, index) => (
        <Product3D
          key={`${product.name}-${index}`}
          name={product.name}
          image={product.image}
          top={product.top}
          left={product.left}
        />
      ))}
    </div>
  );
};

export default App;
