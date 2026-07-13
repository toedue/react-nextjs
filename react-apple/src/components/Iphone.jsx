import iphone from "../Images/3 iphone.jpg"


function Iphone() {
  return (
    <>
    <div className="hero">
      <span> iPhone</span>
      <span> Meet the iPhone 16 family. </span>
    </div>
    <div className="first">
      <button className="first1">Learn more</button>
      <button className="second">Shop iPhone</button>
    </div>
    <div className="text1">
      <p>Built for Apple Intelligence.</p>
    </div>
    
    <div className="iphone">
      <img src={iphone} alt="laptop" />
    </div>
  </>
  )
}

export default Iphone