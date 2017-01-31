import React, { PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class MyDatePicker extends React.Component {
  static get propTypes() {
    return {
      value: PropTypes.string, // YYYY-MM-DD
      onChange: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(momentObj) {
    const value = momentObj ? momentObj.format('YYYY-MM-DD') : null;
    this.setState({ value });

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  convertToMomentObj(dateStr) {
    return moment(dateStr).isValid() ? moment(dateStr) : null;
  }

  render() {
    return (
      <DatePicker
        selected={this.convertToMomentObj(this.state.value)}
        onChange={this.onChange}
      />
    );
  }
}
