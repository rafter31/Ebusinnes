/**
 * Tensorflight API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * GeoJSon geometry
 */
export interface Geometry {
    /**
     * the geometry type
     */
    type: Geometry.TypeEnum;

}
export namespace Geometry {
    export enum TypeEnum {
        Point = <any> 'Point',
        LineString = <any> 'LineString',
        Polygon = <any> 'Polygon',
        MultiPoint = <any> 'MultiPoint',
        MultiLineString = <any> 'MultiLineString',
        MultiPolygon = <any> 'MultiPolygon'
    }
}