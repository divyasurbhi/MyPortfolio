import { Component, OnInit } from '@angular/core';
import  {FormsModule, NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [

    FormsModule ,
    NgForm    
  ],
 
})

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 

  
  constructor() { }

 onSubmit(form: NgForm){
    console.log(form.value);
    alert("The form was submitted");
    form.reset();
  }
 

  ngOnInit() {
  }

}
