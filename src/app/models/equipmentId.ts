/**
 * equipment/find-equipment-alerts/1.0
 * As part of the derailment prevention the WDI Wayside detection Integration team  created alerts using sensor data from various wayside detectors and locomotive  onboard detectors. These alerts are used by various teams to prevent derailments  and fix mechanical defects in repair shops. This service is used to retrieve alerts  generated by the WDI CLIPS defect rules engine. The service accepts various selectors in the request and returns alerts that match the request selectors from the system.
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { EquipmentInitial } from './equipmentInitial';
import { EquipmentNumber } from './equipmentNumber';

/**
 * The equipment initial and equipment number
 */
export interface EquipmentId { 
    equipmentInitial?: EquipmentInitial;
    equipmentNumber?: EquipmentNumber;
}