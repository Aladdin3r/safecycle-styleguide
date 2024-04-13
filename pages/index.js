import Head from "next/head";
import styles from "@/styles/Home.module.css"
import Image from "next/image";

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
          Logo font choice: DIN condensed bold <br/>
          Colours: #F0983F orange #911C12 red #AD5C0A pale orange
          <h5>Rationale:</h5>
          <p>
            When ideating for our logo design, we knew we wanted to incorporate elements of the road to give some visual clues into our app. 
            We also thought of elements common to navigation apps. So first we added the red navigation pin common to map applications. 
            While ideating and coming up with ways to incorporate our title into the logo,
            we thought of including the S to wrap around the pin with some dashes to represent a yellow road. 
            Then for the wordmark, we kept the same colours as the logo, but added some movement to the two words by elongating the lines of the f and y which were 
            flat in the font choice, which was chosen deliberately to easily manipulate for movement. Lastly, dashes were added to the yellow line of the f to again 
            represent a road. 
          </p>
        </p>
        <div class="container">
          <div class="card-group">
              <div class="row">
                <div className="col-sm-4">
                  <div class="bg-primary card text-white mb-3" className={styles.card}>
                    <div class="card-body">
                      <h4 class="card-title">Full-colour logo</h4>
                      <img class="card-img-top" src="/fullcolourlogo.svg" alt="full-colour logo"></img>
                    </div>
                  </div>
                </div>
              
                <div className="col-sm-4">
                  <div class="bg-primary card text-white mb-3" className={styles.card}>
                  <div class="card-body">
                    <h4 class="card-title">Black and white Logo</h4>
                    <img class="card-img-top" src="/blackandwhitelogo.svg" alt="black and white logo"></img>
                  </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div class="bg-primary card text-white mb-3" className={styles.card}>
                  <div class="card-body">
                    <h4 class="card-title">Greyscale Logo</h4>
                    <img class="card-img-top" src="/greyscalelogo.svg" alt="greyscale logo"></img>
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
                    </div>
                  </div>
                </div>
              
                <div className="col-sm-4">
                  <div class="bg-primary card text-white mb-3" className={styles.card}>
                  <div class="card-body">
                    <h4 class="card-title">Horizontal version of full-colour Logo</h4>
                    <img class="card-img-top" src="/horizontalfullcolour.svg" alt="horizontal full colour logo"></img>
                  </div>
                  </div>
                
              </div>

              <div className="col-sm-4">
                <div class="bg-primary card  text-white mb-3" className={styles.card}>
                <div class="card-body">
                  <h4 class="card-title">Stacked/vertical version of full-colour Logo</h4>
                  <img class="card-img-top" src="/verticalfullcolour.svg" alt="stacked/vertical colour logo"></img>
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
                    </div>
                  </div>
                </div>
              
                <div className="col-sm-4">
                  <div class="bg-primary card  text-white mb-3" className={styles.card}>
                  <div class="card-body">
                    <h4 class="card-title">32x32px Favicon</h4>
                    <img class="card-img-top" src="/favicon2.svg" alt="small favicon"></img>
                  </div>
                  </div>
                
              </div>
            
              <div className="col-sm-4">
                <div class="bg-primary card text-white mb-3" className={styles.card}>
                <div class="card-body">
                  <h4 class="card-title">48x48px Favicon</h4>
                  <img class="card-img-top" src="/favicon3.svg" alt="normal favicon"></img>
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


      <div id="colours" className="p-4">
          <h2 className="p-2">Colour Palette, Colour Accessibility</h2>
          <div className="container">
            <div className={styles.resedagreen}>
              <div className={styles.colourh3}>
                <h3>Reseda Green</h3>
              </div>
              <div className={styles.colourimage}>
                <Image src="/reseda-green.png" alt="Musty green colour called reseda green" width="300" height="200"/>
              </div>
              <div className={styles.colourh4}>
                <h4>#6E7747</h4>
              </div>
              <div className={styles.colourp}>
                <p>We chose reseda green (an olive-green shade) as our primary colour to promote eco-friendly modes of transportation, symbolizing sustainability and to encourage users to embrace non-vehicle travel options.</p>
              </div>
            </div>
            <div className={styles.jet}>
              <div className={styles.colourh3}>
                <h3>Reseda Green</h3>
              </div>
              <div className={styles.colourimage}>
                <Image src="/jet.png" alt="A dark grey closer to black" width="300" height="200"/>
              </div>
              <div className={styles.colourh4}>
                <h4>#2B2B2B</h4>
              </div>
              <div className={styles.colourp}>
                <p>We chose jet (a darker grey shade) as our secondary because it provides strong contrast against lighter backgrounds. improves visibility and reduces eye strain for users</p>
              </div>
            </div>
            <div className={styles.whitesmoke}>
              <div className={styles.colourh3}>
                <h3>White Smoke</h3>
              </div>
              <div className={styles.colourimage}>
                <Image src="/white-smoke.png" alt="A very light grey color" width="300" height="200"/>
              </div>
              <div className={styles.colourh4}>
                <h4>#F3F3F3</h4>
              </div>
              <div className={styles.colourp}>
                <p>We chose white smoke (a light grey shade) as the accent color to optimize readability and create a clean, modern aesthetic. The grey background contrasts nicely with the dark texts, ensuring that information stands out clearly without causing visual strain</p>
              </div>
            </div>
            <div className={styles.white}>
              <div className={styles.colourh3}>
                <h3>White</h3>
              </div>
              <div className={styles.colourimage}>
                <Image src="/white.png" alt="White" width="300" height="200"/>
              </div>
              <div className={styles.colourh4}>
                <h4>#FFFFFF</h4>
              </div>
              <div className={styles.colourp}>
                <p>We chose a white background because we wanted to keep the app simple. </p>
              </div>
            </div>
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
        <div className={styles.graphicTitle}>GRAPHICS</div>
        <div className={styles.graphicName}>Here are some examples of icons we will be using:</div>
        <div className={styles.graphicName}>Car accident:</div>
        <img className={styles.carCrash} src="/carCrash.png" width={400} height={150} alt="Car Accident"></img>
        <div className={styles.graphicDesc}>Red, jarring and spiked graphic implies danger and an impact of some sort.</div>
        <div className={styles.graphicName}>Traffic Jam:</div>
        <img className={styles.traffic} src="/traffic.png" width={400} height={150} alt="Traffic"></img>
        <div className={styles.graphicDesc}>Many cars, tightly packed together, but with no outright or hazard or danger.</div>
        <div className={styles.graphicName}>Road Closed:</div>
        <img className={styles.roadClosed} src="/roadClosed.png" width={400} height={150} alt="Road Closed"></img>
        <div className={styles.graphicDesc}>An iconic piece of equipment that is easily recognized as “Do not drive past this sign”.</div>
        <div className={styles.graphicExpl}>Our app will aim to make use numerous descriptive vector graphics accompanied by text that can remain simple while clearly depicting a specific concept. The aim of these graphics is to allow users of all experience in app usage to quickly understand “what does what” in our app. SafeCycle will often need to provide a lot of information without a large amount of pages so we will attempt to make use of the “show don’t tell” method as often as possible for efficiencies’ sake.</div>
        <div className={styles.graphicTitle}>IMAGERY</div>
        <div className={styles.graphicExpl}>Being a map app, Safestyle would often be needed by the users to view information about an actual physical location, that users may visit themselves. Thus, we will attempt to make use of as many actual images of the area that they are investigating as possible. This can be seen in the example below.</div>
        <img className={styles.locationPage} src="/locationPage.png" alt="Location Page"></img>


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
