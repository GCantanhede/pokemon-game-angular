import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  actualScores: any
  actualUsers: any

  constructor() { }

  ngOnInit(): void {
    const aScores = localStorage.getItem('sscores');
    this.actualScores = aScores ? JSON.parse(aScores) : [];
    const aUsers = localStorage.getItem('uusers');
    this.actualUsers = aUsers ? JSON.parse(aUsers) : [];
  }

}
