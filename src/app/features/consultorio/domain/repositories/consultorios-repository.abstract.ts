import { Observable } from "rxjs";
import { ConsultorioModel } from "../models/consultorio.model";

export abstract class IConsultoriosRepository {
  abstract get(): Observable<ConsultorioModel[]>
  //abstract create(newConsultorio: Omit<ConsultorioModel, 'ID'>): Observable<ConsultorioModel>
  //abstract update(consultorio: Partial<ConsultorioModel>): Observable<ConsultorioModel>
}