import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/connection/services/http.service';

@Component({
  selector: 'app-player-index',
  templateUrl: './player-index.component.html',
  styleUrls: ['./player-index.component.css']
})
export class PlayerIndexComponent implements OnInit {
  players: any;

  constructor(
    private _http: HttpService
  ) {}
  ngOnInit() {
    this.getPlayers()
  }

  getPlayers() {
    this._http.get('players', '').subscribe((response: any) => {
      console.warn("response", response)
      this.players = response
    },
      err => {console.error(err);
    })
  }
}
