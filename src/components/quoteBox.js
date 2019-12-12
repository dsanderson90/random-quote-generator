import React, { Component } from 'react'
import styled, { css } from "styled-components"
export default class QuoteBox extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentQuote: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(`https://raw.githack.com/fortrabbit/quotes/master/quotes.json`);
    const json = await response.json();
    this.setState({ data: json });
    this.getRandomQuote();
  }

 getRandomQuote = () => {
   this.setState({
     currentQuote: this.state.data[Math.floor(Math.random() * this.state.data.length)]
   })
 }

 shareQuote = () => {
  encodeURIComponent()
 }


  render() {
    const Wrapper = styled.section`
  height: 100vh;
  padding: 15% 33%;
  background: papayawhip;
`;

const Author = styled.h3`
font-weight: bold;
font-size: 1.5rem;
text-align: right;
`

const Text = styled.p`
font-weight: italic;
font-size: 2rem;

`


const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  float: right;
  text-align: center;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid pink;
  text-decoration: none;
  :hover {
    transform: scale(1.2)
  }

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`

    return (
    <Wrapper id="quote-box">
        <Text id="text">"{this.state.currentQuote.text}"</Text>
        <Author id="author">- {this.state.currentQuote.author}</Author>
        <Button id="new-quote" onClick={this.getRandomQuote}>Get Random Quote</Button>
        <Button target='_blank' href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(this.state.currentQuote.text)}&via=${encodeURIComponent(this.state.currentQuote.author)}`}id="tweet">Tweet</Button>
      </Wrapper>
    );
  }
}
