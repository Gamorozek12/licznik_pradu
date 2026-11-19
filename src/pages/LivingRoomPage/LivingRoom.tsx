import Header from "../../components/Header/Header.tsx";
import LineChart from "../../components/LineChart/LineChart.tsx";
import InputUsage from "../../components/InputUsage/InputUsage.tsx";

function LivingRoom() {
  return (
    <div>
      <Header name="Living Room" />
      <InputUsage />
      <LineChart />
    </div>
  );
}

export default LivingRoom;
