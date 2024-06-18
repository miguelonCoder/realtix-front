import { ConsultorioModel } from "../../../domain/models/consultorio.model";


//ID y geom se construyen en el servidor
export interface CreateConsultorioDTO extends Omit<ConsultorioModel, 'ID'| 'geom'> {}