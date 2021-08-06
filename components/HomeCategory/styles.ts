import { StyleSheet }  from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    image: {
        height: 150,
        width: 100,
        resizeMode: "cover",
        borderRadius: 5,
        margin: 5
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    }
});

export default styles;