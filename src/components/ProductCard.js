import React from "react";
import {  Text, Image, StyleSheet, TouchableOpacity} from "react-native";
const ProductCard = ({ item, navigation }) => {
    return (
        <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Details', { item })}
        >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text numberOfLines={1} style={styles.title}>
            {item.title}
            </Text>
            <Text style={styles.price}>{item.price}</Text>
            </TouchableOpacity>
    );
};
export default ProductCard;
const styles = StyleSheet.create({ 
    card: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,    
    },
    image: {
        height: 100,
        resizeMode: "contain",
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
    },
    price: {
        fontWeight: 'bold',
        marginTop: 5,
    },
});