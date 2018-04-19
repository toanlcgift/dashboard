import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { ConfigurationService } from '../../services/configuration.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [fadeInOut]
})
export class HomeComponent {
    chars = require("../../assets/images/chars.png");
    users = require("../../assets/images/users.svg");
    books = require("../../assets/images/book.svg");
    change = require("../../assets/images/change.svg");
    add = require("../../assets/images/add.svg");
    constructor(public configurations: ConfigurationService) {
    }
    
}
