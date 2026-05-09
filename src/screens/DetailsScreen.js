import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import { CartContext } from '../context/CartContext';
const DetailsScreen = ({ route }) => {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          {product.title}
        </Text>
        <Text style={styles.price}>
          ₹ {product.price}
        </Text>
        <Text style={styles.description}>
          {product.description}
        </Text>
        <View style={styles.button}>
          <Button
            title="Add to Cart"
            onPress={() => addToCart(product)}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default DetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: 250,
    resizeMode: 'contain',
    marginTop: 20,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginVertical: 10,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
  },
  button: {
    marginTop: 20,
  },
});