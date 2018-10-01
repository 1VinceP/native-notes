import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './views/HomeScreen';
import NoteScreen from './views/NoteScreen';
import Modal from './views/Modal';
import SettingsScreen from './views/SettingsScreen';
import TodoListScreen from './views/TodoListScreen';

import colors from './colors';

const options = {
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.color
    }
}

const MainStack = createStackNavigator(
    {
        Home: HomeScreen,
        Note: NoteScreen
    },
    options
)
const NotesTab = createStackNavigator(
    {
        Main: MainStack,
        MyModal: Modal
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)

const TodoTab = createStackNavigator(
    {
        Home: TodoListScreen
    },
    options
)

const SettingsTab = createStackNavigator(
    {
        Home: SettingsScreen
    },
    options
)

const TabNav = createBottomTabNavigator(
    {
        Notes: NotesTab,
        Todo: TodoTab,
        Settings: SettingsTab
    },
    {
        tabBarOptions: {
            activeBackgroundColor: colors.primary,
            inactiveBackgroundColor: colors.primary,
            activeTintColor: colors.color,
            inactiveTintColor: '#fff4'
        }
    }
)

export default function App() {
    console.disableYellowBox = true

    return (
        <Provider store={store}>
            <TabNav />
        </Provider>
    )
}