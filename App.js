import React from 'react';
import { View } from 'react-native';
import CepSearch from './src/components/CepSearch';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CepSearch />
    </View>
  );
}