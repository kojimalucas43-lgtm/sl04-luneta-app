import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function unity(){
    return(
       <View>
            <View>
                <Image style={s.img} source={require('../assets/images/6.png')}/>
            </View>

            <View style={s.bgc}>
                <Text style={s.title}>Importância do Telescópio</Text>
            </View>

            <View style={s.bgc2}>
                <Text style={s.title2}>O Telescópio é importante porque amplia a visão humana, capta luz de astros distantes e revela detalhes do espaço. Ele permitiu provar que a Terra não é o centro do cosmos, descobrir novas galáxias e avançar o conhecimento da física e da astronomia.</Text>
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
        width: 480,
        height: 480
    },
    title:{
        fontSize: 29,
        color: '#ffffff',
        left: 48,
        top: 20,
    },
    title2:{
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'justify',
        left: 12,
        right:12,
        top: 30,
    },
    bgc:{
        backgroundColor: '#AA7BC3',
        width: 480,
        height: 100
    },
    bgc2:{
        backgroundColor: '#AA7BC3',
        width: 540,
        height: 500
    },
})