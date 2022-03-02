import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PendingScreen from "../components/pending-screen";

function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return <PendingScreen />;
}

export default NotFoundPage;
