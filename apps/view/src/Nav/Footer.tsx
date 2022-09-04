import React from 'react'

import {
  REPO_URL,
  AUTHOR_NAME,
  AUTHOR_URL,
  CONTRIBUTORS_URL,
  PRIVACY_URL,
} from '../pkg'

const STYLE = 'fixed right-1 bottom-1 w-third tr'
const COPY_STYLE = 'mv0 lh-copy f7 white'
const LINK_STYLE = 'link dim fw3 lightest-blue'

export default function Footer(): JSX.Element {
  return (
    <footer className={STYLE}>

      <p className={COPY_STYLE}>
        <a href={PRIVACY_URL} className={LINK_STYLE}>
          privacy policy
        </a>      
      </p>

    </footer>
  )
}