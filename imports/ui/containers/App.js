import { Container } from 'stardust';
import React, {Component} from 'react';
import SimpleMenu from '../components/common/simpleMenu';

class App extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
        <div>
          <SimpleMenu />
          <Container>
            { this.props.children }
          </Container>
        </div>
    );
  }

}

export default App;
