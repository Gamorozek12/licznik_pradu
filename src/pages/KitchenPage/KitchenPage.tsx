import data from "../../data.json";
import {
  TableContainer,
  TableHeader,
  TableBody,
  Row,
  Col,
} from "./KitchenPage.styled";
import Header from "../../components/Header";

function KitchenPage() {
  console.log("data: ", data[1]);

  const columns: string[] = [];

  data.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (!columns.includes(key)) {
        columns.push(key);
      }
    });
  });

  return (
    <>
      <Header name="Kitchen" />

      <TableContainer>
        <TableHeader>
          {columns.map((key) => (
            <Col>{key}</Col>
          ))}
        </TableHeader>

        <TableBody>
          {data.map((item: any) => (
            <Row>
              {columns.map((key) => {
                const value = item[key];
                let displayValue = value;

                if (typeof value === "boolean") {
                  displayValue = value ? "true" : "false";
                }

                return <Col>{displayValue}</Col>;
              })}
            </Row>
          ))}
        </TableBody>
      </TableContainer>
    </>
  );
}

export default KitchenPage;
