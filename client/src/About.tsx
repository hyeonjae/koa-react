import * as React from 'react';

class About extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props)
    this.state = {
    }
  }
  public render() {
    return (
      <div className="About">
        <h1>This is About!!!</h1>
      </div>
    );
  }
}

export default About;
