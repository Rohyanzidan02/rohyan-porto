import './App.css'
// import components dari pages
import Loading from './pages/Loading'
import Home from './pages/Home'
// data portfolio
import DetailPortfolio from './pages/DetailPortfolio'
import DetailSertifikat from './pages/DetailCertifikat'
import DetailPortfolioorganisasi from './pages/Detailportofolioorganisasi'
import DetailPortfolioweb from './pages/Detailportfolioweb'
import DetailMultimedia from './pages/DetailMultimedia'
import DetailManagement from './pages/DetailManagement'
import DetailVidio from './pages/Detailvidio'
// componen lain
import PageNotFound from './pages/PageNotFound'
import Experience from './components/Experience'
import Certifikat from './components/Certifikat'
import Profile from './components/Profile'
import Chart from './components/Chart'
import Coba from './components/coba'
import Lamaran from './pages/HomeLamaran'
// coba



// memanggil route dom
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (

    // membuat enyambung ke path lain
    <BrowserRouter>
    <Routes>
     
    < Route path='/' element={<Loading />} />
      < Route path='/home' element={<Home />} />
      {/* lINK TO PORTFOLIO */}
      <Route path='/portfolio/:id' element={<DetailPortfolio />}/>
      <Route path='/portofolioorganisasi/:id' element={<DetailPortfolioorganisasi />}/>
      <Route path='/portofolioweb/:id' element={<DetailPortfolioweb />}/>
      <Route path='/certifikat/:id' element={<DetailSertifikat />}/>
      <Route path='/multimedia/:id' element={<DetailMultimedia />}/>
      <Route path='/management/:id' element={<DetailManagement />}/>
      <Route path='/vidio/:id' element={<DetailVidio />}/>

      <Route path='/Page-not-found' element={<PageNotFound />}/>
      <Route path='/experience' element={<Experience />}/>
      <Route path='/certifikat' element={<Certifikat/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/lamaran' element={<Lamaran/>}/>
  
     
{/* coba */}
      
    {/* coba */}
    <Route path='/coba' element={<Coba/>}/>
    {/* <Route path='/iconnavbar' element={<IconNavbar/>}/> */}
    

      {/* page not found laman */}
      <Route path='*' element={<PageNotFound />}/>



    </Routes>
    </BrowserRouter>
    
  )
}

export default App