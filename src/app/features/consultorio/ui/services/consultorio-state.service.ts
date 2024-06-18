import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, Subscription, tap } from "rxjs";
import { ConsultorioModel } from "../../domain/models/consultorio.model";
import { IConsultoriosRepository } from "../../domain/repositories/consultorios-repository.abstract";


@Injectable({
  providedIn: 'root'
})
export class ConsultorioState implements OnDestroy {


  constructor(
    private repository: IConsultoriosRepository
  ) {
    this.subscription.add(
      this.getConsultorios().subscribe()
    )
  }

  AllConsultorios: ConsultorioModel[]

  consultorios$ = new BehaviorSubject<ConsultorioModel[]>([])
  subscription = new Subscription()

  getConsultorios(): Observable<ConsultorioModel[]> {
    return this.repository.get()
      .pipe(
        tap(consultorios => {
          this.AllConsultorios = consultorios
          this.consultorios$.next(consultorios)
        })
      )
  }

  filterConsultorios(exp: string | null) {
    if(exp){
          const res = this.AllConsultorios.filter(consultorio => 
      consultorio.Nombre_de_.toLowerCase().includes(exp.toLocaleLowerCase()) ||
      consultorio.Dirección.toLowerCase().includes(exp.toLocaleLowerCase()) ||
      consultorio.Correo_ele.toLocaleLowerCase().toLowerCase().includes(exp.toLocaleLowerCase())
    )
    console.log(exp, res)

    this.consultorios$.next(res)
    }else{
      this.consultorios$.next(this.AllConsultorios)
    }

  }

  resetFilter(){
    this.consultorios$.next(this.AllConsultorios)
  }

  // createConsultorio(): Observable<ConsultorioModel> {

  // }

  // updateConsultorio(): Observable<ConsultorioModel> {

  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}