import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store";

import { updateUsage } from "../../pages/LivingRoomPage/LivingRoomSlice";
import { useEffect, useState } from "react";

import {
  InputWrapper,
  InputGroup,
  InputLabel,
  Select,
  Input,
  UpdateButton,
  Container,
} from "./InputUsage.styled";

function InputUsage() {
  const dispatch = useDispatch<AppDispatch>();

  const usageData = useSelector(
    (state: RootState) => state.livingRoom.usageData,
  );

  const [selectedMonth, setSelectedMonth] = useState("January");
  const [usage, setUsage] = useState(0);

  const currentUsage = usageData.find(
    (item) => item.month === selectedMonth,
  )?.usage;

  useEffect(() => {
    setUsage(currentUsage ?? 0);
  }, [currentUsage]);

  const handleUpdate = () => {
    dispatch(
      updateUsage({
        month: selectedMonth,
        usage,
      }),
    );
  };

  return (
    <Container>
      <InputWrapper>
        <InputGroup>
          <InputLabel>Select Month</InputLabel>

          <Select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {usageData.map((item) => (
              <option key={item.month} value={item.month}>
                {item.month}
              </option>
            ))}
          </Select>
        </InputGroup>

        <InputGroup>
          <InputLabel>Usage (kWh)</InputLabel>

          <Input
            type="number"
            min="0"
            max="100"
            value={usage}
            onChange={(e) => setUsage(Number(e.target.value))}
          />
        </InputGroup>

        <UpdateButton type="button" onClick={handleUpdate}>
          Update
        </UpdateButton>
      </InputWrapper>
    </Container>
  );
}

export default InputUsage;
