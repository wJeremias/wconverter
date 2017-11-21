## Weight Converter (wconverter)

Weight Converter es un conversor entre medidas de peso, dentro de un paquete NPM para convertir pesos en libras, onzas y kilogramos.

## Descripción

Unidades conocidas: libras (lb), onzas (oz) y kilogramos (kg)

La función wconverter recibe los siguientes parámetros:
1) number          // El número de unidades a convertir
2) originalUnit    // La unidad original del primer parámetro
3) conversionUnit  // La unidad a la que deseamos convertir el primer parámetro


## Instalación

```
npm install wconverter
```

## Uso

```
import wconverter from 'wconverter'

let conversion = wconverter(Number, String, String)
```

## Ejemplos

```
 wconverter(5, 'lb', 'kg')  // retorna 2.26796 que es el equivalente en kg a 5 lb
 wconverter(5, 'lb', 'oz')  // retorna 80 que es el equivalente en oz a 5 lb
 wconverter(5, 'oz', 'lb')  // retorna 0.3125 que es el equivalente en lb a 5 oz
 wconverter(5, 'oz', 'kg')  // retorna 0.141748 que es el equivalente en kg a 5 oz
 wconverter(5, 'kg', 'lb')  // retorna 11.0231 que es el equivalente en lb a 5 kg
 wconverter(5, 'kg', 'oz')  // retorna 176.37 que es el equivalente en oz a 5 kg
```

## Créditos

- [Walter Jeremías López](http://www.walterlopezhn.com)


## Licencia

- [MIT](https://opensource.org/licenses/MIT)
