import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fact } from 'src/app/models/fact';
import { CatinfoService } from 'src/app/services/catinfo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  fact!: Fact;
  constructor(private route: Router,private service: CatinfoService ) { }

  ngOnInit(): void {
    this.service.randomFact$.subscribe((fact:Fact)=>{
        this.fact = fact;
    })
  }
  
  back()
  {
    this.route.navigate(['']);
  }
}
