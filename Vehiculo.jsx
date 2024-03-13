import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Vehicle = ({ imageUrl, description, price }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.img} source={require('./assets/toyota_corolla.jpg')}
                />
                <Text style={styles.title}>{description}</Text>
                <Text style={[styles.title, styles.price]}>$ {price}</Text>
            </View>
        </View>
    );
    
  };

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
  price: {
    fontSize: 35,
  },
});

export default Vehicle;
