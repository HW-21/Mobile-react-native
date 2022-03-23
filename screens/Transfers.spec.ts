import { transferData } from '../fixtures/transfer'
import { Auth } from '../helpers/core/Auth'
import { Navigate } from '../helpers/core/Navigate'
import { Presence } from '../helpers/core/Presence'
import { fillTransferForm } from '../helpers/forms/Transfer'
import { Matchers } from '../helpers/matchers'

describe('Transfer', () => {
  beforeEach(async () => {
    await Auth.FastLogin()
    await Navigate.ViaTabBar('TransferStack')
  })

  it('can view the Transfer screen', async () => {
    await Presence.Element.Exists(Matchers.Screens.Transfer())
  })

  it('Users should be able to perform an internal transfer', async () => {
    await fillTransferForm(transferData.internal)
  })
})
