import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  jsonURL: string | undefined ;

  constructor(private router: Router) { }

  getURLAndBrowse(){
    this.router.navigate(['/grid-view/grid/grid',this.jsonURL])
  }

  ngOnInit(): void {
  }

}
