export function textRegexRouter(props) {
  let str = props
  str = str.replace(/[ÀÁÂÃ]/g, "A")
  str = str.replace(/[àáâã]/g, "a")
  str = str.replace(/[ÈÉÊ]/g, "E")
  str = str.replace(/[èéê]/g, "e")
  str = str.replace(/[ÌÍÎ]/g, "I")
  str = str.replace(/[ìíî]/g, "i")
  str = str.replace(/[ÒÓÔÕ]/g, "O")
  str = str.replace(/[òóôõ]/g, "o")
  str = str.replace(/[ÙÚÛ]/g, "U")
  str = str.replace(/[ùúû]/g, "u")
  str = str.replace(/[Ç]/g, "C")
  str = str.replace(/[ç]/g, "c")
  str = str.replace(/[ ]/gi, "-")
  str = str.replace(/[^a-z0-9][ ]/gi, "")
  return str
}
