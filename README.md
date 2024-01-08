 **# ClassManager README**

**## Purpose**

**This library provides a powerful and flexible way to manage CSS classes on HTML elements in JavaScript. It offers granular control over class manipulation and event-based triggers, simplifying common class-related tasks and enhancing dynamic styling capabilities in web applications.**

**## Key Features**

- **Class-based approach:** Encapsulates class management logic within reusable `ClassManager` and `StaticClassManager` classes.
- **Event-based triggers:** Responds to various events (clicks, outside clicks, keypresses) to dynamically add, remove, or toggle classes.
- **Time delays:** Introduces optional time delays for fine-tuning class transitions.
- **Keyboard shortcuts:** Supports customizable keyboard shortcuts for class toggling.
- **Multiple element management:** Can handle class manipulation on single or multiple elements.
- **Versatile methods:** Provides a rich set of methods for common class operations (adding, removing, toggling, checking, replacing).
- **Static utility methods:** Offers convenient static methods for class manipulation without instantiating objects.

**## Classes**

**### ClassManager**

- **Core class for managing classes on specific elements.**
- **Key methods:**
    - `addClassOnEvent`
    - `removeClassOnEvent`
    - `toggleClassOnEvent`
    - `onKeyDownToggleClass`
    - `outsideClickRemoveClass`
    - `manipulate`

**### StaticClassManager**

- **Static utility class for general class manipulation.**
- **Key methods:**
    - `addClass`
    - `removeClass`
    - `hasClass`
    - `toggleClass`
    - `replaceClass`
    - `addClasses`
    - `removeClasses`
    - `replaceClasses`
    - `removeAllClasses`
    - `toggleClassConditionally`
    - `getAllClasses`
    - `toggleClassesConditionally`
    - `addStyles`
    - `removeStyles`
    - `getAllStyles`
    - `hideElement`
    - `showElement`

**## Installation**

```bash
npm install ul-css-class-manager
```

**## Import**

```javascript
import { ClassManager, StaticClassManager } from '/path/to/your/ul-css-class-manager/index.js';
```

**## Usage**

```javascript
// Example: Toggle a class on click with a delay
const myElement = document.getElementById('my-element');
const classManager = new ClassManager(myElement, 'my-class');
classManager.toggleClassOnEvent(myElement, 500); // Delay of 500 milliseconds
```

**## Contribution**

**We welcome contributions to this library! Please follow these guidelines:**

1. Fork the repository on GitHub.
2. Create a new branch for your changes.
3. Make your changes and commit them with clear messages.
4. Push your branch to GitHub and create a pull request.
5. Ensure your code follows the project's style guidelines and passes all tests.

**## Additional Information**

- **License:** Apache-2.0
- **Author:** Ermiyas Arage
