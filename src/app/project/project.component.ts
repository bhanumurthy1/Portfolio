import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  projects = [
    {
      title: 'Health Care Management System',
      description: '(HMS)',
      link: 'https://github.com/bhanumurthy1/HealthCare-Management-System.git',
      imgSrc: 'assets/health.png',
      technologies: ['html5', 'css3-alt', 'js','mysql','spring boot','aws','java','jdbc']
    },
    {
      title: 'Sentimental Analysis on Movie Reviews',
      description: '(SA)',
      link: 'https://github.com/bhanumurthy1/Sentimental-Analysis-on-Movie-Reviews.git',
      imgSrc: 'assets/sentiment.jpg',
      technologies: ['python']
    },
    {
      title: 'Mall Management System',
      description: 'MMS',
      link: 'https://github.com/bhanumurthy1/Mall-Management-System.git',
      imgSrc: 'assets/mall.jpg',
      technologies: ['html5', 'css3-alt', 'js','mysql','spring boot','aws']
    },
    {
      title: 'Client Server Communication',
      description: '',
      link: 'https://github.com/bhanumurthy1/Client-Server-Communication.git',
      imgSrc: 'assets/client.png',
      technologies: ['c']
    },
    {
      title: 'Operating System Project',
      description: '',
      link: 'https://github.com/bhanumurthy1/Client-Server-Communication.git',
      imgSrc: 'assets/os.bmp',
      technologies: ['c']
    }
    
  ];

}
