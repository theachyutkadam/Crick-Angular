import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-player-opration',
  templateUrl: './player-opration.component.html',
  styleUrls: ['./player-opration.component.css']
})
export class PlayerOprationComponent implements OnInit {
  player_form!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}


  player_fields = {
    first_name: ['', Validators.required],
    middle_name: [''],
    last_name: ['', Validators.required],
    contact: ['', Validators.required],
    birth_date: [''],
    gender: ['', Validators.required],
    user_id: [''],
    speciality: [''],
    avatar: [''],
  }

  ngOnInit() { this.pageSetup() }

  pageSetup() {
    this.player_form = this.fb.group(this.player_fields)
  }

  editPlayer() { }
  savePlayer() { }
  createPlayer() {}
  updatePlayer() {}
  destroyPlayer() {}
}
