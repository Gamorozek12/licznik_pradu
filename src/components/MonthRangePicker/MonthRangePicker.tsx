import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerWrapper } from "./MonthRangePicker.styled";

interface MonthRangePickerProps {
  startMonth: string;
  endMonth: string;
  onChange: (range: [string, string]) => void;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function MonthRangePicker({
  startMonth,
  endMonth,
  onChange,
}: MonthRangePickerProps) {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    new Date(2026, months.indexOf(startMonth)),
    new Date(2026, months.indexOf(endMonth)),
  ]);

  const [startDate, endDate] = dateRange;

  const handleChange = (dates: [Date | null, Date | null]) => {
    setDateRange(dates);

    if (dates[0] && dates[1]) {
      onChange([months[dates[0].getMonth()], months[dates[1].getMonth()]]);
    }
  };

  return (
    <DatePickerWrapper>
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={handleChange}
        showMonthYearPicker
        dateFormat="MMMM"
        placeholderText="Select month range"
      />
    </DatePickerWrapper>
  );
}

export default MonthRangePicker;
