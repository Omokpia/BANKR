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

        <Text>Happy</Text>



    </ScrollView>
    </SafeAreaView>
  );
}
