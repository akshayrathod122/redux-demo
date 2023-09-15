import React from 'react'
import { Link } from 'react-router-dom'

const Dashborad = () => {
    return (
        <div>
            <center>
                <Link to={ '/add' }>
                    <button>Add</button>
                </Link>
                <Link to={ '/list' }>
                    <button>List</button>
                </Link>
            </center>
        </div>
    )
}

export default Dashborad