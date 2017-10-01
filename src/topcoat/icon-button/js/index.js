'use strict';

class TopcoatIconButton extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get is() { return 'topcoat-icon-button'; }
  static get properties() {
    return {
      disabled: {
        type: Boolean,
        value: false
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
customElements.define(TopcoatIconButton.is, TopcoatIconButton);