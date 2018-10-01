import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../redux/todoReducer';
import { View, FlatList, StyleSheet, Text, TextInput } from 'react-native';
import TodoItem from '../components/TodoItem';
import { FloatingPlus, MidnightModal, MidnightPicker } from '../components/common';

import colors from '../colors';

class TodoListScreen extends Component {
    static navigationOptions = {
        title: 'Todo'
    }

    state = {
        modalOpen: false,
        title: '',
        priority: 1
    }

    handleModal() {
        this.setState({ modalOpen: !this.state.modalOpen });
    }

    handleTitle( e ) {
        this.setState({ title: e })
    }

    handlePicker( value ) {
        this.setState({ priority: value })
    }

    async saveTodo( title, priority ) {
        this.props.createTodo( title, priority ),
        this.handleModal()
    }

    handleClose( method ) {
        method( this.state.title, this.state.priority )
        this.setState({
            title: '',
            priority: 1
        })
    }

    render() {
        const styles = StyleSheet.create({
            containerStyle: {
                flex: 1,
                backgroundColor: this.props.theme.screenBg,
                alignItems: 'center',
                justifyContent: 'center',
            },

            listStyle: {
                width: '100%',
                height: '50%'
            },

            divider: {
                width: '100%',
                height: 30,
                backgroundColor: this.props.theme.primary,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 1
            },

            dividerText: {
                fontSize: 14,
                color: this.props.theme.tintColor
            },

            inputStyle: {
                height: 50,
                fontSize: 20,
                padding: 10,
                color: this.props.theme.color
            },
        })
        const { containerStyle, listStyle, divider, dividerText, inputStyle } = styles;

        return (
            <View style={containerStyle}>
                <FlatList
                    style={listStyle}
                    data={this.props.todos.filter( todo => !todo.completed ).sort( (a, b) => a.priority - b.priority )}
                    renderItem={ ({item: todo}) => (
                        <TodoItem
                            key={todo.id}
                            todoData={todo}
                            id={todo.id}
                            theme={this.props.theme}
                        />
                     ) }
                />
                <View style={divider}>
                    <Text style={dividerText}>COMPLETED</Text>
                </View>
                <FlatList
                    style={listStyle}
                    data={this.props.todos.filter( todo => todo.completed ).sort( (a, b) => a.priority - b.priority )}
                    renderItem={ ({item: todo}) => (
                        <TodoItem
                            key={todo.id}
                            todoData={todo}
                            completed
                            theme={this.props.theme}
                         />
                     ) }
                />

                <MidnightModal
                    handleModal={() => this.handleModal()}
                    visible={this.state.modalOpen}
                    title='New Todo'
                    handleSave={(title, indent) => this.saveTodo( title, indent )}
                    handleClose={method => this.handleClose( method )}
                    theme={this.props.theme}
                >
                    <TextInput
                        style={inputStyle}
                        placeholder='Todo Title'
                        value={this.state.title}
                        onChangeText={text => this.handleTitle( text )}
                        underlineColorAndroid={this.props.theme.secondary}
                        autoFocus
                    />
                    <MidnightPicker
                        title='Priority:'
                        selectedValue={this.state.priority}
                        onValueChange={value => this.handlePicker( value )}
                        options={[1, 2, 3]}
                        theme={this.props.theme}
                    />
                </MidnightModal>

                <FloatingPlus onPress={() => this.handleModal()} theme={this.props.theme} />
            </View>
        )
    }
}

function mapStateToProps( state ) {
    const { todos } = state.todos;
    const { theme } = state.theme;

    return {
        todos,
        theme
    };
}

export default connect( mapStateToProps, { createTodo } )(TodoListScreen);