export const changeUserName = ({ username }) => ({
  type: "CHANGE_USERNAME",
  username,
})

export function changeStatus({ status }) {
  return {
    type: "CHANGE_STATUS",
    status,
  }
}