---
title: SQLite
head:
  - - meta
    - name: description
      content: 'SQLite чрезвычайно распространен, и, по оценкам, в активном использовании находится 1 триллион баз данных SQLite'
tags:
categories:
- Innovate
- DataBase
---

SQLite чрезвычайно распространен, и, по оценкам, в активном использовании находится 1 триллион баз данных SQLite. Это подсчет множества баз данных на каждом устройстве Android и iOS, каждом компьютере macOS и Windows 10, большинстве систем Linux, в каждом веб-браузере на базе Webkit, современных телевизорах, автомобильных мультимедийных системах и бесчисленном множестве других программных приложений. Научиться использовать его в интерактивном режиме-это отличный первый шаг к управлению им для веб-приложений или использованию его через библиотеки языков программирования. Начните работу с этой шпаргалкой SQLite.



# SQLite3 Cheat Sheet


SQLite это общедоступная библиотека языка C, реализующая небольшой, быстрый, автономный, надежный и полнофункциональный механизм базы данных SQL.



### Manipulating data

Create database > .open example.db;
Create table and define fields > CREATE TABLE IF NOT EXISTS mytable (
→ foo TEXT NOT NULL);
View tables in database > .tables
Insert data into a table > INSERT INTO mytable (foo)
→ VALUES ('aaa'), ('bbb'),('ccc');
View table schema > .schema mytable
Add a new column to mytable > ALTER TABLE mytable ADD bar INTEGER;
Update data in a table > UPDATE mytable SET foo=^123
→ WHERE bar=’aaa’;

### Joins

Display an inner join > SELECT * FROM mytable
→ INNER JOIN othertable
→ ON mytable.rowid=othertable.foo;
Display a left join > SELECT * FROM mytable LEFT JOIN
→ ON mytable.id=othertable.foo;
Display a cross join > SELECT * FROM mytable
→ CROSS JOIN othertable;

### Data types Some SQLite functions

TEXT Text data abs() Absolute value
INTEGER Whole number max() min() Maximum and minimum values
REAL Fleating point number upper() lower() Convert case of string
BLOB Binary data length() Length of string
NULL Null value random() (Pseudo) random integer


### Select

Display all data > SELECT * FROM mytable;
Display data of the third row > SELECT * FROM mytable
→ WHERE rowid=3;
Display foo and bar columns > SELECT foo,bar FROM mytable;
Display first 10 results > SELECT * FROM mytable LIMIT 10;
Sort by column foo > SELECT * FROM mytable ORDER BY foo;

### Views

A view is a virtual table providing a template for displaying the results of a specific query.
Create a new view > CREATE VIEW myview AS
→ SELECT foo FROM mytable
→ WHERE example > 10;
Show existing views > .tables
Display data with a view > SELECT * FROM myview;
Delete ( drop ) a view > DROP VIEW myview;

### Column constraints

Set default text for a field DEFAULT ‘default text’
Enforce unique value UNIQUE
Designate a column as a unique identifier PRIMARY KEY
> CREATE TABLE mytable
→ (Id INTEGER PRIMARY KEY);
Pointer to a primary key of a different table FOREIGN KEY
Impose a condition for validation CHECK
> CREATE TABLE mytable
→ (CHECK(condition>0), bar TEXT);
Prevent NULL values NOT NULL

## SqLite cli
```
sqlite3 --help
Usage: sqlite3 [OPTIONS] FILENAME [SQL]
FILENAME is the name of an SQLite database. A new database is created
if the file does not previously exist.
OPTIONS include:
   -ascii               установите режим вывода в "ascii"
   -bail                остановка после обнаружения ошибки
   -batch               force пакетный ввод/вывод
   -column              установите режим вывода в "столбец"
   -cmd COMMAND         запустите "КОМАНДУ" перед чтением stdin
   -csv                 установите режим вывода в "csv"
   -echo                print commands перед выполнением
   -init FILENAME       read/process named file
   -[no]header          turn headers on or off
   -help                show this message
   -html                set output mode to HTML
   -interactive         force interactive I/O
   -line                set output mode to 'line'
   -list                set output mode to 'list'
   -lookaside SIZE N    use N entries of SZ bytes for lookaside memory
   -mmap N              default mmap size set to N
   -newline SEP         set output row separator. Default: '\n'
   -nullvalue TEXT      set text string for NULL values. Default ''
   -pagecache SIZE N    use N slots of SZ bytes each for page cache memory
   -quote               set output mode to 'quote'
   -separator SEP       set output column separator. Default: '|'
   -stats               print memory stats before each finalize
   -version             show SQLite version
   -vfs NAME            use NAME as the default VFS
```

