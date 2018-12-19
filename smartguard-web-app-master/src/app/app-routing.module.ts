import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./_pages/home/home.component"; 
import { DashboardPageComponent } from "./_pages/dashboard-page/dashboard-page.component";
import { LoginPageComponent } from "./_pages/login-page/login-page.component";
import { ArticlesComponent} from "./_pages/articles/articles.component";
import { ArticlesViewComponent} from "./_pages/articles-view/articles-view.component";
import { FeaturesPageComponent } from "./_pages/features-page/features-page.component";
import { ProfilePageComponent } from "./_pages/profile-page/profile-page.component";
import { DangersPageComponent } from "./_pages/dangers-page/dangers-page.component";
import { ArticleResolver } from "./_pages/articles-view/articles-view.resolver";

const routes: Routes = [
	{
		component: HomeComponent,
		path: ""
	},
	{
		component: LoginPageComponent,
		path: "login"
	},
	{
		component: DashboardPageComponent,
		path : "admin"
	},
	{
		component: ArticlesViewComponent,
		path : "articles/:id",
		resolve: {
			article : ArticleResolver
		}
	},
	{
		component: ArticlesComponent,
		path: "articles"
	},
	{
		component: HomeComponent,
		path: "features"
	},
		{
		component: DangersPageComponent,
		path: "dangers"
	},
		{
		component: ProfilePageComponent,
		path: "profile"
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
