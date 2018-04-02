import React from 'react';
import styles from './DummyComponent.css';
import fetch from 'isomorphic-fetch';
const initialState = {
  quote: {}
};

class DummyComponent extends React.Component {
  constructor() {
    super();
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.state = initialState;
  }

  render() {
    return (
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.logo}>
            QuotePedia
            <small className={styles.slogan}>Some Random Stuff</small>
          </div>

          <div className={styles.quoteContainer}>{this.renderQuote()}</div>
          <div className={styles.button} onClick={this.onClick.bind(this)}>
            GET A NEW QUOTE
          </div>
        </div>
      </div>
    );
  }

  renderQuote() {
    if (this.state.quote.quoteText) {
      return (
        <div>
          <div className={styles.content}>{this.state.quote.quoteText}</div>
          <div className={styles.author}>{this.state.quote.quoteAuthor}</div>
        </div>
      );
    }
    return <div>Loading...</div>;
  }

  getRandomQuote() {
    this.setState(initialState);
    return fetch(
      `https://crossorigin.me/http://api.forismatic.com/api/1.0/getQuote?method=getQuote&format=json&lang=en&key=${Math.round(
        Math.random() * 1000
      )}`,
      {
        method: 'POST'
      }
    )
      .then(res => res.json())
      .then(quote => {
        this.setState({
          quote
        });
      })
      .catch(() => {
        this.setState({
          quote: {
            quoteText: 'Received a Quote with bad Chars',
            quoteAuthor: 'JSON Parser'
          }
        });
      });
  }

  onClick() {
    this.getRandomQuote();
  }
  componentDidMount() {
    this.getRandomQuote();
  }
}
export default DummyComponent;
