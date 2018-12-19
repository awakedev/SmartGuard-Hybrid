import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { AgmCoreModule } from '@agm/core';
import { FacebookModule } from 'ngx-facebook';
import { Parallax, ParallaxConfig } from 'ngx-parallax';
import { HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './_pages/home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { LoginPageComponent } from './_pages/login-page/login-page.component';
import { DashboardPageComponent } from './_pages/dashboard-page/dashboard-page.component';
import { ArticlesComponent } from './_pages/articles/articles.component';
import { ArticlesViewComponent } from './_pages/articles-view/articles-view.component';

// Services
import { DataService} from "./_services/data.service";
import { DangersPageComponent } from './_pages/dangers-page/dangers-page.component';
import { FeaturesPageComponent } from './_pages/features-page/features-page.component';
import { ProfilePageComponent } from './_pages/profile-page/profile-page.component';
import { FeatureComponent } from './_components/feature/feature.component';
import { FooterComponent } from './_components/footer/footer.component';

// Resolvers
import { ArticleResolver } from "./_pages/articles-view/articles-view.resolver";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginPageComponent,
    DashboardPageComponent,
    Parallax,
    ArticlesComponent,
    ArticlesViewComponent,
    DangersPageComponent,
    FeaturesPageComponent,
    ProfilePageComponent,
    FeatureComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    FacebookModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7cOHjHJkUxVcPEjL71OjalKrv4zC3v00'
    })
  ],
  providers: [
    DataService,
    ArticleResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
