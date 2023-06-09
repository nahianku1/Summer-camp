import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function MyClasses() {
  return (
    <div className="w-[72%]  mt-[20px] mx-[300px]">
        <h2 className="text-2xl w-full  text-center font-bold mb-4">My Classes</h2>
        <table>
              <thead>
                <tr>
                  <th>Class Pic</th>
                  <th>Class Name</th>
                  <th>Instructor Name</th>
                  <th>Instructor Email</th>
                  <th>Seats</th>
                  <th>Price</th>
                  <th>Total Enrolled</th>
                  <th>Feedback</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr key={crypto.randomUUID()}>
                    <td>
                        <img src="/images/logo.png" className='block w-[60px]' alt="" />
                    </td>
                    <td>Chinese</td>
                    <td>Nahian bin</td>
                    <td>himelku12gmail.com</td>
                    <td>33</td>
                    <td>33</td>
                    <td>3</td>
                    <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe tenetur ut quos exercitationem</td>
                    <td>pending</td>
                    <td>
                     
                        <button
                          className="px-[15px] py-[10px] bg-orange-400 "
                         
                        >
                          Update
                        </button>
                    
                    </td>
                  </tr>
         
              </tbody>
            </table>
    </div>
  )
}

export default MyClasses