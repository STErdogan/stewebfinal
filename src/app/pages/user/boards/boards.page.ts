import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.page.html',
  styleUrls: ['./boards.page.scss'],
})
export class BoardsPage implements OnInit {
  form: FormGroup;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private route: Router
  ) {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      cover: new FormControl(''),
    });
  }

  ngOnInit() {}

  AddBoard() {
    console.log(this.form.value);
    this.afAuth.authState.subscribe((user) => {
      console.log(user);
      if (user) {
        const id = this.afs.createId();
        const BoardRef = this.afs
          .collection('boards')
          .doc(user.uid)
          .collection('my-boards')
          .doc(id);

        BoardRef.set({
          title: this.form.value.title,
          description: this.form.value.description,
          cover: this.form.value.cover,
        })
          .then(() => {
            console.log('Not Eklendi.');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }

  Logout() {
    this.authService
      .logout()
      .then(() => {
        console.log('logout');
        this.route.navigate(['/home']);
      })
      .catch((error) => console.error(error));
  }
}
