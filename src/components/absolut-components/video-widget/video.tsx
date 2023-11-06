"use client";

import { useRef, useEffect } from "react";
const Video = () => {
  const videoRef: any = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current?.play();
      }
    }, 5000);
  }, []);
  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className=' rounded-3xl'
    >
      <source src='/video/video.mp4' type='video/mp4' />
      Your browser does not support HTML5 video.
    </video>
  );
};

export default Video;
