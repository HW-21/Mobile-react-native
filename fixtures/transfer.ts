import { ICurrenciesCode, ICurrencyCode } from '@currenxie/data/dist'
import React, { FC, memo } from 'react'

import { Box, FakeInput, Label } from '~components'
import { useTranslation } from '~hooks'
import { FormItemTemplate } from '~templates'

interface IAccountBalanceWrapperProps {
  balance: string
  balanceCurrency: ICurrencyCode
}

export const AccountBalanceFieldWrapper: FC<IAccountBalanceWrapperProps> = memo(
  ({ balanceCurrency, balance }) => {
    const { t } = useTranslation('modals.transfer')
    const isHKD = balanceCurrency === ICurrenciesCode.HKD
    const labelText = t('labels.availableBalance')
    const tooltip = isHKD ? t('.availableBalance.tooltip') : undefined

    return (
      <Box mb={3} flex={0}>
        <FormItemTemplate
          labelComponent={<Label text={labelText} fieldName="" />}
          labelTooltip={tooltip}
          labelTooltipTitle={labelText}
        >
          <FakeInput text={balance || ''} testId="availableBalance" />
        </FormItemTemplate>
      </Box>
    )
  },
)

