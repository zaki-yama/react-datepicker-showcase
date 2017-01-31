import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MyDatePicker from '../../components/react-datepicker/MyDatePicker';
import moment from 'moment';

storiesOf('react-datepicker', module)
  .add('default', () => {
    return (
      <MyDatePicker onChange={action('onChange')} />
    );
  })
  .add('with intial date', () => {
    return (
      <MyDatePicker
        value="2017-04-10"
        onChange={action('onChange')}
      />
    );
  })
  .add('change locale', () => {
    moment.locale('ja');
    return (
      <MyDatePicker onChange={action('onChange')} />
    );
  });
