import React from 'react'
import { useParams } from 'react-router-dom'

function Team() {
    let { name } = useParams()
    return (
        <div className="team">
            Salam, {name}
        </div>
    )
}

export default Team;