```
sqlite> .help
.archive ... Управление архивами SQL
.auth ВКЛ | ВЫКЛ Показать обратные вызовы авторизатора
.backup? БД? ФАЙЛ Резервная БД (по умолчанию "основная") в ФАЙЛ
.bail on | off Остановить после появления ошибки. По умолчанию ВЫКЛ.
.binary on | off Включение или выключение двоичного вывода. По умолчанию ВЫКЛ.
.cd КАТАЛОГ Изменить рабочий каталог на КАТАЛОГ
.changes on | off Показать количество строк, измененных SQL
.check GLOB Fail, если вывод, поскольку .testcase не соответствует
.clone NEWDB Клонировать данные в NEWDB из существующей базы данных
.databases Список имен и файлов прикрепленных баз данных.
.dbconfig? op? ? val? Список или изменение параметров sqlite3_db_config ()
.dbinfo? DB? Показать информацию о статусе базы данных
.dump? ОБЪЕКТЫ? Отображать содержимое базы данных как SQL
.echo on | off Включение или выключение эха команды
.eqp on | off | full | ... Включение или отключение автоматического EXPLAIN QUERY PLAN
.excel Отобразить вывод следующей команды в электронной таблице
.exit? КОД? Выйдите из этой программы с кодом возврата CODE
.expert ЭКСПЕРИМЕНТАЛЬНАЯ ЧАСТЬ. Предлагать индексы для запросов
. объяснить? on | off | auto? Измените режим форматирования EXPLAIN. По умолчанию: авто
.filectrl CMD ... Запуск различных операций sqlite3_file_control ()
.fullschema? - отступ? Показать схему и содержимое таблиц sqlite_stat
.headers on | off Включение или отключение отображения заголовков.
.help? -все? ?ШАБЛОН? Показать текст справки для ШАБЛОНА
.import ТАБЛИЦА ФАЙЛОВ Импортировать данные из ФАЙЛА в ТАБЛИЦУ
.imposter INDEX TABLE Создать таблицу imposter TABLE по индексу INDEX
.индексы? ТАБЛИЦА? Показать названия индексов
.limit? LIMIT? ? ВАЛ? Отображение или изменение значения SQLITE_LIMIT
.lint ОПЦИИ Сообщает о потенциальных проблемах схемы.
.load ФАЙЛ? ВХОД? Загрузите библиотеку расширений
.log ФАЙЛ | off Включение или отключение входа в систему. ФАЙЛ может быть stderr / stdout
.mode РЕЖИМ? ТАБЛИЦА? Установить режим вывода
.nullvalue STRING Использовать STRING вместо значений NULL
.once? OPTIONS? ?ФАЙЛ? Вывод следующей команды SQL только в ФАЙЛ
.open? ОПЦИИ? ?ФАЙЛ? Закройте существующую базу данных и снова откройте ФАЙЛ
.выходной файл? Отправить вывод в ФАЙЛ или стандартный вывод, если ФАЙЛ опущен
.parameter CMD ... Управление привязками параметров SQL
.print STRING ... Распечатать буквальный STRING
.progress N Вызвать обработчик прогресса после каждых N кодов операций
.prompt ГЛАВНАЯ ПРОДОЛЖИТЬ Заменить стандартные подсказки
.quit Выйти из программы
.read ФАЙЛ Читать ввод из ФАЙЛА
.recover Восстановить как можно больше данных из поврежденной базы данных.
.restore? DB? ФАЙЛ Восстановить содержимое БД (по умолчанию "основная") из ФАЙЛА
.save ФАЙЛ Записать базу данных в памяти в ФАЙЛ
.scanstats on | off Включение или отключение показателей sqlite3_stmt_scanstatus ()
.schema? ШАБЛОН? Показать операторы CREATE, соответствующие PATTERN
.selftest? ОПЦИИ? Выполнить тесты, указанные в таблице SELFTEST
.separator COL? ROW ?. Измените разделители столбцов и строк
.session? NAME? CMD ... Создание или управление сеансами
.sha3sum ... Вычислить SHA3-хэш содержимого базы данных
.shell CMD ARGS ... Запустить CMD ARGS ... в системной оболочке
.show Показать текущие значения для различных настроек
.stats? ARG? Показать статистику или включить или выключить статистику
.system CMD ARGS ... Запустить CMD ARGS ... в системной оболочке
.таблицы? ТАБЛИЦА? Список имен таблиц, соответствующих шаблону LIKE TABLE
.testcase ИМЯ Начать перенаправление вывода на 'testcase-out.txt'
.testctrl CMD ... Запуск различных операций sqlite3_test_control ()
.timeout MS Попробуйте открыть заблокированные таблицы в течение миллисекунд MS
.timer on | off Включение или выключение таймера SQL
.trace? ОПЦИИ? Выводить каждый оператор SQL по мере его выполнения
.vfsinfo? AUX? Информация о VFS верхнего уровня
.vfslist Список всех доступных VFS.
.vfsname? AUX? Вывести имя стека VFS
.width NUM1 NUM2 ... Установить минимальную ширину столбца для вывода в столбец
sqlite>
```
