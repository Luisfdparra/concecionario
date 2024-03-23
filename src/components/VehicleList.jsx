/*import React from "react";
import { ScrollView } from "react-native";
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Vehicle from "./src/Vehiculo";
import VehicleData from '.../assets/vehicles.json'
// components/VehicleList.tsx
import { VehicleData } from '../src/types'; */

/*const VehicleList = ({ Vehicles }) => {  
  return (
    <ScrollView>
      {vehicles.map((vehicle) => (
        <Vehicle
          key={vehicle.id}
          imageUrl={vehicle.imageUrl}
          description={vehicle.description}
          price={vehicle.price}
        />
      ))}
    </ScrollView>
  );
};

export default VehicleList;
*/

// Definir la interfaz para los datos del vehículo

/*
interface VehicleData{

}

interface VehicleData {
  id: string;
  imageUrl: string;
  make: string;
  model: string;
  price: number;
}

const VehicleList: React.FC = () => {
  const navigation = useNavigation();

  const renderVehicle = ({ item }: { item: VehicleData }) => (
    <View style={styles.vehicleContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.vehicleImage} />
      <View style={styles.vehicleDetails}>
        <Text style={styles.vehicleMake}>{item.make}</Text>
        <Text style={styles.vehicleModel}>{item.model}</Text>
        <Text style={styles.vehiclePrice}>${item.price}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={vehicleData} // Reemplaza vehicleData con tus datos de vehículos
      renderItem={renderVehicle}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  // Estilos para el componente VehicleList
});

export default VehicleList;  
*/

// components/VehicleList.tsx
import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { VehicleData } from '../src/types';
import vehiclesData from '../assets/vehicles.json';

const VehicleList = () => {
  const navigation = useNavigation();

  const renderVehicle = ({ item }) => (
    <View style={styles.vehicleContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.vehicleImage} />
      <View style={styles.vehicleDetails}>
        <Text style={styles.vehicleMake}>{item.make}</Text>
        <Text style={styles.vehicleModel}>{item.model}</Text>
        <Text style={styles.vehiclePrice}>${item.price}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={vehicleData} // Reemplaza vehicleData con tus datos de vehículos
      renderItem={renderVehicle}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  // Estilos para el componente VehicleList
});

export default VehicleList;