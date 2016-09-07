import React, {Component} from 'react';
import { Container, Image, Grid } from 'stardust'

class Home extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const image = <Image src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />

    return (
      <Container>
        <h1>
          E.T. Go Home
        </h1>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>{image}</Grid.Column>
            <Grid.Column>{image}</Grid.Column>
            <Grid.Column>{image}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>{image}</Grid.Column>
            <Grid.Column>{image}</Grid.Column>
            <Grid.Column>{image}</Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

}

export default Home;
