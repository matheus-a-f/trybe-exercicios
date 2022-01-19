import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.logKhan = this.logKhan.bind(this)
    this.logMoscow = this.logMoscow.bind(this)
    this.logVodka = this.logVodka.bind(this)

  }

  logKhan() {
    console.log('Huh hah, huh hah, huh, hah!')
  }

  logMoscow() {
    console.log('Im dir ein Feuer brent!')
  }

  logVodka() {
    console.log('Wir sind Nummer eins!')
  }

  render() {
    return(
      <>
        {console.log(this)}
        <button onClick={this.logKhan}>Dschinghis Khan</button>
        <button onClick={this.logMoscow}>Moscow</button>
        <button onClick={this.logVodka}>Vodka Trinkt</button>
      </>
    );
  }
}

export default App;
