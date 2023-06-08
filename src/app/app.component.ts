import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Alma, körte';
  name = 'Angular Zrt.';

  employee = {
    name: 'Minta Julianna (vezető)',
    age: 30,
    city: 'Szeged',
    salary: '1.000.000 Ft',
  };

  employees = [
    { name: 'Minta Péter', age: 30, city: 'Budapest', salary: '500.000 Ft' },
    { name: 'Minta Áron', age: 25, city: 'Debrecen', salary: '400.000 Ft' },
    { name: 'Minta Erika', age: 35, city: 'Hatvan', salary: '300.000 Ft' },
    { name: 'Minta Lilla', age: 40, city: 'Gyöngyös', salary: '200.000 Ft' },
    { name: 'Minta Ferenc', age: 42, city: 'Eger', salary: '400.000 Ft' },
  ];

  constructor() {
    this.kiir('Hello World!');
  }
  kiir(msg: string): void {
    console.log('Working');
    console.log(this.employee.name);
  }
}
