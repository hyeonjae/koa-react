import * as React from 'react';

class Home extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props)
    this.state = {
    }
  }
  public render() {
    return (
      <div className="Home">
        <h1>This is Home!!!</h1>
      </div>
    );
  }
}

export default Home;
