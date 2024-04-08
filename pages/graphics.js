import styles from '../styles/Graphics.module.css'
import Head from 'next/head'

export default function Graphics() {

    return (
        <>
            <Head>
                <title>SafeCycle Styleguide</title>
                <meta name="description" content="Created by Rawan Aladdin, Nea Pieroelie, Andrew Turitsa."/>
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
                <div id="title">

                </div>
            </main>
        </>
    )

}
