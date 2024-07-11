import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experiences = [
    {
      company: 'NYS Office of Information Technology Services, Albany',
      role: 'Information Technology Specialist2 - Programming',
      startDate: 'Jun 2024',
      endDate: 'Present',
      jobTitle: '',
      details: [
        'Led backend development with Spring Boot, Spring Security, and JBoss, improving performance, scalability, and security, while integrating RESTful services and SSO with SAML/Okta, reducing incidents and support tickets.'
      ]
    },
    {
      company: 'Health Research Incorporated, Albany, NY',
      role: 'Software Engineering Intern',
      startDate: 'Jan 2024',
      endDate: 'June 2024',
      jobTitle: '',
      details: [
        'Digitized ICAR forms using Angular, eliminating manual effort; enhanced UI/UX and data access; designed 15+ components; streamlined navigation with Angular routing; applied Material Design; optimized performance with lazy loading.'
      ]
    },
    {
      company: 'Informatica, Hyderabad, India',
      role: 'Software Engineer',
      startDate: 'Aug 2020',
      endDate: 'Jul 2022',
      jobTitle: '',
      details: [
        'Developed microservices with Spring Boot on AWS EC2, documented APIs with Swagger, deployed Kubernetes for high availability, implemented Log4j for error tracing, automated CI/CD with Jenkins, optimized request processing with DispatcherServlet, and ensured seamless integration with dependency management in pom.xml.'
      ]
    },
    {
      company: 'Informatica, Hyderabad, India',
      role: 'DevOps Engineer',
      startDate: 'Aug 2019',
      endDate: 'Jul 2020',
      jobTitle: '',
      details: [
        'Streamlined Jenkins Pipeline for Data Archive, Informatica Data Vault, and Accelerators; automated job creation for releases; set up 20+ Jenkins nodes; enhanced installers with Install Anywhere, improving efficiency and reducing installation time.'

      ]
    },
    {
      company: 'TechMahindra, Hyderabad, India',
      role: 'Jr. Software Intern/Trainee',
      startDate: 'Mar 2018',
      endDate: 'Sep 2018',
      jobTitle: '',
      details: [
        'Implemented JavaScript with Ajax, JSON, and XML for dynamic web pages with user input dialogs, validated inputs, utilized EXT JS, Backbone JS, and Require JS for performance, automated feature setup and testing, and integrated vendor tools for enhanced functionality.'
      ]
    }
  ];

}
