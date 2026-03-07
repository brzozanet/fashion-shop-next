"use client";
import { ThreeCircles } from "react-loader-spinner";

// INFO: Używamy inline styles zamiast CSS Modules, aby zapobiec preloadowaniu CSS przez Next.js

export default function Loading() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "3rem auto",
        }}
      >
        <ThreeCircles
          visible={true}
          height="250"
          width="250"
          color="#b89352"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <h2>Pobieram dane dla Ciebie...</h2>
      </div>
    </>
  );
}

// Next.js native loader
// export default function Loading() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "400px",
//       }}
//     >
//       <div
//         style={{
//           width: "100px",
//           height: "100px",
//           border: "10px solid #f3f3f3",
//           borderTop: "10px solid #3498db",
//           borderRadius: "50%",
//           animation: "spin 1s linear infinite",
//         }}
//       ></div>
//       <h2>Ładowanie danych...</h2>
//     </div>
//   );
// }
