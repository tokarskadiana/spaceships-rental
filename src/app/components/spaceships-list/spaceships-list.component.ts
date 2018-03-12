import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {SpaceshipService} from '../../services/spaceship.service';
import {Spaceship} from '../../models/spaseship.model';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {SearchShipFormComponent} from '../search-ship-form/search-ship-form.component';

@Component({
  selector: 'app-spaceships-list',
  templateUrl: './spaceships-list.component.html',
  styleUrls: ['./spaceships-list.component.css']
})
export class SpaceshipsListComponent implements OnInit, AfterViewInit {
  @ViewChild(SearchShipFormComponent) childSearch: SearchShipFormComponent;

  public spaceships: Spaceship[] = [];
  public loading = true;
  public searchFilters: FormGroup;

  constructor(private spaceshipService: SpaceshipService,
              private router: Router,
              private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.spaceshipService.getAll().subscribe(
      spaceships => this.spaceships = spaceships,
      err => console.log(err),
      () => this.loading = false
    );
  }
  ngAfterViewInit(): void {
    if (this.spaceshipService.searchFilters != null) {
      this.searchFilters = this.spaceshipService.searchFilters;
    } else {
      this.searchFilters = this.childSearch.searchFilters;
    }
    this.cdRef.detectChanges();
  }

  public onRowClick(id) {
    this.router.navigate(['/spaceships/', id]);
  }

  public filterSpaceshipsList() {
    const filter = this.searchFilters.value;
    this.spaceships = this.spaceships.filter(
      z => this.isFreeForDates(z.reservations, filter.reserveFrom, filter.reserveTo))
      .filter( z => z.currentStation.planet === filter.pickUpStation.planet);
  }

  private isFreeForDates(reservations: Reservation[], from: number, to: number) {
    let free = true;
    if (reservations.length > 0) {
      reservations.forEach( z => {
        if (!(z.from * 1000 > new Date(to).getTime() || z.to * 1000 < new Date(from).getDate())) {
          free = false;
        }
      });
    }
    return free;
  }
}
