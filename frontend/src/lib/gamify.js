/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
// Simple gamification utilities: XP storage, level computation, and events
const XP_KEY = 'xp'

export function getXP() {
  try {
    const raw = localStorage.getItem(XP_KEY)
    return raw ? Number(raw) : 0
  } catch (e) {
    return 0
  }
}

export function setXP(xp) {
  try {
    localStorage.setItem(XP_KEY, String(xp))
  } catch (e) {}
}

export function addXP(amount, reason) {
  if (!amount || isNaN(amount)) return getXP()
  const prev = getXP()
  const next = prev + Number(amount)
  setXP(next)
  try {
    window.dispatchEvent(new CustomEvent('xpChange', { detail: { xp: next, amount, reason } }))
  } catch (e) {}
  return next
}

export function getLevelFromXP(xp) {
  const val = Number(xp) || 0
  // simple: 100 XP per level
  return Math.floor(val / 100) + 1
}

export function xpForNextLevel(level) {
  const currentThreshold = (level - 1) * 100
  const nextThreshold = level * 100
  return nextThreshold - currentThreshold
}

export function getLeague(level) {
  if (level <= 5) return 'Bronze'
  if (level <= 10) return 'Silver'
  return 'Gold'
}

export default {
  getXP,
  setXP,
  addXP,
  getLevelFromXP,
  getLeague,
}
