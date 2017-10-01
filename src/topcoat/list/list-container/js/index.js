'use strict';

class TopcoatListContainer extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get is() { return 'topcoat-list-container'; }
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
customElements.define(TopcoatListContainer.is, TopcoatListContainer);