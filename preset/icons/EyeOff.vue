<template>
  <svg
    class="hz-eye-off"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <defs>
      <path
        id="eyeOff__a"
        d="M14.61 1.034c.29.289.311.742.067 1.056l-.066.076-2.299 2.297c1.154.712 2.255
        1.724 3.303 3.038.212.265.231.632.058.916l-.058.082-.215.265C13.168 11.454 10.7
        12.8 8 12.8c-1.142 0-2.243-.24-3.3-.722l-2.534 2.533c-.313.312-.82.312-1.132
        0-.288-.289-.31-.742-.066-1.056l.066-.076 2.224-2.222-.01-.007L5.73 8.78l.002.004
        1.695-1.697L13.6.936c.31-.21.737-.177 1.012.098zm-4.57 5.702l-3.304 3.305c.367.227.8.359
        1.264.359 1.325 0 2.4-1.075 2.4-2.4 0-.464-.132-.897-.36-1.264zM8 3.2c.336
        0 .669.02.998.063l-7.003 6.98C1.445 9.735.91 9.154.385
        8.498c-.212-.265-.231-.632-.058-.916l.058-.082.215-.265C2.832
        4.546 5.3 3.2 8 3.2z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <mask id="eyeOff__b" fill="#fff">
        <use xlink:href="#eyeOff__a" />
      </mask>
      <use fill="#000" xlink:href="#eyeOff__a" />
      <g fill="#868E96" mask="url(#eyeOff__b)">
        <path d="M0 0H20V20H0z" transform="translate(-2 -2)" />
      </g>
    </g>
  </svg>
</template>

<style lang="scss">
.hz-eye-off {
  fill: #868e96 path {
    stroke: #868e96;
  }
  g {
    fill: #868e96;
  }
}
</style>
