import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  ViewsDirective,
  ViewDirective,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekxwWmFZfVpgdV9EZFZSR2Y/P1ZhSXxXdkZgWX5dcnBWRWNbWUM="
);

// import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

import Header from "../components/Header";

const Calendar = () => {
  return (
    <main className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-slate-100 rounded-3xl">
      <Header title="Calendar" />
      <ScheduleComponent height={600}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </main>
  );
};

export default Calendar;
