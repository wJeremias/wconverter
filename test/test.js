
const expect = require('chai').expect
const wconverter = require('..').default

describe('#wconverter', function () {
  it('Retorna 2.26796 que es el equivalente en kg a 5 lb', function () {
    const conversion = wconverter(5, 'lb', 'kg')
    expect(Number(conversion.toFixed(4))).to.equal(2.2680)
  })

  it('retorna 80 que es el equivalente en oz a 5 lb', function () {
    const conversion = wconverter(5, 'lb', 'oz')
    expect(conversion).to.equal(80)
  })

  it('retorna 0.3125 que es el equivalente en lb a 5 oz', function () {
    const conversion = wconverter(5, 'oz', 'lb')
    expect(conversion).to.equal(0.3125)
  })

  it('retorna 0.141748 que es el equivalente en kg a 5 oz', function () {
    const conversion = wconverter(5, 'oz', 'kg')
    expect(Number(conversion.toFixed(4))).to.equal(0.1417)
  })

  it('retorna 11.0231 que es el equivalente en lb a 5 kg', function () {
    const conversion = wconverter(5, 'kg', 'lb')
    expect(Number(conversion.toFixed(2))).to.equal(11.02)
  })

  it('Retorna 2.26796 que es el equivalente en oz a 5 kg', function () {
    const conversion = wconverter(5, 'kg', 'oz')
    expect(conversion).to.equal(176.37)
  })

  it('retorna el mismo número pues ambas unidades son iguales', function () {
    const conversion = wconverter(5, 'lb', 'lb')
    expect(conversion).to.equal(5)
  })
})
