import "./Card.css";

function Card(props) {
  const classes = "Card " + props.className; //to apply all css style from Card component and other classes on other tags
  return <div className={classes}>{props.children}</div>; //props.children to access the data between the the Component Tag(Card)
}

export default Card;
