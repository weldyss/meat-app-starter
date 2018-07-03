import { NgModule } from "@angular/core";
import { RouterModule, Routes, Route } from "@angular/router";
import { AboutComponent } from "./about.component";

const ROUTES: Routes = [
  { path: '', component: AboutComponent}
]

@NgModule({
  declarations: [AboutComponent],
  imports: [RouterModule.forChild(ROUTES)]
})
export class AboutModule {}