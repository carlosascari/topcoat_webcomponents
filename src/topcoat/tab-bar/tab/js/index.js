'use strict';

class TopcoatTab extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get is() { return 'topcoat-tab'; }
  static get properties() {
    return {
      name: {
        type: String,
        value: ''
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
customElements.define(TopcoatTab.is, TopcoatTab);