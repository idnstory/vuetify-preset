<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <defs>
      <filter
        id="naver__a"
        width="104.1%"
        height="103.3%"
        x="-2%"
        y="-1.2%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="2"
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
      </filter>
      <rect id="naver__b" width="344" height="426" x="368" y="174" rx="20" />
    </defs>
    <g fill="none" fill-rule="evenodd" transform="translate(-561 -536)">
      <use fill="#000" filter="url(#naver__a)" xlink:href="#naver__b" />
      <rect
        width="343"
        height="425"
        x="368.5"
        y="174.5"
        fill="#FFF"
        stroke="#DEE2E6"
        stroke-linejoin="square"
        rx="20"
      />
      <g>
        <g transform="translate(392 490) translate(0 34)">
          <rect
            width="140"
            height="44"
            x="156"
            fill="#FFF"
            stroke="#CED4DA"
            rx="4"
          />
          <path
            fill="#51CF66"
            d="M7.765 4L4 4 4 16.19 7.944 16.19 7.944 9.666 12.485 16.19 16.25 16.19 16.25
             4 12.306 4 12.306 10.524z"
            transform="translate(169 12)"
          />
        </g>
      </g>
    </g>
  </svg>
</template>
