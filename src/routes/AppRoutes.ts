import HomePage from "../pages/HomePage/HomePage";
import EventsPage from "../pages/EventsPage/EventsPage";
import ContactPage from "../pages/ContactPage/ContactPage";

export const routes = [
  { path: "", component: HomePage },
  { path: "/events", component: EventsPage },
  { path: "/contact", component: ContactPage },
];
