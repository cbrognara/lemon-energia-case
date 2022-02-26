import styled from 'styled-components'

export const Content = styled.button`
  color: ${props => theme[props.color].text};
  width: 30rem;
  height: 5.6rem;
  cursor: pointer;
  line-height: 2.4rem;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.icon ? 'space-between' : 'center')};
  padding: 1.6rem;

  background: ${props => theme[props.color].default};

  &:hover {
    background: ${props => theme[props.color].hover};
  }

  &:active {
    background: ${props => theme[props.color].pressed};
  }

  &:disabled {
    background: ${props => theme[props.color].disabled};
    color: #ffffff;
  }
`

// justify-content: space-between;

const theme = {
  primary: {
    default: 'var(--primary)',
    text: 'var(--primary-text)',
    hover: 'var(--primary-hover)',
    disabled: 'var(--primary-disabled)',
    pressed: 'var(--primary-pressed)'
  },
  secondary: {
    default: 'var(--secondary)',
    text: 'var(--secondary-text)',
    hover: 'var(--secondary-hover)',
    disabled: 'var(--secondary-disabled)',
    pressed: 'var(--secondary-pressed)'
  }
}

Content.defaultProps = {
  color: 'primary'
}
