import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Card from '../components/Card';

export default function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>Notificatoins</Text>
        <Navbar navigation={navigation}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
 
});
