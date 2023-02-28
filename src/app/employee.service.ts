import { Employee } from './employee';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  getAllemp():Observable<any> {

    return this.httpClient.get<any>("https://localhost:7130/api/Employe")

  }

  saveEmp(newEmp:Employee):Observable<Employee>{
    debugger

  return this.httpClient.post<Employee>("https://localhost:7130/api/Employe", newEmp)

  }


  Update(editEmployee:Employee):Observable<Employee>{

    return this.httpClient.put<Employee>("https://localhost:7130/api/Employe",editEmployee)
  
    }

    Delete(id:number):Observable<any> {
      return this.httpClient.delete<any>("https://localhost:7130/api/Employe/"+id)
    }


}
