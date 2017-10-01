'use strict';

class TopcoatCheckbox extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get is() { return 'topcoat-checkbox'; }
  static get properties() {
    return {
      disabled: {
        type: Boolean,
        value: false
      }
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
}

// Register element
customElements.define(TopcoatCheckbox.is, TopcoatCheckbox);