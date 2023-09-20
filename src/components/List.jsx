import React from 'react'
import { useSelector } from 'react-redux'

function List() {
    const allData = useSelector(state => state.LogInData);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.map((ele, index) => (
                            <tr key={ index }>
                                <td>{ index + 1 }</td>
                                <td>{ ele.name }</td>
                                <td>{ ele.number }</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List