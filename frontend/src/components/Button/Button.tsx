import * as React from 'react'
import './Button.css'
export interface Props {
  label: string
  onClick: () => void
  disabled?: boolean
}
const noop = () => {} // tslint:disable-line
export const Button = (props: Props) => {
  const { label, onClick, disabled = false } = props
  const disabledclass = disabled ? 'Button_disabled' : ''
  return (
    <div
      className={`Button ${disabledclass}`}
      onClick={!disabled ? onClick : noop}
    >
      <span>{label}</span>
    </div>
  )
}
