import { ITransferFormData } from '../../types'
import { Forms } from '../core/Forms'

export async function fillTransferForm({
  beneficiary,
  fromCurrency,
  toCurrency,
  fromAmount,
  reference,
}: ITransferFormData) {
  await Forms.selectActionSheet('beneficiary', beneficiary, true)
  await Forms.selectActionSheet('fromCurrency', fromCurrency)
  await Forms.selectActionSheet('toCurrency', toCurrency)
  await Forms.fillInput('fromAmount', fromAmount)
  if (reference) {
    await Forms.scrollUntilVisibleId('reference', 'transfer', 'down')
    await Forms.fillInput('reference', reference)
  }
}
