import saleimage from "../assets/images/saleimage.png"

function Saleimage() {
    return (
      <div class="sale-image">
        <img src={saleimage} alt="Sale images"></img>
        <div class="sale-image__offer">
          <h2>Udemy Flash Sale! 24 hours to save.</h2>
          <p> Get the top Courses for just 499. Just one day to save but a lifetime to learn.</p>
        </div>
      </div>
    )
  }

  export default Saleimage