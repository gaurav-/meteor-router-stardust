import { Menu } from 'stardust';
import { Link } from 'react-router';
import React, {PropTypes, Component} from 'react';

export default class SimpleMenu extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item as={Link} to='/home'>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to='/contact'>
          Contact
        </Menu.Item>
      </Menu>
    );
  }
}
