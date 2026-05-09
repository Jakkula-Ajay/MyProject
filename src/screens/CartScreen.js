import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { CartContext } from '../context/CartContext';

const CartScreen = () => {
  const { cart, increaseQty, decreaseQty, clearCart } = useContext(CartContext);

  
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  
  const handleCheckout = () => {
    console.log("Checkout clicked");

    Alert.alert(
      "Confirm Order",
      `Total Amount: ₹ ${total.toFixed(2)}\n\nProceed to checkout?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Confirm",
          onPress: () => {
            clearCart(); 
            Alert.alert("Success 🎉", "Your order has been placed!");
          },
        },
      ]
    );
  };

  
  if (cart.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.emptyText}>Your cart is empty 🛒</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

     
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.card}>

          
            <Image source={{ uri: item.image }} style={styles.image} />

            
            <View style={styles.info}>
              <Text numberOfLines={1} style={styles.title}>
                {item.title}
              </Text>

              <Text style={styles.price}>
                ₹ {item.price}
              </Text>

              
              <View style={styles.qtyContainer}>
                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() => decreaseQty(item.id)}
                >
                  <Text style={styles.qtyText}>-</Text>
                </TouchableOpacity>

                <Text style={styles.qtyValue}>
                  {item.quantity}
                </Text>

                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() => increaseQty(item.id)}
                >
                  <Text style={styles.qtyText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

     
      <View style={styles.footer}>
        <Text style={styles.total}>
          Total: ₹ {total.toFixed(2)}
        </Text>

        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={handleCheckout}
        >
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default CartScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 16,
    color: '#555',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },

  image: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },

  info: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 14,
    fontWeight: '500',
  },

  price: {
    fontWeight: 'bold',
    color: 'green',
  },

  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  qtyBtn: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 5,
  },

  qtyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  qtyValue: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },

  footer: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },

  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  checkoutBtn: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});