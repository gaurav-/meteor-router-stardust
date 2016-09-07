import React, {Component} from 'react';
import { Button, Checkbox, Form } from 'stardust';

class Contact extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
        <div>
        <h1>Just another example Route</h1>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Form.Field>
            <label>First Name</label>
            <Checkbox label='I agree to agree' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
        </div>
    );
  }

}

export default Contact;
