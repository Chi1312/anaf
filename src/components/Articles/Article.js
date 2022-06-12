function Article(props) {
  return (
    <div className="article">
      <a href="#" className="article-link">
        {props.title}
      </a>
      <span className="article-date">{props.date}</span>
      <p className="article-paragraph">{props.content}</p>
    </div>
  );
}

export default Article;
