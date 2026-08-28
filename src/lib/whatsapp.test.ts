import { describe, expect, it } from 'vitest'
import { buildWhatsAppLink, WHATSAPP_MESSAGE } from './whatsapp'

describe('buildWhatsAppLink', () => {
  it('monta o link "click to chat" com o número e a mensagem codificados', () => {
    const link = buildWhatsAppLink('5527995038630')
    expect(link).toBe(`https://wa.me/5527995038630?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`)
  })
})
