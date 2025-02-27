# Unique ID Generator

A lightweight and customizable unique ID generator for JavaScript and TypeScript projects.

## Features

- Generates unique IDs based on timestamps and random values.
- Supports **alphanumeric** (default) or **alphabetic-only** modes.
- Allows **uppercase conversion**.
- Fully typed with TypeScript support.

## Installation

```sh
npm install ultultra-unique-id
```

or

```sh
yarn add ultra-unique-id
```

## Usage

### Basic Example

```javascript
const generateUniqueId = require("ultra-unique-id");

const id = generateUniqueId();
console.log(id); // Example: "XJ9K2Z"
```

### Custom Length

```javascript
const id = generateUniqueId(10);
console.log(id); // Example: "D8JL2ZKP9X"
```

### Alphabetic-Only Mode

```javascript
const id = generateUniqueId(8, { alphaNumeric: false });
console.log(id); // Example: "XJLZKPQS"
```

### Lowercase Output

```javascript
const id = generateUniqueId(12, { uppercase: false });
console.log(id); // Example: "xj9k2zl8pqs3"
```

### TypeScript Usage

```typescript
import generateUniqueId, { UniqueIdOptions } from "ultra-unique-id";

const options: UniqueIdOptions = {
  uppercase: true,
  alphaNumeric: false,
};

const id: string = generateUniqueId(8, options);
console.log(id); // Example: "XJLZKPQS"
```

## API

### `generateUniqueId(length?: number, options?: UniqueIdOptions): string`

#### Parameters:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `length` | `number` | `6` | Length of the unique ID. |
| `options.uppercase` | `boolean` | `true` | Converts the ID to uppercase. |
| `options.alphaNumeric` | `boolean` | `true` | Includes numbers if `true`, letters only if `false`. |

#### Returns:

A randomly generated unique string.


## Author

Created by [Praveen Ram](https://github.com/praveenrampk).

## Contributing

Pull requests and feature requests are welcome! Feel free to open an issue in the repository.

## Issues & Support

If you find a bug or need help, create an issue on [GitHub Issues](https://github.com/praveenrampk/ultra-uniqueid/issues).
---

## 📞 Contact

For queries or suggestions, feel free to reach out:

- **GitHub:** [@praveenrampk](https://github.com/praveenrampk)
- **Twitter/X:** [@praveenrampk](https://twitter.com/praveenrampk)
- **Portfolio:** [praveenram.dev](https://praveenram.netlify.app/)
- **Email:** praveenrampk@gmail.com

---