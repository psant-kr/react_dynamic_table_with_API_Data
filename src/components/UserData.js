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
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{`City : ${city}, Street : ${street}, ZipCode : ${zipcode}`}</td>
            </tr>

          )

        })
      }
    </>
  )
}

export default UserData