import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ArticleProvider } from '../../providers/article/article';
import { Article } from '../../models/article/article';

import { ArticleEditPage } from '../article-edit/article-edit';
import { ArticleDeletePage } from '../article-delete/article-delete';

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  public article: Article;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private articleProvider: ArticleProvider
  ) {
    this.getarticle(this.navParams.data.slug);
  }

  private getarticle(id: string): void{
    this.articleProvider.getArticle(id).subscribe(
      (response:any)=>{
        this.article = response.article;

      }
    );
  }

  public toArticleUpdate(){
    this.navCtrl.push(ArticleEditPage, { slug: this.article._id });
  }

  public toArticleDelete(){
    this.navCtrl.push(ArticleDeletePage, { slug: this.article._id });
  }

}



