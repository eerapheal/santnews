import './Home.scss';
import Header from '../Header/Header';
import Ads from '../Ads/Ads';

const Home = () => {
    return (
        <div className='mainHome'>
            <div className='homeWrapper'>
            <Header />
            <Ads />
            </div>
        </div>
    )
}

export default Home;