import { Component, OnInit } from '@angular/core';
import {SpaceshipService} from '../../services/spaceship.service';
import {Spaceship} from '../../models/spaseship.model';

@Component({
  selector: 'app-spaceships-list',
  templateUrl: './spaceships-list.component.html',
  styleUrls: ['./spaceships-list.component.css']
})
export class SpaceshipsListComponent implements OnInit {

  public spaceships: Spaceship[] = [];
  public loading = true;
  constructor(private spaceshipService: SpaceshipService) { }

  ngOnInit() {
    this.spaceshipService.getAll().subscribe(
      spaceships => this.spaceships = spaceships,
      err => console.log(err),
      () => this.loading = false
    );
  }

}
