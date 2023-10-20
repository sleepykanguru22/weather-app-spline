import Spline from "@splinetool/react-spline";

export default function NScene(props) {
  return (
    <Spline
      scene="https://prod.spline.design/RqQvQKIwWNlohumT/scene.splinecode"
      className="bg-scene"
    />
  );
}
// import React, { useEffect } from "react";
// import Spline from "@splinetool/react-spline";

// export default function NScene(props) {
// Call the setLoading function to set loading to true initially
//   useEffect(() => {
//     props.setLoading(true);
//   }, [props.setLoading]);

//   return (
//     <Spline
//       scene="https://prod.spline.design/RqQvQKIwWNlohumT/scene.splinecode"
//       className="bg-scene"
//       onLoad={() => {
//         // Call the setLoading function to set loading to false when the scene is loaded
//         props.setLoading(false);
//       }}
//     />
//   );
// }
