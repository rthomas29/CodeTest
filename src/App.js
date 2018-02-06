import React, { Component } from 'react';
import logo from './logo.svg';
import Quiz from './components/Quiz';
import quizQuestions from './api/quizQuestions';
import update from 'immutability-helper';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      answers: [],
      selectedAnswer: '',
      correctAnswer: '',
      answersCount: {
        HTML: 0,
        CSS: 0,
        JavaScript: 0,
      },
      counter: 0,
      typeOfCorrectAnswer: '',
    };
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.onAnswerSelection = this.onAnswerSelection.bind(this);
  }
  updateUserCount(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: currentValue => currentValue + 1 },
    });
    this.setState({
      answersCount: updatedAnswersCount,
      selectedAnswer: answer,
    });
  }
  checkCorrect(e) {
    if (e.currentTarget.nextSibling.innerHTML === this.state.correctAnswer) {
      this.setUserAnswer(this.state.typeOfCorrectAnswer);
      this.setState({ selectedAnswer: e.currentTarget.nextSibling.innerHTML });
    }
  }
  onAnswerSelection(e) {
    this.checkCorrect(e);
    if (this.state.counter < quizQuestions.questions.length) {
      setTimeout(() => this.handleQuestionChange(), 300);
    } else {
      alert('quiz over');
    }
  }
  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: currentValue => currentValue + 1 },
    });
    this.setState({
      answersCount: updatedAnswersCount,
      selectedAnswer: answer,
    });
  }
  handleQuestionChange() {
    const counter = this.state.counter + 1;
    this.setState({
      counter: counter,
      content: quizQuestions.questions[counter].question,
      answers: quizQuestions.questions[counter].answers,
      correctAnswer: quizQuestions.questions[counter].correct,
      typeOfCorrectAnswer: quizQuestions.questions[counter].type,
    });
  }
  componentWillMount() {
    this.setState({
      content: quizQuestions.questions[0].question,
      answers: quizQuestions.questions[0].answers,
      correctAnswer: quizQuestions.questions[0].correct,
      typeOfCorrectAnswer: quizQuestions.questions[0].type,
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
          content={this.state.content}
          handleQuestionChange={this.handleQuestionChange}
          answers={this.state.answers}
          onAnswerSelection={this.onAnswerSelection}
          selectedAnswer={this.state.selectedAnswer}
          correct={this.state.correctAnswer}
          type={this.state.typeOfCorrectAnswer}
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
