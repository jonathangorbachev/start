// types of icons for dark mode button
import {
  ChevronLeft,
  ChevronRight,
  Laptop,
  LucideProps,
  Moon,
  Sun,
} from "lucide-react";

export const Icons = {
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Laptop,
  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
  github: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      {...props}
      viewBox="0 0 24 24"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  planeIcon: (props: LucideProps, fill = "#2b303b", ...rest: any) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.80494 11.8178L12.4619 17.7508C12.6219 18.0108 12.8719 18.0078 12.9729 17.9938C13.0739 17.9798 13.3169 17.9178 13.4049 17.6228L17.9779 2.17777C18.0579 1.90477 17.9109 1.71877 17.8449 1.65277C17.7809 1.58677 17.5979 1.44577 17.3329 1.52077L1.87695 6.04677C1.58394 6.13277 1.51994 6.37877 1.50594 6.47977C1.49194 6.58277 1.48794 6.83777 1.74695 7.00077L7.74794 10.7538L13.0499 5.39577C13.3409 5.10177 13.8159 5.09877 14.1109 5.38977C14.4059 5.68077 14.4079 6.15677 14.1169 6.45077L8.80494 11.8178ZM12.8949 19.4998C12.1989 19.4998 11.5609 19.1458 11.1849 18.5378L7.30794 12.2468L0.951945 8.27177C0.266945 7.84277 -0.091055 7.07877 0.019945 6.27577C0.129945 5.47277 0.680945 4.83477 1.45494 4.60777L16.9109 0.0817716C17.6219 -0.126228 18.3839 0.0707716 18.9079 0.592772C19.4319 1.11977 19.6269 1.88977 19.4149 2.60377L14.8419 18.0478C14.6129 18.8248 13.9729 19.3738 13.1719 19.4808C13.0779 19.4928 12.9869 19.4998 12.8949 19.4998Z"
        fill={fill}
      />
    </svg>
  ),
  dotLoader: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        background: "none",
        display: "block",
        shapeRendering: "auto",
      }}
      width="30px"
      height="30px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="84" cy="50" r="10" fill="rgba(255, 255, 255, 0.2)">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="0.7352941176470588s"
          calcMode="spline"
          keyTimes="0;1"
          values="10;0"
          keySplines="0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="fill"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="discrete"
          keyTimes="0;0.25;0.5;0.75;1"
          values="rgba(255, 255, 255, 0.4);rgba(255, 255, 255, 0.9999);rgba(255, 255, 255, 0.8);"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="rgba(255, 255, 255, 0.4)">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="10" fill="rgba(255, 255, 255, 0.6)">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.7352941176470588s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.7352941176470588s"
        ></animate>
      </circle>
      <circle cx="84" cy="50" r="10" fill="rgba(255, 255, 255, 0.8)">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.4705882352941175s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.4705882352941175s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="rgba(255, 255, 255, 0.9999)">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-2.205882352941176s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.941176470588235s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-2.205882352941176s"
        ></animate>
      </circle>
    </svg>
  ),
};

export default Icons;
