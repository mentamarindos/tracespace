// tracespace logo component
import React from 'react'
import cx from 'classnames'

export type LogoProps = {
  width?: number | string
  height?: number | string
  color?: string
  className?: string
}

export function Logo(props: LogoProps): JSX.Element {
  const width = props.width || props.height || '32px'
  const height = props.height || width || '32px'
  const fill = props.color || 'currentColor'

  return <h2>LOGO</h2>

}