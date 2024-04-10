import { Injectable, inject, OnInit } from "@angular/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,
  GoogleAuthProvider,signInWithPopup} from "@angular/fire/auth";
import {User} from "./user.model";
import { Router } from "@angular/router";
import { error } from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn:"root"
})

export class AuthService implements OnInit{
  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  router = inject(Router);
  login2 = false

  ngOnInit() {
    localStorage.setItem('isloogedIn', 'false');
  }

  getAuth(){

    return getAuth();
  }

  googlesignin(){

    signInWithPopup(getAuth(), new GoogleAuthProvider()).then(()=>{
      localStorage.setItem('isloogedIn','true');
      this.router.navigate([""])

      console.log("entraaste por google")
    }).catch()



  }


  signup(user:User){



    return createUserWithEmailAndPassword(getAuth(),user.email,user.password);


  }

  login(user:User){
    this.login2 = true
    localStorage.setItem('isloogedIn', 'true');
    return signInWithEmailAndPassword(getAuth(),user.email,user.password);

  }
  /*
  login(user:User){


    try {

      signInWithEmailAndPassword(getAuth(),user.email,user.password);
      this.login2 = true

    }catch (error){
      this.login2 = false
    }
  }
  */
  getLogin(){
    return this.login2
  }

  signout(){
    this.login2 = false;
    console.log("estamos mas adentro");
    localStorage.setItem("isloogedIn","false")
    const valor = localStorage.getItem("isloogedIn")
    console.log(valor)
    return signOut(getAuth());
  }

}
