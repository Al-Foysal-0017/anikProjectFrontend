import "./container.css";

const Container = ({ children, style, className }) => {
  return (
    <div className="alumni__container">
      <div className={className} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Container;
