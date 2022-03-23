import { Routes } from '../../src/configs/Routes'
import { Auth } from '../helpers/core/Auth'
import { Navigate } from '../helpers/core/Navigate'
import { Presence } from '../helpers/core/Presence'
import { Matchers } from '../helpers/matchers'

describe('Settings', () => {
  beforeEach(async () => {
    await Auth.FastLogin()
    await Navigate.ViaDrawer(Routes.Pages.Settings.id)
  })

  it('can view the Settings screen', async () => {
    await Presence.Element.Exists(Matchers.Screens.Settings())
  })
})
