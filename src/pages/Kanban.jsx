import { Header } from "../components";
// import {
//   KanbanComponent,
//   ColumnDirective,
//   ColumnsDirective,
// } from "@syncfusion/ej2-react-kanban";

import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";

const Kanban = () => {
  const data = [
    {
      OrderID: 10248,
      CustomerID: "VINET",
      EmployeeID: 5,
      ShipCountry: "France",
      Freight: 32.38,
    },
    {
      OrderID: 10249,
      CustomerID: "TOMSP",
      EmployeeID: 6,
      ShipCountry: "Germany",
      Freight: 11.61,
    },
    {
      OrderID: 10250,
      CustomerID: "HANAR",
      EmployeeID: 4,
      ShipCountry: "Brazil",
      Freight: 65.83,
    },
  ];
  return (
    <section className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Kanban" />
      {/* <KanbanComponent>
        <ColumnsDirective>
          <ColumnDirective headerText="To Do"></ColumnDirective>
          <ColumnDirective headerText="In Progress"></ColumnDirective>
          <ColumnDirective headerText="Done"></ColumnDirective>
        </ColumnsDirective>
      </KanbanComponent> */}
      <GridComponent dataSource={data}>
        <ColumnsDirective width="100%">
          <ColumnDirective field="OrderID" width="100" textAlign="Right" />
          <ColumnDirective field="CustomerID" width="100" />
          <ColumnDirective field="EmployeeID" width="100" textAlign="Right" />
          <ColumnDirective
            field="Freight"
            width="100"
            format="C2"
            textAlign="Right"
          />
          <ColumnDirective field="ShipCountry" width="100" />
        </ColumnsDirective>
      </GridComponent>
    </section>
  );
};

export default Kanban;
