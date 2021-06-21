export const Todos = ({ todos }) => {
  //todo: 2 divy - 1 jako box na todosy a 2 jako obrócony i relative jaki kancik z chmurki dialogowej
  return (
    <div className="todo">
      <div className="decorationBox"></div>
      <div>TODO LIST</div>
      <hr />
      <ul>
        {todos.map((todo) => {
          return (
            <li
              className={todo.completed ? "completedTask" : "uncompletedTask"}
            >
              {todo.text}
            </li>
          );
        })}
        ;
      </ul>
    </div>
  );
};
