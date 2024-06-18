import { Injectable } from "@angular/core";
import { IHttpService } from "../../data/http-service.abstract";


@Injectable({
  providedIn: 'root'
})
export class HttpDataService implements IHttpService {

  consultorioRepository = true;
  commentRepository = true
}