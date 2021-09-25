import { useState, useEffect } from "react";

function useWindowSize() {

  const [windowSize, setWindowSize] = useState( {
    width: undefined,
    height: undefined
  })

  useEffect(() => {

    function handleResize() {

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize)
  }, []);

  return windowSize;
}


function setImage(mobileUrl, tabletUrl, desktopUrl, windowSize) {
  if ( windowSize.width < 600 ) {
    return mobileUrl
  } else if ( windowSize.width < 960) {
    return tabletUrl
  } else {
    return desktopUrl
  }
}

export { useWindowSize };