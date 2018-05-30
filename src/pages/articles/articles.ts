import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Refresher } from 'ionic-angular';
import { Article } from '../../models/article/article';
import { ArticleProvider } from '../../providers/article/article';
import { ArticlePage } from '../article/article';
import { ArticleCreatePage } from '../article-create/article-create'


//import { }
/**
 * Generated class for the ArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articles',

  templateUrl: 'articles.html',
})
export class ArticlesPage {

    public articles: Article[];

    private loader: any;

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private articleProvider: ArticleProvider,
      private loadingCtrl: LoadingController
    ) {
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ArticlesPage')
      this.getArticles();
    }
    public doRefresh(refresher: Refresher): void{

      this.articleProvider.getArticles().subscribe(
        (response:any)=>{
          this.articles = response.articles;
          refresher.complete();
            console.log(response);
        }
      );

      setTimeout(
      ()=>{
          refresher.complete();
        },
        2000
      );
    }

    public getArticles(): void {
      this.presentLoader();




      this.articleProvider.getArticles().subscribe(
        (response:any)=>{
          this.articles = response.articles;
          this.loader.dismiss();
        }
      );
    }

    private presentLoader(): void{

      this.loader = this.loadingCtrl.create({
        content: 'Loading...'
    });

      this.loader.present();
    }

    public toArticle(id: string): void{
      this.navCtrl.push(ArticlePage, { id: id });
    }

    public toCreateArticle(): void{
      this.navCtrl.push(ArticleCreatePage);
    }

}
