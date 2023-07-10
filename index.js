const Button = (props) => {
  const { children, className } = props;
  return <button className={className}>{children}</button>;
};

const element = (
  <div className="main-bgm">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <Button className="btn like">Like</Button>
      <Button className="btn comment">Comment</Button>
      <Button className="btn share">Share</Button>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
