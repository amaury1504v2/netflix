import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        aspectRatio: 16/9,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    match: {
        color: '#00aa00',
        fontWeight: 'bold',
        marginRight: 5
    },
    year: {
        color: '#757575',
        marginRight: 5
    },
    ageContainer: {
        backgroundColor: '#e6e229',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        paddingHorizontal: 3,
        marginRight: 5
    },
    age: {
        color: 'black',
        fontWeight: 'bold',
    },
    numberOfSeasons: {
        
    } ,
    playButton: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 3,
        marginVertical: 10
    },
    playButtonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },

    downloadButton: {
        backgroundColor: '#2b2b2b',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 3,
        marginVertical: -5
    },
    downloadButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
})

export default styles;