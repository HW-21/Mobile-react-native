import { ICurrencyCode } from '@currenxie/data'

export interface ITransferFormData {
  beneficiary: string
  fromAmount: string
  fromCurrency: ICurrencyCode
  reference?: string
  toCurrency: ICurrencyCode
}
