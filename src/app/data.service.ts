import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface DataRow {
  id: number;
  name: string;
  age: number;
  salary: number;
  isActive: boolean;
  department: string;
  rating: number;
  startDate: string;
  email: string;
  position: string;
}

export enum Department {
  Engineering = 'Engineering',
  Sales = 'Sales',
  Marketing = 'Marketing',
  HR = 'Human Resources',
  Finance = 'Finance'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<DataRow[]>(this.generateMockData());
  public data$ = this.dataSubject.asObservable();

  private generateMockData(): DataRow[] {
    const departments = Object.values(Department);
    const positions = ['Senior', 'Junior', 'Lead', 'Manager', 'Director'];
    const names = [
      'Alice Johnson', 'Bob Smith', 'Carol Davis', 'David Wilson', 'Emma Brown',
      'Frank Miller', 'Grace Lee', 'Henry Taylor', 'Iris Anderson', 'Jack White',
      'Karen Garcia', 'Leo Martinez', 'Mia Rodriguez', 'Noah Thompson', 'Olivia Clark',
      'Paul Lewis', 'Quinn Hall', 'Rachel Allen', 'Sam Young', 'Tina King',
      'Ulysses Wright', 'Victoria Lopez', 'Walter Hill', 'Xander Green', 'Yvonne Adams',
      'Zachary Baker', 'Amy Nelson', 'Brian Carter', 'Chloe Mitchell', 'Derek Perez',
      'Elena Roberts', 'Felix Turner', 'Gina Phillips', 'Hugo Campbell', 'Ivy Parker'
    ];

    return Array.from({ length: 35 }, (_, index) => ({
      id: index + 1,
      name: names[index],
      age: Math.floor(Math.random() * 40) + 25,
      salary: Math.round((Math.random() * 150000 + 50000) * 100) / 100,
      isActive: Math.random() > 0.3,
      department: departments[Math.floor(Math.random() * departments.length)],
      rating: Math.round((Math.random() * 4 + 1) * 10) / 10,
      startDate: this.getRandomDate(),
      email: names[index].toLowerCase().replace(' ', '.') + '@company.com',
      position: positions[Math.floor(Math.random() * positions.length)]
    }));
  }

  private getRandomDate(): string {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().split('T')[0];
  }

  getData(): Observable<DataRow[]> {
    return this.data$;
  }

  updateRow(updatedRow: DataRow): void {
    const currentData = this.dataSubject.value;
    const index = currentData.findIndex(row => row.id === updatedRow.id);
    if (index !== -1) {
      currentData[index] = { ...updatedRow };
      this.dataSubject.next([...currentData]);
    }
  }

  getAllData(): DataRow[] {
    return this.dataSubject.value;
  }
}