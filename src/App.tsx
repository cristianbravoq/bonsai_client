import Home from '@pages/home/Home'
import Private from '@pages/private/Private'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
