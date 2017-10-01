'use strict';

class TopcoatSwitch extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get is() { return 'topcoat-switch'; }
  static get properties() {
    return {
      checked: {
        type: Boolean,
        value: false,
      },
      disabled: {
        type: Boolean,
        value: false,
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
}

// Register element
customElements.define(TopcoatSwitch.is, TopcoatSwitch);