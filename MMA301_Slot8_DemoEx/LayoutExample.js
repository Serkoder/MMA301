import { useState } from 'react'
import Toggle from './Toggle'
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

export default function LayoutExample() {
    const [flexDirection, setFlexDirection] = useState('row')
    const [justifyContent, setJustifyContent] = useState('center');
    const [alignItems, setAlignItems] = useState('center')
    const layoutStyle = { flexDirection, justifyContent, alignItems };
    const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
    const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal';

    return (
        <View style={styles.container}>
            <Toggle 
                label={'Primary axis (flexDirection)'}
                value={flexDirection}
                options={flexDirectionOptions}
                onChange={(option) => {
                    setFlexDirection(option)
                }}
            />
            <Toggle
                label={`${primaryAxis} distributon (justifyContent)`}
                value={justifyContent}
                options={justifyContentOptions}
                onChange={(option) => {
                    setJustifyContent(option)
                }}
            />
            <Toggle
                label={`${secondaryAxis} alignment (alignItems)`}
                value={alignItems}
                options={alignItemsOptions}
                onChange={(option) => {
                    setAlignItems(option)
                }}
            />
            <View 
                style={[styles.layout, layoutStyle]}
            >
                <View style={styles.box}/>
                <View style={styles.box}/>
                <View style={styles.box}/>
            </View>
        </View>
    )
}

const flexDirectionOptions = ['row', 'column']
const justifyContentOptions = [
    'flex-start',
    'center',
    'flex-end',
    'space-around',
    'space-between'
]
const alignItemsOptions = ['flex-start', 'center', 'flex-end', 'stretch']

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    layout: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    box: {
        padding: 25,
        backgroundColor: '#3B6CD4',
        margin: 5
    }
})