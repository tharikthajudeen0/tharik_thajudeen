import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component'; // 👈 import your Hero section
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    AchievementsComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent], // 👈 include Hero here
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-experience></app-experience>
    <app-projects></app-projects>
    <app-achievements></app-achievements>
    <app-education></app-education>
    <app-skills></app-skills>
    <app-contact></app-contact>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}
