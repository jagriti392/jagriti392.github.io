import './Home.css';

const Home =()=>{
    return(
     <>
     <div id='home' className='count'>
    <div className="home-containar">
        <div className="homeBox">
            <div className="home-left-side">
                <h3 style={{color:"white"}}>Hii, </h3>
                    <h5 style={{color:"white"}}> I'm <span style={{color:"white", fontSize:"50px"}}>Jagriti Upadhyay</span></h5>
                    <h6 style={{color:"white"}}>Welcome To My Portfolio!</h6>
                    <h4 style={{color:"white"}}> <span style={{color:"white", fontSize:"50px"}}>F</span>ull Stack <span style={{color:"white", fontSize:"50px"}}>W</span>eb <span style={{color:"white", fontSize:"50px"}}>D</span> eveloper</h4>
                    <div className="resumeButton">
                   <a href="https://drive.google.com/file/d/1rmAnQSIRp5p-Xy3xgO-dX7KThTKAytH0/view?usp=sharing" rel='norerrer' target='black'>
                    <button style={{width:"150px",fontWeight:"800", height:"45px", color:"white", backgroundColor:"black", cursor:"pointer",border:"5px  solid white", marginLeft:"150px"}}>View Resume
                        <span className='icon'><ion-icon name="eye"></ion-icon></span>
                    </button>
                   </a>
                </div> 
            </div>
            <div className="home-right-side">
                <div>
                    <img src="https://ca.slack-edge.com/T056QHT26Q0-U05A8T3T7LK-57af76e98ed5-512" alt="" />
                </div>
            </div>
        </div>
    </div>
      </div>

     </>
    )
}
export default Home;