import { Injectable } from '@angular/core';
import { Application } from './application';

@Injectable({
  providedIn: 'root',
})
export class Applications {
  selectedStatus = '';
  applications: Application[] = [
    {
      firma: 'DSV',
      position: 'Fullstack Entwickler',
      status: 'beworben',
      datum: '20.07.2026',
    },
    {
      firma: 'hiqs',
      position: 'Junior Go Developer',
      status: 'beworben',
      datum: '20.07.2026',
    },
    {
      firma: 'BAUHAUS',
      position: 'Junior Softwareentwickler',
      status: 'beworben',
      datum: '20.07.2026',
    },
  ];

  addApplication() {
    this.applications.push({
      firma: 'Zech Hochbau',
      position: 'Junior Softwareentwickler',
      status: 'beworben',
      datum: '20.07.2026',
    });
  }

  deleteApplication(firma: string) {
    this.applications = this.applications.filter((a) => firma !== a.firma);
  }

  updateStatus(firma: string, event: Event) {
    const neuerStatus = (event.target as HTMLSelectElement).value;
    this.applications = this.applications.map((a) =>
      firma === a.firma ? { ...a, status: neuerStatus } : a,
    );

    console.log(this.applications)
  }

  get filteredApplications() {
    return this.applications.filter(a=> this.selectedStatus === '' ||a.status === this.selectedStatus )
  }

  updateFilter(event: Event) {
    this.selectedStatus = (event.target as HTMLSelectElement).value;
  }
}
