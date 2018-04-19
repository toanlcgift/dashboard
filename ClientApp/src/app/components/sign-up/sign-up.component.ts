import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { UserSignUp } from "../../models/user-signup.model";



@Component({
    selector: "sign-up",
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    appTitle = "Whole labs";
    appLogo = require("../../assets/images/whalelandlogo.png");
    userSignUp = new UserSignUp();

    signup() {

    }
}

