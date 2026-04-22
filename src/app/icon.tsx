import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#060D09",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* C shape: full circle minus right slice */}
        <div style={{ position: "relative", width: 22, height: 22, display: "flex" }}>
          {/* Full ring */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "2.5px solid #22C55E",
              boxShadow: "0 0 6px #22C55E",
            }}
          />
          {/* White block to cut right side → creates C */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              right: -1,
              width: "35%",
              height: "60%",
              background: "#060D09",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
