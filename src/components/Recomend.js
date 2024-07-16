import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"

function Recomend() {
    return (
      <div class="recomend">
        <h1 class="recomend__title">Recomended for you</h1>
        <p>Pick the best fit</p>
        <div class="recomend__container">
  
          <div class="course-card">
            <img src={c1} alt="Python"></img>
            <h3>2024 Python Data Visualiasation Masterclass</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>₹449<del>₹1999</del></p>
          </div>
  
          <div class="course-card">
            <img src={c2} alt="Python"></img>
            <h3>Web Development Bootcamp 2024</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>₹449<del>₹1999</del></p>
          </div>
  
          <div class="course-card">
            <img src={c3} alt="Python"></img>
            <h3>MasterUI/UX with Sigma</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>₹449<del>₹1999</del></p>
          </div>
          <div class="course-card">
            <img src={c4} alt="Python"></img>
            <h3>Basic to Advance Programming with EMC</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>₹449 <del>₹1999</del></p>
          </div>
        </div>
      </div>
    )
  }

  export default Recomend