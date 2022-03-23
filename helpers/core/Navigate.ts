import { by, element } from 'detox'

import { Interactions } from './Interactions'
import { Presence } from './Presence'

async function navigateViaTabBar(id: string) {
  const tab = element(by.id(`${id}TabBarIcon`))
  await Presence.Element.Exists(tab)
  await tab.tap()
}

async function navigateViaDrawer(id: string) {
  await Interactions.Drawer.Open()
  const link = element(by.id(`actionSheetListItem-${id}`))
  await Presence.Element.Exists(link)
  if (device.getPlatform() === 'android') {
    await link.tap({ x: 10, y: 10 })
  } else {
    await link.tap()
  }
}

export const Navigate = {
  ViaTabBar: navigateViaTabBar,
  ViaDrawer: navigateViaDrawer,
}
