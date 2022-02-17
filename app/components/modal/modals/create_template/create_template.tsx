import React from 'react'

import { Star, Bell } from '../../../icons'
import { GridGroup, Typography, Button } from '../../../../ui'

export const CreateTemplateModalContent = () => (
  <>
    <Typography spacing={{my: 2, px: 1}} align='center' fullSize>
        You don&#39;t have any templates yet, go on and create or bookmark some!
    </Typography>
    <GridGroup itemSize={{min: 200}} gap='1rem'>
      {[
        {icon: <Star />, text: 'Some dumy textSome'},
        {icon: <Star />, text: 'Some dummy textome'},
        {icon: <Star />, text: 'Some ummy textSome'},
        {icon: <Star />, text: 'Some dmmy textome'},
        {icon: <Star />, text: 'Some dy textSome'},
        {icon: <Star />, text: 'Some dmmy textSoe'},
        {icon: <Star />, text: 'Some dummy texSome'},
        {icon: <Star />, text: 'Some dmy txtSome'},
        ].map(({icon, text}) => (
          <Button key={text} onClick={() => null} before={icon} align='left' fontSize="body1" noWrap palette='inherit'>
            {text}
          </Button>
        ))
      }
    </GridGroup>
    <Typography spacing={{my: 1.5}}>
      Recently used stuff
    </Typography>
    <GridGroup itemSize={{min: 200}} gap='1rem'>
      {[
        {icon: <Bell />, text: 'me dummy tetSome'},
        {icon: <Bell />, text: 'Some mmy tetSome'},
        {icon: <Bell />, text: 'Somedummy textome'},
        {icon: <Bell />, text: 'Somedummy tetSome'},
        {icon: <Bell />, text: 'Some dummy textSome'},
        {icon: <Bell />, text: 'Some d textSome'},
        {icon: <Bell />, text: 'Some my text'},
        {icon: <Bell />, text: 'SoummyxtSome'},
        ].map(({icon, text}) => (
          <Button palette='info' fontSize="body1" key={text} onClick={() => null} noWrap before={icon} align='left'>
            {text}
          </Button>
        ))
      }
    </GridGroup>
  </>
)