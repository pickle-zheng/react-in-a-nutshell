import React from 'react';
import './App.css';

import { db } from './services/firebase';

import InputBox from './components/InputBox/InputBox';
import LoginPanel from './components/LoginPanel/LoginPanel';
import ChatBox from './components/ChatBox/ChatBox';

class App extends React.Component {
  state = {
    user: null,
    chats: [],
    content: '',
    readError: null,
    writeError: null,
    loggedIn: false
  };

  componentDidMount() {
    this.setState({ readError: null });
    try {
      db.ref('chats').on('value', (snapshot) => {
        let chats = [];
        console.log(snapshot.val());
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        this.setState({ chats });
      });
    } catch (error) {
      this.setState({ readError: error.message });
    }
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ writeError: null });
    try {
      await db.ref('chats').push({
        content: this.state.content,
        timestamp: Date.now(),
        user: this.state.user
      });
      this.setState({ content: '' });
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  };

  loginHandler = () => {
    const person = prompt('Please enter your name', 'Harry Potter');
    this.setState({ user: person });
  };

  render() {
    return (
      <div>
        <ChatBox chats={this.state.chats} />

        {this.state.user ? (
          <InputBox
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            inputValue={this.state.content}
            error={this.state.error}
            writeError={this.state.writeError}
            user={this.state.user}
          />
        ) : null}

        <LoginPanel user={this.state.user} loginHandler={this.loginHandler} />
      </div>
    );
  }
}

export default App;
