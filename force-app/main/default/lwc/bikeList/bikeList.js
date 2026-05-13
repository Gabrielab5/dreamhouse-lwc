import { LightningElement } from 'lwc';
import { bikes } from 'c/bikeData';

export default class BikeList extends LightningElement {
    bikes = bikes;

    handleTileClick(evt) {
        const event = new CustomEvent('productselected', {
            detail: evt.detail
        });
        this.dispatchEvent(event);
    }
}
