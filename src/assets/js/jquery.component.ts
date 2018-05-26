import { Component, OnInit, ElementRef } from "@angular/core";
declare var jQuery:any;

@Component({
    selector:"my-jguery",
    template:`<button>Click ,e</button>`
})
export class JQueryComponent implements OnInit{

    constructor(private _elRef:ElementRef){}
    ngOnInit():any{
        jQuery(this._elRef.nativeElement).find("button").on("click",function(){
            alert("Its work");
        });
    }
}