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
            {/* <div className="card" style={{ width: '18rem' }}>
              <Image
                src="/images/reseda-green.png" // Replace with the correct path to your image
                alt="Beautiful musty dark green color swatch"
                className="card-img-top"
                width={288} // Adjust the width to match the desired size
                height={180} // Adjust the height to match the desired size
              />
              <div className="card-body">
                <h5 className="card-title">Reseda Green</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div> */}
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
