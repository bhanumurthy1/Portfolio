import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ProjectComponent } from "../project/project.component";
import { EducationComponent } from "../education/education.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [ContactComponent, ExperienceComponent, ProjectComponent, EducationComponent, SkillsComponent]
})
export class AboutComponent {

}
