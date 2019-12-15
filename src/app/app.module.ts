import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StartscreenComponent } from './views/startscreen/startscreen.component';
import { SelectgenderComponent } from './views/selectgender/selectgender.component';
import { SelectriderweightComponent } from './views/selectriderweight/selectriderweight.component';
import { SelectriderlevelComponent } from './views/selectriderlevel/selectriderlevel.component';
import { SelectridingtypeComponent } from './views/selectridingterrain/selectridingtypecomponent.component';
import { SelectshoesizeComponent } from './views/selectshoesize/selectshoesize.component';
import { ShoesizeService } from './services/shoesize.service';
import { SelectbendComponent } from './views/selectbend/selectbend.component';
import { SelectshapeComponent } from './views/selectshape/selectshape.component';
import { SelectflexComponent } from './views/selectflex/selectflex.component';
import { DisplayresultComponent } from './views/displayresult/displayresult.component';
import { SnowboardService } from './services/snowboard.service';
import { RiderLevelService } from './services/rider-level.service';
import { SelectedboardComponent } from './views/selectedboard/selectedboard.component';
import { FooterComponent } from './views/footer/footer.component';
import { ExploreTechDetailComponent } from './views/exploretechdetail/exploretechdetail.component';
import { GlobalHttpInterceptorService } from './global-http-interceptor.service';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { StatisticsComponent } from './views/statistics/statistics.component';
import { TotalsearchesComponent } from './views/stats/totalsearches/totalsearches.component';
import { TotalnumberdisplayedboardsComponent } from './views/stats/totalnumberdisplayedboards/totalnumberdisplayedboards.component';
import { DisplayedboardsComponent } from './views/stats/displayedboards/displayedboards.component';
import { TechdetailstatsComponent } from './views/stats/techdetailstats/techdetailstats.component';


@NgModule({
  declarations: [
    AppComponent,
    StartscreenComponent,
    SelectgenderComponent,
    SelectriderweightComponent,
    SelectriderlevelComponent,  
    SelectridingtypeComponent,
    SelectshoesizeComponent,
    SelectbendComponent,
    SelectshapeComponent,
    SelectflexComponent,
    DisplayresultComponent,
    SelectedboardComponent,
    FooterComponent,
    ExploreTechDetailComponent,
    LoginComponent,
    LogoutComponent,
    StatisticsComponent,
    TotalsearchesComponent,
    TotalnumberdisplayedboardsComponent,
    DisplayedboardsComponent,
    TechdetailstatsComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ShoesizeService, SnowboardService, RiderLevelService, { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
