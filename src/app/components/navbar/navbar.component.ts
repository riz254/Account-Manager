import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() currentPage: string = 'Dashboard';
  currentDate: string = new Date().toLocaleDateString(); // ✅ Get formatted date
}
