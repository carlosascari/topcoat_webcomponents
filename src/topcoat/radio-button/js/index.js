'use strict';

class TopcoatRadioButton extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get is() { return 'topcoat-radio-button'; }
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
customElements.define(TopcoatRadioButton.is, TopcoatRadioButton);