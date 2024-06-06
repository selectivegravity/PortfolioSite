import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class EducationBackground extends LightningElement {
    aboutMeImg = `${IMAGES}/Abhishek_Smooth_fotor.jpg`;

    educationList = [
        {
            id: 1,
            degree: 'Bachelor of Techology in Civil Engineering',
            institution: 'National Institue of Technology, Silchar, Assam',
            year: '2018 - 2022',
            score: 7.8,
            unit: 'CGPA'
        },
        {
            id: 2,
            degree: 'Senior Seconday',
            institution: 'P.N. National Public School',
            year: '2015 - 2017',
            score: 90.2,
            unit: '%'
        },
        {
            id: 3,
            degree: 'Higher Secondary',
            institution: 'Smt. D.D.T. Inter College',
            year: '2013 - 2015',
            score: 9.8,
            unit: 'CGPA'
        }
    ];

    get backgroundStyle() {
        return `background: url(${IMAGES}/Education.jpg) repeat;`;
    }
}