import { Auth } from '../helpers/core/Auth'
import { Navigate } from '../helpers/core/Navigate'
import { Presence } from '../helpers/core/Presence'
import { Matchers } from '../helpers/matchers'
import {Interactions} from '../helpers/core/Interactions'
import { Forms } from '../helpers/core/Forms'

const CURRENCY_CODE = [
  'USD',
  'EUR',
  'HKD',
  'GBP',
  'JPY',
  'CAD',
  'AUD',
  'NZD',
  'CNH',
  'SGD',
  'CHF',
  'DKK',
  'NOK',
  'SEK',
  'IDR',
  'MXN',
]

describe('Balances', () => {
  beforeEach(async () => {
    await Auth.FastLogin()
    await Navigate.ViaTabBar('BalancesStack')
  })

  it('can navigate to the Balances screen ', async () => {
    await Presence.Element.Exists(Matchers.Screens.Balances())
  })

  it('should display all 16 currencies ', async () => {
    for (var iCode of CURRENCY_CODE){
      await Presence.Element.Exists(element(by.id(`accountBalanceListItem-${iCode}-menu`)))
    }
  })

  it('should be able to make a transfer from any given balance ', async () => {
    for (var iCode of CURRENCY_CODE){
      await Forms.scrollUntilVisibleId(`accountBalanceListItem-${iCode}-menu`, 'balances', 'down')
      await Interactions.Element.tap(`accountBalanceListItem-${iCode}-menu`)
      await Presence.Element.Exists(Matchers.Screens.MoreOptions('More options'))
      await Interactions.Element.tap(`actionSheetListItem-${iCode}-transferLink`)
      await Presence.Element.Exists(Matchers.Screens.Transfer())
      await Forms.getInputValue('fromCurrency-value', iCode)
      await Navigate.ViaTabBar('BalancesStack')
    }
  })

  it('should be able to navigate to their transactions from any given balance ', async () => {
    for (var iCode of CURRENCY_CODE){
      await Forms.scrollUntilVisibleId(`accountBalanceListItem-${iCode}-menu`, 'balances', 'down')
      await Interactions.Element.tap(`accountBalanceListItem-${iCode}-menu`)
      await Presence.Element.Exists(Matchers.Screens.MoreOptions('More options'))
      await Interactions.Element.tap(`actionSheetListItem-${iCode}-transactionsLink`)
      await Presence.Element.Exists(Matchers.Screens.Transactions())
      await Forms.getInputValue('transactionsCurrencyFilter', iCode)
      await Navigate.ViaTabBar('BalancesStack')
    }
  })
})


