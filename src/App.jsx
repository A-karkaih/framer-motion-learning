import "./App.css";
import { LiveBadge } from "./components/LiveBadge";

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        color: "white",
      }}
    >
      <LiveBadge />
    </div>
  );
}
