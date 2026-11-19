import styled from "styled-components";

export const ChartWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  gap: 15px;
  padding: 15px;
  background: #415257;
  border: 2px solid #343d32;
  border-radius: 6px;
  box-sizing: border-box;
`;

export const LineContainer = styled.div`
  padding: 20px;
  background: #e6ddc1;
  border: 2px solid #343d32;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background: #c3ba93;
  border: 2px solid #343d32;
  border-radius: 3px;
  box-sizing: border-box;
`;

export const FilterTitle = styled.h3`
  margin: 0;
  padding-bottom: 5px;
  color: #343d32;
  font-size: 20px;
  justify-content: center;
  display: flex;
  justify-content: center;
`;

export const FilterGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #343d32;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;

  select {
    width: 100%;
    height: 35px;
    padding: 0 12px;
    background: #f5f0df;
    border: 2px solid #68715b;
    border-radius: 2px;
    color: #343d32;
    font-size: 14px;
    box-sizing: border-box;
  }
`;

export const ApplyButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #bd6843;
  border: 2px solid #343d32;
  border-radius: 2px;
  color: #fff8e8;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:hover {
    background: #a65332;
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;
  padding: 12px;
  background: #f5e0d5;
  border: 1px solid #bd6843;
  border-radius: 2px;
  color: #9b432b;
  font-size: 13px;
`;
