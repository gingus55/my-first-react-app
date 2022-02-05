import "./Header.css";

export const Header = (props) => {
  return (
    <header className="header">
      <h1 className="title">{props.title}</h1>
      <h2 className="title">{props.subtitle}</h2>
    </header>
  );
};
