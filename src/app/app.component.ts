import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'file-upload';
  uploadedFiles: Array<File> ;

  constructor(private http : HttpClient) {

  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  upload() {

    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append(
        'uploads[]',
        this.uploadedFiles[i],
        this.uploadedFiles[i].name
      );
    }
    this.http.post('http://localhost:3000/api/upload', formData).subscribe((response) => {
        console.log('response received is ', response);
    });
  }
}
