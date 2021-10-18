import './Card.css';

function Card(props) {
  const classes = 'card'
  return (
    <div className="card">{props.children}</div>
  );
}

export default Card;
