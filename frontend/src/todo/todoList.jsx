import React from 'react'
import {connect} from 'react-redux'

import IconButton from '../template/iconButton'


const TodoList = props => {

    const renderRows = () => {
        
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton style='danger' icon='trash-o' 
                        onClick={() => props.handleRemove(todo)}/>
                </td>
            </tr>
        ))
    }

    return(
        <table className='table'>
            <thead>
                <th>Descrição</th>
                <th>Ações</th>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list}) 

export default connect(mapStateToProps)(TodoList)