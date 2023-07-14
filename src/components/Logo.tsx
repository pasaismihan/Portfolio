import React from "react";

function Logo() {
  return (
    // <svg id="logo" viewBox="0 0 150 100">
    //   <title>Logo</title>
    //   <g>
    //     <g id="K" transform="translate(35.000000, 35.000000)">
    //       <path
    //         fill="currentColor"
    //         d="M 23.363281 24.847656 L 15.269531 13.421875 L 22.847656 4.730469 C 22.972656 4.582031 23.003906 4.375 22.925781 4.199219 C 22.847656 4.019531 22.675781 3.90625 22.488281 3.90625 L 18.683594 3.90625 C 18.546875 3.90625 18.417969 3.964844 18.324219 4.066406 L 10.429688 12.9375 L 10.429688 4.398438 C 10.429688 4.128906 10.210938 3.90625 9.945312 3.90625 L 6.566406 3.90625 C 6.300781 3.90625 6.085938 4.128906 6.085938 4.398438 L 6.085938 25.140625 C 6.085938 25.410156 6.300781 25.632812 6.566406 25.632812 L 9.945312 25.632812 C 10.210938 25.632812 10.429688 25.410156 10.429688 25.140625 L 10.429688 18.976562 L 12.644531 16.433594 L 19.007812 25.429688 C 19.097656 25.558594 19.246094 25.632812 19.398438 25.632812 L 22.972656 25.632812 C 23.15625 25.632812 23.320312 25.527344 23.402344 25.363281 C 23.484375 25.199219 23.472656 25 23.363281 24.847656 Z M 23.363281 24.847656 "
    //       />
    //     </g>
    //     <path
    //       stroke="currentColor"
    //       strokeWidth="5"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       d="M 50, 5
    //               L 11, 27
    //               L 11, 72
    //               L 50, 95
    //               L 89, 73
    //               L 89, 28 z"
    //     />
    //   </g>
    // </svg>
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
