import Link from "next/link";
import { inititalTickets } from "@/data";
import { ticketPath } from "@/paths";

const TicketsPage = () => {
  return (
    <div>
      {inititalTickets.map((ticket) => (
        <div key={ticket.id}>
          <h2>{ticket.title}</h2>
          <Link href={ticketPath(ticket.id)} className="underline">
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;
