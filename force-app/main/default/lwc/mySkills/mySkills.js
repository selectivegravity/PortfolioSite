import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images';

export default class MySkills extends LightningElement {
    skills = [
        { id: 1, name: 'JavaScript', level: 90, style: 'width: 90%; background-color: #006989;' },
        { id: 2, name: 'HTML', level: 85, style: 'width: 85%; background-color: #E88D67;' },
        { id: 3, name: 'CSS', level: 80, style: 'width: 80%; background-color: #005C78;' },
        { id: 4, name: 'Salesforce', level: 75, style: 'width: 75%; background-color: #F3F7EC;' },
        { id: 5, name: 'Apex', level: 80, style: 'width: 80%; background-color: #006989;' },
        { id: 6, name: 'LWC', level: 85, style: 'width: 85%; background-color: #E88D67;' },
        { id: 7, name: 'SOQL', level: 78, style: 'width: 78%; background-color: #005C78;' },
        { id: 8, name: 'Visualforce', level: 70, style: 'width: 70%; background-color: #F3F7EC;' },
        { id: 9, name: 'Lightning', level: 88, style: 'width: 88%; background-color: #006989;' },
        { id: 10, name: 'Integration', level: 82, style: 'width: 82%; background-color: #E88D67;' },
        { id: 11, name: 'C++', level: 90, style: 'width: 90%; background-color: #006989;' },
    ];

    get skillGroups() {
        const groups = [];
        for (let i = 0; i < this.skills.length; i += 5) {
            groups.push(this.skills.slice(i, i + 5));
        }
        return groups;
    }

    get backgroundStyle() {
        return `background: url(${IMAGES}/SkillsBack.png) repeat;`;
    }
}
