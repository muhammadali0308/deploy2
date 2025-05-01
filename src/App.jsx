import './App.css'
import a from "./a.png";
import b from "./b.png";
import c from "./c.png";
import d from "./d.png";
import e from "./e.png";
import g from "./g.png";
function App() {

  return (
    <>
     <header className='container'>
      <img src={e} alt=""/>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Home</a></li>
          <button className='btn'>Contact</button>
        </ul>
      </nav>
     </header>
     <main>
      <section className='hero container'>
        <div className="text">
          <h1>Dive into Delights <br/> Of Delectable <span>Food</span></h1>
          <p>Where Each Plate Weaves a Story of Culinary <br /> Mastery and Passionate Craftsmanship</p>
          <div> <button className='btn'>Order Now</button><span className='er'>Watch Video</span> </div>
        </div>
        <img src={a} alt="" />
      </section>
      <section className='hero2 container'>
        <h1 className='der'>Popular Categories</h1>
        <div className="ota">
          <div className="card">
            <div className="dumaloq">
            <img src={c} alt="" />
            </div>
            <p>Dessert</p>
            <h6>(86 dishes)</h6>
          </div>
          <div className="card">
            <div className="dumaloq">
            <img src={c} alt="" />
            </div>
            <p>Dessert</p>
            <h6>(86 dishes)</h6>
          </div>
          <div className="card">
            <div className="dumaloq">
            <img src={c} alt="" />
            </div>
            <p>Dessert</p>
            <h6>(86 dishes)</h6>
          </div>
          <div className="card">
            <div className="dumaloq">
            <img src={c} alt="" />
            </div>
            <p>Dessert</p>
            <h6>(86 dishes)</h6>
          </div>
        </div>
      </section>
      <section className='hero3 container'>
        <h1 className='red'>Standout Dishes <br/> From Our Menu</h1>
        <div className="ota2">
          <div className="card2">
            <img src={d} alt="" />
            <p>Fattoush salad</p>
            <h6>Description of the item</h6>
          </div>
          <div className="card2">
            <img src={d} alt="" />
            <p>Fattoush salad</p>
            <h6>Description of the item</h6>
          </div>
          <div className="card2">
            <img src={d} alt="" />
            <p>Fattoush salad</p>
            <h6>Description of the item</h6>
          </div>
        </div>
      </section>
      <section className='hero4 container'>
        <img src={b} alt="" />
      <div className="text2">
          <h1>What Our Customers <br/> Say About Us</h1>
          <p>“I had the pleasure of dining at Foodi last night, and <br /> I'm still raving about the experience! The attention to <br /> detail in presentation and service was impeccable”</p>
          
        </div>
      </section>
      <section className='hero5 container'>
        <div className="text">
          <h1>Dive into Delights <br/> Of Delectable <span>Food</span></h1>
          <p>Where Each Plate Weaves a Story of Culinary <br /> Mastery and Passionate Craftsmanship</p>
          <div> <button className='btn'>Order Now</button><span className='er'>Watch Video</span> </div>
        </div>
        <img src={g} alt="" />
      </section>
     </main>
    </>
  )
}

export default App
