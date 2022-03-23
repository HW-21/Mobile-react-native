// Docs: https://github.com/wix/Detox/blob/master/docs/APIRef.Matchers.md
import { by, element } from 'detox'

/**
 *
 * These should be refactored in the future. It's not a good practise to match on text strings.
 * The router should probably add screen IDs to it's screens based on our Router configs.
 */
function getNavBarTitleElementByText(title: string) {
  return element(by.id('NavBar').withDescendant(by.text(title)))
}

function getMoreOptionsTitleScreenMatcher(title: string) {
  return element(by.text(title))
}

function balancesScreenMatcher() {
  return getNavBarTitleElementByText('Balances')
}

function transactionsScreenMatcher() {
  return getNavBarTitleElementByText('Transactions')
}

function transactionDetailsScreenMatcher() {
  return getNavBarTitleElementByText('Transaction details')
}

function transferScreenMatcher() {
  return getNavBarTitleElementByText('Transfer')
}

function accountRequestScreenMatcher() {
  return getNavBarTitleElementByText('Request a bank account number')
}

function addBeneficiaryScreenMatcher() {
  return getNavBarTitleElementByText('Add a beneficiary')
}

function beneficiariesScreenMatcher() {
  return getNavBarTitleElementByText('Beneficiaries')
}

function accountsScreenMatcher() {
  return getNavBarTitleElementByText('Accounts')
}

function settingsScreenMatcher() {
  return getNavBarTitleElementByText('Settings')
}

function updatePasswordScreenMatcher() {
  return getNavBarTitleElementByText('Update password')
}

export const Matchers = {
  Screens: {
    AccountRequest: accountRequestScreenMatcher,
    Accounts: accountsScreenMatcher,
    AddBeneficiary: addBeneficiaryScreenMatcher,
    Balances: balancesScreenMatcher,
    Beneficiaries: beneficiariesScreenMatcher,
    Settings: settingsScreenMatcher,
    TransactionDetails: transactionDetailsScreenMatcher,
    Transactions: transactionsScreenMatcher,
    Transfer: transferScreenMatcher,
    UpdatePassword: updatePasswordScreenMatcher,
    MoreOptions: getMoreOptionsTitleScreenMatcher,
  },
}
