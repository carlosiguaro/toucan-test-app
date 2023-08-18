import ProtectedRoute from "../components/auth/protected-route";
import { useSession, signOut } from 'next-auth/react';
import Header from "../components/header/header";
import { CircularProgress } from "@mui/material";

export default function Dashboard() {
  const closeSession =  async () => {
    await signOut(); // Cerrar la sesión
  };

  const { data: session, status } = useSession();


  return (
    <ProtectedRoute authenticated={true}>
      <main>
        <Header />
        <section>
          <h1>Welcome {session?.user?.name}</h1>
        </section>
      </main>
    </ProtectedRoute>
  )
}