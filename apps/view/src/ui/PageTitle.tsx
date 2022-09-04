import React from 'react'
import cx from 'classnames'

import {Logo} from './Logo'

export type PageTitleProps = {
  subtitle?: string
  className?: string
}

export function PageTitle(props: PageTitleProps): JSX.Element {
  const {subtitle, className} = props

  return (
    <div className={cx('dib', className)}>
      <h1 className="dib mv0 f3 lh-title normal">
        NWES Gerber
        {subtitle && <span className="b">{` ${subtitle}`}</span>}
      </h1>
    </div>
  )
  
}