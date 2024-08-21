import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NavbarItemComponent } from './components/common/navbar-item/navbar-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LastVisitedModalComponent } from './components/modals/last-visited-modal/last-visited-modal.component';
import { EditModalComponent } from './components/modals/edit-modal/edit-modal.component';
import { NewAddModalComponent } from './components/modals/new-add-modal/new-add-modal.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UppercaseSocialMediaNamePipe } from './shared/pipe/uppercase-social-media-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarItemComponent,
    NavbarComponent,
    LastVisitedModalComponent,
    EditModalComponent,
    NewAddModalComponent,
    LoginComponent,
    UppercaseSocialMediaNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    PrimeNgModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
