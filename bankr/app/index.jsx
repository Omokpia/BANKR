import { Text, View, Image, TextInput, Dimensions, Pressable, Touchable,
TouchableOpacity, TouchableWithoutFeedback,
ScrollView} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const {width , height} = Dimensions.get('screen')
  console.log('screen width :', width, 'and' ,'screen height :', height)


  return (
    <SafeAreaView style={{backgroundColor:'black', flex:1,
    paddingHorizontal:width*.04}}>

      <ScrollView>


      

      <Text style={{color:'blue', fontSize:30}}>
        THIS IS GOD'SPOWER'S APP TESTING.
      </Text>

      <Text style={{color:'green', fontSize:30}}>
        My name is Gods'spower Omokpia, and I am a future Mobile App developer.
      </Text>

      <Text style={{color:'red', fontSize:20, fontStyle:'italic'}}>
        React Native is so so fun to code with and I love it.
      </Text>

      

{/* Image is a self closing component */}
      <Image style={{marginTop:height*.02}} source={require('../assets/images/favicon.png')}/> 
      
{/* TextInput is a self closing component */}

      <TextInput style={{borderColor:'red', color:'white', borderWidth:2, fontColor:'white',
      borderRadius:10, height:50, paddingLeft:20, marginTop: height*.05}}/>

      <Pressable onPress={() =>{

        console.log('My name is Godspower.')

      }} style={{backgroundColor:'white', width:width*.4, marginTop:40, padding:30}}>
        <Text style={{color:'red' }}>Click me!</Text>
      </Pressable>

      <TouchableOpacity onPress={() =>{

        console.log('I love coding!!!')
      
      }} style={{backgroundColor:'white', width:width*.4, marginTop:40, padding:30}}>

        <Text style={{color:'blue' }}>LogIn!</Text>

      </TouchableOpacity>

      <TouchableOpacity onPress={() =>{

        console.log('I love coding!!!')
      
      }} style={{backgroundColor:'white', width:width*.4, marginTop:40, padding:30}}>

        <Text style={{color:'blue' }}>LogIn!</Text>

      </TouchableOpacity>

      <TouchableOpacity onPress={() =>{

        console.log('I love coding!!!')
      
      }} style={{backgroundColor:'white', width:width*.4, marginTop:40, padding:30}}>

        <Text style={{color:'blue' }}>LogIn!</Text>

      </TouchableOpacity>


    </ScrollView>
    </SafeAreaView>
  );
}
