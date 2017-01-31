import React, { PropTypes } from 'react';
import { DateInput } from 'react-lightning-design-system';

export default class MyDateInput extends React.Component {
  static get propTypes() {
    return {
      value: PropTypes.string,
      onChange: PropTypes.func,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };
  }

  onChange(value) {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    return (
      <DateInput
        label='DateInput'
        value={this.state.value}
        onValueChange={(value) => this.onChange(value)}
      />
    );
  }
}
