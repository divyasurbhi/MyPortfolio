import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 

  
  constructor() { }

 onSubmit(form){
    console.log(form.value);
    alert("The form was submitted");
    form.reset();
  }
 

  ngOnInit() {
  }

}
