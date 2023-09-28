const Indicator = ({
  resultIndicator,
  verdict,
}: {
  resultIndicator: number | string;
  verdict: boolean;
}) => {
  return (
    <div className="relative flex justify-center items-center">
      <p
        style={verdict ? "#5162FF" : "#ED374A"}
        class="absolute pt-3 text-sm pr-[2px] font-bold select-none text-white"
      >
        {parseFloat(resultIndicator as string).toFixed(0)}
      </p>
      <svg
        width="70"
        height="161"
        viewBox="0 0 52 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_303_17)">
          <ellipse
            cx="26"
            cy="74.5"
            rx="7"
            ry="2.5"
            fill="black"
            fill-opacity="0.2"
          />
        </g>

        <g filter="url(#filter1_d_303_17)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26 25C37.598 25 47 34.402 47 46C47 54.8926 41.4727 62.4942 33.6663 65.5567L27.1961 74.4007C27.0612 74.5858 26.8821 74.7369 26.6739 74.8412C26.4657 74.9455 26.2346 75 26 75C25.7654 75 25.5343 74.9455 25.3261 74.8412C25.1179 74.7369 24.9388 74.5858 24.8039 74.4007L18.3337 65.5567C10.5273 62.4941 5 54.8926 5 46C5 34.402 14.402 25 26 25Z"
            fill="white"
          />
        </g>
        <path
          d="M43 46C43 36.6112 35.3888 29 26 29C16.6112 29 9 36.6112 9 46C9 55.3888 16.6112 63 26 63C35.3888 63 43 55.3888 43 46Z"
          fill={verdict ? "#5162FF" : "#ED374A"}
        ></path>
        <defs>
          <filter
            id="filter0_f_303_17"
            x="17"
            y="70"
            width="18"
            height="9"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_303_17"
            />
          </filter>

          <filter
            id="filter1_d_303_17"
            x="0"
            y="21"
            width="52"
            height="60"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />

            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="2.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />

            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_303_17"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_303_17"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Indicator;
