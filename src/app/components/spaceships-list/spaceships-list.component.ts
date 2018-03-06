import { Component, OnInit } from '@angular/core';
import {SpaceshipService} from '../../services/spaceship.service';
import {Spaceship} from '../../models/spaseship.model';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-spaceships-list',
  templateUrl: './spaceships-list.component.html',
  styleUrls: ['./spaceships-list.component.css']
})
export class SpaceshipsListComponent implements OnInit {

  public spaceships: Spaceship[] = [];
  public loading = true;
  public searchFilters: FormGroup;
  constructor(private spaceshipService: SpaceshipService,
              private router: Router) { }

  ngOnInit() {
    this.spaceshipService.getAll().subscribe(
      spaceships => this.spaceships = spaceships,
      err => console.log(err),
      () => this.loading = false
    );
    console.log(this.spaceshipService.searchFilters);
    if (this.spaceshipService.searchFilters != null) {
      this.searchFilters = this.spaceshipService.searchFilters;
    }
  }

  public onRowClick(id) {
    this.router.navigate(['/spaceships/', id]);
  }

}
