import { HeaderComponent } from './header/header.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, PostCreateComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
