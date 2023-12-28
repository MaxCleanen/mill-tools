# Пример использования

содержимое исходного файла `input.NC`

```txt
%
(200X200X10_MILLING)
O7002
(OCT-16-2023-21:18:24)

(T1-End Mill  D=10, L=24, F=3    0:00:24)

G90 G17 G40 G80 G00
T1 M06(End Mill  D=10, L=24, F=3  )
T1
G00 G90 G54
G43 H1 G00 Z20.
(200x200  0:00:24)
S6000 M03
G00 X0. Y0.
M08
S6000
Z10.
Z0.
G01 G54 G90 X200. F2000.
Y200.
X0.
Y0.

G00 Z10.
M09
M05
M30
%
```

команда:
`node . './input.NC' './output.NC' 3 6 9 11 13`

Содержимое результирующего файла `output.NC`:

```txt
[StringExtract]
n3=O7002
n6=(T1-End Mill  D=10, L=24, F=3    0:00:24)
n9=T1 M06(End Mill  D=10, L=24, F=3  )
n11=G00 G90 G54
n13=(200x200  0:00:24)
```
