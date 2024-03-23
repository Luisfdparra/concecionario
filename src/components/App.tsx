/*import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppointmentForm from './AppointmentForm';
import Confirmation from './Confirmation';
import VehicleList from './VehicleList';
import SearchVehicles from './SearchVehicles';
import TestDriveForm from './TestDriveForm';
import QuoteForm from './QuoteForm';
import ServiceAppointment from './ServiceAppointment';

;

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name ="AppointmentForm" component={AppointmentForm}/>
          <Stack.Screen name ="Confirmation" component={Confirmation}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    
  );
};

export default App;
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VehicleList from './VehicleList';
import SearchVehicles from './SearchVehicles';
import TestDriveForm from './TestDriveForm';
import QuoteForm from './QuoteForm';
import ServiceAppointment from './ServiceAppointment';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="VehicleList" component={VehicleList} />
        <Stack.Screen name="SearchVehicles" component={SearchVehicles} />
        <Stack.Screen name="TestDriveForm" component={TestDriveForm} />
        <Stack.Screen name="QuoteForm" component={QuoteForm} />
        <Stack.Screen name="ServiceAppointment" component={ServiceAppointment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;