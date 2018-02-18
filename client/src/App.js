import React, { Component } from 'react';
import Quiz from './components/Quiz';
import Landing from './components/Landing';
import Results from './components/Results';
import update from 'immutability-helper';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      landing: true,
      showHome: false,
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
      quizQuestions: [],
    };
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.onAnswerSelection = this.onAnswerSelection.bind(this);
    this.checkCorrect = this.checkCorrect.bind(this);
    this.toggleLanding = this.toggleLanding.bind(this);
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
    if (counter < this.state.quizQuestions.length) {
      this.setState({
        counter: counter,
        questionCount: questionCount,
        content: this.state.quizQuestions[counter].question,
        answers: this.state.quizQuestions[counter].answers,
        correctAnswer: this.state.quizQuestions[counter].correct,
        typeOfCorrectAnswer: this.state.quizQuestions[counter].type,
        selectedAnswer: '',
      });
    } else {
      this.toggleDone();
    }
  }
  toggleDone() {
    this.setState({ done: !this.state.done });
  }
  toggleLanding() {
    this.setState({ landing: !this.state.landing });
  }
  calculateResults(count, total) {
    return `${Math.round(count / total * 100)}%`;
  }
  componentDidMount() {
    axios
      .get('/api')
      .then(questions => {
        this.setState({
          quizQuestions: questions.data,
          content: questions.data[0].question,
          answers: questions.data[0].answers,
          correctAnswer: questions.data[0].correct,
          typeOfCorrectAnswer: questions.data[0].type,
        });
      })
      .catch(err => {
        throw err;
      });
  }
  render() {
    if (this.state.landing === true) {
      return <Landing toggleLanding={this.toggleLanding} />;
    }
    if (this.state.done === true) {
      return (
        <Results
          results={this.state.answersCount}
          calculateResults={this.calculateResults}
          totalTypeCount={this.state.totalTypeCount}
          questionCount={this.state.questionCount}
          toggleLanding={this.toggleLanding}
        />
      );
    }
    return (
      <div className="App">
        {this.state.users}
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
