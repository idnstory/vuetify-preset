<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <defs>
      <path
        id="kakao__a"
        d="M6.55 12.071L3.264
        14.19c-.048.03-.108.04-.164.025-.106-.028-.168-.135-.14-.239l.78-2.739C1.493
        10.16 0 8.255 0 6.086 0 2.725 3.582 0 8 0s8 2.725 8 6.086c0
        3.36-3.582 6.085-8 6.085-.495 0-.98-.034-1.45-.1z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd" transform="translate(2 3)">
      <mask id="kakao__b" fill="#fff">
        <use xlink:href="#kakao__a" />
      </mask>
      <use fill="#000" xlink:href="#kakao__a" />
      <g fill="#495057" mask="url(#kakao__b)">
        <path d="M0 0H20V20H0z" transform="translate(-2 -3)" />
      </g>
    </g>
  </svg>
</template>
