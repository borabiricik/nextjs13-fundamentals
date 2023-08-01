"use client";

const TodoError = () => {
  return (
    <div>
      <p className="text-red-400">Something went wrong in Todo Segment !</p>
      <ol className="list-item">
        <li>
          😎 So each Parallel Route (Segment) can have its own error.tsx,
          loading.tsx etc.
        </li>
        <li>🤩 You can consider them as a page inside page</li>
        <li>
          🫠 Also you can evaluate the this logic to modals, popups etc.{" "}
          <span className="text-blue-400">Isn‘t it fascinating ?</span>
        </li>
      </ol>
    </div>
  );
};

export default TodoError;
