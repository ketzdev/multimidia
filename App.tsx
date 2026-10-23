import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
//import { SafeAreaView } from 'react-native/types_generated/index';

export default function App() {
  return (
    <View style={styles.container}>
       <ScrollView
       showsVerticalScrollIndicator= {false}
       contentContainerStyle = {styles.content}
       >
        
        <SafeAreaView style = {{flex:1}}>

        <Image source = {require('./src/images/imagem1.jpg')}/>

        </SafeAreaView>

       </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  },
});
