import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

export default function ProfileScreen( {navigation}) {
  return (
    <View style={styles.container}>
        <Header/>
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual profile picture URL
          style={styles.profilePicture}
        />
      </View>

      {/* Profile Info */}
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@example.com</Text>

      {/* Additional Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Icon name="person" size={24} color="#007AFF" />
          <Text style={styles.detailText}>Username: username</Text>
        </View>
        <View style={styles.detailRow}>
          <Icon name="phone" size={24} color="#007AFF" />
          <Text style={styles.detailText}>Phone: +1 234 567 890</Text>
        </View>
        <View style={styles.detailRow}>
          <Icon name="location-on" size={24} color="#007AFF" />
          <Text style={styles.detailText}>Location: New York, USA</Text>
        </View>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
      <Navbar navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    paddingTop: 50,
  },
  profilePictureContainer: {
    marginBottom: 20,
    borderRadius: 50,
    overflow: 'hidden',
  },
  profilePicture: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  detailsContainer: {
    width: '90%',
    marginTop: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  editButton: {
    marginTop: 30,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
