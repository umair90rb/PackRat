import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";

const SVGLogoComponent = ({
  width = 963.619,
  height = 1082.069,
  fill = "fff",
  ...props
}) => {
  const viewBoxWidth = width;
  const viewBoxHeight = height;
  const translateX = -viewBoxWidth / 2;
  const translateY = -viewBoxHeight / 2;

  console.log('fill', fill)

  return (
    <Svg
      width={width}
      height={height}
      //   viewBox={`0 0 ${width} ${height}`}
      viewBox="0 0 963.619 1082.069"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        className="st0"
        d="M298.42 353.51c-.6-.89-1.13-1.83-1.69-2.75-.08-.12-.15-.25-.23-.38.4-.26.74-.48 1.07-.69.71-.46.9-1.26.48-1.93-.41-.68-1.2-.83-1.9-.38-.35.21-.71.44-1.04.66-3.82-6.26-13.9-22.69-17.78-29.07-.48.4-1.07.64-1.79.72-.14.02-.26.02-.38.02-1.21 0-2.18-.64-2.98-1.95-.71-1.18-1.6-2.64-2.7-3.73-.63-.63-1.41-.97-2.25-1.18.29.48.58.95.89 1.44l1.99 3.28c.51.83 1.01 1.6 1.44 2.39.78 1.46 1.56 1.63 2.84.68.15-.12.34-.21.52-.34 3.84 6.31 14.05 22.95 17.87 29.23-.37.25-.72.46-1.07.69-.67.44-.87 1.24-.48 1.92.41.66 1.2.84 1.87.43.37-.23.74-.48 1.12-.72.66 1.07 1.32 2.09 1.92 3.15.4.74.94 1.1 1.76.98.2-.12.41-.25.61-.38.47-.73.37-1.39-.09-2.09zm-20.56-35.11c.11-.08.23-.14.34-.21.83-.54 1-1.27.49-2.1-.09-.17-.2-.32-.31-.49.08.51.09.97.03 1.38-.08.55-.26 1.03-.55 1.42zm-106.88-32.32a13.621 13.621 0 0 0-2.3 5.49c-.78-.15-1.53-.48-2.22-.97l-1-.71c-2.73-1.93-3.39-5.71-1.46-8.44l8.59-12.18c1.93-2.73 5.71-3.39 8.44-1.46l1.01.71c.31.21.6.46.81.72zm50.45-16.05a521.53 521.53 0 0 1-4.88 5.54c-.75-.28-1.53-.52-2.33-.75 1.17-1.83 1.89-3.87 2.09-5.97 1.56.18 3.32.55 5.12 1.18zm-25.17 34.8c-.86-.45-1.61-.91-2.29-1.35a13.838 13.838 0 0 1-4.56 3.64c1.73 1.44 3.41 2.7 5 3.68.5-2.02 1.12-4.01 1.85-5.97zm16.53-48.18c-.2.29-.43.54-.67.72-.49-.49-1.03-.94-1.6-1.33l-.9-.63c-.25-.18-.51-.35-.77-.49.08-.26.22-.52.4-.77.89-1.29 2.42-1.76 3.41-1.07.97.69 1.03 2.3.13 3.57z"
        style={{
          fill,
        }}
        transform="translate(-1102.273 -1568.331) scale(6.88952)"
        // transform={`translate(${translateX} ${translateY})`}
      />
      <Path
        className="st0"
        d="m193.86 302.21 19.28-27.33c4.14-5.87 2.74-13.99-3.13-18.13l-.89-.63c-5.87-4.14-13.99-2.74-18.13 3.13l-19.28 27.33c-4.14 5.87-2.74 13.99 3.13 18.13l.89.63c5.86 4.14 13.98 2.74 18.13-3.13zm106-52.74c0 1.24-.99 2.24-2.23 2.24-.18 0-.36-.02-.52-.07-.41-.1-.78-.31-1.07-.6-.38-.4-.62-.95-.62-1.57 0-1.24 1-2.27 2.2-2.27 1.19.01 2.23 1.06 2.24 2.27z"
        style={{
          fill,
        }}
        transform="translate(-1102.273 -1568.331) scale(6.88952)"
        // transform={`translate(${translateX} ${translateY})`}
      />
      <Path
        className="st0"
        d="M296.58 252.41s-1.16 2.05-1.16 2.07c-.03.11-.08.24-.14.35-4.23 10.04-11.61 16.39-22.17 19.06-.26.06-.54.15-.83.23-.27.08-.55.13-.82.18-.24.03-.46.06-.69.06h-.08c-.56-.02-1.07.07-1.53.22-.14.04-.28.11-.43.18-.35.17-.68.39-.98.64-.46.39-.87.87-1.26 1.39-4.34 5.89-4.99 12.2-1.61 18.62 1.41 2.7 3.45 5.12 5.57 7.35 3.18 3.34 5.75 7.18 6.99 11.67.45 1.62.49 3.82-1.06 4.51-1.08.47-2.35-.13-3.14-1s-1.28-1.97-1.99-2.9c-1.97-2.55-5.37-3.42-8.53-3.98-3.17-.56-6.55-1.08-8.96-3.2-1.5-1.32-2.81-2.79-4.31-.8-.92 1.21-1.13 3.07-1.3 4.53-.38 3.05-.1 6.08-.17 9.13-.14 6.5-.81 12.95-2.67 19.16 4.75 2.7 7.61 10.58 8.63 20.7.38.97.93 1.46 1.5 1.84 1.44.87 3.01 1.5 5.54-.27 2.71-2.55 5.6-5.42 7.08-5.8 3.33-.87 5.71-.18 7.32 1.78l-15.5 14.26-9.41-8.34-6.26-5.7s-5.11-.26-9.11-2.28c-2.03 1.5-4.35 2.67-7 3.4-6.16 1.71-12.73 1.37-19.04.29-2.61 3.28-7.27 6.54-15.38 6.07l-2.24-1c-.67.57-.96 1.18-1.15 1.76-.46 1.62-.66 3.29 1.71 5.27 3.18 1.95 6.71 3.98 7.47 5.31 1.71 2.98 1.66 5.46.2 7.53l-17.83-11.2 5.24-10.6 2.4-5.42s.68-4.89 5.06-8.22c-.68-2.21-1.08-4.54-1.53-6.69-.01-.03-.01-.06-.02-.08-1.2-5.72-1.44-11.62-.88-17.42 1.15-11.73 5.54-23.04 11.92-32.9 1.02-1.58 2.1-3.12 3.23-4.62 6.46-8.62 14.36-16.06 20.67-24.82 1.35-1.87.65-3.58-1.64-3.81-5.37-.54-9.6-2.92-12.47-7.52-4.64-7.46-2.04-17.38 5.65-21.74 2.44-1.38 5.08-2.02 7.69-2.02 2.8 0 5.54.75 7.93 2.15.6.35 1.18.75 1.72 1.18 1.65 1.3 3.07 2.95 4.11 4.92.89 1.69 1.34 2.3 2.32 2.3.54 0 1.21-.17 2.21-.45 2.61-.73 5.23-1.29 7.85-1.29 2.04 0 4.07.34 6.08 1.19.24.11.5.22.75.34l4.4 2.56c-.7.66-1.13 1.6-1.13 2.64a3.7 3.7 0 0 0 3.69 3.69 3.67 3.67 0 0 0 3.55-2.76l1.29.75c6 2.86 12.44 4.31 19.24 4.79.32.02.65.02.97.02.84 0 1.65-.03 2.45-.09.02.78.32 1.51.85 2.07.31.35.69.6 1.14.76z"
        style={{
          fill,
        }}
        transform="translate(-1102.273 -1568.331) scale(6.88952)"
        // transform={`translate(${translateX} ${translateY})`}
      />
      <Path
        className="st0"
        d="M161.67 356.17c-.62 0-1.22-.35-1.51-.95-.4-.84-.06-1.84.78-2.25 4.72-2.29 7.97-5.32 9.65-9 .93-2.04 1.17-3.81 1.4-5.52.29-2.12.58-4.32 2.2-6.55 2.68-3.69 7.74-5.66 15.03-5.85.94-.02 1.7.71 1.72 1.64.02.93-.71 1.7-1.64 1.72-6.19.16-10.36 1.66-12.4 4.46-1.12 1.54-1.33 3.08-1.59 5.02-.25 1.86-.54 3.98-1.68 6.47-2.02 4.41-5.8 7.99-11.24 10.63-.22.12-.47.18-.72.18z"
        style={{
          fill,
        }}
        transform="translate(-1102.273 -1568.331) scale(6.88952)"
        // transform={`translate(${translateX} ${translateY})`}
      />
    </Svg>
  );
};
export default SVGLogoComponent;
