import { LightningElement, api } from 'lwc';
import { bikes } from 'c/bikeData';

export default class BikeDetail extends LightningElement {
    product;
    _productId = undefined;

    set productId(value) {
        this._productId = value;
        this.product = bikes.find(bike => bike.fields.Id.value === value);
    }

    @api get productId() {
        return this._productId;
    }
}
