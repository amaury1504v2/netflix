import * as React from 'react';
import { Image, FlatList } from 'react-native';
import styles from './style'
import { Text, View } from '../../components/Themed';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';

const firstCategory = categories.items[0]

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <HomeCategory category={firstCategory} />
    </View>
  );
}
