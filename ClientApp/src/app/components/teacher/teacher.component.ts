import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { ConfigurationService } from '../../services/configuration.service';


@Component({
    selector: 'teacher',
    templateUrl: './teacher.component.html',
    styleUrls: ['./teacher.component.css'],
    animations: [fadeInOut]
})
export class TeacherComponent {
    constructor(public configurations: ConfigurationService) {
    }
}
