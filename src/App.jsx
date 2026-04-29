import AnimatedButton from "./AnimatedButton";
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
      }}
    >
      <AnimatedButton>Get Started </AnimatedButton>
      <AnimatedButton damping={10}>Achraf</AnimatedButton>
    </div>
  );
}
