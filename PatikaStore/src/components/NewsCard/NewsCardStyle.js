import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 2.7,
    borderRadius: 10,
    width: '90%',
    resizeMode: 'contain',
    alignSelf: 'center',
    margin: 10,
  },
  title: {
    backgroundColor: '#eceff1',
    fontWeight: 'bold',
    padding: 3,
    textAlign: 'center',
  },
  price: {
    backgroundColor: '#eceff1',
    textAlign: 'center',
  },
  inStock:{
    fontSize:18,
    color:'#ff0000',
    margin:5,
    fontWeight:'bold',
    textTransform:'uppercase',
    textAlign: 'center',
}
});
