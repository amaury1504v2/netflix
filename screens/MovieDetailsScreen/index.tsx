import React from 'react'
import { Text, View } from "../../components/Themed";
import styles from './style';
import movie from '../../assets/data/movie';
import { MaterialIcons, Entypo, AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { Image, Pressable } from 'react-native';

const firstEpisode = movie.seasons.items[0].episodes.items[0]

const MovieDetailsScreen = () => {
    return (
        <View>
            <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
            <View style={{ padding: 15 }}>
                <Text style={styles.title}>{movie.title}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.match}>98% match</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                    <View style={styles.ageContainer}>
                        <Text style={styles.age}>12+</Text>
                    </View>
                    <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                    <MaterialIcons name="hd" size={24} color="white" />
                </View>
                <Pressable onPress={() => { console.warn('Play') }} style={styles.playButton} >
                    <Text style={styles.playButtonText}>
                        <Entypo name="controller-play" size={16} color="black" />
                        Play
                    </Text>
                </Pressable>
                <Pressable onPress={() => { console.warn('Download') }} style={styles.downloadButton} >
                    <Text style={styles.downloadButtonText}>
                        <AntDesign name="download" size={16} style={{ marginRight: 5 }} />
                        Download
                    </Text>
                </Pressable>
                <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
                <Text style={styles.year}>Cast: {movie.cast}</Text>
                <Text style={styles.year}>Creator: {movie.creator}</Text>

                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <View style={{ marginHorizontal: 20, alignItems: 'center' }}>
                        <AntDesign name="plus" size={24} color={'white'}/>
                        <Text style={{color: 'darkgrey', marginTop: 5}}>My list</Text>
                    </View>
                    <View style={{ marginHorizontal: 20, alignItems: 'center' }}>
                        <Feather name="thumbs-up" size={24} color={'white'}/>
                        <Text style={{color: 'darkgrey', marginTop: 5}}>Rate</Text>
                    </View>
                    <View style={{ marginHorizontal: 20, alignItems: 'center' }}>
                        <Ionicons name="share-social" size={24} color={'white'}/>
                        <Text style={{color: 'darkgrey', marginTop: 5}}>Share</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default MovieDetailsScreen
