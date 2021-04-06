import React, {Fragment, useEffect, useRef} from "react";
import "./Cursor.scss"


const Cursor = () => {
  const bigCursor = useRef(null);
  const smallCursor = useRef(null);

  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distancey: 0,
    key: -1
  })

  useEffect(()=> {
    document.addEventListener("mousemove", (e) => {
      const {clientX, clientY} = e;
      const mouseX = clientX - smallCursor.current.clientWidth / 2;
      const mouseY = clientY- smallCursor.current.clientHeight / 2 - 3;

      console.log(mouseX, mouseY);
      smallCursor.current.style.top = `${mouseY}px`;
      smallCursor.current.style.left = `${mouseX}px`;
    })
    
    return () => {};
  }, [])

  return (
    <div ref={smallCursor} className="cursor"></div>
  )
}

export default Cursor;
