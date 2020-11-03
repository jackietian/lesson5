export function changeUserName({ username }) {
  return {
    type: "CHNAGE_USERNAME",
    username,
  };
}

export function changeStatus({ status }) {
  return {
    type: "CHANGE_STATUS",
    status,
  }
}