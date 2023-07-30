import './App.css';
import {useState,useEffect} from 'react'

function App() {
  let [index,setIndex] = useState(0)
  let [quote,setQuote] = useState([{text:"",author:""}])
  useEffect(()=>{
    fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(res => setQuote(res))
    .catch(err => console.log(err))
  },[])
  let text = quote[index].text
  let author = quote[index].author
  return (
    <div className='body'>
      <div className='box '  id="quote-box">
        <div className='quote'>
          <div className='quoteContain'>
            <i className='fa fa-quote-left'></i>
            <h3 id="text">{text}</h3>
            {console.log(quote)}
          </div>
          <div className='quoteAuthor'  id="author">
            {author.slice(0,author.indexOf(', type.fit'))}
          </div>
        </div>
        <div className='buttonSection'>
          <a id="tweet-quote" target='_top' href={`http://www.twitter.com/intent/tweet?text=${encodeURIComponent('"' + quote[index].text + '" \n' + author.slice(0,author.indexOf(', type.fit')))}`}>
          <i className='fa fa-twitter'></i>
          Twitter
          </a>
          <button onClick={()=> setIndex(e=> {
            if(e === 15) return 0;
            return e+1;
            })} id="new-quote">
              Next One
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
