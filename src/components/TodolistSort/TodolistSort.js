import React from "react";
import styled from "styled-components";
import sortNameUp from "../../assets/icons/sort-alpha-up.svg";
import sortNameDown from "../../assets/icons/sort-alpha-down.svg";
import sortDone from "../../assets/icons/sort-done.svg";
import sortUndone from "../../assets/icons/sort-undone.svg";

const SortListWrapper = styled.div`
  /* margin: 20px; */
  display: flex;
  /* flex-direction: column; */
  button {
    &:nth-of-type(1) {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border-right: 1px solid #343a40;
    }
    &:nth-of-type(2) {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;

const SortListDiv = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  /* height: 30px; */
`;

const SortListButton = styled.button`
  padding: 5px 10px;
  outline: none;
  color: white;
  border: none;
  background-color: #6c757d;
  cursor: pointer;
`;

const TodolistSort = ({
  sortListAscendingByName,
  sortListDescendingByName,
  sortByDoneTasks,
  sortByUndoneTasks,
}) => {
  return (
    <SortListDiv>
      <SortListWrapper>
        <SortListButton onClick={sortListAscendingByName}>
          <img src={sortNameDown} />
        </SortListButton>
        <SortListButton onClick={sortListDescendingByName}>
          <img src={sortNameUp} />
        </SortListButton>
      </SortListWrapper>
      <SortListWrapper>
        <SortListButton onClick={sortByDoneTasks}>
          <img src={sortDone} />
        </SortListButton>
        <SortListButton onClick={sortByUndoneTasks}>
          <img src={sortUndone} />
        </SortListButton>
      </SortListWrapper>
    </SortListDiv>
  );
};

export default TodolistSort;
