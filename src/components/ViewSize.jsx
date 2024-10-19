import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

// eslint-disable-next-line react-refresh/only-export-components
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const Component = () => {
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width < 800) {
      window.location.href = "https://www.google.com";
    }
  }, [width]); // Trigger redirection when width changes

  // Conditionally render content when width is >= 800
  if (width >= 800) {
    return (
      <div>
        width: {width} ~ height: {height}
        {console.log(width)}
      </div>
    );
  }

  return null; // Prevent rendering if redirected
};
