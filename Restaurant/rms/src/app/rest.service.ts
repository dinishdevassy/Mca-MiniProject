import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestService {
 

  constructor(private hc:HttpClient) { }
  
  addowner(ownername, ownerphno, owneremail, ownerpwd,ownerlicenseno) {
    let url="http://localhost:8080/rest/addowner";
    return this.hc.post(url,{ownername:ownername,ownerphno:ownerphno,owneremail:owneremail,ownerpswd:ownerpwd,ownerlicenseno:ownerlicenseno})
  }
  viewowner(){
    let url="http://localhost:8080/admin/getowner";
    return this.hc.get(url);
  }
  approval(status,id){
    let url="http://localhost:8080/admin/approval";
    return this.hc.post(url,{status:status,id:id})
  }
  newuser(username,phno,email,city,pswd,role){
    let url="http://localhost:8080/rest/newuser";
    return this.hc.post(url,{username:username,phno:phno,email:email,city:city,pswd:pswd,role:role})
  }
  newrestuser(id,role){
    let url="http://localhost:8080/admin/newrestuser";
    return this.hc.post(url,{id:id,role:role});
  }
}
