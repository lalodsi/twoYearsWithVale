import React from 'react'
import './index.css'
import type { Phrase } from '../../main'
import clsx from 'clsx'

interface ModalSecurityProps {
    phrase: Phrase
}

const ModalSecurity: React.FC<ModalSecurityProps> = (props) => {
    const {phrase} = props
    const [passPhrase, setPassphrase] = React.useState("")
    const [isAuthenticated, setisAuthenticated] = React.useState(false)

    const handleChangePassphrase: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPassphrase(e.target.value)
        if (!isAuthenticated && e.target.value === phrase.passphrase) {
            setTimeout(() => {
                setisAuthenticated(true)
            }, 1500)
        }
    }

    return (
        <div className={clsx(
            !isAuthenticated && "blur-overlay",
            isAuthenticated && "non-visible",
        )}>
            <div className='formBox'>
                {
                    passPhrase !== phrase.passphrase && (
                    <>
                        <h2>Necesitas ingresar la clave 🤨</h2>
                        <input className='formBox_input' type="text" value={passPhrase} onChange={handleChangePassphrase} />
                    </>)
                }
                {
                    passPhrase === phrase.passphrase && (
                    <>
                        <h2>Clave ingresada correctamente 😍</h2>
                    </>)
                }
                
            </div>
        </div>
    )
}

export default ModalSecurity