/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EmergencyCode {
  id: string;
  color: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  hexColor: string;
  textColor: string;
  glowColor: string;
  actionsAr: string[];
  actionsEn: string[];
  icon: string;
  customSoundPattern?: string; // e.g. continuous alarm, pulse, fast pulse
}

export interface RoleResponsibility {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  bulletsAr: string[];
  bulletsEn: string[];
  icon: string;
}

export interface GeneralSafetyTip {
  id: string;
  textAr: string;
  textEn: string;
}
