import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createHashRouter, RouterProvider} from 'react-router'
import SurpriceTemplate from './components/SurpriseTemplate/index.tsx'
import FirstPage from './components/Page1/FirstPage.tsx'
import SecondPage from './components/Page2/SecondPage.tsx'
import ThirdPage from './components/Page3/ThirdPage.tsx'
import FourthPage from './components/Page4/FourthPage.tsx'
import FifthPage from './components/Page5/FifthPage.tsx'

export interface Phrase {
  code: string,
  passphrase: string
}

export const phrases: Phrase[] = [
  {
    code: "fusceeuismodtellusnonodiogravidaaliquam",
    passphrase: "Luis"
  },
  {
    code: "fusceconsecteturorciattellusmaximusapharetrasapienpulvinar",
    passphrase: "Valeria"
  },
  {
    code: "fusceatarcuvitaeelitultriciestincidunt",
    passphrase: "Elotes"
  },
  {
    code: "donecfaucibusestquisfacilisisdapibus",
    passphrase: "Siemprejuntos"
  },
  {
    code: "nullamollisfelisvitaeauguepellentesquevestibulum",
    passphrase: "Love"
  }
]


const router = createHashRouter([
  {
    path: '/',
    Component: App,
    loader: () => <p>Loading</p>
  },
  {
    path: phrases[0].code,
    Component: () => <SurpriceTemplate phrase={phrases[0]} ><FirstPage /></SurpriceTemplate>,
    loader: () => <p>Loading</p>
  },
  {
    path: phrases[1].code,
    Component: () => <SurpriceTemplate phrase={phrases[1]} ><SecondPage /></SurpriceTemplate>,
    loader: () => <p>Loading</p>
  },
  {
    path: phrases[2].code,
    Component: () => <SurpriceTemplate phrase={phrases[2]} ><ThirdPage /></SurpriceTemplate>,
    loader: () => <p>Loading</p>
  },
  {
    path: phrases[3].code,
    Component: () => <SurpriceTemplate phrase={phrases[3]} ><FourthPage /></SurpriceTemplate>,
    loader: () => <p>Loading</p>
  },
  {
    path: phrases[4].code,
    Component: () => <SurpriceTemplate phrase={phrases[4]} ><FifthPage /></SurpriceTemplate>,
    loader: () => <p>Loading</p>
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
