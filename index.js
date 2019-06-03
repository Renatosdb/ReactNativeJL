import React, { useState } from 'react';
import { Text, AppRegistry, TextInput } from 'react-native';
import Header from './components/Header';
import Bottom from './components/Bottom';
import EnterText from './components/EnterText';

const App = () => {
    const [fullText, setHeaderText] = useState('')

    return (
        <>
            <Header headerText={fullText} />
            <Bottom bottomText={fullText} />
            <EnterText text={EnterText} onChange={(text) => {
                setHeaderText(text)
            }} />
        </>
    )
}


    
   

AppRegistry.registerComponent('Jelly', () => App);