import React from 'react'
import { Button, TextInput, View } from 'react-native'
import { PaperProvider, Text } from 'react-native-paper'
import { useState } from 'react';

const AppointmentForm = ({ navigation }) => {

    const [name, setName] = useState('');
    const [Date, setDate] = useState('');
    const [Time, setTime] = useState('');

    const handleSubmit = () => {
        console.log('Name:', name)
        console.log('Date:', date)
        console.log('Time:', time)

        navigation.navigate('Confirmation', { name: name, date: Date, time: Time })
    };
    return (
        <PaperProvider>
            <View>
                <Text>AppointmentForm </Text>
                <Text style={globalStyles.label}>Name:</Text>
                <TextInput
                    style={globalStyles.TextInput}
                    value={name}
                    onChangeText={name => setName(name)} />

                <Text style={globalStyles.label}>Date:</Text>
                <TextInput
                    style={globalStyles.TextInput}
                    value={Date}
                    onChangeText={date => setDate(date)} />

                <Text style={globalStyles.label}>Time:</Text>
                <TextInput
                    style={globalStyles.TextInput}
                    value={Time}
                    onChangeText={time => setTime(time)} />

                <button>
                    style={globalStyles.button}
                    mode = 'contained'
                    title ="Submit" onPress ={handleSubmit}
                </button>
            </View>
        </PaperProvider>


    )
}

export default AppointmentForm;
