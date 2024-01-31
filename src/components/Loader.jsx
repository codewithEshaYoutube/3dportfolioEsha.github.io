import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import "./CanvasLoader.css"; // Import a CSS file for styling (create this file)

const CanvasLoader = () => {
  const { progress } = useProgress();
  const [puzzlePieces, setPuzzlePieces] = useState([]);

  // Simulate puzzle pieces falling into place
  useEffect(() => {
    const totalPieces = 20; // Adjust the number of puzzle pieces
    const pieces = [];

    for (let i = 0; i < totalPieces; i++) {
      pieces.push(
        <div
          key={i}
          className="puzzle-piece"
          style={{
            animationDelay: `${(Math.random() * 2).toFixed(2)}s`,
          }}
        ></div>
      );
    }

    setPuzzlePieces(pieces);
  }, []);

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="canvas-loader">
        {/* Display the puzzle pieces */}
        {puzzlePieces.map((piece, index) => (
          <div key={index}>{piece}</div>
        ))}
      </div>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 20,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
