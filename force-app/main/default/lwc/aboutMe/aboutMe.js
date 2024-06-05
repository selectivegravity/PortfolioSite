import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class AboutMe extends LightningElement {
    aboutMeImg = IMAGES + '/AboutMe.png';
    backgroundStyle = `background-image: url('${IMAGES}/AboutMeBack.png'); background-size: cover;`;
    
        handleContactClick() {
            window.alert('Hi Bitch!');
        }
}

//AboutMeBack.png