import React from 'react'
import {Formik, Form, Field} from 'formik'
import {Button, Drawer, HiddenInput, Icon, Label, getButtonStyle} from '../ui'
import {FileEvent} from '../types'

const TITLE = 'new board'

const UPLOAD_FILES_LABEL = 'upload files from your computer'
// const ENTER_URL_LABEL = 'enter the URL of a ZIP archive'
const ENTER_URL_PLACEHOLDER = 'https://tracespace.io/view/arduino-uno.zip'
const FOOTER = 'you can also drag-and-drop files into the app at any time'

const UPLOAD_FILES_LABEL_STYLE = 'mr-auto'
const ICON_STYLE = 'flex-none ml2 brand f4'
const SEPARATOR_STYLE = 'mv2 fw3 f6 i tc'
const ENTER_URL_LABEL_STYLE = 'mt0 mb2 pt2'
const URL_INPUT_STYLE = 'w-100 bb bt-0 br-0 bl-0 b--near-black code f7'
const URL_INPUT_WRAPPER_STYLE = 'flex items-bottom h2'
const FOOTER_STYLE = 'mt4 mb1 f7 lh-copy'

export type OpenFileDrawerProps = {
  open: boolean
  handleFiles: (event: FileEvent) => void
  handleUrl: (url: string) => void
  close: () => void
}

function OpenFileDrawer(props: OpenFileDrawerProps): JSX.Element {
  const {open, handleFiles, handleUrl, close} = props

  return (
    <Drawer title={TITLE} open={open} close={close}>
      <Label>
        <span className={UPLOAD_FILES_LABEL_STYLE}>{UPLOAD_FILES_LABEL}</span>
        <HiddenInput type="file" onChange={handleFiles} multiple />
        <Icon
          name="file-upload"
          className={getButtonStyle({className: ICON_STYLE})}
        />
      </Label>

      <Formik
        initialValues={{url: ''}}
        onSubmit={values => handleUrl(values.url)}
      >

      </Formik>
      <footer className={FOOTER_STYLE}>{FOOTER}</footer>
    </Drawer>
  )
}

export default OpenFileDrawer