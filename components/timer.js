import React, { useState } from 'react';
import { View, Button, Dimensions, Alert } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';
import ModalInput from './modal';

const TimerComponent = () => {
    const [start, setStart] = useState(false)
    const [reset, setReset] = useState(false)
    const [time, setTime] = useState(10000)
    const [show, setShow] = useState(false)
    return (
        <View style={{ height: Dimensions.get('window').height, alignItems: 'center', marginTop: '50%' }}>
            <Timer totalDuration={time} msecs start={start}
                reset={reset}
                options={options}
                handleFinish={() => {
                    setStart(false)
                    Alert.alert(
                        "Timer up!"
                    );
                }}
            />
            <View style={{ padding: 10 }}>

                <Button
                    title="Start timer"
                    onPress={() => {
                        setReset(false)
                        setStart(true)
                    }}
                />
            </View>
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <Button
                    title="Stop"
                    onPress={() => {
                        setReset(false)
                        setStart(false)
                    }}
                />
                <Button
                    title="Reset"
                    onPress={() => {
                        setReset(true)
                    }}
                />
            </View>
            <View style={{ padding: 10 }}>

                <Button
                    title="Set timer"
                    onPress={() => {
                        setShow(true)
                    }}
                />
            </View>
            <ModalInput show={show} setShow={setShow} time={time} setTime={setTime} />
        </View >
    )
}
const options = {
    container: {
        backgroundColor: '#000',
        padding: 5,
        borderRadius: 5,
        width: 220,
    },
    text: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 7,
    }
};
export default TimerComponent;