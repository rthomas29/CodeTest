import React, { Component } from 'react';
import logo from './logo.svg';
import Quiz from './components/Quiz';
import quizQuestions from './api/quizQuestions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: '',
      currentIndex: 0,
    };
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }
  handleQuestionChange() {
    if (this.state.currentIndex <= quizQuestions.questions.length) {
      this.setState({ currentQuestion: quizQuestions.questions[this.state.currentIndex + 1].question });
    }
  }
  componentWillMount() {
    this.setState({
      currentQuestion: quizQuestions.questions[this.state.currentIndex].question,
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Module 1 Study Guide</h3>
        </header>
        <Quiz
          content={this.state.currentQuestion}
          answers={quizQuestions.questions[0].answers}
          handleQuestionChange={this.handleQuestionChange}
        />
      </div>
    );
  }
}

export default App;
