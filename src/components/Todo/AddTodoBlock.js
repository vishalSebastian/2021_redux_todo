import React from 'react'

const AddTodoBlock = ({ handleInputChange, addTodo,inputValue }) => {
  return (
    <div className="row m-1 p-3">
      <div className="col mx-5 p-2">
        <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
          <div className="col">
            <input
              className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
              type="text"
              value={inputValue}
              placeholder="Add new .."
              onChange={handleInputChange}
            />
          </div>
          <div className="col-auto px-0 mx-0 mr-2">
            <button
              type="button"
              className="btn primary-back"
              onClick={addTodo}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTodoBlock
