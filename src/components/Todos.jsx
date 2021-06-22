export const Todos = ({ todos }) => {
  //todo: 2 divy - 1 jako box na todosy a 2 jako obrócony i relative jaki kancik z chmurki dialogowej
  return (
    <div className="todo">
      <div className="decorationBox"></div>
      <span className="todoTitle">TODO LIST</span>
      <hr />
      <ul>
        {todos
          .sort((a, b) => (a.completed === false ? -1 : 1))
          .map((todo) => {
            return (
              <li
                className={
                  todo.completed ? "task completedTask" : "task uncompletedTask"
                }
              >
                <span>{todo.title}</span>
              </li>
            );
          })}
        ;
      </ul>
    </div>
  );
};
