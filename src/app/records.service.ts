import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { }

  getData(apiKey: string) {
    return this.http.get(`https://ru.api.riotgames.com/lol/summoner/v4/summoners/by-name/%D0%A2%D0%B8%D0%BCo?api_key=${apiKey}`)
  }
}
