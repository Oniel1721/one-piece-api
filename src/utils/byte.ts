export const byte = 8

export const kiloByte = byte * 1024
export const megaByte = kiloByte * 1024
export const calcMegaByte = (count: number) => {
  return megaByte * count
}
