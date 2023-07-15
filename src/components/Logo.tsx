import React from "react";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-letter-p"
      width="250"
      height="250"
      viewBox="0 0 105 105"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <g>
        <g id="P" transform="translate(38.000000, 37.000000)">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" />
        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;
