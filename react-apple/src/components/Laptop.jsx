import laptop from "../Images/final laptop.png"

function Laptop() {
  return (
    <>
      <div className="section3">
        <div className="laptop">
          <span> MacBook Air</span>
          <span>Sky blue color. </span>
          <span> Sky high performance with M4.</span>
        </div>
        <div className="fr">
          <button className="fr1">Learn more</button>
          <button className="se2">Buy</button>
        </div>
        <div className="lap">
          <img src={laptop} alt="" />
        </div>
        <div className="text1">
          <p>Built for Apple Intelligence.</p>
        </div>
      </div>
      <div className="sep"></div>
    </>
  );
}

export default Laptop