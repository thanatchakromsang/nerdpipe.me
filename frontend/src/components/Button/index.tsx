import * as React from 'react'
import styled from 'styled-components'

export interface Props {
  label: string
  onClick: () => void
  disabled?: boolean
}

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const noop = () => {} // tslint:disable-line
export const Button = (props: Props) => {
  const { label, onClick, disabled = false } = props
  return (
    <StyledButton onClick={!disabled ? onClick : noop}>
      <span>{label}</span>
    </StyledButton>
  )
}
