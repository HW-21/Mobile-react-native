import { Auth } from '../helpers/core/Auth'
import { fillLoginForm } from '../helpers/forms/Login'

describe('Login', () => {
  beforeEach(async () => {
    await Auth.FastLogout()
  })

  it('can log in successfully and redirect to the Balances screen', async () => {
    await fillLoginForm()
    await Auth.isLoggedIn()
  })
})

describe('Logout', () => {
  beforeEach(async () => {
    await Auth.FastLogin()
  })

  it('can log out successfully', async () => {
    await Auth.isLoggedIn()
    await Auth.LogoutViaDrawer()
  })
})

