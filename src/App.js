function AboutUs(){
    return(
        <div>
            <h1>hello world</h1>
            <p>hello world</p>
        </div>
    )
}
function Portfolio (){
    return(
        <div>
            <ul>
                <li>kuseinova</li>
                <li>aima</li>
                <li>taalaibekovna</li>
            </ul>
        </div>
    )
}


function App() {
  return (
      <div>
        <AboutUs/>
          <Portfolio/>
      </div>
  )
}

export default App;
