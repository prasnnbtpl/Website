import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { sampleProducts } from './data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>BTPL</header>
      <main>
        <ul>
        {
        sampleProducts.map(products => 
        <li key={products.slug}>
          <img src={products.image} alt={products.name} className='product-image' />
          <h2>{products.name}</h2>
          <p>{products.price}</p>
        </li>)}   
        </ul>
      </main>
      <footer>All Right Reserved</footer>
    </div>
  )
}

export default App
