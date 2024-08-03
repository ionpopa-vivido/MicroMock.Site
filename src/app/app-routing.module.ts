import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTwoComponent } from './components/home-two/home-two.component';

const routes: Routes = [
    { path: '', component: HomeTwoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
