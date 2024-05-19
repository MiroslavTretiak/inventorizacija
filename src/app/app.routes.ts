import { Routes } from '@angular/router';
import { NewEmployeeComponent } from './components/employess/new-employee/new-employee.component';
import { NewItemComponent } from './components/items/new-item/new-item.component';
export const routes: Routes = [

    {path:"employees/add", component:NewEmployeeComponent},
    {path:"items/add", component:NewItemComponent}
];
