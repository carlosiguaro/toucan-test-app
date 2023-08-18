import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { childrenProp } from "@/utils/interfaces";
import LoadingPage from "../loading-page/loading-page";

function ProtectedRoute({ children, authenticated }: childrenProp) {
  const { data: session, status } = useSession();

  const router = useRouter();
  
  console.log(authenticated)

  if (status === "loading") {
    return <LoadingPage />;
  }
  
  if (authenticated) {
    if (!session) {
      router.push("/");
      return null;
    }
  }

  if (!authenticated) {
    if (session) {
      router.push("/dashboard");
      return null;
    }
  }

  return <>{children}</>;
}

export default ProtectedRoute;