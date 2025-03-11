import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() isSidebarCollapsed!: boolean; // Parent can pass the collapse state
  @Output() sidebarToggle = new EventEmitter<boolean>(); // Emit event to toggle sidebar state

  items = [
    { label: 'Dashboard', routeLink: '/dashboard', icon: 'fas fa-home' },
    { label: 'Students', routeLink: '/student/students', icon: 'fas fa-users' },
    { label: 'Subjects', routeLink: '/admin/subjects', icon: 'fas fa-users' },
    { label: 'Classes', routeLink: '/manage-classes', icon: 'fas fa-school' },
    { label: 'Grades', routeLink: '/admin/grading', icon: 'fas fa-school' },
    { label: 'Reports', routeLink: '/reports', icon: 'fas fa-chart-line' },
  ];

  selectedPage: string = 'Dashboard';

  @Output() pageSelected = new EventEmitter<string>();

  selectPage(page: string) {
    this.selectedPage = page;
    this.pageSelected.emit(page);
  }

  ngOnInit() {
    this.checkScreenSize(); // Check screen size when component loads
  }

  @HostListener('window:resize', ['$event']) // Listen for screen resize
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSidebarCollapsed = window.innerWidth < 1200; // Collapse if screen < 1200px
  }

  toggleCollapse() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.sidebarToggle.emit(this.isSidebarCollapsed); // Emit the new state
  }

  closeSidebar() {
    this.isSidebarCollapsed = true;
    this.sidebarToggle.emit(this.isSidebarCollapsed); // Emit the new state
  }
}
