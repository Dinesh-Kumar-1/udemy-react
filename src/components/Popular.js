import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"

function Popular() {
    return (
      <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">Pick the best fit</p>
        <div class="popular__container">
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
  
          <div class="course-card">
            <img src={c3} alt="Python"></img>
            <h3>MasterUI/UX with Sigma</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>₹449<del>₹1999</del></p>
          </div>
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
            <img src={c4} alt="Python"></img>
            <h3>Basic to Advance Programming with EMC</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>₹449 <del>₹1999</del></p>
          </div>
        </div>
        <div class="footer">
          <div class="footer__one">
            <div class="footer__one__s1">
              <p>Udemy Business</p>
              <p>Teach on Udemy</p>
              <p>Get the app</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
  
            <div class="footer__one__s2">
              <p>Carrers</p>
              <p>Blog</p>
              <p>Help and Suppot</p>
              <p>Affiliate</p>
              <p>Investors</p>
            </div>
          </div>
          <div class="footer__two">
            <h1>Udemy</h1>
            <p>&copy; Udemy, Inc</p>
          </div>
        </div>
      </div>
    )
  }

  export default Popular