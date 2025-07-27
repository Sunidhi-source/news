import { useEffect,useState } from "react"
import { useParams } from "react-router"
import Card from "./Components/Card"

function News() {
  const key='183552bd0da6576ef890ef244b0ca5af'
  const[news,setNews]=useState([]);
  let {category} = useParams();

  useEffect(()=>{
  const url=`https://gnews.io/api/v4/top-headlines?&apikey=${key}&country=in&lang=en&category=${category}`
    fetch(url)
    .then(response=>response.json())
    .then(data=>{setNews(data.articles); console.log(data.articles)})
    .catch(error=>console.error(error))
  },[category])

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

export default News