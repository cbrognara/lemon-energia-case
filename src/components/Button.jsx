import React from 'react'
import { Content } from './Button-styles'
import { ReactComponent as ArrowRight } from '../assets/icons/arrow-right.svg'
import { ReactComponent as Refresh } from '../assets/icons/refresh.svg'
import { ReactComponent as Check } from '../assets/icons/check.svg'

// props: {color: primary,
//         icon: 'none',
//         onClick: ??,
//         disabled: true }

export function Button({ children, color, icon, onClick, disabled }) {
  function iconSwitch() {
    switch (icon) {
      case 'arrow-right':
        return <ArrowRight />
      case 'check':
        return <Check />
      case 'refresh':
        return <Refresh />
      default:
        break
    }
  }

  return (
    <>
      <Content disabled={disabled ? true : false} color={color} icon={icon}>
        {children}
        {iconSwitch()}
      </Content>
    </>
  )
}
