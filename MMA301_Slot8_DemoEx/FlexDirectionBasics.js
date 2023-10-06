import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import PreviewLayout from './PreviewLayout';

const FlexDirectionBasics = () => {
    const [flexDirection, setFlexDirection] = useState('column');
    return (
        <PreviewLayout
            label={"flexDirection"}
            value={['column', 'row', 'row-reverse', 'column-reverse']}
            selectedValue={flexDirection}
            setSelectedValue={setFlexDirection}
        >
            <View style={[styles.box, { backgroundColor: 'powderblue'}]} />
            <View style={[styles.box, { backgroundColor: 'skyblue'}]} />
            <View style={[styles.box, { backgroundColor: 'steelblue'}]} />
        </PreviewLayout>
    )
}

const style = StyleSheet.create({
    box: { width: 50, height: 50 },
})