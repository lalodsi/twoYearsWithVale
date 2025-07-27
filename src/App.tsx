import './App.css'
import ModalSecurity from './components/ModalSecurity'
import { phrases } from './main'
import {useNavigate} from 'react-router'


function App() {
  const navigate = useNavigate()
  const handlePress = (phrase: string) => {
    console.log('Go to ', phrase);
    navigate(phrase)
  }
  return (
    <div>
      <p>
        Hola mundo
      </p>

      <div>
        {
          phrases.map((phrase, index) => <button key={phrase.code} onClick={() => handlePress(phrase.code)}>Go to page {index + 1}</button>)
        }
      </div>

    </div>
  )
}

export default App
