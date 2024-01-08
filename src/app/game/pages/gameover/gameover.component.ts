import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {

  scores: any[] = []
  users: any[] = []

  get score(): number {
    this.scores.push(this.playerService.score)
    this.users.push(localStorage.getItem("actualUser"))
    localStorage.setItem("sscores", JSON.stringify(this.scores))
    localStorage.setItem("uusers", JSON.stringify(this.users))
    return this.playerService.score;
  }

  get highScore(): number {
    return this.playerService.highScore;
  }

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    const aScores = localStorage.getItem('sscores');
    this.scores = aScores ? JSON.parse(aScores) : [];
    const aUsers = localStorage.getItem('uusers');
    this.users = aUsers ? JSON.parse(aUsers) : [];
  }

}
