import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import {
  changeMode,
  changeTheme,
  currentTheme,
  isDarkMode,
} from "../../utils/helper";

const FRAMER_MOTION_CONTAINER_VARIANTS_VERTICAL = {
  hidden: {
    translateY: 50,
    opacity: 1,
  },
  show: {
    translateY: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const FRAMER_MOTION_CONTAINER_VARIANTS_HORIZONTAL = {
  hidden: {
    translateX: 50,
    opacity: 1,
  },
  show: {
    translateX: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const FRAMER_MOTION_CHILD_VARIANTS_VERTICAL = {
  hidden: { translateY: 25, opacity: 0 },
  show: { translateY: 0, opacity: 1 },
};
const FRAMER_MOTION_CHILD_VARIANTS_HORIZONTAL = {
  hidden: { translateX: 25, opacity: 0 },
  show: { translateX: 0, opacity: 1 },
};

const THEMES = [
  {
    primary: "#3fd578",
    secondary: "#87eeac",
    accent: "#50f28b",
    key: "",
  },
  {
    primary: "#4722ec",
    secondary: "#f58ad8",
    accent: "#f04c90",
    key: "blue",
  },
  {
    primary: "#3ecc8e",
    secondary: "#e08ac8",
    accent: "#d8796e",
    key: "green",
  },
  {
    primary: "#ff4f0f",
    secondary: "#e2fc4f",
    accent: "#eee458",
    key: "red",
  }
];

const ThemeToggleFAB = () => {
  const [isFabEnabled, setIsFabEnabled] = useState(false);

  const toggleFAB = useCallback(() => {
    setIsFabEnabled((prevState) => !prevState);
  }, []);

  const isDarkTheme = isDarkMode();
  const currentThemeName = currentTheme();

  return (
    // FAB button container
    <div
      className={`bg-white h-12 w-12 rounded-full p-0.5 fixed bottom-4 right-4 flex items-center justify-center cursor-pointer active:scale-90 transition-all ease-in ${
        isFabEnabled ? "scale-105" : "scale-75"
      }`}
    >
      <button
        onClick={toggleFAB}
        className={`bg-secondary rounded-full w-full h-full flex items-center justify-center transition-transform ease-in duration-200 ${
          isFabEnabled ? "rotate-[315deg]" : ""
        }`}
      >
        {/* FAB button icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 28 28" className="fill-primary">
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M2.132 13.63a9.942 9.942 0 0 1 0-3.26c1.102.026 2.092-.502 2.477-1.431.385-.93.058-2.004-.74-2.763a9.942 9.942 0 0 1 2.306-2.307c.76.798 1.834 1.125 2.764.74.93-.385 1.457-1.376 1.43-2.477a9.942 9.942 0 0 1 3.262 0c-.027 1.102.501 2.092 1.43 2.477.93.385 2.004.058 2.763-.74a9.942 9.942 0 0 1 2.307 2.306c-.798.76-1.125 1.834-.74 2.764.385.93 1.376 1.457 2.477 1.43a9.942 9.942 0 0 1 0 3.262c-1.102-.027-2.092.501-2.477 1.43-.385.93-.058 2.004.74 2.763a9.942 9.942 0 0 1-2.306 2.307c-.76-.798-1.834-1.125-2.764-.74-.93.385-1.457 1.376-1.43 2.477a9.942 9.942 0 0 1-3.262 0c.027-1.102-.501-2.092-1.43-2.477-.93-.385-2.004-.058-2.763.74a9.942 9.942 0 0 1-2.307-2.306c.798-.76 1.125-1.834.74-2.764-.385-.93-1.376-1.457-2.477-1.43zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </g>
        </svg>
      </button>

      {/* FAB button list */}
      <AnimatePresence>
        {isFabEnabled && (
          <motion.ul
            key="vertical-fab-actions"
            variants={FRAMER_MOTION_CONTAINER_VARIANTS_VERTICAL}
            initial="hidden"
            animate="show"
            //exit="hidden"
            className="absolute bottom-16 flex justify-between flex-col items-center gap-2"
          >
            {THEMES?.map((theme, i) => (
              <motion.li
                key={JSON.stringify(theme?.key + i)}
                variants={FRAMER_MOTION_CHILD_VARIANTS_VERTICAL}
                onClick={() => {
                  changeTheme(theme?.key);
                  toggleFAB();
                }}
                className={`h-10 w-10 rounded-full  flex justify-center items-center`}
                style={{
                  backgroundColor: theme?.secondary,
                  borderColor: currentThemeName == theme?.key && theme?.accent ,
                  scale: currentThemeName == theme?.key ? 1 : 0.90,
                }}
              >
                <span className="h-6 w-6 bg-secondary rounded-full" style={{backgroundColor: theme?.primary}}/>
              </motion.li>
            ))}
          </motion.ul>
        )}
        {isFabEnabled && (
          <motion.ul
            key="horizontal-fab-actions"
            variants={FRAMER_MOTION_CONTAINER_VARIANTS_HORIZONTAL}
            initial="hidden"
            animate="show"
            // exit="hidden"
            className="absolute right-16"
          >
            <motion.li
              variants={FRAMER_MOTION_CHILD_VARIANTS_HORIZONTAL}
              className={`h-10 w-10 rounded-full border ${
                isDarkTheme ? "bg-black" : "bg-white"
              } ${isDarkTheme ? "border-white" : "border-black"}`}
              onClick={() => {
                changeMode();
                toggleFAB();
              }}
            >
              {!isDarkTheme ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="-2 -2 28 28"
                  stroke="#e1c10c"
                >
                  isDarkMode?" "{" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="-2 -2 28 28"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggleFAB;
