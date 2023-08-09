import Page from './components/Page/Page';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Routes = () => {
    return (
        <body>
            <header>
            <Header />
            </header>
            <main>
                <section>
                    <Page />
                    <Home />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </body>
    )
}

export default Routes;