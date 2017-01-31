import React from 'react';
import moment from 'moment';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import MyDatepicker from '../../components/react-lightning-design-system/MyDatepicker';

// moment.locale('ja');
// console.log(moment.locale());

storiesOf('react-lightning-design-system:Datepicker', module)
  .add('default', () => {
    return (
      <MyDatepicker onSelectDate={action('onSelectDate')} />
    );
  })
  .add('with initial date', () => {
    return (
      <MyDatepicker
        selectedDate="2017-04-10"
        onSelectDate={action('onSelectDate')}
      />
    );
  })
  .add('change locale', () => {
    moment.locale('ja');
    return (
      <MyDatepicker
        onSelectDate={action('onSelectDate')}
      />
    );
  });

