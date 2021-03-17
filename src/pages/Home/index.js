import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

const DATA = [
  {
    date: '17/03',
    weekday: 'Qua',
    max: 26,
    min: 18,
    description: 'Tempestades isoladas',
    condition: 'storm',
  },
  {
    date: '18/03',
    weekday: 'Qui',
    max: 29,
    min: 18,
    description: 'Tempo nublado',
    condition: 'cloud',
  },
  {
    date: '19/03',
    weekday: 'Sex',
    max: 27,
    min: 18,
    description: 'Tempestades',
    condition: 'storm',
  },
  {
    date: '20/03',
    weekday: 'Sáb',
    max: 28,
    min: 18,
    description: 'Tempestades',
    condition: 'storm',
  },
  {
    date: '21/03',
    weekday: 'Dom',
    max: 28,
    min: 18,
    description: 'Ensolarado com muitas nuvens',
    condition: 'cloudly_day',
  },
  {
    date: '22/03',
    weekday: 'Seg',
    max: 28,
    min: 18,
    description: 'Parcialmente nublado',
    condition: 'cloudly_day',
  },
  {
    date: '23/03',
    weekday: 'Ter',
    max: 30,
    min: 20,
    description: 'Parcialmente nublado',
    condition: 'cloudly_day',
  },
  {
    date: '24/03',
    weekday: 'Qua',
    max: 30,
    min: 21,
    description: 'Parcialmente nublado',
    condition: 'cloudly_day',
  },
  {
    date: '25/03',
    weekday: 'Qui',
    max: 30,
    min: 20,
    description: 'Parcialmente nublado',
    condition: 'cloudly_day',
  },
  {
    date: '26/03',
    weekday: 'Sex',
    max: 29,
    min: 21,
    description: 'Ensolarado com muitas nuvens',
    condition: 'cloudly_day',
  },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
      <Conditions />

      <FlatList
        horizontal={true}
        contentContainerStyle={{ paddingBottom: '5%' }}
        style={styles.list}
        data={DATA}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '5%',
  },
  list: {
    marginTop: 10,
    marginLeft: 10,
  },
});
