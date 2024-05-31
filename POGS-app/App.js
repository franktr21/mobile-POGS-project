import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions, Image, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window'); // Get device screen width

export default function App() {
  const [selectedVegetable, setSelectedVegetable] = useState(null);
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [vegetableQuantity, setVegetableQuantity] = useState(null);
  const [fruitQuantity, setFruitQuantity] = useState(null);
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleAddItem = (type) => {
    const item = type === 'vegetable' ? selectedVegetable : selectedFruit;
    const quantity = type === 'vegetable' ? vegetableQuantity : fruitQuantity;
    const price = item ? parseInt(item.split('-$')[1], 10) : 0;

    if (!item || !quantity) {
      Alert.alert(`Please select a ${type === 'vegetable' ? 'vegetable' : 'fruit'} and quantity.`);
      return;
    }

    setCart([...cart, { item: item.split('-$')[0], quantity, subtotal: price * quantity }]);
    type === 'vegetable' ? setSelectedVegetable(null) : setSelectedFruit(null);
    type === 'vegetable' ? setVegetableQuantity(null) : setFruitQuantity(null);
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, curr) => acc + curr.subtotal, 0);
    setTotalCost(total);
  };

  const clearCart = () => {
    setCart([]);
    setTotalCost(0);
    setSelectedVegetable(null);
    setSelectedFruit(null);
    setVegetableQuantity(null);
    setFruitQuantity(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>WELCOME TO POGS!</Text>
        <Text style={styles.title1}>Fresh. Local. Seasonal.</Text>
        
        <StyledImage source={require('./image.jpg')} />


        <Text style={styles.label}>SELECT VEGETABLE</Text>
        <View style={styles.selectorContainer}>
          <RNPickerSelect
            placeholder={{ label: 'Select a vegetable', value: null }}
            items={[
              { label: 'Potato - $5', value: 'Potato-$5' },
              { label: 'Carrot - $8', value: 'Carrot-$8' },
              { label: 'Onion - $5', value: 'Onion-$5' },
              { label: 'Tomato - $6', value: 'Tomato-$6' },
              { label: 'Cucumber - $7', value: 'Cucumber-$7' },
              { label: 'Pepper - $11', value: 'Pepper-$11'},
              { label: 'Cabbage - $4', value: 'Cabbage-$4'},
              { label: 'Corn - $2', value: 'Corn-$2'}
            ]}
            onValueChange={(value) => setSelectedVegetable(value)}
            style={pickerSelectStyles}
            value={selectedVegetable}
            useNativeAndroidPickerStyle={false}
            Icon={() => <Ionicons name="md-arrow-down" size={24} color="gray" />}
          />

          <RNPickerSelect
            placeholder={{ label: 'Select quantity', value: null }}
            items={[1, 2, 3, 4, 5].map(num => ({ label: `${num}`, value: num }))}
            onValueChange={(value) => setVegetableQuantity(value)}
            style={pickerSelectStyles}
            value={vegetableQuantity}
            useNativeAndroidPickerStyle={false}
            Icon={() => <Ionicons name="md-arrow-down" size={24} color="gray" />}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddItem('vegetable')}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>SELECT FRUIT</Text>
        <View style={styles.selectorContainer}>
          <RNPickerSelect
            placeholder={{ label: 'Select a fruit', value: null }}
            items={[
              { label: 'Orange - $11', value: 'Orange-$11' },
              { label: 'Apple - $12', value: 'Apple-$12' },
              { label: 'Banana - $11', value: 'Banana-$11' },
              { label: 'Grape - $15', value: 'Grape-$15' },
              { label: 'Pear - $14', value: 'Pear-$14' },
              { label: 'Pineapple - $21', value: 'Pineapple-$21' },
              { label: 'Avocado - $7', value: 'Avocado-$7' }
            ]}
            onValueChange={(value) => setSelectedFruit(value)}
            style={pickerSelectStyles}
            value={selectedFruit}
            useNativeAndroidPickerStyle={false}
            Icon={() => <Ionicons name="md-arrow-down" size={24} color="gray" />}
          />
          <RNPickerSelect
            placeholder={{ label: 'Select quantity', value: null }}
            items={[1, 2, 3, 4, 5].map(num => ({ label: `${num}`, value: num }))}
            onValueChange={(value) => setFruitQuantity(value)}
            style={pickerSelectStyles}
            value={fruitQuantity}
            useNativeAndroidPickerStyle={false}
            Icon={() => <Ionicons name="md-arrow-down" size={24} color="gray" />}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddItem('fruit')}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.calculateButton} onPress={calculateTotal}>
          <Text style={styles.buttonText}>CALCULATE TOTAL</Text>
        </TouchableOpacity>
        <Text style={styles.totalCost}>Total Cost of Order: $ {totalCost}</Text>

        {cart.map((item, index) => (
          <Text key={index} style={styles.cartItem}>{`${item.item} x ${item.quantity}`}</Text>
        ))}

        <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
          <Text style={styles.buttonText}>Clear Cart</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>Developed by Minh NGUYEN, Noorullah KHAN, Tracy NGUYEN, Trong TRAN</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const StyledImage = ({ source }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    backgroundColor: '#f0f0f0',
    paddingRight: 30,
    width: width * 0.35 - 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    backgroundColor: '#f0f0f0',
    paddingRight: 30,
    width: width * 0.35 - 10,
  },
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 200,  // Fixed width
    height: 200, // Fixed height
    borderRadius: 10, // Rounds the corners of the container
    overflow: 'hidden', // Ensures the image doesn't bleed outside the borderRadius
    elevation: 10, // Adds shadow for Android
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow position
    shadowOpacity: 0.9, // High shadow opacity for clear visibility
    shadowRadius: 10, // Larger shadow blur radius
    marginVertical: 30, // Adds vertical spacing for better visibility
    alignSelf: 'center', // Centers the container
    backgroundColor: '#fff', // Background color behind the image
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },

  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    paddingTop: 50,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#1B5E20',
    fontFamily: 'PlayfairDisplay-Bold',
  },
  title1: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
    color: '#1B5E20',
    fontFamily: 'PlayfairDisplay-Regular',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50', // Vibrant green
    width: '90%',
    fontFamily: 'PlayfairDisplay-Regular',
  },
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    width: '90%',
  },
  addButton: {
    backgroundColor: '#388E3C',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.2,
    shadowColor: '#2E7D32',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay-SemiBold',
  },
  calculateButton: {
    backgroundColor: '#FF5349',
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    width: '50%',
    shadowColor: '#E53935',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 6,
  },
  totalCost: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: '#2E7D32',
    fontFamily: 'PlayfairDisplay-Bold',
  },
  clearButton: {
    backgroundColor: '#81C784',
    padding: 10,
    borderRadius: 15,
    width: '60%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
    shadowColor: '#66BB6A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  cartItem: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    fontFamily: 'PlayfairDisplay-Regular',
  },
  footer: {
    fontSize: 12,
    color: '#EB775B',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    fontFamily: 'PlayfairDisplay-Italic',
  },
});