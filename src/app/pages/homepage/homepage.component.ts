import { Component, OnInit } from '@angular/core';
import { Breed } from 'src/app/models/breeds';
import { Fact } from 'src/app/models/fact';
import { CatinfoService } from 'src/app/services/catinfo.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  breeds: Breed[] = [];
  fact: Fact[] = [];

  constructor( private catInfoService: CatinfoService,) { }

  ngOnInit(): void {
    this.catInfoService.allCatBreeds$.subscribe((data: Breed[]) => {
      console.log(data);
      this.breeds = data;
    });
  }

}
