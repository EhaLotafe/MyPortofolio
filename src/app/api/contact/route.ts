import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    // Ici, tu peux ajouter envoi via nodemailer / SendGrid / Mailgun
    // Pour l'instant on simule une réussite
    console.log('Contact reçu', { name, email, message })

    return NextResponse.json({ ok: true, message: 'Message reçu' }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ ok: false, message: 'Erreur serveur' }, { status: 500 })
  }
}
