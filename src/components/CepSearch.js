import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const CepSearch = () => {
  const [cep, setCep] = useState('');
  const [result, setResult] = useState(null);

  const searchCep = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setResult(response.data);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
      />
      <Button title="Buscar CEP" onPress={searchCep} />
      {result && (
        <View style={styles.resultContainer}>
          <Text>CEP: {result.cep}</Text>
          <Text>Logradouro: {result.logradouro}</Text>
          <Text>Complemento: {result.complemento}</Text>
          <Text>Bairro: {result.bairro}</Text>
          <Text>Cidade: {result.localidade}</Text>
          <Text>Estado: {result.uf}</Text>
          <Text>IBGE: {result.ibge}</Text>
          <Text>GIA: {result.gia}</Text>
          <Text>DDD: {result.ddd}</Text>
          <Text>SIAFI: {result.siafi}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  resultContainer: {
    marginTop: 20,
  },
});

export default CepSearch;