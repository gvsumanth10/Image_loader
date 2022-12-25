import './App.css';

import {useState} from 'react';

function App() {
  const [inputarr, setinputarr] = useState([])
  const [input, setinput] = useState({URL1 :""},{URL2 :""},{URL3 :""})
  const [error,setError]=useState(false)
  
  function handleChange(event){
    setinput({...input,[event.target.name]:event.target.value})
  }

  let {URL1,URL2,URL3}=input;

  function handleSubmit(e)
  {
    e.preventDefault();
    
    setinputarr([...inputarr,{URL1,URL2,URL3}]);
    if((URL1.length && URL2.length && URL3.length)===0)
    {
      setError(true)
    }
    console.log(inputarr);
    // console.log(input);
  }


  return (
    <div className="App">
      <div className="head"><h1>Image Loader</h1></div>
      <form>
        <table>
          <label>Image URL 1</label><br></br>
          <input type="text" name="URL1" placeholder="Enter the Image URL 1" value={input.URL1} onChange={handleChange} /><br></br>
          <label>Image URL 2</label><br></br>
          <input type="text" name="URL2" placeholder="Enter the Image URL 2" value={input.URL2} onChange={handleChange} /><br></br> 
          <label>Image URL 3</label><br></br>
          <input type="text" name="URL3" placeholder="Enter the Image URL 3" value={input.URL3} onChange={handleChange} />
          {error && (URL1.length && URL2.length && URL3.length)<=0?
          <label id='error'>*Input field should not be empty</label>:""}
        </table>
          <input type="submit_btn" value="Create" onClick={handleSubmit}/>
      </form>
      <h1>Image List</h1>
      <div className='output'>
        {
          inputarr.map((value, index)=>{
                return(
                  <div class="row" key={index}>
                    <img src={value.URL1} alt="img1"/>
                    <img src={value.URL2} alt="img2"/>
                    <img src={value.URL3} alt="img3"/>
                  </div>
                );
            }
          )
        }
        </div>
    </div>
  );
}

export default App;

