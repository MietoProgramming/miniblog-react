export const Todos = ({ todos }) => {
  //todo: 2 divy - 1 jako box na todosy a 2 jako obrócony i relative jaki kancik z chmurki dialogowej
  return (
    <div>
      <div></div>
      todos.map( todo =>{" "}
      {
        <li className={todo.completed ? completedTask : uncompletedTask}>
          {todo.text}
        </li>
      }
      )
    </div>
  );
};
