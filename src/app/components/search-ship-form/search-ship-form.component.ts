import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StationService} from '../../services/station.service';
import {SelectItem} from 'primeng/api';
import {SpaceshipType} from '../../models/spaseship.model';
import {SpaceshipService} from '../../services/spaceship.service';

@Component({
  selector: 'app-search-ship-form',
  templateUrl: './search-ship-form.component.html',
  styleUrls: ['./search-ship-form.component.css']
})
export class SearchShipFormComponent implements OnInit {

  @Input() searchFilters: FormGroup;
  @Output() onSubmitClick: EventEmitter<any> = new EventEmitter();

  public stations: Station[] = [];
  public filteredStations: any[];
  public dropOffAnotherStation = false;
  public showFilters = false;
  public typeOptions: SelectItem[];
  public capacityOptions: SelectItem[];

  constructor(private formBuilder: FormBuilder,
              private stationService: StationService,
              private spaceshipService: SpaceshipService) { }

  ngOnInit() {
    if (this.searchFilters == null) {
      this.searchFilters = this.formBuilder.group({
        pickUpStation: ['', Validators.required],
        dropOffStation: '',
        reserveFrom: ['', [ Validators.required, Validators.pattern('^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}$')]],
        reserveTo: ['', Validators.pattern('^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}$')],
        capacity: '',
        androidPilot: '',
        type: '',
        longTrip: ''
      });
    } else {
      if (this.searchFilters.value.pickUpStation !== this.searchFilters.value.dropOffStation) {
        this.dropOffAnotherStation = true;
      }
    }
    this.stationService.getAll().subscribe(
      stations => this.stations = stations
    );
    this.typeOptions = [
      {label:  'Small', value: SpaceshipType.SMALL},
      {label: 'Medium', value: SpaceshipType.MEDIUM},
      {label: 'Large', value: SpaceshipType.LARGE}
    ];
    this.capacityOptions = [
      {label:  '1 - 5', value: [1, 5]},
      {label: '6 - 20', value: [6, 20]},
      {label: '21 - 100', value: [21, 100]},
      {label: '101 - 1000', value: [101, 1000]}
    ];
  }

  findRent() {
    if (this.searchFilters.valid) {
      if (this.searchFilters.value.dropOffStation == null) {
        this.searchFilters.patchValue({'dropOffStation': this.searchFilters.value.pickUpStation});
      }
      this.spaceshipService.searchFilters = this.searchFilters;
    }
  }

  submitClick() {
    this.onSubmitClick.emit();
  }
  filterStations(event) {
    this.filteredStations = [];
    for (let i = 0; i < this.stations.length; i++) {
      const station = this.stations[i];
      if (station.planet.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredStations.push(station);
      }
    }
  }
}
