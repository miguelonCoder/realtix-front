import { Injectable, inject } from "@angular/core";
import { IConsultoriosRepository } from "../../domain/repositories/consultorios-repository.abstract";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ConsultorioModel } from "../../domain/models/consultorio.model";
import { DistributionResponseDTO } from "../DTO/response/distribution-response.dto";


@Injectable({
  providedIn: 'root'
})
export class HttpConsultoriosRepository implements IConsultoriosRepository {

  private httpservice = inject(HttpClient);

  API_URL = 'https://realtix-back-kbj8gh01a-develop411s-projects.vercel.app'

  get(): Observable<ConsultorioModel[]> {
    return this.httpservice.get<ConsultorioModel[]>(`${this.API_URL}/consultorio`)
  }

  getDistribution(): Observable<DistributionResponseDTO[]> {
    return this.httpservice.get<DistributionResponseDTO[]>(`${this.API_URL}/consultorio/distribucion`)
  }

  create(newConsultorio: Omit<ConsultorioModel, 'ID'>): Observable<ConsultorioModel> {
    return this.httpservice.post<ConsultorioModel>(`${this.API_URL}/consultorio/`, newConsultorio)
  }

  
  update(consultorio: Partial<ConsultorioModel>): Observable<ConsultorioModel> {
    return this.httpservice.put<ConsultorioModel>(`${this.API_URL}/consultorio/`, consultorio)

  }
}