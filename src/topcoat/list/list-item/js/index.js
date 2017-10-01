'use strict';

class TopcoatListItem extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get is() { return 'topcoat-list-item'; }
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
customElements.define(TopcoatListItem.is, TopcoatListItem);