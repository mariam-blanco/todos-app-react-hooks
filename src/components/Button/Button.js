import "./Button.css";

const Button = () => (
  <div className="btn-container">
    <button type="submit" className="btn btn--primary">
      <span className="btn__icon">+</span>
      <span className="btn__text">ADD TASK</span>
    </button>
  </div>
);

export default Button;
