import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Navbar from '../components/Navbar';

import { Picker } from '@react-native-picker/picker'

export default function ReportScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 43.8766766,
    longitude: 18.3085449,
  });

  const handleMapPress = (event) => {
    setSelectedLocation(event.nativeEvent.coordinate);
  };

  return (
    <View style={styles.container}>
    <ScrollView style={styles.formContainer}>
      <Text style={styles.label}>Issue Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter issue title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Enter issue description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Category</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label="Select a category" value="" />
          <Picker.Item label="Road Issue" value="road" />
          <Picker.Item label="Electricity Issue" value="electricity" />
          <Picker.Item label="Water Supply Issue" value="water" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      <Text style={styles.label}>Select Location</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: selectedLocation.latitude,
          longitude: selectedLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress}
      >
        <Marker coordinate={selectedLocation} />
      </MapView>

      <TouchableOpacity style={styles.reportButton}>
        <Text style={styles.reportButtonText}>Submit Report</Text>
      </TouchableOpacity>

    </ScrollView>
    <Navbar navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    paddingTop: 10,
    borderRadius: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  map: {
    height: 200,
    marginBottom: 15,
  },
  reportButton: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  reportButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
