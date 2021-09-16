import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StatusBar,
} from "react-native";
import { styles } from "../styles";

import KeepAwake from "react-native-keep-awake";
import moment from "moment";


const Clock = () => {
    const [time, setTime] = useState(moment().format("HH:mm:ss"))
    const [date, setDate] = useState(moment().format("LL"))
    useEffect(() => {
        setInterval(() => {
            setTime(moment().format("HH:mm:ss"))
            setDate(moment().format("LL"))
        }, 1000)
    })

    return (
        <View style={styles.container}>
            <StatusBar style={{ backgroundColor: 'transparent' }} />
            <Text style={styles.timeText}>
                {time}
            </Text>
            <Text style={styles.dateText}>
                {date}
            </Text>
            <KeepAwake />
        </View>
    )
}
export default Clock;
