import { Routes } from '@angular/router';

import { ScoresComponent } from '../scores/scores.component';

export const routes: Routes = [
    {path: 'scores', component: ScoresComponent},
    {path: '', redirectTo: '/scores', pathMatch: 'full'}
];