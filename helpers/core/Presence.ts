// Methods here should use expect's
// https://github.com/wix/Detox/blob/master/docs/APIRef.Expect.md
import { by, element, expect } from 'detox'

function getScreenElementById(screenId: string) {
  return element(by.id(`screen-${screenId}`))
}

async function screenIsVisibleById(screenId: string) {
  return elementIsVisible(getScreenElementById(screenId))
}

async function existsById(id: string) {
  return elementExists(element(by.id(id)))
}

async function screenExistsById(screenId: string) {
  return elementExists(getScreenElementById(screenId))
}

async function elementIsVisible(elem: Detox.NativeElement) {
  return expect(elem).toBeVisible()
}

async function elementExists(elem: Detox.NativeElement) {
  return expect(elem).toExist()
}

export const Presence = {
  Screen: {
    IsVisibleById: screenIsVisibleById,
    ExistsById: screenExistsById,
  },
  Element: {
    IsVisible: elementIsVisible,
    Exists: elementExists,
    ExistsById: existsById,
  },
}
