'use strict';

class TopcoatSearchInput extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get is() { return 'topcoat-search-input'; }
  static get properties() {
    return {
      class: {
        type: String,
        value: ''
      },
      disabled: {
        type: Boolean
      },
      large: {
        type: Boolean,
        value: false
      },
    }
  }

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

  className(className, large) {
    if (large) {
      return `topcoat-search-input--large ${ className }`.trim();
    } else {
      return `topcoat-search-input ${ className }`.trim();
    }
  }
}

// Register element
customElements.define(TopcoatSearchInput.is, TopcoatSearchInput);