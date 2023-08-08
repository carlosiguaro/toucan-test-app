import { useSession } from "next-auth/react";
import Dashboard from "./dashboard";
import Home from "./home";

export default function Index() {
  const { data: session, status } = useSession();
  switch (status) {
    case "loading":
      return <label>loading...</label>;
      break;
    case "authenticated":
      return (
        <main>
          <Dashboard user={session?.user} />
        </main>
      );
      break;
    case "unauthenticated":
      return (
        <main>
          <Home />
        </main>
      );
      break;
  }
}
