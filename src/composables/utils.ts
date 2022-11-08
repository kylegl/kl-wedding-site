export function getTippyConfig(val?: TippyOptions) {
  if (!val)
    return

  const tippyOptions = {} as TippyConfig
  if (typeof val === 'object') {
    tippyOptions.content = val.content
    tippyOptions.hideOnClick = val.hideOnClick || false
  }

  if (typeof val === 'string') {
    tippyOptions.content = val
    tippyOptions.hideOnClick = false
  }

  return tippyOptions
}
