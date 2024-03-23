import React from 'react';
import { View } from 'react-native';
import VehicleList from './src/components/VehicleList.jsx';

const Cataloge = () => {
  const vehicles = [
    {
      id: 1,
      imageUrl: require('./assets/toyota_corolla.jpg'),
      description: 'Toyota Corolla, 2023',
      price: 104990000,
    },
    {
      id: 2,
      imageUrl: require('./assets/Onix.jpg'),
      description: 'Chevrolet Onix, 2023',
      price: 54990000,
    },
  ];

  return (
    <View>
      <VehicleList Vehiculo={vehicles} />
    </View>
  );
};

export default Cataloge;
