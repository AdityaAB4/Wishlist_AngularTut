import { WishModule } from './wish/wish.module';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

import {EventService} from './../shared/services/EventService'
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { WishComponent } from './wish/wish.component';
import { ContactModule } from './contact/contact.module';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, FormsModule, WishComponent, ContactModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [EventService , HttpClient]
})
export class AppComponent implements OnInit {
   
  constructor(){}

  ngOnInit(): void {
    
  }
  
  
}
