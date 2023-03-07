export function isArray(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value)
  } else {
    return Object.prototype.toString.call(value) === '[object Array]'
  }
}

export function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export function isNumber(value) {
  return !isNaN(Number(value))
}

export function isFunction(value) {
  return typeof value == 'function'
}

export function isString(value) {
  return typeof value == 'string'
}

export function isBoolean(value) {
  return typeof value === 'boolean'
}

export function isEmpty(value) {
  if (isArray(value)) {
    return value.length === 0
  }

  if (isObject(value)) {
    return Object.keys(value).length === 0
  }

  return value === '' || value === undefined || value === null
}

//判断参数1是否为NULL，如果是，返回参数2，否则返回参数1。
export const isNull = (val1, val2) => {
  return isEmpty(val1) ? val2 : val1
}

/**
* 判断是否是图片类型
* @param filePath
* @returns
*/
export function isImage(filePath) {
  let type = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg']
  // 获取最后一个.的位置
  let index = filePath.lastIndexOf('.')
  //获取后缀
  let suffix = filePath.substring(index + 1)
  return type.indexOf(suffix.toLowerCase()) != -1
}

/**
 * 转换字符串，为null转换为空字符串
 * @param val
 * @returns
 */
export const str = (val) => {
  if (val == null) {
    return ''
  }
  return String(val)
}


export const useEmojiParse = (allEmoji, val) => {
  //解析表情
  const reg = /\[.+?\]/g
  val = val.replace(reg, (str) => {
    const emojiPath = allEmoji[str]
    //表情库不存在的就默认返回原字符串
    if (!emojiPath) {
      return str
    }
    return [
      '<img src="',
      emojiPath,
      '" width="20" height="20" alt="',
      str,
      '" title="',
      str,
      '" style="margin: 0 1px; vertical-align: text-bottom"',
      '/>'
    ].join('')
  })
  return val
}

