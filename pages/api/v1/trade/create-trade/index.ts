// Packages
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

// DB
import dbConnect from 'utils/dbConnect'

import Trade from 'models/Trade'

export default async function (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    await dbConnect()
    const session = await getSession({ req })

    const {
      // Trade
      type,
      leverage,
      exchange,
      symbol,
      status,
      quantityTotal,
      quantityOpen,
      cost,
      avgEntry,
      avgExit,
      returnTotal,
      returnPercent,
      // Initial order
      date,
      side,
      quantity,
      price
    } = req.body

    const createdTrade = await Trade.create({
      type,
      leverage,
      exchange,
      symbol,
      status,
      quantityTotal,
      quantityOpen,
      cost,
      avgEntry,
      avgExit,
      returnTotal,
      returnPercent,
      side,
      user: session.user._id,
      orders: { date, side, quantity, price }
    })

    res.status(200).json(createdTrade)
  } catch (error) {
    if (error) throw error
    res.status(400).json('error')
  }
}
