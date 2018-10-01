import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../redux/notesReducer';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { MidnightPicker, FloatingPlus, MidnightModal } from '../components/common';
import NoteItem from '../components/NoteItem';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Notes'
    };

    state = {
        modalOpen: false,

        title: '',
        indentLevel: 1
    };

    handleModal() {
        this.setState({ modalOpen: !this.state.modalOpen });
    };

    handleTitle( e ) {
        this.setState({ title: e });
    };

    handlePicker( value ) {
        this.setState({ indentLevel: value });
    };

    handleClose( method ) {
        method( this.state.title, this.state.indentLevel );
        this.setState({
            title: '',
            indentLevel: 1
        });
    };

    async saveNote( title, indent ) {
        await this.props.addNote( title, indent )
        await this.handleModal();
        this.navigation( --this.props.id );
    };

    navigation( id ) {
        let note = this.props.notes.find( note => note.id === id + '' )

        this.props.navigation.navigate(
            'Note',
            { note }
        );
    };

    render() {
        const styles = StyleSheet.create({
            containerStyle: {
                flex: 1,
                backgroundColor: this.props.theme.screenBg,
                alignItems: 'center',
                justifyContent: 'center',
            },
            textStyle: {
                fontSize: 22
            },

            inputStyle: {
                height: 50,
                fontSize: 20,
                padding: 10,
                color: this.props.theme.color
            },
        });

        const { containerStyle, inputStyle } = styles;
        return (
            <View style={containerStyle}>
                <FlatList
                    style={{width: '100%'}}
                    data={this.props.notes.sort( (a, b) => a.indent - b.indent )}
                    renderItem={ ({item: note}) => (
                        <NoteItem
                            key={note.id}
                            noteData={note}
                            navigation={note => this.navigation( note.id )}
                            id={note.id}
                            theme={this.props.theme}
                        />
                    ) }
                />


                <MidnightModal
                    handleModal={() => this.handleModal()}
                    visible={this.state.modalOpen}
                    title='New note'
                    handleSave={(title, indent) => this.saveNote( title, indent )}
                    handleClose={method => this.handleClose( method )}
                    theme={this.props.theme}
                >
                    <TextInput
                        style={inputStyle}
                        placeholder='Note Title'
                        value={this.state.title}
                        onChangeText={text => this.handleTitle(text)}
                        underlineColorAndroid={this.props.theme.secondary}
                        autoFocus
                    />
                    <MidnightPicker
                        title='Indent Level:'
                        selectedValue={this.state.indentLevel}
                        onValueChange={value => this.handlePicker( value )}
                        options={[1, 2, 3]}
                        theme={this.props.theme}
                    />
                </MidnightModal>

                <FloatingPlus onPress={() => this.handleModal()} theme={this.props.theme} />
            </View>
        );
    };
};

function mapStateToProps( state ) {
    const { notes, id } = state.notes;
    const { theme } = state.theme;

    return {
        notes,
        id,
        theme
    };
};

export default connect( mapStateToProps, { addNote } )(HomeScreen);