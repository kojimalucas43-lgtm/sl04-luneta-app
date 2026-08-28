import { ImageSourcePropType, View, Image, Text, StyleSheet } from "react-native"


export const Item = ({picture, title, text} : {picture: ImageSourcePropType, title: string, text: string}) => {
    return(
        <View style={s.container}>
            <Image source={picture} style={s.img}/>
            <View>
                <Text style={s.title}>{title}</Text>
                <Text style={s.text}>{text}</Text>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container:{
        borderRadius: 12,
        backgroundColor: "#944BBB",
        marginHorizontal: 30,
        marginBottom: 44,   
    },
    img:{
        width: '100%',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    title:{
        color: 'white',
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text:{
        color:'white',
        fontSize: 14,
        textAlign: '-moz-left',
        margin: 21,
        marginBottom: 22,
    }
})