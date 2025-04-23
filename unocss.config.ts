/*
 * Copyright (c) Fame, wealth and knowledge are merely worldly possessions that are within the reach of anybody striving for them.
 *  But your experience of and feelings about life are your own and not to be shared.
 *  No one can live your life over again after your death.
 * A full awareness of this will point out to you that the most important thing in your existence is your distinctive individuality or something special of yours.
 * What really counts is not your worldly success but your peculiar insight into the meaning of life and your commitment to it, which add luster to your personality.
 *
 */

// import { presetWind3 } from '@unocss/preset-wind3'
import { defineConfig, presetAttributify } from 'unocss'
// import transformerDirectives from '@unocss/transformer-directives'
// import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetAttributify()],
  rules:[
    [/^text-(\d+)$/, ([, d]) => ({ 'font-size': `${d}px` })],
    [/^w-(\d+)$/, ([, d]) => ({ width: `${d}px` })],
    [/^h-(\d+)$/, ([, d]) => ({ height: `${d}px` })],
    [/^p-(\d+)$/, ([, d]) => ({ padding: `${d}px` })],
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
    [/^leading-(\d+)$/, ([, d]) => ({ 'line-height': `${d}px` })],
    [/^rounded-(\d+)$/, ([, d]) => ({ 'border-radius': `${d}px` })],
    [/^max-w-(\d+)$/, ([, d]) => ({ 'max-width': `${d}px` })],
    [/^min-w-(\d+)$/, ([, d]) => ({ 'min-width': `${d}px` })],
    [/^max-h-(\d+)$/, ([, d]) => ({ 'max-height': `${d}px` })],
    [/^min-h-(\d+)$/, ([, d]) => ({ 'min-height': `${d}px` })],
    [/^top-(\d+)$/, ([, d]) => ({ top: `${d}px` })],
    [/^left-(\d+)$/, ([, d]) => ({ left: `${d}px` })],
    [/^right-(\d+)$/, ([, d]) => ({ right: `${d}px` })],
    [/^bottom-(\d+)$/, ([, d]) => ({ bottom: `${d}px` })],
    [/^gap-(\d+)$/, ([, d]) => ({ gap: `${d}px` })]
  ]
  // transformers: [transformerDirectives()]
})
