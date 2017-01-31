import React from 'react';
import moment from 'moment';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import MyDateInput from '../../components/react-lightning-design-system/MyDateInput';

storiesOf('react-lightning-design-system:DateInput', module)
  .add('default', () => {
    return (
      <MyDateInput onChange={action('onChange')} />
    );
  })
  .add('with initial date', () => {
    return (
      <MyDateInput
        value="2017-04-10"
        onChange={action('onChange')}
      />
    );
  })
  .add('change locale', () => {
    moment.locale('ja');
    return (
      <MyDateInput onChange={action('onChange')} />
    );
  });
