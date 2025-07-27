import { useEffect, useState } from 'react'
import Card from './Components/Card.jsx';
import { useParams } from "react-router"; 

function SearchNews({article}) {
  const key='183552bd0da6576ef890ef244b0ca5af'
  const[news,setNews]=useState([]);
  let {query} = useParams();

  useEffect(()=>{
  const url=`https://gnews.io/api/v4/search?q=${query}&lang=en&country=in&max=10&apikey=${key}`
    fetch(url)
    .then(response=>response.json())
    .then(data=>{setNews(data.articles); console.log(data.articles)})
    .catch(error=>console.error(error))
  },[query])
   
  return (
    <>
      <div className="container py-5">
        <div className="row">
          {news.map((article,index)=>{
              return (
                <div className="col-md-4 mb-3" key={index}>
                  <Card article={article}/>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
    )
}

export default SearchNews