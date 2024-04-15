import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ParentComponent } from './app-parent/app-parent';
import { AppChild } from './app-child/app-child';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    FormsModule,
    UserComponent,
    ParentComponent,
    AppChild
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
