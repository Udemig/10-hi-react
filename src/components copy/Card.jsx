const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img src={props.item.image} />
      <div className="body">
        <h4 className="category">{props.item.category}</h4>
        <h3>{props.item.title}</h3>
      </div>
    </div>
  );
};

export default Card;
