import { by, element } from 'detox'

import { Interactions } from '../core/Interactions'
import { Presence } from './Presence'

async function fillInput(id: string, value: string, dismiss = false) {
  const inputElement = element(by.id(id))
  await Presence.Element.Exists(inputElement)

  if (dismiss) {
    await inputElement.replaceText(value)
    return inputElement.tapReturnKey()
  } else {
    return await inputElement.replaceText(value)
  }
}

async function getInputValue(id: string, value: string) {
  return element(by.id(id).withDescendant(by.text(value)))
}

async function selectActionSheet(
  id: string,
  value: string,
  isDoubleTap = false,
) {
  await Interactions.Element.tap(id)
  await Presence.Element.ExistsById(`actionSheetSelect-${id}`)
  await Interactions.Element.tap(`actionSheetSelectListItem-${value}`)
  if (isDoubleTap) {
    await Interactions.Element.tap(`actionSheetSelectListItem-${value}`)
  }
  await Interactions.Element.tap('actionSheetConfirm')
}

// scrollTo hangs in Android CI, see https://github.com/wix/Detox/issues/2787
async function scrollToTheBottom() {
  await element(by.id('scrollView'))
    .atIndex(0) // The scrollView can be rendered multiplee times
    .scrollTo('bottom')
}

async function scrollUntilVisibleId(
  id: string,
  screenId: string,
  direction: Detox.Direction,
) {
  await waitFor(element(by.id(id)))
    .toBeVisible()
    .whileElement(by.id('scrollView').withAncestor(by.id(`screen-${screenId}`)))
    .scroll(150, direction, 0.01)
}

export const Forms = {
  fillInput,
  selectActionSheet,
  scrollToTheBottom,
  scrollUntilVisibleId,
  getInputValue,
}
