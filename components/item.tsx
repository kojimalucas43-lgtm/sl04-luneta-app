import { View, ImageSourcePropType, Image, StyleSheet} from "react-native-web"


export const Item = ({picture, title, text} : {picture: ImageSourcePropType, title: string, text: string}) => {
    return(
        <View>
            <Image source={picture}/>
            <View>
                <Text>{title}</Text>
                <Text>{text}</Text>
            </View>
        </View>
    )
}

    const s = StyleSheet.create(

    )