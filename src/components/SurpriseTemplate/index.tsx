import React from 'react'
import ModalSecurity from '../ModalSecurity'
import type { Phrase } from '../../main'

interface SurpriceTemplateProps {
    phrase: Phrase,
    children: React.ReactElement
}

const SurpriceTemplate: React.FC<SurpriceTemplateProps> = (props) => {
    const { phrase, children } = props
  return (
    <>
      <div>
        {children}
      </div>
      <ModalSecurity phrase={phrase} />
    </>
  )
}

export default SurpriceTemplate