/*
 *Copyright (c) 2023 Unify Learn
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @file - classManger.js
 * @author - Ermiyas Arage
 * @license Apache-2.0 
 */


/**
 * @class ClassManager
 * @classdesc The `ClassManager` class provides a flexible way to manipulate CSS classes on HTML elements.
 *            It supports various options, including adding classes on click, removing classes on outside 
 *            click, handling keyboard shortcuts, and introducing time delays. It can be used to manage
 *            classes on single or multiple elements, with triggers for class manipulation.
 */
export class ClassManager {

    /**
     * @constructor
     * @param {HTMLElement} element - The HTML element to manipulate the class to.
     * @param {string} className - The name of the CSS class to be manipulated.
     */
    constructor(element, className) {
        this.element = element;
        this.className = className;
    }

    /**
     * Adds a class to the element on a specified event.
     *
     * @param {HTMLElement[]} classAddingElement - Elements triggering class addition.
     * @param {number} timeDelay - Time delay (in milliseconds) for adding the class.
     * @param {string} event - The event type (e.g., 'click', 'mouseover') that triggers class addition.
     */
    addClassOnEvent(classAddingElement, timeDelay = 0, event = 'click') {
        classAddingElement.addEventListener(event, function() {
            setTimeout(function() {
                StaticClassManager.addClass(this.element, this.className);
            }.bind(this), timeDelay);
        }.bind(this));
    }

    /**
     * Removes a class from the element on a specified event.
     *
     * @param {HTMLElement} classRemovingElement - Elements triggering class removal.
     * @param {number} timeDelay - Time delay (in milliseconds) for removing the class.
     * @param {string} event - The event type (e.g., 'click', 'mouseover') that triggers class removal.
     */
    removeClassOnEvent(classRemovingElement, timeDelay = 0, event = 'click') {
        classRemovingElement.addEventListener(event, function() {
            setTimeout(function() {
                StaticClassManager.removeClass(this.element, this.className);
            }.bind(this), timeDelay);
        }.bind(this));
    }

    /**
     * Toggles a class on the element on a specified event.
     *
     * @param {HTMLElement} classTogglingElement - Elements triggering class toggling.
     * @param {number} timeDelay - Time delay (in milliseconds) for toggling the class.
     * @param {string} event - The event type (e.g., 'click', 'mouseover') that triggers class toggling.
     */
    toggleClassOnEvent(classTogglingElement, timeDelay = 0, event = 'click') {
        
        classTogglingElement.addEventListener(event, function() {
            setTimeout(function() {
                StaticClassManager.toggleClass(this.element, this.className);
            }.bind(this), timeDelay);
        }.bind(this));
    }

    /**
     * Toggles a class on the element on a keydown event with a specified key + alt.
     *
     * @param {number} shortKey - Key code for a shortcut to toggle the class.
     * @param {KeyboardEvent} event - The keydown event.
     */
    onKeyDownToggleClass(shortKey, event) {
        if (event.keyCode === shortKey && event.altKey) {
            StaticClassManager.toggleClass(this.element, this.className);
        }
    }

    /**
     * Removes a class from the element on an outside click event.
     *
     * @param {HTMLElement} classRemovingElement - Elements triggering class removal.
     */
    outsideClickRemoveClass(classRemovingElement) { // the classRemovingElement is optional
        document.addEventListener('click', (event) => {
            if (!classRemovingElement.contains(event.target) && !this.element.contains(event.target)) {
                StaticClassManager.removeClass(this.element, this.className);
            }
        });
    }    

    /**
     * Use function for furthur manipulating the class.
     *
     * @returns {Function} classRemovingElements - Elements triggering class removal.
     */
    manipulate(callback) {
        if (callback && typeof callback === 'function') {
            callback();
        }
    }
}






/**
 * @class StaticClassManager
 * A utility class for managing CSS classes on HTML elements.
 * @classdesc a utility class designed for managing CSS classes on
 *            HTML elements in a static and modular manner. It provides
 *            a collection of static methods that facilitate the addition,
 *            removal, checking, and toggling of CSS classes on HTML elements.
 * @static
 */
export class StaticClassManager {
    /**
     * Adds a CSS class to an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {string} className - The name of the CSS class to add.
     */
    static addClass(element, className) {
        element.classList.add(className);
    }

