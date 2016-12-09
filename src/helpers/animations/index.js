/* @flow */

const mediaAppear = {
  from: { opacity: 0, scale: 0 },
  to: { opacity: 1, scale: 1 },
}

const mediaDisappear = {
  from: { opacity: 1 },
  to: { opacity: 0 },
}

const mediaUp = {
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
}

const mediaDown = {
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
}

export const animations = { mediaAppear, mediaDisappear, mediaUp, mediaDown }
