import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { CartContext } from '../context/CartContext';
const ProductCard = ({ item, navigation }) => {
  const {
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);
  const cartItem = cart.find(
    product => product.id === item.id
  );
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('Details', {
          product: item,
        })
      }
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />
      <Text numberOfLines={1} style={styles.title}>
        {item.title}
      </Text>
      <Text style={styles.price}>
        ₹ {item.price}
      </Text>
      {!cartItem ? (
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => addToCart(item)}
        >
          <Text style={styles.addBtnText}>
            Add to Cart
          </Text>
        </TouchableOpacity>

      ) : (
        <View style={styles.qtyContainer}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => decreaseQty(item.id)}
          >
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyValue}>
            {cartItem.quantity}
          </Text>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => increaseQty(item.id)}
          >
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};
export default ProductCard;
const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: '500',
  },
  price: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 5,
  },
  addBtn: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  qtyBtn: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  qtyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  qtyValue: {
    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
});