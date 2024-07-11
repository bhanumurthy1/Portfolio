import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills = [
    { name: 'Java', percent: 90, color: 'blue', icon: 'java.ico' },
    { name: 'C', percent: 85, color: 'green', icon: 'c.ico' },
    { name: 'Angular', percent: 75, color: 'purple', icon: 'angular.ico' },
    { name: 'JavaScript', percent: 80, color: 'orange', icon: 'js.ico' },
    { name: 'TypeScript', percent: 70, color: 'teal', icon: 'ts.ico' },
    { name: 'HTML5', percent: 95, color: 'red', icon: 'html.ico' },
    { name: 'CSS3', percent: 90, color: 'blue', icon: 'css.ico' },
    { name: 'Oracle', percent: 75, color: 'green', icon: 'oracle.ico' },
    { name: 'MySQL', percent: 80, color: 'purple', icon: 'sql.ico' },
    { name: 'MongoDB', percent: 70, color: 'orange', icon: 'mongodb.ico' },
    { name: 'PostgreSQL', percent: 65, color: 'teal', icon: 'postgres.ico' },
    { name: 'Spring', percent: 75, color: 'red', icon: 'spring.ico' },
    { name: 'Spring Boot', percent: 80, color: 'blue', icon: 'boot.ico' },
    { name: 'Git', percent: 85, color: 'green', icon: 'git.ico' },
    { name: 'Maven', percent: 80, color: 'purple', icon: 'maven.ico' },
    { name: 'Linux', percent: 70, color: 'orange', icon: 'linux.ico' },
    { name: 'AWS (EC2, S3, Lambda)', percent: 75, color: 'teal', icon: 'aws.ico' },
    { name: 'Docker', percent: 80, color: 'red', icon: 'docker.ico' }
  ];

  getCategories() {
    return ['Programming Languages', 'Frontend Technologies', 'Backend Technologies', 'Databases', 'DevOps/Cloud', 'Tools'];
  }

  getSkillsByCategory(category: string) {
    const categoryMap: { [key: string]: any[] } = {
      'Programming Languages': [
        { name: 'Java', percent: 90, color: 'blue', icon: 'java.ico' },
        { name: 'C', percent: 85, color: 'green', icon: 'c.ico' },
        { name: 'JavaScript', percent: 80, color: 'orange', icon: 'js.ico' },
        { name: 'TypeScript', percent: 70, color: 'teal', icon: 'ts.ico' }
      ],
      'Frontend Technologies': [
        { name: 'Angular', percent: 75, color: 'purple', icon: 'angular.ico' },
        { name: 'HTML5', percent: 95, color: 'red', icon: 'html.ico' },
        { name: 'CSS3', percent: 90, color: 'blue', icon: 'css.ico' }
      ],
      'Backend Technologies': [
        { name: 'Spring', percent: 75, color: 'red', icon: 'spring.ico' },
        { name: 'Spring Boot', percent: 80, color: 'blue', icon: 'boot.ico' }
      ],
      'Databases': [
        { name: 'Oracle', percent: 75, color: 'green', icon: 'oracle.ico' },
        { name: 'MySQL', percent: 80, color: 'purple', icon: 'sql.ico' },
        { name: 'MongoDB', percent: 70, color: 'orange', icon: 'mongodb.ico' },
        { name: 'PostgreSQL', percent: 65, color: 'teal', icon: 'postgres.ico' }
      ],
      'DevOps/Cloud': [
        { name: 'AWS (EC2, S3, Lambda)', percent: 75, color: 'teal', icon: 'aws.ico' },
        { name: 'Docker', percent: 80, color: 'red', icon: 'docker.ico' }
      ],
      'Tools': [
        { name: 'Git', percent: 85, color: 'green', icon: 'git.ico' },
        { name: 'Maven', percent: 80, color: 'purple', icon: 'maven.ico' },
        { name: 'Linux', percent: 70, color: 'orange', icon: 'linux.ico' }
      ]
    };

    return categoryMap[category];
  }
}
