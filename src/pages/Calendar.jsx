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
  // const currentDate = new Date();
  // const schedulerData = [
  //   {
  //     startDate: "2024-03-29T09:30",
  //     endDate: "2024-03-29T11:00",
  //     title: "Meeting",
  //   },
  //   {
  //     startDate: "2018-11-01T12:00",
  //     endDate: "2018-11-01T13:30",
  //     title: "Go to a gym",
  //   },
  // ];

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
