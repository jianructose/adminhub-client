import { Header } from "../components";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanGrid } from "../data/utils";
import kanbanData from "../data/kanban-data.json";
// console.log(kanbanData);

const Kanban = () => {
  return (
    <section className="m-2 md:m-10 mt-24 p-4 md:p-10 bg-violet-50 rounded-3xl">
      <Header title="Kanban" />
      <KanbanComponent
        id="kanban"
        height={500}
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{
          contentField: "Summary",
          headerField: "Id",
        }}
        swimlaneSettings={{ keyField: "Assignee" }}
      >
        <ColumnsDirective>
          {kanbanGrid.map((col, idx) => (
            <ColumnDirective key={idx} {...col} /> // spread the column object to pass all the properties to the ColumnDirective
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </section>
  );
};

export default Kanban;
