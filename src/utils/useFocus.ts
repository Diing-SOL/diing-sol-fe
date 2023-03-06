import React, { useEffect } from "react";

export const wait = (ms = 150) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const useFocus = (ref: any, ms = 150) => {
  useEffect(() => {
    wait(ms).then(() => {
      if (ref?.current) {
        try {
          ref.current.focus();
        } catch (e) {
          //@ts-ignore
          console.error(e.message);
        }
      }
    });
  }, [ref]);
};
