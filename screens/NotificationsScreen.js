import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Card from '../components/Card';

const cardData = [
  // Issues
  { 
    title: "Pothole on Main Street", 
    type: "Road Issue", 
    status: "Reported", 
    iconName: "road" // Mapping type to icon name
  },
  { 
    title: "Streetlight Outage in Park", 
    type: "Electricity Issue", 
    status: "In Progress", 
    iconName: "lightbulb" 
  },
  { 
    title: "Overflowing Trash Bin", 
    type: "Other", 
    status: "Done", 
    iconName: "delete" 
  },

  // Announcement
  { 
    title: "Scheduled Maintenance on Power Grid", 
    type: "Announcement", 
    iconName: "campaign" 
  }
];

export default function NotificationsScreen({ navigation }) {
  return (
  <View style={styles.container}>
          <Header/>
          <Text style={styles.username}>Hello, username!</Text>
          {/* TODO Dynamically load cards */}
          <ScrollView style={styles.container}>
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              iconName={card.iconName}
              status={card.status}
            />
          ))}
          </ScrollView>
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
