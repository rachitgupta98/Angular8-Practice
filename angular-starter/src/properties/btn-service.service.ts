import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BtnServiceService {

  buttonCSS={
    padding:"10px",
    backgroundColor:"white",
    borderWidth:"0.5px",
    borderRadius:"3px",
    boxShadow:"2px 2px 2px grey",
    outline:"none"
  }  
}
