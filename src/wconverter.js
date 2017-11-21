/*
 * Programa: wconverter.js
 * Weight Converter
 * Descripción: Conversor entre unidades de peso
 * ============================================================================
 * Unidades conocidas: libras (lb), onzas (oz) y kilogramos (kg)
 * Uso: La función wconverter recibe los siguientes parámetros:
 *      number          // El número de unidades a convertir
 *      originalUnit    // La unidad original del primer parámetro
 *      conversionUnit  // La unidad a la que deseamos convertir el primer parámetro
 * Ejemplo: wconverter(5, 'lb', 'kg') // retorna 2.26796 que es el equivalente en kg a 5 lb
 */

export default function wconverter(number, originalUnit, conversionUnit) {

  // Pasar a minúsculas las unidades de medida:
  originalUnit = originalUnit.toLowerCase()
  conversionUnit = conversionUnit.toLowerCase()

  if (originalUnit == conversionUnit) {
    return number

  } else {

    switch (originalUnit) {

      case 'lb':
        if (conversionUnit == 'kg')
          return number / 2.2046
        else if (conversionUnit == 'oz')
          return number * 16
        else
          return "Unidad de conversión desconocida"
        break;

      case 'kg':
        if (conversionUnit == 'lb')
          return number * 2.2046
        else if (conversionUnit == 'oz')
          return number * 35.274
        else
          return "Unidad de conversión desconocida"
        break;

      case 'oz':
        if (conversionUnit == 'kg')
          return number / 35.274
        else if (conversionUnit == 'lb')
          return number * 0.0625
        else
          return "Unidad de conversión desconocida"
        break;

      default:
        return "Unidad original a convertir desconocida"
        break;
    }
  }
}
