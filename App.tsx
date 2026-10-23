import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
//import { SafeAreaView } from 'react-native/types_generated/index';
import YoutubeIframe from 'react-native-youtube-iframe'
import {useState} from 'react';

export default function App() {
  //usar hooks useState
  const video_height = 200;
  const [videoReady, setVideoReady] = useState(false)
  
  return (
    <View style={styles.container}>
       <ScrollView
       showsVerticalScrollIndicator= {false}
       contentContainerStyle = {styles.content}
       >
        
        <SafeAreaView style = {{flex:1}}> 
        <Image style={styles.img} source = {require('./src/images/imagem1.jpg')}/>
        </SafeAreaView>

        <SafeAreaView style = {{flex:1}}> 
        <Image style={styles.img} source = {require('./src/images/imagem2.jpg')}/>
        </SafeAreaView>        

        <SafeAreaView style = {{flex:1}}> 
        <Image style={styles.img} source = {require('./src/images/imagem3.jpg')}/>
        </SafeAreaView>   

        <SafeAreaView style = {{flex:1}}> 
        <Image style={styles.img} source = {{uri: 'https://marketplace.canva.com/xHPJk/MAHA8XxHPJk/1/tl/canva-MAHA8XxHPJk.jpg'}}/>
        </SafeAreaView>

        <SafeAreaView style = {{flex:1}}> 
        <Image style={styles.img} source = {{uri: 'https://static.vecteezy.com/ti/fotos-gratis/p2/2316539-paisagem-natural-com-vista-das-arvores-e-um-caminho-no-bosque-gratis-foto.jpg'}}/>
        </SafeAreaView>

        <View>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias error iste veritatis, at eos, facere maiores iusto aperiam, mollitia odio ea obcaecati aliquam! Voluptatibus quisquam possimus accusantium eveniet aliquid.</Text>
        </View>

        <View>
          <YoutubeIframe 
          videoId = "cu71GJlMHzY"
          height = {video_height}
          onReady = {() => setVideoReady(true)}
          />
        </View>

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
  content:{
    padding:32,
  },

  img:{
    margin: 15,
    height:300,
    width: 300,
    borderRadius:200,

  },


});
