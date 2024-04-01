import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  DragAndDrop,
  Resize,
  TimelineYear,
} from "@syncfusion/ej2-react-schedule";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekxwWmFZfVpgdV9EZFZSR2Y/P1ZhSXxXdkZgWX5dcnBWRWNbWUM="
);
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";

const baseAPI = "http://localhost:8080/api/";
// async function to fetch scheduleData

import eventData from "../data/events.json";

const Calendar = () => {
  // get json data to array
  const [scheduleData, setScheduleData] = useState([]);
  const fetchScheduleData = async () => {
    try {
      const response = await axios.get(`${baseAPI}events`);

      // convert time to local time

      response.data.forEach((event) => {
        event.StartTime = new Date(event.StartTime);
        event.EndTime = new Date(event.EndTime);
      });

      console.log("fetching schedule data, scheduleData: ", response.data);
      setScheduleData(response.data);
    } catch (error) {
      console.error("Error fetching schedule data: ", error);
    }
  };
  useEffect(() => {
    fetchScheduleData();
  }, []);
  return (
    <main className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-slate-100 rounded-3xl">
      <Header title="Calendar" />
      <ScheduleComponent
        height={550}
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date()}
        currentView="Month"
      >
        <Inject
          services={[
            Day,
            Week,
            WorkWeek,
            Month,
            Agenda,
            Resize,
            DragAndDrop,
            TimelineYear,
          ]}
        />
      </ScheduleComponent>
    </main>
  );
};

export default Calendar;
