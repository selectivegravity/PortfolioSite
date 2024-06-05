import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class Intro extends LightningElement {
    // Accessing the IMAGES resource URL directly
    candidatePic = IMAGES + '/Abhishek_Smooth_fotor.jpg';
    backgroundStyle = `background-image: url('${IMAGES}/SF_BACK1.jpg'); background-size: cover;`;
}