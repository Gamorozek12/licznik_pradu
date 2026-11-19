import {
  ChartWrapper,
  LineContainer,
  FiltersContainer,
  FilterTitle,
  FilterGroup,
  ApplyButton,
} from "./LineChart.styled";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store";
import {
  setFilters,
  applyFilters,
  months,
} from "../../pages/LivingRoomPage/LivingRoomSlice";
import { Line } from "react-chartjs-2";
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";
import MonthRangePicker from "../MonthRangePicker/MonthRangePicker";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

function LineChart() {
  const dispatch = useDispatch<AppDispatch>();

  const { usageData, filters, appliedFilters } = useSelector(
    (state: RootState) => state.livingRoom,
  );

  const filteredMonths = usageData.filter((item) => {
    const monthIndex = months.indexOf(item.month);

    return (
      monthIndex >= months.indexOf(appliedFilters.dateFrom) &&
      monthIndex <= months.indexOf(appliedFilters.dateTo)
    );
  });

  const chartData = {
    labels: filteredMonths.map((item) => item.month),
    datasets: [
      {
        data: filteredMonths.map((item) =>
          item.usage >= appliedFilters.usageMin &&
          item.usage <= appliedFilters.usageMax
            ? item.usage
            : null,
        ),
        borderColor: "#c0b1b1",
        borderWidth: 4,
        pointRadius: 2.5,
        tension: 0.3,
      },
    ],
  };

  const options = {
    pointHoverBackgroundColor: "white",
    scales: {
      x: {
        ticks: {
          color: "#2a2a2a",
        },
      },
      y: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: "kWh",
          color: "#2a2a2a",
        },
        ticks: {
          color: "#2a2a2a",
          stepSize: 10,
        },
      },
    },
  };

  return (
    <ChartWrapper>
      <LineContainer>
        <Line data={chartData} options={options} />
      </LineContainer>

      <FiltersContainer>
        <FilterTitle>FILTERS</FilterTitle>

        <FilterGroup>
          Select month range
          <MonthRangePicker
            startMonth={filters.dateFrom}
            endMonth={filters.dateTo}
            onChange={([dateFrom, dateTo]) =>
              dispatch(
                setFilters({
                  ...filters,
                  dateFrom,
                  dateTo,
                }),
              )
            }
          />
        </FilterGroup>

        <FilterGroup>
          Select usage range (kWh)
          <MultiRangeSlider
            min={0}
            max={100}
            step={10}
            value={[filters.usageMin, filters.usageMax]}
            onChange={([usageMin, usageMax]) =>
              dispatch(
                setFilters({
                  ...filters,
                  usageMin,
                  usageMax,
                }),
              )
            }
          />
        </FilterGroup>

        <ApplyButton type="button" onClick={() => dispatch(applyFilters())}>
          Apply filters
        </ApplyButton>
      </FiltersContainer>
    </ChartWrapper>
  );
}

export default LineChart;
