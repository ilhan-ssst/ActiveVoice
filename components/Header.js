import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 28, color: 'orange'}}>Active</Text>
        <Text style={{fontWeight: 'bold', fontSize: 28, color: 'lightblue'}}>Voice</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20
  },

});
