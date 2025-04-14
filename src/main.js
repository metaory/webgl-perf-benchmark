import './style.css'
import gradientGL from 'gradient-gl'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { NeatGradient } from '@firecms/neat'

const doNeat = 0

if (!doNeat) {
  await gradientGL('a2.eba9')
}

if (doNeat) {
  const neat = new NeatGradient({
    ref: document.getElementById('gradient'),
    colors: [
      { color: '#FF5772', enabled: true },
      { color: '#4CB4BB', enabled: true },
      { color: '#FFC600', enabled: true },
      { color: '#8B6AE6', enabled: true },
      { color: '#2E0EC7', enabled: true },
    ],
    speed: 4,
    horizontalPressure: 3,
    verticalPressure: 4,
    waveFrequencyX: 3,
    waveFrequencyY: 3,
    waveAmplitude: 8,
    shadows: 1,
    highlights: 5,
    colorBrightness: 1,
    colorSaturation: 7,
    wireframe: false,
    colorBlending: 8,
    backgroundColor: '#003FFF',
    backgroundAlpha: 1,
    grainScale: 3,
    grainIntensity: 0.3,
    grainSpeed: 1,
    resolution: 1,
  })
}

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
