---
title: Пакетное изменение изображений
no_date: true
no_comments: true
---

# Пакетное изменение размеров изображений (images resize)

```bash
for i in `ls`; do convert -resize 'x266' -quality 65 $i x266q65_$i; done
```

В результате выполнения этой команды все изображения, находящиеся в текущем каталоге, будут конвертированы в картинки с высотой в 266 пикселей.
Результат будет сохранет в той же папке новыми файлами с префиксом x266q65_Далее-Старое-Название-И-Расширение.

## Узнать размеры изображения

По вертикали:

```bash
height=`identify -ping -format "%h" IMG_4450.JPG`
```

По горизонтали:

```bash
width=`identify -ping -format "%w" IMG_4450.JPG`
```

### Склейка нескольких картинок в один файл

Склеить все изображения в директории в матрицу 2х2 по 4 изображения:

```bash
montage *.jpg -tile 2x2 -geometry +10+10 out.jpg
```


### Склеить 2 изображения в столбец 1х2 (по вертикали):

```bash
montage BMW_420d.jpg BMW_425d.jpg -tile 1x2 -geometry +10+10 BMW_xDrive.jpg
```

### Склеить 2 изображения в строку 2х1 (по горизонтали):

```bash
montage BMW_520d.jpg BMW_525d.jpg -tile 2x1 -geometry +10+10 BMW_M5.jpg
```

### Подписать каждое изображение в коллаже именем файла:

```bash
montage *.jpg -label %f -frame 10 -tile 2x2 -geometry +10+10 out.jpg
```

- geometry +10+10 — белые поля вокруг каждого изображения, заданные в пикселях
- frame 10 — 3D-рамка, пиксели
- label %f — подпись

## Нарезать для Инстаграм

Когда мы хотим сделать 12 изображений для инстаграмм, то нарезать их можно так:

```
convert IMG-20171120-WA0026.jpg -crop 3x4@ +repage ржу%02d.jpg
```


## Изменение размеров изображений

[См подробнее help по convert](/blog/convert_--help)

```bash
convert hkers.png -adaptive-resize 500x guy_hkers_500x.png
```

### Растяжение гистограммы изображения (повышение цветовой чёткости)

Автоматический режим через normalize

```bash
convert $1 -normalize -sharpen $sharp -quality $quality -resize $newsize $2
```

### Подмена цвета

```bash
convert create-code.png -fuzz 0% -fill '#39а' -opaque '#000' new-code.png
```

- -opaque '#000' — какой цвет искать
- -fill '#39а' — на какой подменять
- -fuzz 0% — точность задания цвета (отклонение 0%, т.е. искать и подменять только точно совпадающий с #000 цветом)

### Конвертировать все картинки из текущей папки в один pdf и уменьшить их размер

```bash
convert *.jpg -scale 50% img.pdf
```

## Оптимизация изображений 

### jpegtran

Командная строка программа jpegtran предоставляет несколько возможностей для переформатирования и перекодирования представления DCT коэффициентов, для преобразования фактических данных изображения и для отбрасывания вспомогательных данных в файлах JPEG, соответственно. Преобразования, касающиеся представления коэффициентов, включают:

- оптимизация уровня кодирования Хаффмана файла JPEG для увеличения сжатия,
- преобразование между прогрессивным и последовательным форматами JPEG,
- преобразование между кодированием Хаффмана и арифметическим кодированием на уровне энтропийного кодирования .

Каждое из этих преобразований полностью без потерь и обратимо. 

### Для базового варианта оптимизации вызываем команду:

```bash
jpegtran -copy none -optimize -outfile min.image.jpg image.jpg
```

сохранит оптимизированную копию в min.image.jpg

- copy none убирает все метаданные из исходного файла
- optimize оптимизирует изображение

### Progressive
Для изменения формата на progressive следует использовать такую команду:

```bash
jpegtran **-progressive** -copy none -optimize -outfile min.pro.image.jpg image.jpg
```

## сохранит результат в файл min.pro.image.jpg

### Изменение качества
Вы также можете указать степень сжатия, чтобы наглядно подобрать лучшее значение:

```bash
jpegtran **-quality 80** -copy none -optimize -outfile min.pro.image.jpg image.jpg
```

Пробуйте разные значения от 5 до 95.

## jpegoptim

```bash
jpegoptim --quiet --strip-all --all-progressive --stdout $file_in > $file_out
```

## PNG

```bash
optipng -o7 -out automotive_logofeature-optipng.png automotive_logofeature.png
```

```bash
advpng -z -4 -i 50 automotive_logofeature-advpng.png
```

```bash
advdef -z -4 -i 50 automotive_logofeature-advdef.png
```

```bash
pngcrush -brute -reduce automotive_logofeature.png automotive_logofeature-pngcrush.png
```

```bash
pngnq -s 1 -v automotive_logofeature-pngnq.png
```

```bash
pngquant --speed 1 --force automotive_logofeature-pngquant.png
```

## Еще об SVG

batik-svgpp

Batik SVG pretty printer — SVG Pretty Printer позволяет разработчикам «приводить в порядок» свои SVG-файлы и приводить в порядок свои таблицы и другие косметические параметры. Он также может быть использован для изменения объявления DOCTYPE в файлах SVG


И svgcleaner

Пакетная очистка SVG-файлов от ненужной информации, утилита удаляет атрибуты, не участвующие в формировании конечного изображения, а задействованные атрибуты приводит к более компактному виду. Размер файла может быть уменьшен на 60%.


## Сокращенная информация о изображении:

```
identify img.jpg
```

А та же команда с параметром -verbose выведет полную информацию о изображении.


```
identify -verbose img.jpg
```

## Пакетная обработка изображений с помощью ImageMagick

Я сам ей практически и пользуюсь чаще всего. Мне нечасто нужно работать с отдельными изображениями.
Следующая команда обработает все изображения с разрешением .png повернет их на 180 градусов и запишет в файлы с новым именем rotated-предыдущее имя файла.


```
for file in *.png; do convert $file -rotate 180 rotated-$file; done
```

В общем утилита ImageMagick очень удобна и хороша в работе. А главное она сжимает практически без потерь качества, что немаловажно.
Конечно она не подойдет для тех кто терпеть не может консоль. Но для других – очень даже ничего:)
Пользуйтесь!;)

Как финал прочтения наиподробнейшего мануала, вот код:


```
for file in *.png; do convert -background red -fill white -gravity center \
-size 200 caption:СветланаАндреевнаКлишина \
$file +swap -gravity Northwest -composite \
/media/ink/ink-disk1/html/1_deploy/mama/label/$file; done

for file in *.png; do convert -caption "Клишина.РФ" $file -gravity center \
-background black +polaroid polaroid/$file; done
```
