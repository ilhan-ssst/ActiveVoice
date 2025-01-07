import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const statusColors = {
  Reported: '#FF9500', // Orange
  'In Progress': '#007AFF', // Blue
  Done: '#4CD964', // Green
};



export default function Card({ title, iconName, onPress, status }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={32} color="#007AFF" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.statusContainer}>
      <Text 
        style={[styles.status, { color: statusColors[status] || '#333' }]}>
        {status}
    </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F4FF',
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
});
