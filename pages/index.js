import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module.css'
import logo from '../public/logo3.png'
import courier from '../public/courier.jpg'
import { useEffect, useState } from 'react'



export default function Home() {

  const [link, setLink] = useState(null)
  useEffect(() => {
    if (link !== null) {
      window.location.href = 'https://zakariajaiathe.typeform.com/to/xJ3LnRAb'; 
    }
  }, [link])

  return (
    <div>
      <Head>
        <title>Get it when you want it</title>
        <meta name="description" content="Deliver to the minute" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Cheeta</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item me-auto">
              <a class="nav-link" href="https://f6v8cu6rlab.typeform.com/to/xnECoCWA" target="_blank">Become a rider</a>
            </li>
          </ul>
        </div>
      </nav>
      <main className={styles.main}>
        
        

        <div class="container">
          <div class="row">
            <div class="col text-center">
                <img src="logo3.png" width="350" />
            </div>
          </div>

          <br />
          <br />
          <br />

          
          <div class={styles.cardLong + " row"}>
            <div class="col-5">
              
            <Image 
              src={courier} 
            />
            </div>
            <div class="col">
              <div class="row">
              <h3>How does it work?</h3>
              <ul>
                <li>We will send you a delivery address to one of our neighborhood fulfillment centers to use during your regular checkout process.</li>
                <li>Once your package has arrived at our delivery point, you will receive a notification</li>
                <li>You can then choose to have it delivered within the next hour, or you can schedule a delivery to whatever future time you wish.</li>
              </ul>
              </div>
              <div class="row">
                <div className="card-body" >
                  <h5>Check your area</h5>
                  <form onSubmit={setLink} class="form-inline row">
                    <label>Postal Code</label>
                    <div class="form-group col">
                      <input type="text" name="plz" required placeholder="Plz." className="form-control" />
                    </div>
                    <div class="form-group col-4">
                      <a href="https://zakariajaiathe.typeform.com/to/xJ3LnRAb" target="_blank">
                        <button type="button" class="btn btn-dark btn-block">Go</button>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              </div>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <div class="row">
          <div class="text-center">
            Contact us: <a href="mailto:info@cheeta.rocks" >info@cheeta.rocks</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
