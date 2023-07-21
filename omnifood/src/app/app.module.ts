import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedInComponent } from './components/featured-in/featured-in.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { MealsComponent } from './components/meals/meals.component';
import { TestimonialsGalleryComponent } from './components/testimonials-gallery/testimonials-gallery.component';
import { PricingFeaturesComponent } from './components/pricing-features/pricing-features.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FeaturedInComponent,
    HowItWorksComponent,
    MealsComponent,
    TestimonialsGalleryComponent,
    PricingFeaturesComponent,
    CtaComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
