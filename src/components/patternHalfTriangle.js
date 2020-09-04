import React from "react"

export default function PatternHalfTriangleGradients({ position, direction }) {
  const positionTriangle = position
  const directionTriangle = direction

  return (
    <svg
      className={`${directionTriangle}-${positionTriangle} triangle`}
      width="350"
      height="640"
      viewBox="0 0 350 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
    >
      <path
        d="M124.33 517.5C122.406 520.833 117.594 520.833 115.67 517.5L72.3686 442.5C70.4441 439.167 72.8497 435 76.6987 435H163.301C167.15 435 169.556 439.167 167.631 442.5L124.33 517.5Z"
        fill="#8A54A2"
        fillOpacity="0.2"
      />
      <path
        d="M235.67 422.5C237.594 419.167 242.406 419.167 244.33 422.5L339.593 587.5C341.517 590.833 339.112 595 335.263 595H144.737C140.888 595 138.483 590.833 140.407 587.5L235.67 422.5Z"
        fill="url(#paint0_linear)"
        fillOpacity="0.1"
      />
      <path
        d="M115.67 212.5C117.594 209.167 122.406 209.167 124.33 212.5L219.593 377.5C221.517 380.833 219.112 385 215.263 385H24.7372C20.8882 385 18.4826 380.833 20.4071 377.5L115.67 212.5Z"
        fill="url(#paint1_linear)"
        fillOpacity="0.2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 175H95.2628C99.1118 175 101.517 170.833 99.5929 167.5L4.33008 2.5C3.36792 0.833252 1.68396 0 0 0V175Z"
        fill="url(#paint2_linear)"
        fillOpacity="0.2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 310C1.68396 310 3.36792 309.167 4.33008 307.5L47.6313 232.5C49.5559 229.167 47.1503 225 43.3013 225H0V310Z"
        fill="#8A54A2"
        fillOpacity="0.2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 595H95.2628C99.1118 595 101.517 590.833 99.5929 587.5L4.33008 422.5C3.36792 420.833 1.68396 420 0 420V595Z"
        fill="#8AD5E8"
        fillOpacity="0.2"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="98.5"
          y1="624"
          x2="337"
          y2="477"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8AD5E8" stopOpacity="0.5" />
          <stop stopColor="#8AD5E8" />
          <stop offset="0.989583" stopColor="#8A54A2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="42"
          y1="469"
          x2="264.5"
          y2="253"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0726231" stopColor="#8AD5E8" />
          <stop offset="1" stopColor="#8A54A2" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="-120"
          y1="169"
          x2="52.5"
          y2="-21.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8AD5E8" />
          <stop offset="1" stopColor="#8A54A2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
