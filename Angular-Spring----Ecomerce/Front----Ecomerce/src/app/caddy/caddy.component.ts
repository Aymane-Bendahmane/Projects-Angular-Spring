import { Component, OnInit } from '@angular/core';
import {CadyService} from '../service/cady.service';

@Component({
  selector: 'app-caddy',
  templateUrl: './caddy.component.html',
  styleUrls: ['./caddy.component.css']
})
export class CaddyComponent implements OnInit {

  constructor(public caddyService:CadyService) { }

  ngOnInit(): void {
  }

}
