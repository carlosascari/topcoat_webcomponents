'use strict';

class NavigationBar extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get is() { return 'topcoat-navigation-bar'; }
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
customElements.define(NavigationBar.is, NavigationBar);