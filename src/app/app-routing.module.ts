import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartscreenComponent } from './views/startscreen/startscreen.component'
import { SelectgenderComponent } from './views/selectgender/selectgender.component'
import { SelectriderweightComponent } from './views/selectriderweight/selectriderweight.component'
import { SelectriderlevelComponent } from './views/selectriderlevel/selectriderlevel.component'
import { SelectridingtypeComponent} from './views/selectridingterrain/selectridingtypecomponent.component'
import { SelectshoesizeComponent } from './views/selectshoesize/selectshoesize.component'
import { SelectbendComponent } from './views/selectbend/selectbend.component'
import { SelectshapeComponent } from './views/selectshape/selectshape.component'
import { SelectflexComponent } from './views/selectflex/selectflex.component'
import { DisplayresultComponent } from './views/displayresult/displayresult.component'
import { SelectedboardComponent } from './views/selectedboard/selectedboard.component'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: StartscreenComponent },
  { path: 'gender', component: SelectgenderComponent },
  { path: 'weight', component: SelectriderweightComponent },
  { path: 'shoesize', component: SelectshoesizeComponent },
  { path: 'riderlevel', component: SelectriderlevelComponent },
  { path: 'ridingterrain', component: SelectridingtypeComponent },
  { path: 'bend', component: SelectbendComponent },
  { path: 'shape', component: SelectshapeComponent },
  { path: 'flex', component: SelectflexComponent },
  { path: 'result', component: DisplayresultComponent },
  { path: 'selectedboard', component: SelectedboardComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
