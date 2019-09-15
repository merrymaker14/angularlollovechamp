import { Component } from '@angular/core';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'intro2angular';
  LOLAPIKEY = "RGAPI-e912440e-6440-4a55-ba8a-b1da2a12b966";
  records = {};

  constructor(private myFirstService: RecordsService) {

  }

  ngOnInit() {
    this.myFirstService.getData(this.LOLAPIKEY).subscribe(data => {
      this.records = data;
    })
  }
}
