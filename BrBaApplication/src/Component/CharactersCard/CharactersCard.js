import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

import styles from './CharactersCard.style';

const CharactersCard = ({ input }) => {
    return (
        <ImageBackground style={styles.container} source={{ uri: input.img }}>
            <View style={styles.inner_container}>
                <View>
                    <Image source={{ uri: input.img }} style={styles.image} />
                </View>
                <View style={styles.text_container}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>Name:  </Text>
                        <Text style={styles.text}>{input.name}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>Birthday:  </Text>
                        <Text style={styles.text}>{input.birthday}</Text>
                    </View>
                    <View style={{ }}>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>Occupation:  </Text>
                        <Text style={styles.text}>* {input.occupation[0]}</Text>
                        <Text style={styles.text}>* {input.occupation[1]}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>Status:  </Text>
                        <Text style={styles.text}>{input.status}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>Nickname:  </Text>
                        <Text style={styles.text}>{input.nickname}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>Portrayed:  </Text>
                        <Text style={styles.text}>{input.portrayed}</Text>
                    </View>

                    <Text style={styles.text}>{input.category}</Text>
                </View>
            </View>
        </ImageBackground>
    )
}
export default CharactersCard;