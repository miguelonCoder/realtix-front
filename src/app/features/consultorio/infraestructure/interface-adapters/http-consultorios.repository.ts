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

  API_URL = 'http://localhost:3000'

  get(): Observable<ConsultorioModel[]> {
    return this.httpservice.get<ConsultorioModel[]>(`${this.API_URL}/consultorio`)
  }

  getDistribution(): Observable<DistributionResponseDTO[]> {
    return this.httpservice.get<DistributionResponseDTO[]>(`${this.API_URL}/consultorio/distribucion`)
  }
}