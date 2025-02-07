import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.apiService.getProjects().subscribe((data) => {
      console.log("ngOnInit1");
      this.projects = data;
    });
  }

}
