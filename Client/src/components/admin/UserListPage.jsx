import React from 'react'
import UserList from '../../pages/admin/UserList';

function UserListPage() {
  return (
    <div className="user-list-page">
      <h3 className="text-5xl font-bold text-red-600 pt-5 custom-text-shadow">User List</h3>
      <UserList />
    </div>
  )
}

export default UserListPage