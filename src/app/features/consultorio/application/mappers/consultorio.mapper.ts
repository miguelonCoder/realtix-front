import { ConsultorioModel } from "../../domain/models/consultorio.model";
import { FeatureCollection, Feature, Point, MultiPoint, Geometry } from 'geojson'

export const consultorioModelToConsultorioFeature = (
  consultorios: ConsultorioModel[]
): FeatureCollection<Point, Omit<ConsultorioModel, 'geom'>> => {
  const features = consultorios.map(consultorioModel => {
    const { geom, ...properties } = consultorioModel
    return {
      type: "Feature",
      geometry: geom,
      properties
    } as Feature<Point, Omit<ConsultorioModel, 'geom'>>
  })

  return {
    features,
    type: "FeatureCollection"
  } as FeatureCollection<Point, Omit<ConsultorioModel, 'geom'>>
}