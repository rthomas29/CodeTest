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
      currentIndex: 0,
      answers: [],
      // correctAnswer: '',
      // selectedAnswer: '',
      // currentIndex: 0,
      // answerId: 1,
      // type: '',
    };
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    // this.onAnswerSelection = this.onAnswerSelection.bind(this);
    this.currentIndex = 0;
  }
  // onAnswerSelection(e) {
  //   this.setState({ selectedAnswer: e.target.value });
  // }
  // handleQuestionChange() {
  //   if (this.state.answerId !== undefined) {
  //     this.setState({
  //       answerId: this.state.answerId + 1,
  //       currentQuestion: quizQuestions.questions[this.state.answerId].question,
  //     });
  //   } else {
  //     this.setState({ answerId: quizQuestions.questions[quizQuestions.questions.length - 1].id });
  //   }
  // }
  // componentWillMount() {
  //   this.setState({
  //     currentQuestion: quizQuestions.questions[this.state.currentIndex].question,
  //     currentAnswer: quizQuestions.questions[this.state.currentIndex].correct,
  //     type: quizQuestions.questions[this.state.currentIndex].type,
  //   });
  // }
  handleQuestionChange() {
    if (this.currentIndex <= quizQuestions.questions.length) {
      this.setState({
        content: quizQuestions.questions[this.currentIndex + 1].question,
        answers: quizQuestions.questions[this.currentIndex + 1].answers,
      });
      this.currentIndex += 1;
    }
  }
  componentWillMount() {
    this.setState({ content: quizQuestions.questions[0].question, answers: quizQuestions.questions[0].answers });
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
          /* content={this.state.currentQuestion}
          answers={quizQuestions.questions[0].answers}
          handleQuestionChange={this.handleQuestionChange}
          onAnswerSelection={this.onAnswerSelection}
          selected={this.state.selectedAnswer}
          correct={this.state.correctAnswer}
          type={this.state.type} */
        />
      </div>
    );
  }
}

export default App;
