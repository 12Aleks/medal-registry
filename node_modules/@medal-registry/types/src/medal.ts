export interface CreateMedalInput {
  soldierId: string
  medalType: string
  inscriptionText?: string
  serialNumber?: string
  yearAwarded?: number
  condition?: string
  conflictId?: string
}