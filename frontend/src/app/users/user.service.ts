import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "http://localhost:3000"
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IllhbiIsImVtYWlsIjoieWNhcmxvcy5saXZlQGdtYWlsLmNvbSIsImNyZWF0ZWRfYXQiOiIyMDIyLTA3LTIyVDE1OjAzOjMyLjY5NVoiLCJ1cGRhdGVkX2F0IjoiMjAyMi0wNy0yMlQxNTowMzozMi42OTVaIiwiZGVsZXRlZF9hdCI6bnVsbCwiaWF0IjoxNjU5MjI4MDQ5LCJleHAiOjE2NTkyNzEyNDl9.Erk1PfW5TlsKmtAcwCedqCXU_R8X9jYAkYkyVrgveUI"

  constructor(
    private readonly apollo: Apollo,
    private readonly http: HttpClient
  ) { }

  login(data: { email: string, password: string }) {
    return this.http.post(`${this.apiUrl}/auth/login`, data);
  }

  test() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(`${this.apiUrl}/auth/test`, { headers, responseType: 'text' });
  }

  getUsers() {
    return this.apollo.watchQuery({
      query: gql`
      {
        users{
          users{
            id
            email
            name
          }
        count
      }
    }`
    }).valueChanges;
  }


}
