import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  education = [
    {
      degree: "Master’s in Computer Science",
      university: "University at Albany, Albany, NY",
      logo: 'assets/albany.jpg'
      
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      university: "KL University, Vijayawada, India",
      logo: 'assets/klu.png'
    }
  ];

}
