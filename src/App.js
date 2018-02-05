import React, { Component } from 'react';
import logo from './logo.svg';
import Quiz from './components/Quiz';
import quizQuestions from './api/quizQuestions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      answers: [],
      selectedAnswer: '',
      correctAnswer: '',
      // correctAnswer: '',
      // selectedAnswer: '',
      // currentIndex: 0,
      // answerId: 1,
      // type: '',
    };
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.onAnswerSelection = this.onAnswerSelection.bind(this);
    this.currentIndex = 0;
  }
  onAnswerSelection(e) {
    this.setState({ selectedAnswer: e.target.value });
  }
  handleQuestionChange() {
    if (this.currentIndex < quizQuestions.questions.length) {
      this.setState({
        content: quizQuestions.questions[this.currentIndex].question,
        answers: quizQuestions.questions[this.currentIndex].answers,
        correctAnswer: quizQuestions.questions[this.currentIndex].correct,
      });
      this.currentIndex += 1;
    } else {
      alert('quiz over');
    }
  }
  componentWillMount() {
    this.setState({
      content: quizQuestions.questions[0].question,
      answers: quizQuestions.questions[0].answers,
      correctAnswer: quizQuestions.questions[0].correct,
    });
  }
  componentDidUpdate() {
    console.log('update');
    if (this.state.selectedAnswer === this.state.correctAnswer) {
      this.handleQuestionChange();
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Module 1 Study Guide</h3>
        </header>
        <Quiz
          content={this.state.content}
          handleQuestionChange={this.handleQuestionChange}
          answers={this.state.answers}
          onAnswerSelection={this.onAnswerSelection}
          selectedAnswer={this.state.selectedAnswer}
          correct={this.state.correctAnswer}
          /*
          answers={quizQuestions.questions[0].answers}
          handleQuestionChange={this.handleQuestionChange}
          correct={this.state.correctAnswer}
          type={this.state.type} */
        />
      </div>
    );
  }
}

export default App;
