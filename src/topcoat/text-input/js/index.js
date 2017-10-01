'use strict';

class TopcoatTextInput extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get is() { return 'topcoat-text-input'; }
  static get properties() { return {} }

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
customElements.define(TopcoatTextInput.is, TopcoatTextInput);