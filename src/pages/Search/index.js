import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import api, { key } from '../../services/api';
import Conditions from '../../components/Conditions';
import { LinearGradient } from 'expo-linear-gradient';

const Search = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    const resp = await api.get(`/weather?key=${key}&city_name=${input}`);

    if (resp.data.by === 'default') {
      setError('Humm, cidade não encontrada!');
      setInput('');
      setCity(null);
      Keyboard.dismiss();
      return;
    }

    setCity(resp.data);
    setInput('');
    Keyboard.dismiss();
  };

  if (city) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Feather name="chevron-left" size={32} color="#000" />
          <Text style={{ fontSize: 22 }}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <TextInput
            value={input}
            onChangeText={(value) => setInput(value)}
            placeholder="Ex: Goiânia, GO"
            style={styles.input}
          />

          <TouchableOpacity style={styles.icon} onPress={handleSearch}>
            <Feather name="search" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        <LinearGradient style={styles.header} colors={['#1ed6ff', '#97c1ff']}>
          <Text style={styles.date}>{city.results.date}</Text>
          <Text style={styles.city}>{city.results.city_name}</Text>

          <View>
            <Text style={styles.temp}>{city.results.temp}°</Text>
          </View>

          <Conditions weather={city} />
        </LinearGradient>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Feather name="chevron-left" size={32} color="#000" />
        <Text style={{ fontSize: 22 }}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.searchBox}>
        <TextInput
          value={input}
          onChangeText={(value) => setInput(value)}
          placeholder="Ex: Goiânia, GO"
          style={styles.input}
        />

        <TouchableOpacity style={styles.icon} onPress={handleSearch}>
          <Feather name="search" size={22} color="#000" />
        </TouchableOpacity>
      </View>
      {error && <Text style={{ marginTop: 25, fontSize: 18 }}>{error}</Text>}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '10%',
  },
  backButton: {
    flexDirection: 'row',
    marginLeft: 15,
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchBox: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ddd',
    width: '90%',
    height: 50,
    borderRadius: 8,
  },
  input: {
    width: '85%',
    height: 50,
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 7,
  },
  icon: {
    width: '15%',
    backgroundColor: '#1ed6ff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  header: {
    marginTop: '5%',
    width: '90%',
    paddingTop: '3%',
    paddingBottom: '3%',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 8,
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  city: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  temp: {
    color: '#fff',
    fontSize: 80,
    fontWeight: 'bold',
  },
});
