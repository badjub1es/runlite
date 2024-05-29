import React from "react";

interface ColorWheelProps {
  onColorSelect: (color: string) => void;
}

const ColorWheel: React.FC<ColorWheelProps> = ({ onColorSelect }) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [selectedColor, setSelectedColor] = React.useState<string>("#ffffff");
  const [isMouseDown, setIsMouseDown] = React.useState<boolean>(false);
  const [mousePosition, setMousePosition] = React.useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const radius = canvas.width / 2;
      const toRad = (deg: number) => (deg * Math.PI) / 180;

      if (ctx) {
        for (let angle = 0; angle < 360; angle += 1) {
          const startAngle = toRad(angle);
          const endAngle = toRad(angle + 1);
          ctx.beginPath();
          ctx.moveTo(radius, radius);
          ctx.arc(radius, radius, radius, startAngle, endAngle);
          ctx.closePath();
          ctx.fillStyle = `hsl(${angle}, 100%, 50%)`;
          ctx.fill();
        }
      }
    }
  }, []);

  const getColorAtPosition = (x: number, y: number): string => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const imageData = ctx.getImageData(x, y, 1, 1).data;
        return `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;
      }
    }
    return "#ffffff";
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLCanvasElement>
  ): void => {
    setIsMouseDown(true);
    handleMouseMove(event);
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLCanvasElement>
  ): void => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setMousePosition({ x, y });

      if (isMouseDown) {
        const color = getColorAtPosition(x, y);
        setSelectedColor(color);
        onColorSelect(color);
      }
    }
  };

  const handleMouseUp = (): void => {
    setIsMouseDown(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>): void => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const color = getColorAtPosition(x, y);
      setSelectedColor(color);
      onColorSelect(color);
    }
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleClick}
        style={{ cursor: "pointer", borderRadius: "50%" }}
      />
      {isMouseDown && (
        <div
          style={{
            position: "absolute",
            top: mousePosition.y - 15,
            left: mousePosition.x - 15,
            width: 30,
            height: 30,
            backgroundColor: selectedColor,
            borderRadius: "50%",
            border: "1px solid #000",
            pointerEvents: "none",
          }}
        />
      )}
      <div style={{ marginTop: 20 }}>
        Selected Color:{" "}
        <span style={{ backgroundColor: selectedColor, padding: "0 10px" }}>
          {selectedColor}
        </span>
      </div>
    </div>
  );
};

export default React.memo(ColorWheel);
