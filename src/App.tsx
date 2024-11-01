import React from 'react';
import './App.css';
import Product3D from './components/3DProduct';

const App: React.FC = () => {
  const products = [
    { name: 'Lipstick', image: '/lipstick.avif' },
    { name: 'Perfume', image: '/perfume.png' },
    { name: 'Eyeshadow', image: '/eyeshadow.png' },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="grid grid-cols-3 gap-10">
        {products.map((product) => (
          <Product3D key={product.name} name={product.name} image={product.image} />
        ))}
      </div>
    </div>
  );
};

export default App;
