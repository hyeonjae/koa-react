import * as React from 'react';

class Articles extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props)
    this.state = {
    }
  }
  public render() {
    return (
      <div className="Articles">
        <h1>This is Articles!!!</h1>
      </div>
    );
  }
}

export default Articles;
