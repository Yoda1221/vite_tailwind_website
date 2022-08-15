import styles from './style'
import { 
  Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials 
}             from './components'

const App = () => (
    <div className="bg-black w-screen overflow-hidden">
      <div className={`${ styles.paddingX } ${ styles.flexCenter }`}>
        <div className={`${ styles.boxWidth }`}>
          <Navbar />
        </div>
      </div>

      <div className={`${ styles.flexStart }`}>
        <div className={`${ styles.boxWidth }`}>
          <Hero />
        </div>
      </div>

      <div className={`${ styles.paddingX } ${ styles.flexStart }`}>
        <div className={`${ styles.boxWidth }`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>


    </div>
  )


export default App
