import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import TimePicker from '../src'

storiesOf('TimePicker', module)
  .add('default (single)', () => (
    <TimePicker onChange={val => console.log(val)}/>
  ));
