import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewService } from 'src/app/view.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  json = '';

  dataList: any[] | undefined;
  headerCols: string[] = [];
  contentBody: any[] = [];

  constructor(private route: ActivatedRoute, private view: ViewService) { }

  ngOnInit(): void {
    this.json = this.route.snapshot.params['url'];
    this.view.getData(this.json).subscribe(data => {
      console.log(data)
      this.headerCols = Object.keys(data[0]);
      data.forEach((item)=> {
        let values = Object.keys(item).map((key) => item[key]);
        this.contentBody.push(values);
      })

    })
  }
}

