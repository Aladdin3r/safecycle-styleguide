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
        <link rel="icon" href="/favicon.ico" />
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
            Rational Explanation of Shapes and logo font choice, including how these elements
            communicate with your audience and support the overall design.
          </p>
          <div class="row">
            <div className="col-sm-6">
              <div class="card bg-primary text-white mb-3" className={styles.card}>
              <div class="card-header">Logo Variation 1</div>
              <div class="card-body">
                <h4 class="card-title">Full Colour Logo</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              </div>
            </div>
            <div class="card bg-primary text-white mb-3" className={styles.card}>
              <div class="card-header">Logo Variation 2</div>
              <div class="card-body">
                <h4 class="card-title">Black and white Logo/Reversed</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div className="col-sm-6">
              <div class="card bg-primary text-white mb-3" className={styles.card}>
              <div class="card-header">Logo Variation 3</div>
              <div class="card-body">
                <h4 class="card-title">Greyscale Logo</h4>
                <img class="card-img-top" src="/logo-discord.webp" alt="Card image cap"></img>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              </div>
            </div>
            <div class="card bg-primary text-white mb-3" className={styles.card}>
              <div class="card-header">Logo Variation 4</div>
              <div class="card-body">
                <h4 class="card-title">Monochromatic Logo</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div className="col-sm-6">
              <div class="card bg-primary text-white mb-3" className={styles.card}>
              <div class="card-header">Logo Variation 5</div>
              <div class="card-body">
                <h4 class="card-title">Horizontal version of Full-colour logo</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              </div>
            </div>
            <div class="card bg-primary text-white mb-3" className={styles.card}>
              <div class="card-header">Logo Variation 6</div>
              <div class="card-body">
                <h4 class="card-title">Stacked/vertical version of full-colour logo</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
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
                <Image src="/images/reseda-green.png" alt="Musty green colour called reseda green" width="300" height="200"/>
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
                <Image src="/images/jet.png" alt="A dark grey closer to black" width="300" height="200"/>
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
                <Image src="/images/white-smoke.png" alt="A very light grey color" width="300" height="200"/>
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
                <Image src="/images/white.png" alt="White" width="300" height="200"/>
              </div>
              <div className={styles.colourh4}>
                <h4>#FFFFFF</h4>
              </div>
              <div className={styles.colourp}>
                <p>We chose a white backgorund because we wanted to keep the app simple.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="types" class="p-4">
          <h2 class="p-2">Typography, Imagery, Graphics</h2>
          <div class="container">
          </div>
        </div>

        <div id="refs" class="p-4">
          <h2 class="p-2">Graphics and Icons</h2>
          <div class="container">
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
