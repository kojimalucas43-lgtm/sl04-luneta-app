import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function unity(){
    return(

       <View style={s.screen}>
            <Image source={require('../assets/images/6.png')} style={s.img}/>

            <View>
                <Text style={s.text}>A importância dos Telescópios</Text>
                <Text style={s.text2}> O Telescópio é importante porque amplia a visão humana, capta luz de astros distantes e revela detalhes do espaço. Ele permitiu provar que a Terra não é o centro do cosmos, descobrir novas galáxias e avançar o conhecimento da física e da astronomia.</Text>
            </View>

            <View style={s.nav}>
                <TouchableOpacity onPress={() => router.push('/cards')}>
                    <Image style={s.arrow} source={require('../assets/icons/left.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/contact')}>
                    <Image style={s.arrow} source={require('../assets/icons/right.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
    
}

const s = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: "#AA7BC3"
    },
    nav:{
        position: "fixed",
        bottom: 0,
        backgroundColor: '#944BBB',
        width: "100%",
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 39
    },
    arrow:{
        backgroundColor: '#CC92C2',
        width: 42,
        height: 42,
        borderRadius: 12
    },
   img:{
        width: "100%",
   },
   text:{
        fontSize: 29,
        fontWeight: "bold",
        color: "white",
        margin: 25,
   },
   text2:{
        fontSize: 20,
        color: "white",
        margin: 25,
   },

})