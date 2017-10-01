'use strict';

class TopcoatNotification extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get is() { return 'topcoat-notification'; }
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
customElements.define(TopcoatNotification.is, TopcoatNotification);