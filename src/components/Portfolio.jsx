import { portfolioList } from '../data/DataPortfolio'
import'../styles/Portfolio.css'
import { portfolioorganisasiList } from '../data/DataPortofolioOrganisasi';

// animasi
import {Fade} from 'react-awesome-reveal'

// react outerdom agar tidak refres saat berpindah
import { Link } from 'react-router-dom'

function portfolio() {

  
  return (

    <>
   
    <section id="portfolio">
        <div className="wrapper">
            <h3>Certifikat</h3>
            <div className="certifikat">
            
            {/* memanggil data */}
            {        
                    portfolioList.map((item) => {
                        return (
            <div className="item" key={item.id}>
                           <Fade direction='up' delay={200} triggerOnce={true} cascade={false}>
                    <Link to={`/portfolio/${item.id}`}><img src={item.Image} />
                    <img src={item.Image2} />
                    </Link>
                </Fade>
            </div>
                
                        )
                    })
            }


            </div >
            
            <h3>Organisasi</h3>
            <div className="organisasi">
           {/* memanggil data */}
           {        
                    portfolioorganisasiList.map((item) => {
                        return (
            <div className="item" key={item.id}>
                <Fade direction='up' delay={200} triggerOnce={true} cascade={false}>             
                    <Link to={`/portofolioorganisasi/${item.id}`}><img src={item.Image} />
                    </Link>
                </Fade>  
            </div>
                        )
                    })
            }

              </div>
        </div>
    </section>
    
    </>
  )
}

export default portfolio