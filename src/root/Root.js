import React, { useState, useEffect } from "react";
import { todolistArray } from "../localData/localData";
import TodolistDisplay from "../components/TodolistDisplay/TodolistDisplay";
import TodolistForm from "../components/TodolistForm/TodolistForm";
import TodolistSort from "../components/TodolistSort/TodolistSort";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 30px auto;
`;

const Root = () => {
  const [todolist, setTodolist] = useState([...todolistArray]);
  const [pageSize, setPageSize] = useState(5);
  const [indexStart, setIndexStart] = useState(-1);
  const [indexEnd, setIndexEnd] = useState(5);
  const [newTasksList, setNewTasksList] = useState([]);
  const [mainList, setMainList] = useState([...todolistArray]);
  const [addTaskVisability, setAddTaskVisability] = useState(false);

  const addTaskToList = (e) => {
    e.preventDefault();

    const todoListName = e.target.todolistName.value;

    const newTask = {
      taskName: todoListName,
      done: false,
    };

    if (todoListName != "") {
      setNewTasksList([...newTasksList, newTask]);
    } else {
      alert("do not leave empty spaces");
    }

    e.target.reset();
  };

  const goToNextPage = () => {
    if (indexEnd === todolistArray.length) {
      setTodolist([...newTasksList]);
    } else if (indexEnd <= todolistArray.length) {
      setIndexStart(indexStart + pageSize);
      setIndexEnd(indexEnd + pageSize);
    }
  };

  const goToPreviousPage = () => {
    if (indexStart > -1) {
      setIndexStart(indexStart - pageSize);
      setIndexEnd(indexEnd - pageSize);
    }
  };

  useEffect(() => {
    getTodolist();
  }, [pageSize, indexStart]);

  const increasePageSize = (e) => {
    setPageSize(parseInt(e.target.value));
    setIndexEnd(parseInt(e.target.value));
    setIndexStart(-1);
  };

  const getTodolist = () => {
    const filteredList = mainList.filter((todo) => {
      const index = mainList.indexOf(todo);
      if (index > indexStart && index < indexEnd) {
        return todo;
      }
    });
    setTodolist([...filteredList]);
  };

  const changeTaskToDone = (taskName) => {
    const sortedList = todolist.map((todo) => {
      if (todo.taskName === taskName) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodolist([...sortedList]);
  };

  const sortByDoneTasks = () => {
    const sortedList = todolist.sort((a, b) => {
      return b.done - a.done;
    });
    setTodolist([...sortedList]);
  };

  const sortByUndoneTasks = () => {
    const sortedList = todolist.sort((a, b) => {
      return a.done - b.done;
    });
    setTodolist([...sortedList]);
  };

  const sortListAscendingByName = () => {
    const sortedList = todolist.sort((a, b) =>
      a.taskName.localeCompare(b.taskName)
    );
    setTodolist([...sortedList]);
  };

  const sortListDescendingByName = () => {
    const sortedList = todolist
      .sort((a, b) => a.taskName.localeCompare(b.taskName))
      .reverse();
    setTodolist([...sortedList]);
  };

  const removeRow = (taskName) => {
    const filteredList1 = todolist.filter((todo) => todo.taskName !== taskName);
    const filteredList2 = mainList.filter((todo) => todo.taskName !== taskName);
    const filteredList3 = newTasksList.filter(
      (todo) => todo.taskName !== taskName
    );
    setTodolist([...filteredList1]);
    setMainList([...filteredList2]);
    setNewTasksList([...filteredList3]);
  };

  return (
    <>
      <MainDiv>
        <h1>TODOLIST</h1>
        <TodolistForm
          addTaskToList={addTaskToList}
          addTaskVisability={addTaskVisability}
          setAddTaskVisability={setAddTaskVisability}
        />
        <TodolistSort
          sortListAscendingByName={sortListAscendingByName}
          sortListDescendingByName={sortListDescendingByName}
          sortByDoneTasks={sortByDoneTasks}
          sortByUndoneTasks={sortByUndoneTasks}
        />
      </MainDiv>
      <TodolistDisplay
        todolist={todolist}
        pageSize={pageSize}
        changeTaskToDone={changeTaskToDone}
        removeRow={removeRow}
        increasePageSize={increasePageSize}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        todolistArray={todolistArray}
        indexStart={indexStart}
        indexEnd={indexEnd}
      />
    </>
  );
};

export default Root;
