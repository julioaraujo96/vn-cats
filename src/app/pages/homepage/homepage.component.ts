import { Component, OnInit } from '@angular/core';
import { Breeds } from 'src/app/models/breeds';
import { Fact } from 'src/app/models/fact';
import { CatinfoService } from 'src/app/services/catinfo.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  breeds: Breeds[] = [];
  fact: Fact[] = [];
  errorMessage: any;

  constructor( private catInfoService: CatinfoService,) { }

  ngOnInit(): void {
    this.catInfoService.getAllCatBreeds().subscribe((data: Breeds[]) => {
      console.log(data);
      this.breeds = data;
    });
  }

}
