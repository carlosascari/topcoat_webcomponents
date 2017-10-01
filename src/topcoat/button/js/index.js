'use strict';

import properties from 'properties.js';

class TopcoatButton extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get is() { return 'topcoat-button'; }
  static get properties() { return properties; }

  /**
  * @controuctor
  */
  constructor() {
    super();
    this.initialAttachment = false;
  }

  /**
  * Attached Lifecycle
  */
  attached() {
    if (!this.initialAttachment) {
      this.initialAttachment = true;
    }
  }

  className(className, large, cta) {
    if (large) {
      if (cta) return `topcoat-button--large--cta ${ className }`.trim();
      if (this.quiet) {
        return `topcoat-button--large--quiet ${ className }`.trim();
      } else {
        return `topcoat-button--large ${ className }`.trim();
      }
    } else {
      if (cta) return `topcoat-button--cta ${ className }`.trim();
      if (this.quiet) {
        return `topcoat-button--quiet ${ className }`.trim();
      } else {
        return `topcoat-button ${ className }`.trim();
      }
    }
  }
}

// Register element
customElements.define(TopcoatButton.is, TopcoatButton);