import { HttpTypes } from "@medusajs/types"

import { paymentInfoMap } from "@lib/constants"
import { convertToLocale } from "@lib/util/money"

type PaymentDetailsProps = {
  order: HttpTypes.StoreOrder
}

const PaymentDetails = ({ order }: PaymentDetailsProps) => {
  const payment = order.payment_collections?.[0].payments?.[0]

  if (!payment) {
    return (
      <p className="text-grayscale-500">No payment information available</p>
    )
  }

  return (
    <p className="text-grayscale-500">
      {paymentInfoMap[payment.provider_id].title}
      <br />
      {`${convertToLocale({
        amount: payment.amount,
        currency_code: order.currency_code,
      })} paid at ${new Date(payment.created_at ?? "").toLocaleString()}`}
    </p>
  )
}

export default PaymentDetails
