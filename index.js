const Box = (props) => {
  //  Write your code here.
  {text, className}=props;
  <div className={className}>
    <p className="size"> {text} </p>
  </div>
};

const element = (
  //  Write your code here.
  <div class="container">
    <h1 className="heading">Boxes</h1>
    <div className="card-container">
      <Box text="Small" className="bg-container1"/>
      <Box text="Medium" className="bg-container2"/>
      <Box text="Large" className="bg-container3"/>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
