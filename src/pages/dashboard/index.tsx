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
      <main id="dashboard">
        <div>
          <Header />
          <section>
            <h1>Welcome to Dashboard <br /> {session?.user?.name}</h1>
          </section>
        </div>
      </main>
    </ProtectedRoute>
  )
}