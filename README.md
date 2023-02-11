# vue-atom [![npm](https://img.shields.io/npm/v/vue-atom.svg)](https://npmjs.com/package/vue-atom)

[![Unit Test](https://github.com/sxzz/vue-atom/actions/workflows/unit-test.yml/badge.svg)](https://github.com/sxzz/vue-atom/actions/workflows/unit-test.yml)

Alias `shallowRef` to `atom`.

## Install

```bash
npm i vue-atom
```

## Usage

```ts
import { atom } from 'vue-atom'
import { shallowRef } from 'vue'

console.log(atom === shallowRef) // true
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2023 [三咲智子](https://github.com/sxzz)
