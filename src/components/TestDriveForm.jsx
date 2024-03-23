import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, DatePicker } from 'react-native-paper';
import firebase from 'firebase/app';

const TestDriveForm = () => {
    const [name, setName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [testDriveDate, setTestDriveDate] = useState(new Date());
  
    const handleSubmit = () => {
      // Aquí puedes enviar los datos del formulario a Firebase
      const testDriveData = {
        name,
        idNumber,
        phoneNumber,
        testDriveDate,
      };
  
      firebase
        .firestore()
        .collection('testDrives')
        .add(testDriveData)
        .then(() => {
          console.log('Prueba de manejo solicitada');
        })
        .catch((error) => {
          console.error('Error al solicitar prueba de manejo:', error);
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
          label="Número de identificación"
          value={idNumber}
          onChangeText={setIdNumber}
          style={styles.input}
        />
        <TextInput
          label="Número de teléfono"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={styles.input}
        />
        <DatePicker
          label="Fecha de prueba de manejo"
          value={testDriveDate}
          onDateChange={setTestDriveDate}
        />
        <Button mode="contained" onPress={handleSubmit}>
          Solicitar prueba de manejo
        </Button>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    // Estilos para el componente TestDriveForm
  });
  
  export default TestDriveForm;