import React from "react";
import styled from "styled-components";

const MainForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  padding: 25px;
  border-bottom: 1px solid #6c757d;
`;

const TodoFormButton = styled.button`
  padding: 5px 10px;
  outline: none;
  color: white;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #6c757d;
  cursor: pointer;
`;

const TodoFormH2 = styled.h2`
  text-align: center;
  margin: 5px;
`;

const TodoFormInput = styled.input`
  padding: 5px;
  flex-grow: 1;
  border: 1px solid #6c757d;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: none;
`;
const TodolistForm = ({
  addTaskToList,
  addTaskVisability,
  setAddTaskVisability,
}) => {
  return (
    <>
      {/* {addTaskVisability === false ? (
        <TodoFormButton onClick={() => setAddTaskVisability(true)}>
          add Task
        </TodoFormButton>
      ) : ( */}
      <div style={{}}>
        <MainForm onSubmit={addTaskToList}>
          <TodoFormInput
            name="todolistName"
            id="todolistName"
            type="text"
            placeholder="add your task"
          />
          <TodoFormButton type="submit">submit</TodoFormButton>
        </MainForm>
        {/* <TodoFormButton onClick={() => setAddTaskVisability(false)}>
            cancel adding new task
          </TodoFormButton> */}
      </div>
      {/* )} */}
    </>
  );
};

export default TodolistForm;

/*

*/
