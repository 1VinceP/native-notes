import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './views/HomeScreen';
import NoteScreen from './views/NoteScreen';
import Modal from './views/Modal';
import SettingsScreen from './views/SettingsScreen';
import TodoListScreen from './views/TodoListScreen';

function Main({ theme }) {
    console.disableYellowBox = true

    const options = {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: { backgroundColor: theme.primary },
            headerTintColor: theme.tintColor
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
                activeBackgroundColor: theme.primary,
                inactiveBackgroundColor: theme.primary,
                activeTintColor: theme.navColor,
                inactiveTintColor: '#fff4'
            }
        }
    )

    return <TabNav />
};

function mapStateToProps( state ) {
    const { theme } = state.theme;

    return {
        theme
    };
}

export default connect( mapStateToProps )(Main);