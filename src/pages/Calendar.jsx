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
  // "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekxwWmFZfVpgdV9EZFZSR2Y/P1ZhSXxXdkZgWX5dcnBWRWNbWUM="
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXtec3VWRGFfVEFzX0o="
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
// import { getScheduleData } from "../services/scheduleService";

import eventData from "../data/events.json";
import { Button } from "../components";
import { dataSourceChanged } from "@syncfusion/ej2-react-grids";

const Calendar = () => {
  // get json data to array
  const [scheduleData, setScheduleData] = useState();

  // get data from the server
  const getScheduleData = () => {
    try {
      // set data from the local json file
      setScheduleData(eventData);
    } catch (error) {
      console.error("Error fetching schedule data: ", error);
    }
  };

  // useeffect to get data once the component is mounted
  useEffect(() => {
    getScheduleData();
  }, []);

  const scheduleObj = useRef(null); // create a ref for the ScheduleComponent
  const onBound = () => {
    // get data from the server
    // getScheduleData();
  };

  const onBegin = (args) => {
    // CREATE
    if (args.requestType === "eventCreate") {
      try {
        // add the args.data to the json file
        setScheduleData([...scheduleData, args.data[0]]);
      } catch (error) {
        console.error("Error adding event: ", error);
      }
    }

    // UPDATE
    else if (args.requestType === "eventChange") {
      try {
        // update the json file with the new args.data
        setScheduleData(
          scheduleData.map((event) =>
            event.Id === args.data.Id ? { ...event, ...args.data } : event
          )
        );
        // axios.put("http://localhost:8080/api/events", args.data);
      } catch (error) {
        console.error("Error updating event: ", error);
      }
    }

    // DELETE
    else if (args.requestType === "eventRemove") {
      try {
        // remove the event from the json file
        setScheduleData(
          scheduleData.filter((event) => event.Id !== args.data[0].Id)
        );
        // axios.delete("http://localhost:8080/api/events/", {
        // data: args.data[0],
        // });
      } catch (error) {
        console.error("Error deleting event: ", error);
      }
    }
  };

  return (
    <main className="m-2 md:m-10 mt-24 p-4 md:p-10 bg-slate-100 rounded-3xl">
      <Header title="Calendar" />
      <ScheduleComponent
        height="md:h-[500px]"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date()}
        currentView="Month"
        timezone="America/Los_Angeles"
        ref={scheduleObj}
        dataBound={onBound}
        actionBegin={onBegin}
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
