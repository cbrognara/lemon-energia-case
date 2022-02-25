import styled from 'styled-components'

export const Container = styled.button`
  color: #ffffff;
  background: var(--primary);
  width: 30rem;
  height: 5.6rem;
  cursor: pointer;

  &:hover {
    background: var(--primary-hover);
  }

  &:active {
    background: var(primary-pressed);
  }
`
