import React from 'react';
import moment from 'moment';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Datepicker from '../components/ReactLDSDatepicker';

storiesOf('react-lightning-design-system', module)
  .add('default', () => {
    return (
      <Datepicker onSelectDate={ action('onSelectDate') } />
    );
  })
  .add('with initial date', () => {
    return (
      <Datepicker
        selectedDate="2017-04-10"
        onSelectDate={ action('onSelectDate') }
      />
    );
  })
  .add('change locale', () => {
    moment.updateLocale('ja', {
      monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      weekdaysMin: ['日', '月', '火', '水', '木', '金', '土'],
    });
    return (
      <Datepicker
        onSelectDate={ action('onSelectDate') }
      />
    );
  });

