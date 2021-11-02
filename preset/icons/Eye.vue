<template>
  <svg
    class="hz-eye"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <defs>
      <path
        id="a"
        d="M10 4c3.485 0 6.658 1.792 9.519 5.376a1 1 0 0 1 0 1.248l-.27.33C16.46
        14.319 13.377 16 10 16c-3.485 0-6.658-1.792-9.519-5.376a1 1 0 0 1
        0-1.248l.27-.33C3.54 5.681 6.623 4 10 4zm0 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <mask id="b" fill="#fff">
        <use xlink:href="#a" />
      </mask>
      <use fill="#000" xlink:href="#a" />
      <g fill="#000" mask="url(#b)">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
</template>

<style lang="scss">
.hz-eye {
  fill: #868e96 path {
    stroke: #868e96;
  }
  g {
    fill: #868e96;
  }
}
</style>
