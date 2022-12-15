import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'expo-status-bar';

import { Dashboard } from './src/screens/Dashboard';

export default function App() {

  return (
    <NativeBaseProvider >
      <StatusBar style='light' translucent/>
      <Dashboard/>
    </NativeBaseProvider>
  );
}

