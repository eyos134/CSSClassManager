# CSSClassManager
manage your CSS class with this JavaScript class, with static and more features.
# Class Manager

## Overview

The \`ClassManager\` class provides a flexible way to manipulate CSS classes on HTML elements. It supports various options, including adding classes on click, removing classes on an outside click, handling keyboard shortcuts, and introducing time delays. This class can be used to manage classes on single or multiple elements with triggers for class manipulation.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [License](#license)

## Installation

\`\`\`bash
npm install ul-css-class-manager
\`\`\`

## Usage

### ClassManager

#### Constructor

\`\`\`javascript
import { ClassManager, StaticClassManager } from 'ul-css-class-manager';

const element = document.getElementById('exampleElement');
const className = 'exampleClass';

const classManager = new ClassManager(element, className);

const otherElement = document.getElementById('otherExampleElement');
StaticClassManager.addClass(otherElement, className);
\`\`\`

// ... (rest of the content)

## Examples

### Adding a class on click

\`\`\`javascript
const element = document.getElementById('exampleElement');
const className = 'exampleClass';

const classManager = new ClassManager(element, className);
const triggerElement = document.getElementById('triggerElement');

classManager.addClassOnEvent(triggerElement, 500, 'click');
\`\`\`

### Removing a class on outside click

\`\`\`javascript
const element = document.getElementById('exampleElement');
const className = 'exampleClass';

const classManager = new ClassManager(element, className);
const triggerElement = document.getElementById('triggerElement');

classManager.outsideClickRemoveClass(triggerElement);
\`\`\`

## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](LICENSE) file for details.
