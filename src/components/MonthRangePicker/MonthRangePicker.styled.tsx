import styled from "styled-components";

export const DatePickerWrapper = styled.div`
  position: relative;
  z-index: 4;

  .react-datepicker {
    border-radius: 10px;
    border: 3px solid #ddd;
  }

  .react-datepicker_current-month {
    display: none;
  }

  .react-datepicker__navigation {
    display: none;
  }
`;
