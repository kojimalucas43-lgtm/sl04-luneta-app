import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";



 export default function Home(){
    return(
        <View style={s.container}>
            <ImageBackground source={require('../assets/images/bg.png')} resizeMode="cover" style={s.image}>
                    <Image style={s.logo} source={require('../assets/icons/logo.png')}/>
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
    top: 150,
    left: 110
  },
  btn:{
    position: 'absolute',
    bottom: 100,
    left: 60,
    backgroundColor:  '#944BBB',
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 12
  },
  btnText:{
    color:"#ffffff",
    fontWeight: 'bold',
    fontSize: 30
  }
 })