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
    this.setDefaultState = () => ({
      landing: true,
      showHome: false,
      content: '',
      answers: [],
      selectedAnswer: '',
      correctAnswer: '',
      answersCount: {
        HTML: 0,
        CSS: 0,
        JavaScript: 0
      },
      totalTypeCount: {
        HTML: 0,
        CSS: 0,
        JavaScript: 0
      },
      questionCount: 1,
      counter: 0,
      typeOfCorrectAnswer: '',
      typeOfQuestion: '',
      done: false,
      quizQuestions: []
    });
    this.state = this.setDefaultState();
  }
  updateUserCount(answer) {
    const { answersCount } = this.state;
    const updatedAnswersCount = update(answersCount, {
      [answer]: { $apply: currentValue => currentValue + 1 }
    });
    this.setState(() => ({
      answersCount: updatedAnswersCount,
      selectedAnswer: answer
    }));
  }
  checkCorrect = e => {
    const { selectedAnswer, correctAnswer, typeOfCorrectAnswer } = this.state;
    if (selectedAnswer === correctAnswer) {
      this.setUserAnswer(typeOfCorrectAnswer);
    }
    setTimeout(() => this.handleQuestionChange(), 300);
    this.incrementTypeCount(typeOfCorrectAnswer);
  };
  onAnswerSelection = e => {
    const selectedAnswer = e.currentTarget.nextSibling.innerHTML;
    this.setState(() => ({ selectedAnswer }));
  };
  incrementTypeCount(type) {
    const { totalTypeCount } = this.state;
    const updateCategoryPoint = update(totalTypeCount, {
      [type]: { $apply: currentValue => currentValue + 1 }
    });
    this.setState(() => ({ totalTypeCount: updateCategoryPoint }));
  }
  setUserAnswer(answer) {
    const { answersCount } = this.state;
    const updatedAnswersCount = update(answersCount, {
      [answer]: { $apply: currentValue => currentValue + 1 }
    });
    this.setState(() => ({
      answersCount: updatedAnswersCount,
      selectedAnswer: answer
    }));
  }
  handleQuestionChange = () => {
    const { counter, questionCount, quizQuestions } = this.state;
    const currCount = counter + 1;
    const currQuestionCount = questionCount + 1;
    if (currCount < quizQuestions.length) {
      this.setState({
        counter: currCount,
        questionCount: currQuestionCount,
        content: quizQuestions[currCount].question,
        answers: quizQuestions[currCount].answers,
        correctAnswer: quizQuestions[currCount].correct,
        typeOfCorrectAnswer: quizQuestions[currCount].type,
        selectedAnswer: ''
      });
    } else {
      this.toggleDone();
    }
  };
  toggleDone() {
    this.setState(state => ({ done: !state.done }));
  }
  toggleLanding = () => {
    const answersCount = { HTML: 0, CSS: 0, JavaScript: 0 };
    this.setState(state => ({ landing: !state.landing, done: false, questionCount: 1, counter: 0, answersCount }));
  };
  calculateResults(count, total) {
    return `${Math.round((count / total) * 100)}%`;
  }
  componentDidMount() {
    this.setDefaultState();
    axios
      .get('/api')
      .then(questions => {
        this.setState(() => ({
          quizQuestions: questions.data,
          content: questions.data[0].question,
          answers: questions.data[0].answers,
          correctAnswer: questions.data[0].correct,
          typeOfCorrectAnswer: questions.data[0].type
        }));
      })
      .catch(err => {
        throw err;
      });
  }
  render() {
    const {
      landing,
      done,
      answersCount,
      totalTypeCount,
      questionCount,
      content,
      answers,
      selectedAnswer,
      correctAnswer,
      typeOfCorrectAnswer
    } = this.state;
    if (landing) {
      return <Landing toggleLanding={this.toggleLanding} />;
    }
    if (done) {
      return (
        <Results
          results={answersCount}
          calculateResults={this.calculateResults}
          totalTypeCount={totalTypeCount}
          questionCount={questionCount}
          toggleLanding={this.toggleLanding}
        />
      );
    }
    return (
      <div className="App">
        <Quiz
          content={content}
          questionCount={questionCount}
          handleQuestionChange={this.handleQuestionChange}
          answers={answers}
          onAnswerSelection={this.onAnswerSelection}
          selectedAnswer={selectedAnswer}
          correct={correctAnswer}
          type={typeOfCorrectAnswer}
          whenInputClicked={this.onInputSelect}
          checkCorrect={this.checkCorrect}
        />
      </div>
    );
  }
}

export default App;
