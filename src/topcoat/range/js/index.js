'use strict';

class TopcoatRange extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get is() { return 'topcoat-range'; }
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
customElements.define(TopcoatRange.is, TopcoatRange);