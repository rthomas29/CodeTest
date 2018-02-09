import React, { Component } from 'react';
import logo from './logo.svg';
import Quiz from './components/Quiz';
import Results from './components/Results';
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
      totalTypeCount: {
        HTML: 0,
        CSS: 0,
        JavaScript: 0,
      },
      questionCount: 1,
      counter: 0,
      typeOfCorrectAnswer: '',
      typeOfQuestion: '',
      done: false,
    };
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.onAnswerSelection = this.onAnswerSelection.bind(this);
    this.checkCorrect = this.checkCorrect.bind(this);
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
    if (this.state.selectedAnswer === this.state.correctAnswer) {
      this.setUserAnswer(this.state.typeOfCorrectAnswer);
    }
    setTimeout(() => this.handleQuestionChange(), 300);
    this.incrementTypeCount(this.state.typeOfCorrectAnswer);
  }
  onAnswerSelection(e) {
    this.setState({ selectedAnswer: e.currentTarget.nextSibling.innerHTML });
    // this.checkCorrect(e);
  }
  incrementTypeCount(type) {
    const updateCategoryPoint = update(this.state.totalTypeCount, {
      [type]: { $apply: currentValue => currentValue + 1 },
    });
    this.setState({ totalTypeCount: updateCategoryPoint });
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
    const questionCount = this.state.questionCount + 1;
    if (counter < quizQuestions.questions.length) {
      this.setState({
        counter: counter,
        questionCount: questionCount,
        content: quizQuestions.questions[counter].question,
        answers: quizQuestions.questions[counter].answers,
        correctAnswer: quizQuestions.questions[counter].correct,
        typeOfCorrectAnswer: quizQuestions.questions[counter].type,
      });
    } else {
      this.setState({ done: true });
    }
  }
  calculateResults(count, total) {
    return `${Math.round(count / total * 100)}%`;
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
    if (this.state.done === true) {
      return (
        <Results
          results={this.state.answersCount}
          calculateResults={this.calculateResults}
          totalTypeCount={this.state.totalTypeCount}
          questionCount={this.state.questionCount}
        />
      );
    }
    return (
      <div className="App">
        <Quiz
          content={this.state.content}
          questionCount={this.state.questionCount}
          handleQuestionChange={this.handleQuestionChange}
          answers={this.state.answers}
          onAnswerSelection={this.onAnswerSelection}
          selectedAnswer={this.state.selectedAnswer}
          correct={this.state.correctAnswer}
          type={this.state.typeOfCorrectAnswer}
          whenInputClicked={this.onInputSelect}
          checkCorrect={this.checkCorrect}
        />
      </div>
    );
  }
}

export default App;
