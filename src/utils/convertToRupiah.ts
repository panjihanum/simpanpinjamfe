const convertToRupiah: any = (angka: Number): String => {
  let angkaRev: String = new String()
  let angkaRev2: String = new String()
  let i: number = 0

  angkaRev = angka.toString().split('').reverse().join('')
  for (i = 0; i < angkaRev.length; i++)
    if (i % 3 == 0) angkaRev2 += angkaRev.substr(i, 3) + '.'
  return (
    'Rp. ' +
    angkaRev2
      .split('', angkaRev2.length - 1)
      .reverse()
      .join('')
  )
}

export default convertToRupiah
