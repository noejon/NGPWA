import { routes } from './routes';
import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SearchCharacterComponent } from './search-character/search-character.component';
import { RouterModule } from '@angular/router';
import { StarWarsApiService } from './services/star-wars-api.service';
import { FormsModule } from '@angular/forms';
import { CharacterDescriptionComponent } from './character-description/character-description.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCharacterComponent,
    CharacterDescriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ],
  providers: [StarWarsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
