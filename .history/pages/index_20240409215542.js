import Head from "next/head";
import styles from "@/styles/Home.module.css"

export default function Home() {
  
  return (
    <>
      <Head>
        <title>SafeCycle Styleguide</title>
        <meta name="description" 
        content=
        "Created by Rawan Aladdin, Nea Pieroelie, Andrew Turitsa."
       />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.svg" />
      </Head>
      <nav class="navbar navbar-expand-lg bg-light sticky-top" data-bs-theme="light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">SafeCycle</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#logo">Logo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#colours">Colours</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#types">Typography, Imagery, Graphics</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#refs">References</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
      <div class="jumbotron">
        <h1 class="display-3 mt-5 pt-5">SafeCycle</h1>
        <p class="display-4 pb-5">Styleguide</p>
        <hr class="my-5"/>
        <p class="mb-5">Rawan Aladdin, Nea Pieroelie, Andrew Turitsa</p>
        <p class="lead mb-5">
          <a class="btn btn-primary btn-lg my-5" href="#logo" role="button">Start the guide</a>
        </p>
      </div>
      <div id="logo" class="p-4">
        <h2 class="p-2 mt-3">Logo Design</h2>
        <p class="p-3">
          Logo font choice: DIN condensed bold
          colours: #F0983F orange #911C12 red #AD5C0A pale orange
        </p>
        <div class="container">
          <div class="card-group">
              <div class="row">
                <div className="col-sm-4">
                  <div class="bg-primary card text-white mb-3" className={styles.card}>
                    <div class="card-body">
                      <h4 class="card-title">Full-colour logo</h4>
                      <img class="card-img-top" src="/fullcolourlogo.svg" alt="full-colour logo"></img>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. blah blah blah</p>
                    </div>
                  </div>
                </div>
              
                <div className="col-sm-4">
                  <div class="bg-primary card text-white mb-3" className={styles.card}>
                  <div class="card-body">
                    <h4 class="card-title">Black and white Logo</h4>
                    <img class="card-img-top" src="/blackandwhitelogo.svg" alt="black and white logo"></img>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div class="bg-primary card text-white mb-3" className={styles.card}>
                  <div class="card-body">
                    <h4 class="card-title">Greyscale Logo</h4>
                    <img class="card-img-top" src="/greyscalelogo.svg" alt="greyscale logo"></img>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  </div>
                </div>

              </div>

              <div class="row">
                <div className="col-sm-4">
                  <div class="bg-primary card text-white mb-3" className={styles.card}>
                    <div class="card-body">
                      <h4 class="card-title">Monochromatic logo</h4>
                      <img class="card-img-top" src="/monochromatic.svg" alt="Monochromatic logo"></img>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. blah blah blah</p>
                    </div>
                  </div>
                </div>
              
                <div className="col-sm-4">
                  <div class="bg-primary card text-white mb-3" className={styles.card}>
                  <div class="card-body">
                    <h4 class="card-title">Horizontal version of full-colour Logo</h4>
                    <img class="card-img-top" src="/horizontalfullcolour.svg" alt="horizontal full colour logo"></img>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  </div>
                
              </div>

              <div className="col-sm-4">
                <div class="bg-primary card  text-white mb-3" className={styles.card}>
                <div class="card-body">
                  <h4 class="card-title">Stacked/vertical version of full-colour Logo</h4>
                  <img class="card-img-top" src="/verticalfullcolour.svg" alt="stacked/vertical colour logo"></img>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
              </div>
            </div>
            <div class="row">
                <div className="col-sm-4">
                  <div class="bg-primary card text-white mb-3" className={styles.card}>
                    <div class="card-body z-3">
                      <h4 class="card-title">16x16px Favicon</h4>
                      <img class="card-img-top" src="/favicon1.svg" alt="xs favicon"></img>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. blah blah blah</p>
                    </div>
                  </div>
                </div>
              
                <div className="col-sm-4">
                  <div class="bg-primary card  text-white mb-3" className={styles.card}>
                  <div class="card-body">
                    <h4 class="card-title">32x32px Favicon</h4>
                    <img class="card-img-top" src="/favicon2.svg" alt="small favicon"></img>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  </div>
                
              </div>
            
              <div className="col-sm-4">
                <div class="bg-primary card text-white mb-3" className={styles.card}>
                <div class="card-body">
                  <h4 class="card-title">48x48px Favicon</h4>
                  <img class="card-img-top" src="/favicon3.svg" alt="normal favicon"></img>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="colours" class="p-4">
        <h2 class="p-2">Colour Palette, Colour Accessibility</h2>
        <div class="container">

        </div>
      </div>
      <div id="types" class="p-4">
        <h2 class="p-2">Typography, Imagery, Graphics</h2>
        <div class="container">
        <p className={styles.typo_desc} class="p-3">
        The fonts used in SafeCycle will be a blend of Urbanist and Sarabun. They are both sans serif fonts that are not too fancy but also not too rigid and boring. We believe that these fonts have a charming blend of simple, practical functionality and the calming, welcoming feel of a guidance application.  The characters of the Urbanist font are slightly more block-like, so this font will be used primary for heading and standalone words or phrases. Sarabun's characters on the other hand have a more natural curves and shaped, so this more elegant font will be used for body text and paragraphs.
        </p>
        <div className={styles.h1Typo}>Heading One 40/24</div> 
        <div className={styles.h2Typo}>Heading Two 26/16</div> 
        <div className={styles.h3Typo}>Heading Three 22/16</div> 
        <div className={styles.h4Typo}>Heading Four 20/16</div> 
        <div className={styles.BodyTypo}>Body 14/24</div>
        <div className={styles.ButtonMetaTypo}>Button + Meta 14/24</div>
        <div>Graphics</div>
        <div>Here are some examples of icons we will be using:</div>
        <div>Car accident:</div>
        <img class="carCrash" src="/carCrash.png" alt="Car Accident"></img>
        <div>Red, jarring and spiked graphic implies danger and an impact of some sort.</div>
        <div>Traffic Jam:</div>
        <img class="traffic" src="/traffic.png" alt="Traffic"></img>
        <div>Many cars, tightly packed together, but with no outright or hazard or danger.</div>
        <div>Road Closed:</div>
        <img class="RoadClosed" src="/RoadClosed.png" alt="Raod Closed"></img>
        <div>An iconic piece of equipment that is easily recognized as “Do not drive past this sign”.</div>
        <div>Our app will aim to make use numerous descriptive vector graphics accompanied by text that can remain simple while clearly depicting a specific concept. The aim of these graphics is to allow users of all experience in app usage to quickly understand “what does what” in our app. SafeCycle will often need to provide a lot of information without a large amount of pages so we will attempt to make use of the “show don’t tell” method as often as possible for efficiencies’ sake.</div>


        </div>
        </div>
      <div id="refs" class="p-4">
        <h2 class="p-2">References</h2>
        <div class="container">

        </div>
      </div>
      </main>
    </>
  );
}
