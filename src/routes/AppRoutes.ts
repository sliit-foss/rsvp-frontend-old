import HomePage from "../pages/HomePage/HomePage";
import EventsPage from "../pages/EventsPage/EventsPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import ClubsPage from "../pages/ClubsPage/ClubsPage";
import Ticket from "../modules/TicketModules/TicketComponent/TicketComponent";

export const routes = [
  { path: "/", component: HomePage },
  { path: "/events", component: EventsPage },
  { path: "/clubs", component: ClubsPage },
  { path: "/contact", component: ContactPage },
];
