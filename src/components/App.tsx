import React, { PureComponent } from 'react';

const API = 'http://localhost:3000';

class App extends PureComponent {
  /*
  public state = {
    errored: false,
    fetching: false,
    hello: '',
  };
  */

  public async componentDidMount() {
    /*
    try {
      const response = await fetch(API);
      const { hello } = await response.json();
      this.setState({
        fetching: false,
        hello,
      });
    } catch (err) {
      this.setState({ errored: true });
    }
    */
  }

  public render() {
    /*
    const { errored, fetching, hello } = this.state;
    if (fetching) { return <div>fetching</div>; }
    if (errored) { return <div>errored</div>; }
    return <div>hello {hello}</div>;
    */
   return (
    <button
      type="button"
    >
      hello
    </button>
   );
  }
}

export default App;
