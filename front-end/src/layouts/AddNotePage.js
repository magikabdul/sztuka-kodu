import React, { Component } from 'react';

import NoteEditor from '../components/NoteEditor';
import { stat } from 'fs';

class AddNotePage extends Component {
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

  handleAdd = () => {
    fetch('http://localhost:8080/api/tasks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({
				title: this.state.title,
				description: this.state.description
			})
		})
  };

  render() {
    return (
      <>
        <NoteEditor
          title={this.state.title}
          changeTitle={this.handleTitle}
          description={this.state.description}
					changeDescription={this.handleDescription}
					clickAdd={this.handleAdd}
        />
      </>
    );
  }
}

export default AddNotePage;
