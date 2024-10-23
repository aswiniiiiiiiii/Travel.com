import React from 'react'
import './Two.css'
import {Parallax} from 'react-parallax'
import SecImg1 from '../assets/sec4.jpg'
import SecImg3 from '../assets/sec5.jpg'
import Him from '../assets/him.jpg'
import Water from '../assets/water.jpg'
import Zer from '../assets/Zer.jpg'
import surf from '../assets/surf.jpeg'
import kayak from '../assets/kay.jpeg'
import scuba from '../assets/deep.jpeg'
import jet from '../assets/sky jet.jpg'
import balloon1 from '../assets/b1.jpg'
import balloon2 from '../assets/b2.jpg'
import balloon3 from '../assets/b3.jpeg'
import balloon4 from '../assets/b4.jpg'
import wave from '../assets/wave.jpg'







const Two = () => {
  return (
    <div style={{width: '100%'}} className='second'>
      <div className="para-second-first">
          <div>
            <h3 className='connect '>Explore the World </h3>
            <p className='connect-des'>Exploring the world is an adventure that broadens the mind and nourishes the spirit. Each journey brings with it the chance to discover new places, meet people from diverse cultures, and experience life from a fresh perspective. Whether you're hiking through mountains, navigating bustling city streets, or sailing across oceans, the world offers countless wonders waiting to be uncovered. Every destination has its own history, customs, and natural beauty, encouraging us to step outside our comfort zones. </p>
            <a className='see'>See More</a>
          </div>
          <div style={{padding:'1rem'}}>
            <img height={'400px'} src="./images/switzerland.jpg" alt="" />
          </div>
       </div>
       <div  className="App">
      <Parallax className='para-effect'  strength={600} bgImage={SecImg1}>
        <div className="second-content">
          <h4 className='second-text'>Explore the Nature Beauty</h4>
           
        </div>
        
      </Parallax>
       </div>
       <div className="para-second">
          <h1>Explore the nature</h1>
          <div className='explore-body'>
            <div>
              <h2 className='packages-heading'>Packages</h2>
             <div className='packages'>
                <div class="card">
                  <img height={'185px'} src={SecImg1} alt="" />
                <div class="card-container">
                  <h3><b> Cosat River</b></h3> 
                  <p>Experience the beautifull sea view. Boating services are available.A best choice to spent weekends</p> 
                  <button className='btn-see-more'>see More</button>
                </div>
              </div>
               <div class="card">
                  <img height={'185px'} src={Water} alt="" />
                <div class="card-container">
                  <h3><b>Niagara Falls</b></h3> 
                  <p>Three waterfalls that straddle the international border between Canada and the United States</p> 
                  <button className='btn-see-more'>see More</button>
                </div>
              </div>
              <div class="card">
                  <img height={'185px'} src={Zer} alt="" />
                <div class="card-container">
                  <h3><b>Zermatt,Switzerland’s</b></h3> 
                  <p>Zermatt is more than a one-mountain wonder. Climbers have been rocking up here since the mid-19th-century </p> 
                  <button className='btn-see-more'>see More</button>
                </div>
              </div>
              <div class="card">
                  <img height={'185px'} src={Him} alt="" />
                <div class="card-container">
                  <h3><b>himachal pradesh</b></h3> 
                  <p>Himachal is India’s outdoor adventure playground. From trekking and climbing to rafting, paragliding and skiing</p> 
                  <button className='btn-see-more'>see More</button>
                </div>
              </div>
             </div>
            </div>
          </div>
       </div>
       <div  className="App">
      <Parallax className='para-effect'  strength={600} bgImage={wave}>
        <div className="second-content">
          <h4 className='second-text'>Sea Beauty</h4>
        </div>
      </Parallax>
       </div>
       <div className="para-second">
          <h1 >Sea Beauty</h1>
          <div>
              <h2 className='packages-heading'>Sea Side Activities</h2>
             <div className='packages'>
                <div class="card">
                  <img height={'185px'} src={surf} alt="" />
                <div class="card-container">
                  <h3><b> Surfing</b></h3> 
                  <p>Surfing is a surface water sport in which an individual, a surfer, uses a board to ride on the forward section, or face</p> 
                  <button className='btn-see-more'>see More</button>
                </div>
              </div>
               <div class="card">
                  <img height={'185px'} src={kayak} alt="" />
                <div class="card-container">
                  <h3><b> kayaking</b></h3> 
                  <p>A kayak is canoe-like boat in which the paddler sits facing forward, legs in front,using a double-bladed paddle to pull  </p> 
                  <button className='btn-see-more'>see More</button>
                </div>
              </div>
              <div class="card">
                  <img height={'185px'} src={scuba} alt="" />
                <div class="card-container">
                  <h3><b>Scuba diving</b></h3> 
                  <p>Scuba diving is  underwater diving ,divers use breathing equipment that is completely independent of a  breathing gas supply </p> 
                  <button className='btn-see-more'>see More</button>
                </div>
              </div>
              <div class="card">
                  <img height={'185px'} src={jet} alt="" />
                <div class="card-container">
                  <h3><b>Jet Skiing</b></h3> 
                  <p>Jet skiing, also known as personal watercraft (PWC) riding, has become a popular water-based activity </p> 
                  <button className='btn-see-more'>see More</button>
                </div>
              </div>
             </div>
            </div>
          {/* <Slider/> */}
       </div>
       <div  className="App">
      <Parallax className='para-effect'   strength={-600} bgImage={SecImg3}>
        <div className="second-content">
          <h4 className='second-text'>Hot air balloon</h4>
        </div>
      </Parallax>
      <div className="para-second">
      <div>
              <h2 className='packages-heading-hot'>Hot Air Ballon Spots</h2>
             <div className='packages'>
                <div class="card">
                  <img height={'185px'} src={balloon4} alt="" />
                <div class="card-container">
                  <h3><b> Cappadocia, Turkey
                  </b></h3> 
                  <p>One of the world’s most famous hot air balloon destinations is Cappadocia.  flight over the stunning valleys and rock formations</p> 
                  <button className='btn-see-more'>see More</button>
                </div>
              </div>
               <div class="card">
                  <img height={'185px'} src={balloon3} alt="" />
                <div class="card-container">
                  <h3><b> Sedona, Arizona</b></h3> 
                  <p>The iconic red rocks of Sedona, Arizona create a breathtaking landscape under the basket of a hot air balloon.  </p> 
                  <button className='btn-see-more'>see More</button>
                </div>
              </div>
              <div class="card">
                  <img height={'185px'} src={balloon2} alt="" />
                <div class="card-container">
                  <h3><b>Loire Valley, France</b></h3> 
                  <p>The Loire Valley's outstanding vineyards and magnificent castles are just a few of the highlights of this wonderful balloon journey </p> 
                  <button className='btn-see-more'>see More</button>
                </div>
              </div>
              <div class="card">
                  <img height={'185px'} src={balloon1} alt="" />
                <div class="card-container">
                  <h3><b>Albuquerque, New Mexico</b></h3> 
                  <p>Albuquerque is best known as the home of the Albuquerque International Balloon Fiesta.  </p> 
                  <button className='btn-see-more'>see More</button>
                </div>
              </div>
             </div>
            </div>
          {/* <Slider/> */}
       </div>
       </div>
    </div>
  )
}

export default Two
