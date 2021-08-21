---
date: 2020-12-08 18:22:05
---

# Преобразование xlsx в csv в Linux с помощью командной строки

## Gnumeric - ssconvert

Приложение электронных таблиц Gnumeric поставляется с утилитой командной строки под названием ssconvert, которая может конвертировать между различными форматами электронных таблиц:
```
$ ssconvert Book1.xlsx newfile.csv
Using exporter Gnumeric_stf:stf_csv

$ cat newfile.csv 
Foo,Bar,Baz
1,2,3
123.6,7.89,
2012/05/14,,
The,last,Line
```

```
ssconvert --import-encoding=utf-8 --export-type=Gnumeric_stf:stf_csv [входящий файл] [исходящий файл]
```

```
ssconvert 1.xls 1.pdf
```

## libreoffice

Вы можете сделать это с помощью LibreOffice:

libreoffice --headless --convert-to csv $filename --outdir $outdir
По непонятным мне причинам вам может потребоваться запустить это с помощью sudo.

## Bash

Bash ускорит любую из команд выше:
```
for i in `ls`; do ssconvert --export-type=Gnumeric_stf:stf_csv $i $i.csv; done
```
Или
```
for i  in *.xlsx; do  libreoffice --headless --convert-to csv "$i" ; done
```

Debian и Ubuntu есть xlsx2csv пакет

```
$ apt-cache search xlsx2csv
xlsx2csv - convert xslx files to csv format
```
Но нажо иметь ввиду:
```
  -c OUTPUTENCODING, --outputencoding OUTPUTENCODING
                        encoding of output csv ** Python 3 only ** (default:
                        utf-8)
```
И если у вас уже есть среда рабочего стола, я уверен, что Gnumeric / LibreOffice будет работать хорошо, 
но на автономном сервере (таком как Amazon Web Services) они требуют десятков зависимостей, 
которые вам также необходимо установить.
Хотя
```
$ easy_install xlsx2csv
$ xlsx2csv file.xlsx > newfile.csv
```
На установку ушло 2 секунды и работает как шарм.
Если у вас несколько листов, вы можете экспортировать все сразу или по одному:
```
$ xlsx2csv file.xlsx --all > all.csv
$ xlsx2csv file.xlsx --all -p '' > all-no-delimiter.csv
$ xlsx2csv file.xlsx -s 1 > sheet1.csv
```

## Используйте csvkit
csvkit - это набор инструментов командной строки для преобразования и работы с CSV, королем табличных форматов файлов.

Он вдохновлен pdftk, GDAL и оригинальным инструментом csvcut Джо Гермуски и Аарона Бикоффе.

Важные ссылки:

Документация: https://csvkit.rtfd.org/
Репозиторий: https://github.com/wireservice/csvkit
Проблемы: https://github.com/wireservice/csvkit/issues
Схемы: https://github.com/wireservice/ffs

in2csv data.xlsx > data.csv
Подробности смотрите в их отличных документах.


