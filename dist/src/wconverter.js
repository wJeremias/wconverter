'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wconverter;

function wconverter(number, originalUnit, conversionUnit) {

  originalUnit = originalUnit.toLowerCase();
  conversionUnit = conversionUnit.toLowerCase();

  if (originalUnit == conversionUnit) {
    return number;
  } else {

    switch (originalUnit) {

      case 'lb':
        if (conversionUnit == 'kg') return number / 2.2046;else if (conversionUnit == 'oz') return number * 16;else return "Unidad de conversión desconocida";
        break;

      case 'kg':
        if (conversionUnit == 'lb') return number * 2.2046;else if (conversionUnit == 'oz') return number * 35.274;else return "Unidad de conversión desconocida";
        break;

      case 'oz':
        if (conversionUnit == 'kg') return number / 35.274;else if (conversionUnit == 'lb') return number * 0.0625;else return "Unidad de conversión desconocida";
        break;

      default:
        return "Unidad original a convertir desconocida";
        break;
    }
  }
}
