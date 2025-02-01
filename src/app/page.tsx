import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-6xl">hello next!!!</h1>
      <Link href={ticketsPath()} className="underline">
        Go to tickets
      </Link>
    </div>
  );
};

export default HomePage;
