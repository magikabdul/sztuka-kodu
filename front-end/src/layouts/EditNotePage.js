import React, { Component } from 'react';

import NoteEditor from '../components/NoteEditor';

class EditNotePage extends Component {
  state = {
    title: '',
    description: ''
  };

  handleTitle = e => {
    this.setState({ title: e.target.value });
  };

  handleDescription = e => {
    this.setState({ description: e.target.value });
  };

  handleUpdate = () => {
    fetch('http://localhost:8080/api/tasks', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description
      })
    });
  };

  render() {
    return (
      <>
        <NoteEditor
          headerName={'Update Note'}
          title={this.state.title}
          changeTitle={this.handleTitle}
          description={this.state.description}
          changeDescription={this.handleDescription}
          clickAdd={this.handleUpdate}
        />
      </>
    );
  }
}

export default EditNotePage;
