import { Component, Input, OnInit } from '@angular/core';
import { Breed } from 'src/app/models/breeds';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})
export class BreedComponent implements OnInit {

  @Input()
  breed!: Breed;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.breed);
  }

}
