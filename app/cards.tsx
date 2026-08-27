import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import dados from '@/assets/constants/mock';
import { Item } from "@/components/item";
import { FlatList} from "react-native-reanimated/lib/typescript/Animated";

export default function Cards(){
    return(
        <View>
            <TouchableOpacity onPress={() => router.push('/')}>
                <Text style={s.btnExt}>Sair</Text>
            </TouchableOpacity>

            <FlatList data={dados} renderItem={({item}) => (
                <Item picture={item.image} title={item.title} text={item.text}/>
            )}>

            </FlatList>
     

            <View>
                <Text style={s.txt}>Cards</Text>
            </View>

        <View style={s.nav}>
                <TouchableOpacity onPress={() => router.push('/contact')}>
                    <Image style={s.arrow} source={require('../assets/icons/left.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/unity')}>
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
    screen:{
        flex: 1
    },
    arrow:{
        backgroundColor: '#CC92C2',
        width: 42,
        height: 42,
        borderRadius: 12
    }, 
    btnExt:{
        backgroundColor: '#BABABA',
        color: '#ffffff',
        fontSize: 24 ,
        textAlign: 'center',
        top: 30,
        left: 20,
        width: 60,
        height: 40,
        borderRadius: 12
    },
    txt:{
        textAlign: 'center',
        top: 350,
    }
})