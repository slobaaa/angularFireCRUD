import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { MaterialModule } from './material.module';
import {MatTableDataSource, MatPaginator} from '@angular/material';



interface PeriodicElement {
  content: string;
  title: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];




interface Post {
  title: string;
  content: string;
}
interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  title: string;
  content: string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  constructor(private afs: AngularFirestore) {}



// DATA TABLE
  @ViewChild(MatPaginator) paginator: MatPaginator;
  aaaa: PeriodicElement[] = [];

  displayedColumns: string[] = ['content', 'title'];
  // dataSource = new MatTableDataSource(this.aaaa);
  dataSource;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

// END DATA TABLE

  ngOnInit() {
    this.postsCol = this.afs.collection('probaCollection');
    // this.posts = this.postsCol.valueChanges();
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          this.aaaa.push(data);
          this.dataSource = new MatTableDataSource(this.aaaa);
          this.dataSource.paginator = this.paginator;
          return { id, data };
        });
      });
  }

  addPost() {
    this.afs.collection('probaCollection').add({'title': this.title, 'content': this.content});
    this.aaaa = [];
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('probaCollection/' + postId);
    this.post = this.postDoc.valueChanges();
    this.aaaa = [];
  }

  deletePost(postId) {
    this.afs.doc('probaCollection/' + postId).delete();
    this.aaaa = [];
  }

  updatePost(postId) {
    this.afs.collection('probaCollection').doc(postId).update({
      'title': 'ddddddd',
      'content': 'aaaaaaa'
    })
    .then(function() {
        console.log('Document successfully updated!');
        this.aaaa = [];
    });
  }












}
