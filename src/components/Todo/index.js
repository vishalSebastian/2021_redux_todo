import React, { useState, memo } from 'react'
import AddTodoBlock from './AddTodoBlock'
import Heading from './Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const viewConfig = ['ALL', 'PENDING', 'COMPLETED']
const Todo = ({
  heading,
  addTodo,
  deleteTodo,
  handleInputChange,
  inputValue,
  list,
}) => {
  const [selectedView, setSelectedView] = useState(0)

  const filterListView = () => {
    switch (selectedView) {
      case 0:
        return list
      case 1:
        return list.filter((item) => !item.isCompleted)
      case 2:
        return list.filter((item) => item.isCompleted)
    }
  }
  const generateList = () => {
    return filterListView().map((item, index) => {
      return (
        <li className="todo-list-item shadow fade-in all allspacebw" key={`todo-list-${index}`}>
          <input
            type="checkbox"
            checked={item.isCompleted}
            onChange={(e) => {
              handleInputChange(e, {
                keyName: 'isCompleted',
                index,
                value: !item.isCompleted,
              })
            }}
            id="flexCheckDefault"
          />
          <input
            type="text"
            style={item.isCompleted ? { textDecoration: 'line-through' } : {}}
            value={item.value}
            onChange={(e) =>
              handleInputChange(e, {
                keyName: 'value',
                index,
                value: e.target.value,
              })
            }
          />
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(index)} />
        </li>
      )
    })
  }
  return (
    <div className="todo-pane container m-5 p-2 rounded mx-auto  shadow">
      <Heading heading={heading} />
      <AddTodoBlock
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        addTodo={addTodo}
      />
      <div className="p-2 mx-4 border-black-25 border-bottom" />

      <ul className="todo-list mx-5 p-3">
        <ul className="todo-navs">
          {viewConfig.map((item, idx) => (
            <li
              key={`config-view${idx}`}
              className={`todo-navs-item${
                idx === selectedView ? ' active pulse' : ''
              } shadow`}
              onClick={() => setSelectedView(idx)}
            >
              {item}
            </li>
          ))}
        </ul>
        {generateList()}
      </ul>
    </div>
  )
}

export default memo(Todo)
