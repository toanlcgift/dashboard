import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { AccountComponent } from "./components/account/account.component";
import { TeacherComponent } from "./components/teacher/teacher.component";



@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "", component: HomeComponent, canActivate: [AuthGuard], data: { title: "Home" } },
            { path: "login", component: LoginComponent, data: { title: "Login" } },
            { path: "sign-up", component: SignUpComponent, data: { title: "SignUp" } },
            { path: "home", redirectTo: "/", pathMatch: "full" },
            { path: "account", component: AccountComponent, canActivate: [AuthGuard], data: { title: "Account" } },
            { path: "teacher", component: TeacherComponent, canActivate: [AuthGuard], data: { title: "Teacher" } },
            { path: "**", component: NotFoundComponent, data: { title: "Page Not Found" } },
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthService, AuthGuard
    ]
})
export class AppRoutingModule { }
