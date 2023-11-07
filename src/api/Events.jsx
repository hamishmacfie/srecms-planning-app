export const Events = [
  {
    title: "Planning meeting",
    start: new Date(),
    end: new Date(),
    color: "#04ECF0"
  },
  {
    title: "Quality assurance meeting",
    start: new Date(new Date().setDate(new Date().getDate() + 1)),
    end: new Date(new Date().setDate(new Date().getDate() + 1)),
    color: "D3f1651"
  },
  {
    title: "Product Show",
    allDay: true,
    start: new Date(new Date().setDate(new Date().getDate() + 2)),
    end: new Date(new Date().setDate(new Date().getDate() + 3)),
    color: "#F89F5B"
  },
  {
    title: "Board Meeting",
    start: new Date(new Date().setDate(new Date().getDate() + 3)),
    end: new Date(new Date().setDate(new Date().getDate() + 3)),
    color: "#e53f71"
  },
  {
    title: "Maintenance Week",
    allDay: true,
    start: new Date(new Date().setDate(new Date().getDate() + 4)),
    end: new Date(new Date().setDate(new Date().getDate() + 11)),
    color: "#E1C340"
  },
  {
    title: "One to One personal Development",
    start: new Date(new Date().setDate(new Date().getDate() + 5)),
    end: new Date(new Date().setDate(new Date().getDate() + 5)),
    color: "#e08b0ff"
  },
  {
    title: "Zoom call",
    start: new Date(new Date().setDate(new Date().getDate() + 7)),
    end: new Date(new Date().setDate(new Date().getDate() + 7)),
    color: "#e08b0ff"
  },
  {
    title: "Fire alarm test",
    start: new Date(new Date().setDate(new Date().getDate() + 10)),
    end: new Date(new Date().setDate(new Date().getDate() + 10)),
    color: "#e08b0ff"
  }
];
