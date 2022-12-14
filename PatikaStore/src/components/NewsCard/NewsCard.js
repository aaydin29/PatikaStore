import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './NewsCardStyle';

const NewsCard = ({objects}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: objects.imgURL}} />
      <View>
        <Text style={styles.title}>{objects.title}</Text>
        <Text style={styles.price}>{objects.price}</Text>
        <Text style={styles.inStock}>
          {objects.inStock === true ? '' : 'Stokta Yok'}
        </Text>
      </View>
    </View>
  );
};

export default NewsCard;
