import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './views/HomeScreen';
import NoteScreen from './views/NoteScreen';
import Modal from './views/Modal';
import SettingsScreen from './views/SettingsScreen';
import TodoListScreen from './views/TodoListScreen';

const options = {
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: { backgroundColor: '#263238' },
        headerTintColor: '#fff'
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
            activeBackgroundColor: '#263238',
            inactiveBackgroundColor: '#263238',
            activeTintColor: '#ab47bc'
        }
    }
)

export default function App() {

    return (
        <Provider store={store}>
            <TabNav />
        </Provider>
    )
}