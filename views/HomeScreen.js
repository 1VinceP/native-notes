import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { MidnightButton, FloatingPlus, MidnightModal } from '../components/common';
import NoteItem from '../components/NoteItem';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Notes'
    }

    state = {
        modalOpen: false,
        notes: []
    }

    handleModal() {
        this.setState({ modalOpen: !this.state.modalOpen })
    }

    async saveNote( title, indent ) {
        let note = {
            title,
            content: '',
            indent,
            key: this.state.notes.length + 1 + ''
        }

        await this.setState({ notes: [...this.state.notes, note] })
        this.handleModal();
        this.navigation( note );
    }

    navigation( note ) {
        this.props.navigation.navigate( 'Note', { note } )
    }

    render() {
        const { containerStyle, textStyle } = styles

        console.log( this.props.notes )

        return (
            <View style={containerStyle}>
                <FlatList
                    style={{width: '100%'}}
                    data={this.state.notes.sort( (a, b) => a.indent - b.indent )}
                    renderItem={ ({item: note}) => (
                        <NoteItem
                            noteData={note}
                            navigation={note => this.navigation( note )}
                        />
                    ) }
                />



                <MidnightModal
                    handleModal={() => this.handleModal()}
                    visible={this.state.modalOpen}
                    title='New note'
                    handleSave={(title, indent) => this.saveNote( title, indent )}
                />
                <FloatingPlus onPress={() => this.handleModal()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#afafaf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 22
    }
});

function mapStateToProps( state ) {
    const { notes } = state;

    return {
        notes
    };
}

export default connect( mapStateToProps )(HomeScreen);