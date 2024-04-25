import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image({
  params: { category },
}: {
  params: { category: string };
}): ImageResponse {
  const post = {
    title: category,
  };

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
        {"Kapish"}
      </div>
    ),
    {
      ...size,
    }
  );
}
