import './App.css'


import img1 from './assets/images/1.jpg'
import img2 from './assets/images/2.jpg'
import img3 from './assets/images/3.jpg'
import img4 from './assets/images/4.jpg'
import img5 from './assets/images/5.jpg'
import img6 from './assets/images/6.jpg'


function ResortCard(props) {
  return (
    <div className="resort-card">
      <img src={props.image} alt={props.country} />
      <h3>{props.country}</h3>
      <p className="resort-name">{props.resort}</p>
      <p className={props.rating >= 4.0 ? "rating green" : "rating red"}>
        {props.rating} ★
      </p>
      <p className="price">{props.price}</p>
    </div>
  )
}


function App() {
  return (
    <div>
      <h1>Resorts Lite</h1>
      <hr />
      <div className="resort-container">
        <ResortCard
          image={img1}
          country="Indonesia"
          resort="Gili Air Hotel"
          rating={4.8}
          price="$589/night"
        />
        <ResortCard
          image={img2}
          country="Seychelles"
          resort="Hilton Resort"
          rating={4.2}
          price="$629/night"
        />
        <ResortCard
          image={img3}
          country="US Virgin Islands"
          resort="Goa Resort"
          rating={3.5}
          price="$485/night"
        />
        <ResortCard
          image={img4}
          country="Bahamas"
          resort="Kuredu Resort"
          rating={4.1}
          price="$729/night"
        />
        <ResortCard
          image={img5}
          country="Mauritius"
          resort="Trou D'eau Douce"
          rating={4.9}
          price="$877/night"
        />
        <ResortCard
          image={img6}
          country="Bermuda"
          resort="Staniel Cay Hotel"
          rating={3.2}
          price="$365/night"
        />
      </div>
    </div>
  )
}

export default App