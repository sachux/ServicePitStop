import { useEffect, useState } from "react"

function RequestTable() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("https://jakxwpcp84.execute-api.eu-north-1.amazonaws.com/prod/products")
      .then(response => response.json())
      .then(json => setUsers(json))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Users</h1>
          <table border={1}>
            <tr>
              <th>Product</th>
              <th>User Email</th>
              <th>Title</th>
              <th>Description</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Prioirty</th>
            </tr>
            {users.map(user => (
              <tr>
                <td>{user.product}</td>
                <td>{user.userdetails}</td>
                <td>{user.title}</td>
                <td>{user.description}</td>
                <td>{user.brand}</td>
                <td>{user.type}</td>
                <td>{user.priority}</td>

              </tr>
            ))}
          </table>
        </>
      )}
    </div>
  )
}

export default RequestTable