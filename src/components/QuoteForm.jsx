import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import firebase from 'firebase/app';

const QuoteForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
  
    const handleSubmit = () => {
      // Aquí puedes enviar los datos del formulario a Firebase
      const quoteData = {
        name,
        email,
        vehicleModel,
      };
  
      firebase
        .firestore()
        .collection('quotes')
        .add(quoteData)
        .then(() => {
          console.log('Cotización solicitada');
        })
        .catch((error) => {
          console.error('Error al solicitar cotización:', error);
        });
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          label="Nombre"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          label="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          label="Modelo de vehículo"
          value={vehicleModel}
          onChangeText={setVehicleModel}
          style={styles.input}
        />
        <Button mode="contained" onPress={handleSubmit}>
          Solicitar cotización
        </Button>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    // Estilos para el componente QuoteForm
  });
  
  export default QuoteForm;