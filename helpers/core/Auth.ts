import { by, element, expect } from 'detox'

import { Routes } from '../../../src/configs/Routes'
import { Interactions } from '../../helpers/core/Interactions'
import { Navigate } from '../../helpers/core/Navigate'

async function logoutViaDrawer() {
  await Navigate.ViaDrawer(Routes.Logout.id)
  await Interactions.Alert.tapByText('Yes')
  await isLoggedOut()
}

async function fastLogout() {
  await element(by.id('e2eToolbar-Logout'))
    .atIndex(0) // The toolbar can be rendered multiplee times
    .tap()
  await isLoggedOut()
}

async function fastLogin() {
  await element(by.id('e2eToolbar-Login'))
    .atIndex(0) // The toolbar can be rendered multiplee times
    .tap()
  await isLoggedIn()
}

// https://github.com/wix/Detox/blob/master/docs/APIRef.Expect.md
async function isLoggedIn() {
  return await expect(element(by.id('TabBar'))).toBeVisible()
}

async function isLoggedOut() {
  return await expect(element(by.id('TabBar'))).not.toBeVisible()
}

export const Auth = {
  LogoutViaDrawer: logoutViaDrawer,
  FastLogout: fastLogout,
  FastLogin: fastLogin,
  isLoggedIn: isLoggedIn,
  isLoggedOut: isLoggedOut,
}
