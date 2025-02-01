import { inititalTickets } from "@/data";

type TicketPageProps = {
  params: Promise<{
    ticketId: "string";
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = inititalTickets.find((tickets) => tickets.id === ticketId);
  if (!ticket) {
    return <h1>No ticket found.</h1>;
  }
  return <h1 className="text-6xl">{ticket?.title}</h1>;
};

export default TicketPage;
