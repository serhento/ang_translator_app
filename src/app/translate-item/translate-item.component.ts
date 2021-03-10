import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-translate-item',
  templateUrl: './translate-item.component.html',
  styleUrls: ['./translate-item.component.css']
})
export class TranslateItemComponent implements OnInit {

  id: number;
  langIn = '';
  langOut = '';
  textIn = '';
  textOut = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id-1;
      this.langIn = params.langIn;
      this.langOut = params.langOut;
      this.textIn = params.source;
      this.textOut = params.target;
    });
  }
}
