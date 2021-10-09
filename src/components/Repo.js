import { useParams } from "react-router-dom"

export default () => {
    const { repoId } = useParams()
    return <h1>Repo ID: {repoId} </h1>
}