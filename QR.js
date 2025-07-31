import QR from 'qrcode'
import fs from 'fs'

const urls = [
    'https://lalodsi.github.io/twoYearsWithVale/#/fusceeuismodtellusnonodiogravidaaliquam',
    'https://lalodsi.github.io/twoYearsWithVale/#/fusceconsecteturorciattellusmaximusapharetrasapienpulvinar',
    'https://lalodsi.github.io/twoYearsWithVale/#/fusceatarcuvitaeelitultriciestincidunt',
    'https://lalodsi.github.io/twoYearsWithVale/#/donecfaucibusestquisfacilisisdapibus',
    'https://lalodsi.github.io/twoYearsWithVale/#/nullamollisfelisvitaeauguepellentesquevestibulum',
]

function errorFn(err) {
  if (err) throw err
  console.log('QR code saved!')
}

urls.map(
    (url, index) => {
        QR.toFile(`page${index+1}.png`, url, {
            width: 300
        }, errorFn)

    }
)