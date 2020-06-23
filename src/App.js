import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  ImageBackground,
} from 'react-native';
// import Constants from "expo-constants";

const image = {uri: './public/movie_image.jpeg'};

const DATA = [
  {
    title: 'Added Recently',
    data: [
      'VIP',
      'Anjaan',
      'Arima Nambi',
      'Dumeel',
      'Maatraan',
      'Singam 1',
      'Penguin',
    ],
  },
  {
    title: 'Action',
    data: ['Mersal', '100', 'Petta', 'Bigil', 'Viswasam', 'Kaappan'],
  },
  {
    title: 'Comedy',
    data: [
      'Comali',
      'Kavalai Vendam',
      'Ivan Thanthiran',
      'Gurkha',
      'Kanchana 3',
      'Dharala Prabhu',
    ],
  },
  {
    title: 'Thriller',
    data: [
      'Dhuruvangal Pathinaaru',
      'Psycho',
      'Thegidi',
      'Thambi',
      '2.0',
      'Thupparivalan',
    ],
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  </View>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item title={item} />}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
