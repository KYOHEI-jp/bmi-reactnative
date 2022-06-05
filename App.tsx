import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     paddingTop: 23,
     
  },
  input: {
     margin: 15,
     height: 40,
     borderWidth: 1,
     padding: 10,
  },
  submitButton: {
     backgroundColor: '#ff6666',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     textAlign: "center",
     color: 'white',
     fontSize: 18,
  },
  output:{
     textAlign: "center",
     fontSize: 30,
  },
  title:{
     paddingTop:30,
     paddingBottom:10,
     textAlign: "center",
     fontSize: 30,
     fontWeight:"bold",
  },
  resultText:{
     paddingTop:20,
     paddingBottom:10,
     textAlign: "center",
     fontSize: 30,
     color: 'blue'
  },
  label:{
     marginLeft: 15,
  }
})
