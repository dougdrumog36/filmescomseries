import React from "react";
import { View, Text } from 'react-native';
import styles from '../Details/style';

export default function About(){
    return(
        <View style = {styles.body}>
            <Text style = {styles.sobre}>Este aplicativo serve para você poder assistir os filmes e séries quem quiser quando e de onde quiser!</Text>
        </View>
    )
}