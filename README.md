# vtom [![npm](https://img.shields.io/npm/v/vtom.svg)](https://npmjs.com/package/vtom)

[![Unit Test](https://github.com/sxzz/vtom/actions/workflows/unit-test.yml/badge.svg)](https://github.com/sxzz/vtom/actions/workflows/unit-test.yml)

Alias `shallowRef` to `atom`.

## Install

```bash
npm i vtom
```

## Usage

```ts
import { atom } from 'vtom'
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

[MIT](./LICENSE) License © 2023-PRESENT [三咲智子](https://github.com/sxzz)
