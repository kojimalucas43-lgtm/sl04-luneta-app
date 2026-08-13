import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";



 export default function Home(){
    return(
        <View style={s.container}>
            <ImageBackground source={require('../assets/image/1.png')} resizeMode="cover" style={s.image}>
                    <Image style={s.logo} source={require('../assets/icons/2.png')}/>
                    <TouchableOpacity style={s.btn}>
                      <Text style={s.btnText}>ENTRAR</Text>
                    </TouchableOpacity>
            </ImageBackground>
        </View>
    )
 }

 const s = StyleSheet.create({
    container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    top: 50,
    left: 35
  },
  btn:{
    position: 'absolute',
    bottom: 100,
    left: 80,
    backgroundColor:  '944BBB',
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 12
  },
  btnText:{
    color:"944BBB"
  }
 })