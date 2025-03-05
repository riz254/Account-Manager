import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path: 'customer',
    children: [
      { path: 'customers', component: CustomersComponent },
      //   { path: 'grading', component: GradesComponent },
      //   { path: 'subjects', component: SubjectsComponent },
      //   { path: 'classes', component: ClassesComponent },
      //   { path: 'streams', component: StreamsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
