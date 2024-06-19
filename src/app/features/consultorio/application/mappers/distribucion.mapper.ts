import { ConsultorioModel } from "../../domain/models/consultorio.model";
import { FeatureCollection, Feature, Polygon, MultiPoint, Geometry } from 'geojson'
import { DistributionResponseDTO } from "../../infraestructure/DTO/response/distribution-response.dto";

export const distribucionToConsultorioFeature = (
  polygons: DistributionResponseDTO[]
): FeatureCollection<Polygon, {area: number}> => {
  const features = polygons.map(polygon => {
    const { geom, ...properties } = polygon
    return {
      type: "Feature",
      geometry: JSON.parse(geom),
      properties
    } as Feature<Polygon, {area: number}>
  })

  return {
    features,
    type: "FeatureCollection"
  } as FeatureCollection<Polygon, {area: number}>
}