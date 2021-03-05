import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-textstore',
  templateUrl: './textstore.component.html',
  styleUrls: ['./textstore.component.scss']
})
export class TextstoreComponent implements OnInit {

  arr = [];

  constructor(){

  }

  ngOnInit(): void {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
    }
    values.map(item=>{
      this.arr.push(JSON.parse(item))
    })
  }
}
