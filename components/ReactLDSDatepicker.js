import React, { PropTypes } from 'react';
import moment from 'moment';

import { Datepicker } from 'react-lightning-design-system';

class ReactLDSDatepicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: props.selectedDate || moment().format('YYYY-MM-DD'),
    };
  }

  onSelectDate(selectedDate) {
    this.setState({ selectedDate });
    this.props.onSelectDate(selectedDate);
  }

  render() {
    return (
      <div style={ { padding: '12px', width: '20rem' } }>
        <Datepicker
          selectedDate={ this.state.selectedDate }
          onSelect={ this.onSelectDate.bind(this) }
        />
      </div>
    );
  }
}

ReactLDSDatepicker.propTypes = {
  selectedDate: PropTypes.string,
  onSelectDate: PropTypes.func.isRequired,
};

export default ReactLDSDatepicker;
