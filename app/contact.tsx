import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function contact(){
    return(
        <View>
            <View>
                <Text>Contato</Text>
            </View>

            <View style={s.nav}>
                <TouchableOpacity onPress={() => router.push('/unity')}>
                    <Image style={s.arrow} source={require('../assets/icons/left.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/cards')}>
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
    }
})