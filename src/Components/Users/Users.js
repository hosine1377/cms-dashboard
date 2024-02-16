import React, { useEffect, useState } from 'react'
import Errorbox from './../Errorbox/Errorbox'

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://dashbord-cms.liara.run/api/users')
      .then((res) => res.json())
      .then((result) => setUsers(result))
  }, [])
  return (
    <div className="my-5">
      {users.length ? (
        <div>
          <h1 className="fs-5">لیست کاربران</h1>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">نام و نام خانوادگی</th>
                <th scope="col">یوزرنیم</th>
                <th scope="col">رمز عبور </th>
                <th scope="col">شماره تماس</th>
                <th scope="col">ایمیل</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <th scope="row">
                      {user.firsname} {user.lastname}
                    </th>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>
                      <button className="products-table-btn btn mx-2">
                        حذف
                      </button>
                      <button className="products-table-btn btn mx-2">
                        جزییات
                      </button>
                      <button className="products-table-btn btn mx-2">
                        ویرایش
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Errorbox msg={'هیچ کاربری یافت نشد'} />
      )}
    </div>
  )
}

export default Users
