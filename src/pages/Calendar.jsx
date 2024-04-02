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
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  DataManager,
  WebApiAdaptor,
  UrlAdaptor,
  WebMethodAdaptor,
  ODataAdaptor,
} from "@syncfusion/ej2-data";

import Header from "../components/Header";

const baseAPI = "http://localhost:8080/api/";
// async function to fetch scheduleData

import eventData from "../data/events.json";
import { Button } from "../components";

const Calendar = () => {
  // get json data to array
  // const [scheduleData, setScheduleData] = useState([]);
  // const fetchScheduleData = async () => {
  //   try {
  //     const response = await axios.get(`${baseAPI}events`);

  //     setScheduleData(response.data);
  //     setTimeout(() => {
  //       console.log("Schedule Data: ", scheduleData);
  //     }, 3000);
  //   } catch (error) {
  //     console.error("Error fetching schedule data: ", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchScheduleData();
  // }, []);

  const dataManager = new DataManager({
    adaptor: new UrlAdaptor(),
    url: `${baseAPI}events`,
    insertUrl: `${baseAPI}events/insert`,
    removeUrl: `${baseAPI}events/delete`,
    updateUrl: `${baseAPI}events/update`,
    crossDomain: true, // enable this if you are using CORS
  });

  const scheduleObj = useRef(null); // create a ref for the ScheduleComponent

  return (
    <main className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-slate-100 rounded-3xl">
      <Header title="Calendar" />
      <ScheduleComponent
        height={550}
        eventSettings={{ dataSource: dataManager }}
        selectedDate={new Date()}
        currentView="Month"
        timezone="America/Los_Angeles"
        ref={scheduleObj}
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
