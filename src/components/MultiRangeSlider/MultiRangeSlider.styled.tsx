import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  margin: 10px 0;
`;

export const RangeValues = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const SliderWrapper = styled.div`
  position: relative;
  height: 6px;
`;

export const SliderTrack = styled.div`
  position: absolute;
  width: 100%;
  height: 6px;
  border-radius: 5px;
  background: #ddd;
`;

export const SliderRange = styled.div`
  position: absolute;
  height: 6px;
  border-radius: 5px;
  background: #415257;
`;

export const SliderThumb = styled.input<{ $position: "left" | "right" }>`
  position: absolute;
  width: 100%;
  height: 6px;
  margin: 0;
  pointer-events: none;
  appearance: none;
  background: none;
  z-index: 1;

  &::-webkit-slider-thumb {
    appearance: none;
    pointer-events: auto;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #415257;
    border: 3px inset white;
    box-shadow: 0 1px 4px #0003;
    cursor: grab;
  }
`;
