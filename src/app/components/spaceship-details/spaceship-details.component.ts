import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpaceshipService} from '../../services/spaceship.service';
import {Spaceship} from '../../models/spaseship.model';

@Component({
  selector: 'app-spaceship-details',
  templateUrl: './spaceship-details.component.html',
  styleUrls: ['./spaceship-details.component.css']
})
export class SpaceshipDetailsComponent implements OnInit {

  private id: number;
  public spaceship: Spaceship;
  public loading = true;
  public images: any[] = [];
  slideIndex = 1;
  constructor( private route: ActivatedRoute,
               private spaceshipService: SpaceshipService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']); });
    this.spaceshipService.getAll().subscribe(
      data => {
        this.spaceship = data.filter(z => z.id === this.id)[0];
      },
      err => console.log(err),
      () => this.loading = false
    );
  }
}
