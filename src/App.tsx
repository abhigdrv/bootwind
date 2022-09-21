import { useState } from 'react'
import './App.css'
import Layout from './layout/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About, Contact, Home, Portfolio } from './pages'
import { Accordion, Alert, Badge, Breadcrumb, Button, Card, Carousel, Components, Dropdown, Modal, Nav, Pagination, Popover, Progress, Table, Tooltip, Typography, Video, Widget, Wizard } from './components'
import { Forms, Basic, Advanced, Validation } from './forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/components" element={<Components/>} />
            <Route path="/components/accordion" element={<Accordion/>} />
            <Route path="/components/alert" element={<Alert/>} />
            <Route path="/components/badge" element={<Badge/>} />
            <Route path="/components/breadcrumb" element={<Breadcrumb/>} />
            <Route path="/components/button" element={<Button/>} />
            <Route path="/components/card" element={<Card/>} />
            <Route path="/components/carousel" element={<Carousel/>} />
            <Route path="/components/dropdown" element={<Dropdown/>} />
            <Route path="/components/modal" element={<Modal/>} />
            <Route path="/components/nav" element={<Nav/>} />
            <Route path="/components/pagination" element={<Pagination/>} />
            <Route path="/components/popover" element={<Popover/>} />
            <Route path="/components/progress" element={<Progress/>} />
            <Route path="/components/table" element={<Table/>} />
            <Route path="/components/tooltip" element={<Tooltip/>} />
            <Route path="/components/typography" element={<Typography/>} />
            <Route path="/components/video" element={<Video/>} />
            <Route path="/components/widget" element={<Widget/>} />
            <Route path="/components/wizard" element={<Wizard/>} />
            <Route path="/forms" element={<Forms/>} />
            <Route path="/forms/basic" element={<Basic/>} />
            <Route path="/forms/advanced" element={<Advanced/>} />
            <Route path="/forms/validation" element={<Validation/>} />
          </Routes>
        </Layout>
      </div>
    </Router>
  )
}

export default App
