import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Email } from '../../models/mail';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ProjectService]
})
export class ContactComponent implements OnInit {

  public mail: Email;

  constructor(
      private _projectService: ProjectService,
    ) {
      this.mail = new Email('','','','');
     }

  ngOnInit(): void {
  }

  contactForm(form:any) {
   this._projectService.sendEmail(form.value).subscribe(
    response => {
   Swal.fire("Mensaje enviado correctamente", "Nos pondremos en contacto contigo "+form.value.nombre, 'success');
   console.log(response);
   form.reset();
   });
   }

}
