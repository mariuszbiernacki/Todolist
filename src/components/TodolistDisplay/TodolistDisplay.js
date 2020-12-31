import React from "react";
import styled from "styled-components";
import deleteIcon from "../../assets/icons/delete-icon.svg";
import arrowLeft from "../../assets/icons/arrow-left-square-fill.svg";
import arrowRight from "../../assets/icons/arrow-right-square-fill.svg";

const MainWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
`;

const TaskTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TodolistWrapper = styled.ul`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  list-style: none;
`;

const TodolistItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bababa;
`;

const TodolistName = styled.p`
  margin: 20px;
`;

const TodolistInput = styled.input`
  margin-right: 10px;
`;

const TodolistButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TodolistLabel = styled.label`
  margin: auto 0;
`;

const TodolistButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 10px;
`;

const DownSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const DownSectionSelect = styled.select`
  padding: 0 10px;
  background-color: #6c757d;
  color: white;
  margin-right: 10px;
  height: 30px;
  border-radius: 5px;
`;

const DownSectionButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  img {
    width: 30px;
    &:nth-of-type(1) {
      margin-right: 5px;
    }
  }
  /* margin-left: 10px; */
`;

const TodolistDisplay = ({
  todolist,
  changeTaskToDone,
  removeRow,
  increasePageSize,
  goToNextPage,
  goToPreviousPage,
  indexStart,
  indexEnd,
  todolistArray,
}) => {
  return (
    <MainWrapper>
      <TodolistWrapper>
        {/* <TaskTitleWrapper></TaskTitleWrapper> */}

        {todolist.map((todo) => {
          const { taskName, done } = todo;
          return (
            <TodolistItem key={taskName}>
              <TodolistName>{taskName}</TodolistName>

              <TodolistButtonsWrapper>
                <TodolistInput
                  name="doneTask"
                  id={`${taskName}`}
                  onChange={() => changeTaskToDone(taskName)}
                  type="checkbox"
                  checked={done && true}
                />
                <TodolistLabel htmlFor={`${taskName}`}>done</TodolistLabel>
                <TodolistButton
                  onClick={() => {
                    removeRow(taskName);
                  }}
                >
                  <img src={deleteIcon} />
                </TodolistButton>
              </TodolistButtonsWrapper>
            </TodolistItem>
          );
        })}
      </TodolistWrapper>

      <DownSectionWrapper>
        <DownSectionSelect
          onChange={increasePageSize}
          name="increasePageSize"
          id="increasePageSize"
        >
          <option value="0">page size</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </DownSectionSelect>

        <div>
          <DownSectionButton
            disabled={indexStart == -1 ? true : false}
            onClick={goToPreviousPage}
          >
            <img src={arrowLeft} />
          </DownSectionButton>
          <DownSectionButton
            disabled={indexEnd > todolistArray.length ? true : false}
            onClick={goToNextPage}
          >
            <img src={arrowRight} />
          </DownSectionButton>
        </div>
      </DownSectionWrapper>
    </MainWrapper>
  );
};

export default TodolistDisplay;
