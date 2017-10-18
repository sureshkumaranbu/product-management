import { Component } from '@angular/core';

@Component({
    selector: "pm-app",
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
