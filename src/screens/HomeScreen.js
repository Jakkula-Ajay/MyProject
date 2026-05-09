import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import ProductCard from '../components/ProductCard';
import { AuthContext } from '../context/AuthContext';
const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { logout } = useContext(AuthContext);
  const fetchProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading products...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.btnText}>Cart 🛒</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
          <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <FlatList
       data={products}
  numColumns={2}
  keyExtractor={(item) => item.id.toString()}
  columnWrapperStyle={{
    justifyContent: 'space-between',
  }}
  renderItem={({ item }) => (
    <ProductCard
      item={item}
      navigation={navigation}
    />
  )}
  showsVerticalScrollIndicator={false}
/> 
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 5,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  cartBtn: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 8,
  },
  logoutBtn: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
