import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './views/HomeScreen';
import NoteScreen from './views/NoteScreen';
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

    const NotesTab = createStackNavigator(
        {
            Home: HomeScreen,
            Note: NoteScreen
        },
        options
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
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => {
                    const { routeName } = navigation.state
                    let iconName
                    if( routeName === 'Notes' )
                        iconName = `ios-paper${focused ? '' : '-outline'}`
                    else if( routeName === 'Todo' )
                        iconName = `ios-list${focused ? '' : '-outline'}`
                    else if( routeName === 'Settings' )
                        iconName = `ios-settings${focused ? '' : '-outline'}`

                    return <Ionicons name={iconName} size={25} color={tintColor} />
                }
            }),
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