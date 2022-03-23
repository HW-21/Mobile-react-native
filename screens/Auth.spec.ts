import { Routes } from '../../src/configs/Routes'
import { Auth } from '../helpers/core/Auth'
import { Navigate } from '../helpers/core/Navigate'
import { Presence } from '../helpers/core/Presence'
import { Matchers } from '../helpers/matchers'

describe('Accounts', () => {
  beforeEach(async () => {
    await Auth.FastLogin()
    await Navigate.ViaDrawer(Routes.Pages.AccountRequest.id)
  })

  it('can view the Account screen', async () => {
    await Presence.Element.Exists(Matchers.Screens.AccountRequest())
  })
})
