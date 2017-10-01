'use strict';

class TopcoatTabBar extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get is() { return 'topcoat-tab-bar'; }
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
customElements.define(TopcoatTabBar.is, TopcoatTabBar);