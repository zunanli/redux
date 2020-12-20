export function deleteTodoAction(id) {
  return {
    type: "DELETE_TODO",
    payload: id
  };
}
