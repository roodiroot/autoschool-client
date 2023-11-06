"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import usePopap from "@/hooks/usePopap";
import Popup from "./popup/popup";
import { AnimatePresence } from "framer-motion";
import VideoWidget from "./video-widget/video-widget";
import CallWidget from "./call-widget/call-widget";

const AbsoluteComponents = () => {
  const { isOpen, onClose } = usePopap();

  return (
    <div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      <AnimatePresence>{isOpen && <Popup onClose={onClose} />}</AnimatePresence>
      <VideoWidget />
      <CallWidget />
    </div>
  );
};

export default AbsoluteComponents;
