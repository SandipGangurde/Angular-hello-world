import { AbstractControl, ValidationErrors } from "@angular/forms";
import { observable } from "rxjs";


export class UsernameValidators {
    static cannotContainSpace( control:AbstractControl ) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0) 
            return {"cannotContainSpace": true};

        return null;
    }

    static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if (control.value === "sandip"){
                    resolve ({"shouldBeUnique": true});
                }else{
                    resolve(null);
                }
            }, 5000);    
        });
    }

}