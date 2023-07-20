import React from 'react'


const UserData = ({ users }) => {
  return (
    <>
      {
        users.map((user) => {
          const { id, name, email } = user;
          const { city, street, zipcode } = user.address;
          return (
            <tr key={id}>
              <td style={{textAlign: "center"}}>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{`${city}, ${street}, ZipCode : ${zipcode}`}</td>
            </tr>

          )

        })
      }
    </>
  )
}

export default UserData