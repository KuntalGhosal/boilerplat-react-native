import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image } from 'react-native';

export default class Background extends React.Component {
    render() {
        return (
            <View
                style={{
                    height: '40%',
                    width: '100%',
                    backgroundColor: "blue", //change dark theme
                    position: 'absolute',
                }}>
                <Image
                    source={{ uri: "https://picsum.photos/200" }}
                    style={{
                        width: Dimensions.get('window').width,
                        height: "100%",
                    }}
                    resizeMethod={"resize"}
                    resizeMode={'stretch'}
                />
                {/* <View style={{ height: '45%', backgroundColor: '#FFC40F', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ ...styles.triangle, borderBottomColor: Theme.BACKGROUND }}>
                    </View>
                </View > */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    triangle: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFC40F',
        borderLeftWidth: Dimensions.get('window').width,
        borderBottomWidth: 150,
        borderLeftColor: 'transparent',
        borderBottomColor: '#F0F0F0',
    },
});
