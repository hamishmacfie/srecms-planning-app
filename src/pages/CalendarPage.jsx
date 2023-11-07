import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

// Import events
import { Events as events } from "../api/Events";

const CalendarPage = () => {
  return (
    <div>
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        slotMaxTime={"22:00"}
        slotMinTime={"08:00"}
        slotDuration={"00:15"}
        weekNumbers={true}
        displayEventTime={false}
        events={events}
      />
    </div>
  );
};
export default CalendarPage;
