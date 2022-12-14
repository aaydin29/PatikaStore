import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>PATIKASTORE</Text>
        <SearchBar></SearchBar>
        <FlatList
          data={news_data}
          renderItem={({item}) => <NewsCard objects={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 35,
    color: 'purple',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
