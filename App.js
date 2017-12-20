import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { Text, View, StyleSheet } from 'react-native';
import AddEntry from './components/AddEntry';
import History from './components/History';

const store = createStore(reducer);

export default class App extends Component {
    handlePress = () => {
        alert('hello')
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <View style={{height: 20}} />
                    <AddEntry />
                </View>
            </Provider>
        );
    }
}

