import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar-sessio-cantanhede',
  templateUrl: './iniciar-sessio-cantanhede.component.html',
  styleUrls: ['./iniciar-sessio-cantanhede.component.css']
})
export class IniciarSessioCantanhedeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveUser() {
    // @ts-ignore
    let userName = document.getElementById("userName").value
    localStorage.setItem("actualUser",userName)
  }

}
