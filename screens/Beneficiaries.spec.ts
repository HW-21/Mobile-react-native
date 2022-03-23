import { Routes } from '../../src/configs/Routes'
import { Auth } from '../helpers/core/Auth'
import { Navigate } from '../helpers/core/Navigate'
import { Presence } from '../helpers/core/Presence'
import { Matchers } from '../helpers/matchers'

describe('Beneficiaries', () => {
  beforeEach(async () => {
    await Auth.FastLogin()
    await Navigate.ViaDrawer(Routes.Pages.Beneficiaries.id)
  })

  it('can view the Beneficiaries screen', async () => {
    await Presence.Element.Exists(Matchers.Screens.Beneficiaries())
  })
})

describe('Add Beneficiaries', () => {
  beforeEach(async () => {
    await Auth.FastLogin()
    await Navigate.ViaDrawer(Routes.Pages.AddBeneficiary.id)
  })

  it('can view the Add Beneficiary screen', async () => {
    await Presence.Element.Exists(Matchers.Screens.AddBeneficiary())
  })
})
