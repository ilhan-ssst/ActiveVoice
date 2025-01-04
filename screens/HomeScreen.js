import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Header/>
        <Text style={styles.username}>Hello, username!</Text>
        <TouchableOpacity style={styles.reportButton} onPress={() => navigation.navigate('Report')}>
            <Text style={styles.reportButtonText}>Report Issue</Text>
        </TouchableOpacity>
        <Navbar navigation={navigation}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
  },
  reportButton: {
    width: '80%',
    margin: 'auto',
    backgroundColor: '#FF3B30',
    padding: 5,
    alignItems: 'center',

  },

  reportButtonText:{
    color: 'white',
    textAlign: 'center'
  },
  username: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 30
    }
});
