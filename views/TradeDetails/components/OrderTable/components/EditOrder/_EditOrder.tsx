// Packages
import { useState } from 'react'
import PropTypes from 'prop-types'

// Geist UI
import { Button } from '@geist-ui/react'
import { Edit as EditIcon } from '@geist-ui/react-icons'

// Global Components
import { OrderModal } from 'components'

function EditOrder({ order, handleUpdateOrder }: EditOrderProps): JSX.Element {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          setIsOrderModalOpen(true)
        }}
        iconRight={<EditIcon />}
        auto
        size="small"
      />
      <OrderModal
        order={order}
        isOrderModalOpen={isOrderModalOpen}
        setIsOrderModalOpen={setIsOrderModalOpen}
        handleUpdateOrder={handleUpdateOrder}
      />
    </>
  )
}

type EditOrderProps = {
  order: {
    side: string
    date: Date
    price: number
    quantity: number
  }
  handleUpdateOrder?: (e: { side: string; date: Date; price: number; quantity: number }) => void
}

EditOrder.propTypes = {
  order: PropTypes.object.isRequired,
  handleUpdateOrder: PropTypes.func.isRequired
}

export default EditOrder
