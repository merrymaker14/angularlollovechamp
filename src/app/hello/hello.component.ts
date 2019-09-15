import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.sass']
})

export class HelloComponent implements OnInit {
  summonerName = "Тимo";

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit", this.summonerName);
  }

  showSummonerName() {
    console.log(this.summonerName);
  }
}
