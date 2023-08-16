import ads from '../../assets/ad-01.jpg';
import adss from '../../assets/advertttt.gif';
import './Ads.scss'
const Ads = () => {
  return (
    <div>
      <div className="adsTop">
        <div >
					<a href='example.com'><img src={ads} alt='ads' className="adsLeft" /></a>
				</div>
        <div>
				<a href='example.com'><img src={adss} alt='adss' className="adsRight"/></a>
				</div>
      </div>
    </div>
    
  );
};

export default Ads;
