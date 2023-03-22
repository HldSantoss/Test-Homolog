import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/article.service';
import { Articles } from 'src/models/articles.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  
  articles: Articles[]=[];

  constructor(private service: ArticleService){

  }
  
  ngOnInit() {

    this.service.getArticles().subscribe((data: Articles[]) =>{
      this.articles = data
    })
  }

  title = 'articles-frontend';
}
