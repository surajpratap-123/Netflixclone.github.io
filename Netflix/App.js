//import logo from './logo.svg';
import './App.css';



 function App() {
       



//=====>>>> netflix front page



function Card(props){
  return(
    
<div className="cards">
<div className="card">
  <img src={props.imgsrc}
    alt="my_pic"
    className="card_img"
  />
  <div className="card_info"><span className="card_category">{props.title}</span>
    <h3 className="card_title" > {props.sname}</h3>
    <a href={props.link} target="blank">
      <button> Watch Now</button>
    </a>

  </div>

</div>
</div>
  )
}

  return (
  
   








    //=====>>>> netflix front page

 
<>
<h1 className="heading_style"> The list of top netflix series</h1>
  <Card imgsrc="https://i.pinimg.com/564x/a4/23/0f/a4230f6c4e62f8a5928d7e48dfc0c823.jpg"
    title=" A NETFLIX ORIGINAL SERIES"
    sname="DARK"
    link="https://www.netflix.com/in/title/80100172"
  />,

  <Card imgsrc="https://dnm.nflximg.net/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeM0ufnLeyZwPTtc9T2-ZkcVGJQ7vKl28yRsoknVQbbCk6ASP_ecL5TsXpvm0bV41Va3FSUj2L0hhNDDCuJfnrf6ZM-YtHhxTewrEtr2gSUuPec_UVGqSDpQ2oHw3NAtjhy6ew.jpg?r=aaf"   
   title=" A NETFLIX ORIGINAL SERIES"
    sname="ETRA CURRICULAR"
    link="https://www.netflix.com/in/title/80990668"/>

    <Card imgsrc="https://m.media-amazon.com/images/I/81PrM6OSfBL._AC_SY741_.jpg"   
   title=" A NETFLIX ORIGINAL SERIES"
    sname="STRANGER THINGS"
    link="https://www.netflix.com/in/title/80057281"/>


    <Card imgsrc="https://wwwflickeringmythc3c8f7.zapwp.com/q:i/r:1/wp:1/w:362/u:https://cdn.flickeringmyth.com/wp-content/uploads/2022/06/The-Sandman-poster-600x750.jpg"   
   title=" A NETFLIX ORIGINAL SERIES"
    sname="THE SANDMAN"
    link="https://www.netflix.com/in/title/81150303"/>

<Card imgsrc="https://assets-prd.ignimgs.com/2022/07/28/lockekey-poster2-1658980029738.jpg"   
   title=" A NETFLIX ORIGINAL SERIES"
    sname="LOCKE & KEY"
    link="https://www.netflix.com/in/title/80241239"/>

<Card imgsrc="https://flxt.tmsimg.com/assets/p12079367_b_v8_an.jpg"   
   title=" A NETFLIX ORIGINAL SERIES"
    sname="THE LAST KINGDOM"
    link="https://www.netflix.com/in/title/80074249"/>
</>













  )
}


export default App;
