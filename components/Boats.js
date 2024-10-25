import { View, Text, Image } from 'react-native';

const Boats = ({name, description,icon_name,picture}) => {
    return (
        <View>
            <Text>
                {name}
            </Text>
            <Image source={picture} style={{width:500, height:300}}></Image>
            <Text>
                {description}
            </Text>
        </View>
    );
};

export default Boats;
