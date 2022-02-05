export const ProjectCard = (props) => {
  return (
    <div className="card">
      <div>{props.title}</div>
      <p>{props.description}</p>
      <div></div>
    </div>
  );
};
