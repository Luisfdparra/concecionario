import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, DatePicker } from 'react-native-paper';
import firebase from 'firebase/app';

const ServiceAppointment = () => {
    const [name, setName] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [serviceDate, setServiceDate] = useState(new Date());
  
    const handleSubmit = () => {
      // Aquí puedes enviar los datos del formulario a Firebase
      const serviceData = {
        name,
        vehicleModel,
        serviceDate,
      };
  
      firebase
        .firestore()
        .collection('serviceAppointments')
        .add(serviceData)
        .then(() => {
          console.log('Cita de servicio agendada');
        })
        .catch((error) => {
          console.error('Error al agendar cita de servicio:', error);
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
          label="Modelo de vehículo"
          value={vehicleModel}
          onChangeText={setVehicleModel}
          style={styles.input}
        />
        <DatePicker
          label="Fecha de servicio"
          value={serviceDate}
          onDateChange={setServiceDate}
        />
        <Button mode="contained" onPress={handleSubmit}>
          Agendar cita de servicio
        </Button>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    // Estilos para el componente ServiceAppointment
  });
  
  export default ServiceAppointment;