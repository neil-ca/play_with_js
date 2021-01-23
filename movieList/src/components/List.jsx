import * as React from 'react'
import Card from './Card'

function List(props) {
    return (
        <div className="box">
            <h1>List of movies {props.name}</h1>
            <Card />
        </div>
    )
}
export default List;