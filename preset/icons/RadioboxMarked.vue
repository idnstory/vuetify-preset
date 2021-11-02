<template>
  <svg
    class="hz-icon"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <filter
        id="radiobox-marked"
        width="140%"
        height="140%"
        x="-20%"
        y="-10%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation=".5"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0.48776 0 0 0 0 0.3822 0 0 0 0 0.91 0 0 0 1 0"
        />
      </filter>
      <rect id="radiobox-marked2" width="10" height="10" x="7" y="7" rx="5" />
    </defs>
    <g fill="none" fill-rule="evenodd" transform="translate(-4 -4)">
      <rect width="160" height="32" rx="3" />
      <g transform="translate(4 4)">
        <rect
          width="23"
          height="23"
          x=".5"
          y=".5"
          fill="#9B88E9"
          stroke="#9B88E9"
          rx="11.5"
        />
        <use
          fill="#000"
          filter="url(#radiobox-marked)"
          xlink:href="#radiobox-marked2"
        />
        <use fill="#FFF" xlink:href="#radiobox-marked2" />
      </g>
    </g>
  </svg>
</template>
