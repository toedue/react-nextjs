import wcd from "../Images/wdc.png";
import trade from "../Images/trade.png";
import promo_phone from "../Images/promo phone.png";
import ipad_air from "../Images/ipad air.png";
import promo_ipad_air from "../Images/promo_ipad_air__bfbxzvw65c02_large-removebg-preview.png";
import Adobe_Express from "../Images/Adobe Express - file.png";
import logo_large from "../Images/logo__dcojfwkzna2q_large.png";
import csards from "../Images/csards.png";
import top1 from '../Images/top1.png'
import top2 from '../Images/top2.png'
import top3 from '../Images/top3.png'
import top4 from '../Images/top4.png'
import last from '../Images/laptop 1.jpg'

function Section4() {
  return (
    <div className="divi">
      <div className="section4">
        <span className="ap">
          {" "}
          <img className="wdc" src={wcd} alt="wdc" />{" "}
        </span>
        <span className="ap2"> Apple Worldwide Developers Conference.</span>
        <span className="ap3"> Join us online June 9-13. </span>
        <button className="fr1 ma">Learn more</button>
      </div>
      <div className="section5">
        <img className="trade" src={trade} alt="" />
        <span className="ap">Get extra credit toward a new </span>
        <span className="ap">
          iPhone when you trade in. <sub className="txt"> 1</sub>
        </span>
        <span className="ap1"> Now through 6.18</span>
        <button className="fr1 ma">Get your estimate</button>

        <img style={{ width: "100%" }} id="pro" src={promo_phone} alt="" />
      </div>
      <div className="section5 color">
        <img className="trade" src={ipad_air} alt="" />
        <span className="ap4">Now supercharged by the M3 chip. </span>
        <div className="first">
          <button className="first1">Learn more</button>
          <button className="second">Buy</button>
        </div>
        <span className="ap">
          <img className="promo" src={promo_ipad_air} alt="" />
        </span>
        <div className="text1 text2">
          <p>Built for Apple Intelligence.</p>
        </div>
      </div>
      <div className="section4 sec4">
        <span className="a9"> AirPods Pro 2</span>
        <span className="a4">
          {" "}
          Now with a Hearing Aid Feature. <sup>2</sup>{" "}
        </span>
        <div className="fx">
          <button className="first1">Learn more</button>
          <button className="second black">Buy</button>
        </div>
      </div>
      <div className="section6">
        <span>College Students</span>
        <span> Mac and iPad. </span>
        <span> Major. In any</span>
        <span> field.</span>
        <button className="first1">Learn more</button>
        <span>
          <img className="lap" src={Adobe_Express} alt="" />
        </span>
      </div>
      <div className="section7">
        <img className="bottom" src={logo_large} alt="" />
        <span> Get up to 3% Daily Cash back</span>
        <span> with every purchase.</span>
        <div className="blue">
          <button className="first1">Learn more</button>
          <button className="second">Apply now</button>
        </div>
        <img className="cs" src={csards} alt="" />
      </div>

      <div className="last">
        <img src={last} alt="last" />
      </div>
      <div className="sep"></div>
      <div className="ld">
        <div className="i3">
          <img className="tp" src={top1} alt="top1" />
          <div className="middle">
            <div className="text">Watch now</div>
          </div>
        </div>
        <div className="i3">
          <img className="tp" src={top2} alt="top2" />
          <div className="middle">
            <div className="text">Listen now</div>
          </div>
        </div>
        <div className="i3">
          <img className="tp" src={top3} alt="top3" />
          <div className="middle">
            <div className="text">Watch now</div>
          </div>
        </div>
        <div className="i3">
          <img className="tp" src={top4} alt="top4" />
          <div className="middle">
            <div className="text">Listen now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
