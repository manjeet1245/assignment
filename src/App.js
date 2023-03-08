import './App.css';
import data from './data.json';
function App() {
  return (
    <div className="App">
      {
        data.map((m, index) => (
          <div>
            <div>{m?.rating}</div>
            <div> {m?.name}</div>
            <div>{m?.company}</div>
            <div ><img
              src={m?.pic} style={{width:300,height:200}}
            /></div>
            <div>{m?.desc}</div>
          </div>
        ))


      }
    {/* /  <button className='btn'>Book a Session</button> */}
    </div>
  );
}

export default App;
