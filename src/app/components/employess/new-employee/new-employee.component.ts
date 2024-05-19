import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {

  public newEmployeeSubmit(f:NgForm){
    console.log(f.form.value);
  }
}
