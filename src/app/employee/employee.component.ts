
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeList:Employee[]=[];
  newEmployee:Employee=new Employee();
  editEmployee:Employee= new Employee();
  imageSource:any
  base64textString:any;
  binaryString:any
  
  constructor( private EmployeeService:EmployeeService, private sanitizer:DomSanitizer ) { }

  ngOnInit(): void {
    debugger
    this.GetAll();
    

  }


  GetAll() {
    this.EmployeeService.getAllemp().subscribe(
      (response)=>{
        this.employeeList=response;
        console.log(response)

      },
      (error) => {
        console.log(error)
      }
    )
  }

  Saveclick(){
    //alert(this.newEmployee.name)
  debugger
  var text='data:image/png;base64,';
  var pic = text+this.base64textString;
    this.newEmployee.id=0;
    this.newEmployee.picture=pic;
    this.EmployeeService.saveEmp(this.newEmployee).subscribe(
      (response) => {
        this.GetAll();
        this.newEmployee.name="";
        this.newEmployee.picture="";
      },
      (error) => {
        console.log(error)
      }
    )
  }
  updateclick(){
    //alert(this.newEmployee.name)
  debugger
  var text='data:image/png;base64,';
  var pic = text+this.base64textString;
    this.newEmployee.id=0;
    this.newEmployee.picture=pic;
    this.EmployeeService.saveEmp(this.newEmployee).subscribe(
      (response) => {
        this.GetAll();
        this.newEmployee.name="";
        this.newEmployee.picture="";
      },
      (error) => {
        console.log(error)
      }
    )
  }
  handleFileSelect(evt:any)
  {
    debugger
    var files = evt.target.files;
    var file = files[0];
 
  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}



 _handleReaderLoaded(readerEvt:any) {
  debugger 
    this.binaryString = readerEvt.target.result;
          this.base64textString= btoa(this.binaryString);
          console.log(btoa(this.binaryString));
  }


  

  deleteClick(id:number)
  
    {
      alert("are you sure");
         this.EmployeeService.Delete(id).subscribe(
          (response)=>{
            this.GetAll();
          },
          (error)=>{console.log(error);}
         )

    }

    
}
