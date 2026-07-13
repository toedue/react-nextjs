import watch from "../Images/apple watch.png"
import crop from "../Images/crop.svg"

function Watch() {
  return (
    <>
      <div className="section2">
        <div className="watch">
          <span>
            <img className="crop" src={crop} alt="crop" height="50px" />
            <br />
            WATCH
          </span>
          <span> SERIES 10</span>
          <span> Thinstant classic.</span>
        </div>
        <div className="fr">
          <button className="fr1">Learn more</button>
          <button className="se2">Buy</button>
        </div>
        <div className="awatch">
          <img className="img1" src={watch} alt="watch" />
        </div>
      </div>
    </>
  );
}

export default Watch