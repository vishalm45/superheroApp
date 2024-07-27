import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CharacterScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.titlebar}>
                <TouchableOpacity style={styles.backButton} onPress={() => props.navigation.navigate('Home')}>
                    <Ionicons name="chevron-back-outline" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.name}>{props.route.params.text}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: props.route.params.image}} />
            </View>
            <View style={styles.content}>
                <Text style={styles.description}>{props.route.params.description}</Text>
                <View style={styles.row}>
                    <Characteristic category="Speed" rating={props.route.params.characteristics.speed} />
                    <Characteristic category="Strength" rating={props.route.params.characteristics.strength} />
                </View>
                <View style={styles.row}>
                    <Characteristic category="Intelligence" rating={props.route.params.characteristics.intelligence} />
                    <Characteristic category="Morality" rating={props.route.params.characteristics.morality} />
                </View>
                
            </View>
        </View>
   );
}

function Characteristic(props){
    return (
        <View style={styles.characteristic}>
            <Text style={styles.categoryText}>{props.category} :</Text>
            <Text style={styles.description}>{props.rating}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010020'
    },
    imageContainer : {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    image: {
        width: 200,
        height: 200
    },
    content: {
        flex: 3,
        marginLeft: 50,
        marginRight: 50,
        alignItems: 'center'
    },
    name: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16
    },
    description: {
        color: '#fff',
        fontSize: 14
    },
    titlebar: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 60,
        paddingBottom: 10
    },
    backButton: {
        position: 'absolute',
        left: 0,
        top: 0,
        marginTop: 50,
        padding: 10
    },
    characteristic: {
        flexDirection: 'row',
        paddingTop: 20,
    },
    categoryText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        marginRight: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    }
});
