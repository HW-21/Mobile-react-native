import { Auth } from '../helpers/core/Auth'
import { Navigate } from '../helpers/core/Navigate'
import { Presence } from '../helpers/core/Presence'
import { Matchers } from '../helpers/matchers'

describe('Transactions', () => {
  beforeEach(async () => {
    await Auth.FastLogin()
    await Navigate.ViaTabBar('TransactionsStack')
  })

  it('can view the Transactions screen', async () => {
    await Presence.Element.Exists(Matchers.Screens.Transactions())
  })
})
