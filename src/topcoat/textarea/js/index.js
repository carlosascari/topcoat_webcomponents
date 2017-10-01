'use strict';

class TopcoatTextarea extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get is() { return 'topcoat-textarea'; }
  static get properties() {
    return {
      disabled: {
        type: Boolean,
        value: false
      },
      placeholder: {
        type: String,
        value: ''
      },
      value: {
        type: String,
        value: ''
      },
      class: {
        type: String,
        value: ''
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
      return `topcoat-textarea--large ${ className }`.trim();
    } else {
      return `topcoat-textarea ${ className }`.trim();
    }
  }
}

// Register element
customElements.define(TopcoatTextarea.is, TopcoatTextarea);