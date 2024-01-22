import { Component, Input } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  
  @Input() wishes: WishItem[] = [];


}