    /**
     * Removes a CSS class from an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {string} className - The name of the CSS class to remove.
     */
    static removeClass(element, className) {
        element.classList.remove(className);
    }

    /**
     * Checks if an HTML element has a specific CSS class.
     * @param {HTMLElement} element - The HTML element.
     * @param {string} className - The name of the CSS class to check.
     * @returns {boolean} True if the element has the class, false otherwise.
     */
    static hasClass(element, className) {
        return element.classList.contains(className);
    }

    /**
     * Toggles a CSS class on an HTML element. If the class is present, it is removed; otherwise, it is added.
     * @param {HTMLElement} element - The HTML element.
     * @param {string} className - The name of the CSS class to toggle.
     */
    static toggleClass(element, className) {
        element.classList.toggle(className);
    }

    /**
     * Replaces one CSS class with another on an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {string} oldClass - The class to be replaced.
     * @param {string} newClass - The class to replace it with.
     */
    static replaceClass(element, oldClass, newClass) {
        this.removeClass(element, oldClass);
        this.addClass(element, newClass);
    }

    /**
     * Adds multiple CSS classes to an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {...string} classNames - The names of the CSS classes to add.
     */
    static addClasses(element, ...classNames) {
        element.classList.add(...classNames);
    }

    /**
     * Removes multiple CSS classes from an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {...string} classNames - The names of the CSS classes to remove.
     */
    static removeClasses(element, ...classNames) {
        element.classList.remove(...classNames);
    }

    /**
     * Replaces multiple CSS classes with new ones on an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {Object.<string, string>} classMap - An object where keys are old classes and values are new classes.
     */
    static replaceClasses(element, classMap) {
        for (const oldClass in classMap) {
            if (classMap.hasOwnProperty(oldClass)) {
                this.replaceClass(element, oldClass, classMap[oldClass]);
            }
        }
    }

    /**
     * Removes all CSS classes from an HTML element.
     * @param {HTMLElement} element - The HTML element.
     */
    static removeAllClasses(element) {
        element.className = '';
    }

    /**
     * Adds or removes a CSS class based on a condition.
     * @param {HTMLElement} element - The HTML element.
     * @param {string} className - The name of the CSS class to add or remove.
     * @param {boolean} condition - If true, the class is added; if false, the class is removed.
     */
    static toggleClassConditionally(element, className, condition) {
        if (condition) {
            this.addClass(element, className);
        } else {
            this.removeClass(element, className);
        }
    }

    /**
     * Retrieves an array of all CSS classes on an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @returns {string[]} An array of CSS class names.
     */
    static getAllClasses(element) {
        return Array.from(element.classList);
    }

    /**
     * Adds or removes multiple CSS classes based on a condition.
     * @param {HTMLElement} element - The HTML element.
     * @param {Object.<string, boolean>} classMap - An object where keys are class names and values are conditions.
     */
    static toggleClassesConditionally(element, classMap) {
        for (const className in classMap) {
            if (classMap.hasOwnProperty(className)) {
                this.toggleClassConditionally(element, className, classMap[className]);
            }
        }
    }

    /**
     * Adds inline CSS styles to an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {Object.<string, string>} styles - An object where keys are style properties and values are style values.
     */
    static addStyles(element, styles) {
        for (const property in styles) {
            if (styles.hasOwnProperty(property)) {
                element.style[property] = styles[property];
            }
        }
    }

    /**
     * Removes inline CSS styles from an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @param {...string} properties - The names of the style properties to remove.
     */
    static removeStyles(element, ...properties) {
        for (const property of properties) {
            element.style[property] = '';
        }
    }

    /**
     * Retrieves an object containing all inline CSS styles of an HTML element.
     * @param {HTMLElement} element - The HTML element.
     * @returns {Object.<string, string>} An object where keys are style properties and values are style values.
     */
    static getAllStyles(element) {
        const styles = {};
        for (let i = 0; i < element.style.length; i++) {
            const property = element.style[i];
            styles[property] = element.style[property];
        }
        return styles;
    }

    /**
     * Sets the display style property of an HTML element to 'none'.
     * @param {HTMLElement} element - The HTML element.
     */
    static hideElement(element) {
        element.style.display = 'none';
    }

    /**
     * Sets the display style property of an HTML element to its default value.
     * @param {HTMLElement} element - The HTML element.
     */
    static showElement(element) {
        element.style.display = '';
    }
}
