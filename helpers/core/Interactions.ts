import { by, element, expect } from 'detox'

import { Presence } from './Presence'

async function tapAlertByText(text: string) {
  if (device.getPlatform() === 'android') {
    await element(by.text(text)).tap()
  } else {
    // https://stackoverflow.com/questions/47522081/detox-ios-simulator-how-to-confirm-alert-message
    await element(
      by.label(text).and(by.type('_UIAlertControllerActionView')),
    ).tap()
  }
}

async function tapElement(id: string) {
  const elem = await element(by.id(id))
  await Presence.Element.Exists(elem)
  await elem.tap({ x: 0, y: 0 })
}

async function openDrawer() {
  const DrawerButton = element(by.id('MenuStackTabBarIcon'))
  await Presence.Element.Exists(DrawerButton)
  await DrawerButton.tap()

  await expect(element(by.id('organizationName'))).toBeVisible()
}

async function closeDrawer() {
  const Root = element(by.id('routerRootView'))
  await Presence.Element.Exists(Root)
  await Root.tap({ x: 10, y: 10 })
}

export const Interactions = {
  Alert: {
    tapByText: tapAlertByText,
  },
  Drawer: {
    Open: openDrawer,
    Close: closeDrawer,
  },
  Element: {
    tap: tapElement,
  },
}
