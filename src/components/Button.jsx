import React from 'react'
import { Container } from './Button-styles'

export function Button({ children }) {
  return (
    <>
      <Container font-family="Inter">{children}</Container>
    </>
  )
}
