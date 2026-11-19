import {
  SliderContainer,
  RangeValues,
  SliderWrapper,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from "./MultiRangeSlider.styled";

interface MultiRangeSliderProps {
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onChange: (range: [number, number]) => void;
}

function MultiRangeSlider({
  min = 0,
  max = 100,
  step = 10,
  value,
  onChange,
}: MultiRangeSliderProps) {
  const handleChange = (index: 0 | 1, newValue: number) => {
    const newRange: [number, number] = [...value];
    newRange[index] = newValue;

    if (newRange[0] <= newRange[1]) {
      onChange(newRange);
    }
  };

  const minPosition = (value[0] / max) * 100;
  const maxPosition = (value[1] / max) * 100;
  return (
    <SliderContainer>
      <SliderWrapper>
        <SliderTrack />

        <SliderRange
          style={{
            left: `${minPosition}%`,
            width: `${maxPosition - minPosition}%`,
          }}
        />

        <SliderThumb
          $position="left"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[0]}
          onChange={(e) => handleChange(0, Number(e.target.value))}
          style={{ zIndex: 2 }}
        />

        <SliderThumb
          $position="right"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[1]}
          onChange={(e) => handleChange(1, Number(e.target.value))}
          style={{ zIndex: 3 }}
        />
      </SliderWrapper>
      <RangeValues>
        <span>{value[0]}</span>
        <span>{value[1]}</span>
      </RangeValues>
    </SliderContainer>
  );
}

export default MultiRangeSlider;
