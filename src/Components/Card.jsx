
function Card({article}) {
  return (
    <>
    <div className="card" style={{minHeight:550}}>
  <img src={article.image} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{article.title}</h5>
    <p className="card-text">{article.description} </p>
    <a href={article.url} className="btn btn-success" target="blank">Read More</a>
  </div>
</div>

    </>
  )
}

export default Card