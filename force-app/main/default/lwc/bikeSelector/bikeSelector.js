import { LightningElement } from 'lwc';

export default class BikeSelector extends LightningElement {
    selectedProductId;

    handleProductSelected(evt) {
        this.selectedProductId = evt.detail;
    }
}
