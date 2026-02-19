export interface CreateMedalInput {
  name: string
  description?: string
  medalType: string
  establishedYear?: number
  discontinuedYear?: number
}


// export interface CreateSoldierAwardInput {
//   soldierId: string
//   medalId: string
//   conflictId?: string
//   yearAwarded?: number
// }


// export interface CreateCollectionItemInput {
//   soldierAwardId: string
//   inscriptionText?: string
//   serialNumber?: string
//   condition?: string
// }