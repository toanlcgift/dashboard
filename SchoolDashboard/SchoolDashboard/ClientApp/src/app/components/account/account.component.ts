import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { ConfigurationService } from '../../services/configuration.service';


@Component({
    selector: 'account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
    animations: [fadeInOut]
})
export class AccountComponent {
    constructor(public configurations: ConfigurationService) {
    }
}
