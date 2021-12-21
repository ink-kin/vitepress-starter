---
title: Archi modelling tool
head:
  - - meta
    - name: description
      content: 'Archi® - это бесплатный кроссплатформенный инструмент с открытым исходным кодом для создания моделей ArchiMate'
tags:
- Archi
- ArchiMate
categories:
- Innovate
- BPM
---
## Версия 4.8.

# 0 Введение

Archi® - это бесплатный кроссплатформенный инструмент с открытым исходным кодом для создания моделей ArchiMate.

Инструмент моделирования Archi® предназначен для архитекторов и разработчиков моделей всех уровней. Он обеспечивает низкую стоимость начального решения для пользователей, которые, возможно, делают свои первые шаги в языке моделирования ArchiMate или которые ищут бесплатный кроссплатформенный инструмент моделирования ArchiMate для своей компании или учреждения и хотят взаимодействовать с языком внутри TOGAF® или другую структуру архитектуры предприятия.

С момента своего появления Archi получил широкое распространение в реальном мире в коммерческом и образовательном секторах, а также используется крупными глобальными компаниями и консультантами внутри компании. Он быстро становится де-факто инструментом моделирования ArchiMate с открытым исходным кодом.

Язык моделирования ArchiMate® - это открытый и независимый стандарт архитектуры предприятия, который поддерживает описание, анализ и визуализацию архитектуры внутри и между сферами бизнеса. ArchiMate - это один из открытых стандартов, поддерживаемых Open Group®, и полностью согласованный с TOGAF®.

Archi® - зарегистрированная торговая марка Филиппа Бовуара. ArchiMate®, The Open Group® и TOGAF® являются зарегистрированными товарными знаками The Open Group.

Благодаря:

    - All the Archi users, too many to mention, who have supported Archi, contributed
    ideas and suggestions.
    - Jean-Baptiste Sarrodie for co-leading the Archi project, contributing features,
    code, ideas, support, vision, encouragement and much more.
    - Andrew Josey and The Open Group for positivity and support.

Авторские права (c) 2013-2020 Филип Бовуар, Жан-Батист Сарроди, The Open Group. Все права защищены.

# 1 Установка и запуск Archi

Загрузите нужную версию с https://www.archimatetool.com2

Версия для Windows имеет установщик. Запустите установщик, чтобы установить Archi в вашу систему. Поддерживаются 64-битные версии Windows 7, 8 и 10. Программа установки просто копирует файлы программы в целевой каталог и связывает файлы * .archimate с Archi. Также включен деинсталлятор.

Вы также можете установить Archi вручную с помощью zip-архива. Разархивируйте этот файл и запустите либо "Archi", либо файл программы. Также включены некоторые командные файлы Windows - «RegisterFileAssociation.bat» и «UnregisterFileAssociation.bat». Первый из этих файлов зарегистрирует расширение файла * .archimate в Archi в реестре Windows. Второй командный файл отменит регистрацию ассоциации файлов.

Версии для Mac и Linux упакованы в файлы zip и tar.gz соответственно. Просто разархивируйте загруженный архивный файл и дважды щелкните файл приложения «Archi», чтобы запустить программу.

## 3 Запуск Archi

Новое пустое рабочее пространство Archi выглядит следующим образом:

Рабочее пространство Archi по умолчанию

Рабочее пространство разделено на следующие подокна:

    - The Models Tree window. By default this is positioned at the top left and labelled
    "Models". This is where one or more ArchiMate models can be viewed as a tree
    structure.
    - The Properties window. This displays the properties for a selected object. The
    properties for the selected object can be edited here.
    - The Outline window. This window displays the contents of an ArchiMate diagram
    (View) in miniature as a navigation tool for the selected diagram (View).
    - The Navigator window. This window displays the selected model concept and all
    of its relationships with other model concepts. It is used to navigate between
    connected concepts via their relationships and is used in conjunction with the
    Models Tree window.
    - The Palette window. When opened will display a single window for the drawing
    Palette used in Views.
    - The Visualiser window. This window displays the selected model concept and all
    of its relationships with other model concepts in a graphical way. It is the
    graphical equivalent of the Navigator.
    - The Hints window. This displays short textual hints for the selected object. For
    example, selecting an ArchiMate "Business Actor" diagram element displays a
    short summary of that object's meaning and purpose. Selecting an item or
    hovering over an item, in the diagram's palette also displays a hint in the window.
    - The Validator window. This provides hints and tips to improve your model.

Эти подокна можно переупорядочить, перетаскивая их на новые позиции или перетаскивая их из главного окна приложения, чтобы они отключались от главного окна.

Различные окна можно отображать или скрывать, выбирая соответствующие пункты меню из меню «Окно» в строке главного меню или с помощью кнопок на панели инструментов:

Панель инструментов Windows

Чтобы сбросить рабочее пространство окна Archi до его макета по умолчанию, выберите «Сбросить макет окна» в меню «Окно» в главном меню.

Вы можете скрыть или показать главную панель инструментов, выбрав «Скрыть / показать панель инструментов» в меню «Окно» в главном меню.

# 4 Работа в Archi

Работая в приложении, вы, возможно, захотите узнать, как все работает в целом.

## 5 Окна и вкладки

Основная область редактирования представлений находится в центральной правой части приложения. Окна и вкладки можно перетаскивать и переставлять по своему желанию. Вы даже можете отделить некоторые окна, чтобы они «плавали».

    If ever you wish to reset the layout of application windows and tabs back
    to their defaults, choose "Reset Window Layout" from the main "Window"
    menu. You can also reset Archi to its default settings from the "Reset Archi
    to Defaults..." menu item under the "Help" menu.

## 6 Отменить / повторить (в зависимости от модели)

Команды полной отмены и возврата доступны для каждого действия, выполняемого пользователем в Archi.

    Undo and Redo commands are contextual depending on the selected
    model in the Model Tree or a View. Clicking onto a View or the Model Tree
    will enable the command if an action has been performed for that model.

## 7 Шпаргалки

Шпаргалки могут помочь пользователю выполнить ряд шагов для достижения общей цели. Некоторые шаги могут быть выполнены с помощью шпаргалки, а некоторые описаны так, чтобы пользователь мог выполнить шаг вручную. Шпаргалки доступны из главного меню «Помощь». В настоящее время Archi поставляется с двумя шпаргалками - «Создать вид карты» и «Создать новую модель».

## 8 Получать помощь

Контекстная и полная справка доступна из главного меню «Справка». В Windows нажатие клавиши «F1» вызовет контекстную справку.

# 9 Создание новой модели ArchiMate

Чтобы создать новую пустую модель ArchiMate в Archi, сделайте следующее:

Выберите «Пустая модель» в главном меню «Файл-> Создать» или с помощью кнопки на главной панели инструментов:

Кнопка "Новый"

Модель под названием «(новая модель)» будет создана и видна в окне «Дерево моделей» с открытым «Видом по умолчанию» с пустым холстом для рисования и палитрой:

Рабочее пространство Archi по умолчанию с созданной новой моделью

Обратите внимание, что модель по умолчанию называется «(новая модель)». Вы можете изменить это, переименовав его непосредственно в дереве модели или выбрав в дереве модели и отредактировав имя в окне свойств. Вы также можете добавить «Цель» здесь, в окне «Свойства», описывающую цель и задачи модели.

Также обратите внимание, что для модели был автоматически создан один «Вид» с именем «Вид по умолчанию», который помещается в папку «Виды» в дереве модели. Если вид не открыт (т.е. виден с пустыми холстом и палитрой для рисования), вы можете открыть его, дважды щелкнув по нему в дереве модели. При этом справа откроется редактор представления (диаграммы). Если вы хотите переименовать вид, просто выберите его в дереве модели и отредактируйте имя в окне свойств.

В окне «Модели» может отображаться более одного дерева моделей, что означает, что вы можете работать с более чем одной моделью одновременно.

Звездочка, которая появляется на модели в Дереве после внесения изменений, указывает на то, что эта модель была изменена, но изменения еще не были сохранены.

# 10 Модельное дерево

Модель ArchiMate состоит из ряда концепций ArchiMate, принадлежащих к разным «слоям» - уровню «Бизнес», уровню «Приложение» и уровню «Технология». Каждая концепция ArchiMate принадлежит к одному из этих слоев. Например, «бизнес-объект» принадлежит к «бизнес-уровню», а «прикладной компонент» - к «прикладному уровню».

Каждая концепция в модели может подключаться к одной или нескольким другим концепциям через одно или несколько отношений (соединений) в соответствии с правилами ArchiMate.

Объяснение этих концепций и их взаимосвязи выходит за рамки данного руководства. Для получения дополнительной информации см. Спецификацию ArchiMate)

Модель ArchiMate состоит из конфигураций этих концепций, связанных друг с другом посредством различных отношений. Модель ArchiMate представлена ​​в Archi в окне «Модели» в виде древовидной структуры, организованной в папки:

Окно "Дерево модели" с примером модели.

Каждая концепция ArchiMate помещается в соответствующую папку в дереве модели.

Добавление элементов непосредственно в дерево модели

Чтобы добавить новые элементы ArchiMate непосредственно в дерево модели, выберите одну из папок «Бизнес», «Приложение», «Технология» или «Соединители» и щелкните правой кнопкой мыши. Пункт меню «Новый» позволяет добавлять в дерево новые элементы:

Добавление нового элемента непосредственно в дерево модели

Когда элемент добавляется в дерево модели, фокус переходит на элемент, и вы можете дать ему новое имя.

Обратите внимание, что невозможно добавить отношения непосредственно в дерево модели, так как они могут быть добавлены только путем их рисования в окне редактора вида (диаграммы).

Папки и организация

Модель в Archi организована в структуру папок, представляющую слои ArchiMate и взаимосвязи концепций. Новая модель включает следующие папки верхнего уровня:

Бизнес Содержит элементы уровня «Бизнес» и все созданные пользователем подпапки.

Приложение Содержит элементы уровня «Приложение» и все созданные пользователем подпапки.

Технология Содержит элементы уровня «Технология» и все созданные пользователем подпапки.

Мотивация Содержит элементы из категории «Мотивация» и любые созданные пользователем подпапки.

Внедрение и миграция

    Contains the elements in the "Implementation & Migration"
    category and any user-created sub-folders

Другое Содержит элементы типа Location, Grouping и Junction, а также любые созданные пользователем подпапки.

Отношения Содержит отношения между концепциями в том виде, в котором они созданы в представлениях (диаграммах), и во всех созданных пользователем подпапках.

Представления (^) Содержит ссылки на представления (диаграммы). Элементы ArchiMate могут быть созданы и удалены непосредственно в дереве модели (см. Добавление элементов непосредственно в дерево модели) или автоматически добавлены в папку соответствующего типа по мере того, как объекты рисуются на холсте модели. представление (см. Добавление новых элементов в представление из палитры). Все концепции в папке автоматически сортируются в алфавитном порядке. Подпапки, созданные пользователем Подпапки пользователя могут быть созданы под основными папками верхнего уровня. Это позволяет вам организовывать концепции так, как вы хотите. Чтобы добавить новую подпапку в дерево модели, выберите папку верхнего уровня (или подпапку, созданную пользователем) и щелкните правой кнопкой мыши. Пункт меню «Новый» позволяет вам добавить в дерево новую подпапку. Обратите внимание, что подпапка может содержать только концепции того же типа, что и самая верхняя родительская папка. Например, в папке «Бизнес» и любой из ее подпапок можно создавать только концепты типа «Бизнес». Вы также можете перетаскивать концепции и подпапки в одной ветке папки, но не между папками разных типов. Чтобы переименовать подпапку в дереве модели, выберите «Переименовать» в главном меню «Правка» или в контекстном меню, вызываемом правой кнопкой мыши. Работа в дереве модели Как правило, вы можете добавлять, удалять, дублировать, перемещать и переименовывать концепции и виды в дереве модели. Вы также можете создавать папки под основными группами папок, чтобы сгруппировать концепции вместе. Чтобы переименовать подпапку в дереве модели, выберите «Переименовать» в главном меню «Правка» или в контекстном меню, вызываемом правой кнопкой мыши. Работа в дереве модели Как правило, вы можете добавлять, удалять, дублировать, перемещать и переименовывать концепции и виды в дереве модели. Вы также можете создавать папки под основными группами папок, чтобы сгруппировать концепции вместе. Чтобы переименовать подпапку в дереве модели, выберите «Переименовать» в главном меню «Правка» или в контекстном меню, вызываемом правой кнопкой мыши. Работа в дереве модели Как правило, вы можете добавлять, удалять, дублировать, перемещать и переименовывать концепции и виды в дереве модели. Вы также можете создавать папки под основными группами папок, чтобы сгруппировать концепции вместе.

Перетащить и отпустить

Объекты управляются перетаскиванием в папки. Обратите внимание, что вы не можете перемещать концепции из одного основного типа папки в другой. Например, бизнес-концепции могут находиться только в папке «Бизнес» или в одной из ее подпапок, а отношения могут быть только в папке «Отношения» или одной из ее подпапок.

Вырезать и вставить

Помимо перетаскивания, вы можете вырезать и вставлять объекты между папками. После выбора объектов в дереве выберите «Вырезать», а после выбора целевой папки выберите «Вставить», чтобы переместить объекты.

Удаление объектов из дерева модели

Чтобы удалить один или несколько объектов в дереве модели, выберите их и выберите «Удалить» в главном меню «Правка» или на главной панели инструментов.

Обратите внимание: если концепция, которую вы хотите удалить, появляется в одном или нескольких представлениях, вы будете предупреждены о том, что на нее есть ссылки в этих представлениях. Если вы затем удалите концепцию из дерева, вы также удалите ее из всех представлений, где на нее есть ссылка.

Предупреждение об удалении концепта

Переименование объекта в дереве модели

Чтобы переименовать объект в дереве модели, выберите «Переименовать» в главном меню «Правка» или в контекстном меню, вызываемом правой кнопкой мыши. Вы также можете переименовать его в окне свойств.

Дублирование элемента или вида в дереве модели

Чтобы дублировать элементы или виды в дереве модели, выберите «Дублировать» в главном меню «Правка» или в контекстном меню, вызываемом правой кнопкой мыши. Обратите внимание, что повторяющиеся представления содержат ссылки на скопированные исходные концепции.

Редактирование свойств объекта в дереве модели

Чтобы отредактировать свойства для выбранного объекта в дереве модели, выберите объект в дереве и откройте окно свойств, дважды щелкнув объект, либо в главном меню «Окно» или на главной панели инструментов.

Каждый объект в дереве модели имеет разные свойства, которые можно установить или просмотреть в окне свойств. Для получения дополнительной информации см. Раздел «Окно свойств».

Примечание. Некоторые свойства можно редактировать только тогда, когда объект выбран в представлении (например, цвет заливки, шрифт или ширина линии).

Концепции в дереве модели и представлениях

Concepts in the Model Tree can be added to any number of diagram Views in the model by dragging them onto the View's canvas (see the section, "Views"). When a concept has been added or used in a View the font used in the Model Tree for that concept is normal. However, if the concept only exists in the Model Tree and is not used in any View it is shown with an italic font:

Italic font shows concepts not used in Views

This makes it convenient to see those concepts that may have become redundant and can be deleted.

Synchronising Selections in the Model Tree and a View

When selecting concepts in the Model Tree and in diagram Views it is sometimes useful to synchronise the selection between the concepts in both windows. Pressing the "Link to View" button in the Model Tree window enables or disables synchronising selected concepts between the Model Tree and a diagram:

The "Link to View" button

This button is a toggle and can be turned off or on.

Synchronised selection is possible on more than one selected concept.

Note that synchronised selection is only possible if a relevant View is open. Selecting a concept in the Model Tree will not synchronise a selection in a View if that View does not contain that particular concept or concepts.

Drill Down

Using the Drill Down buttons, "Home", "Back" and "Go Into", it is possible to "drill into" a model or folder. The path to the currently selected object or folder is shown in the Status Bar.

The "Drill Down" buttons

Searching and Filtering in the Model Tree

The number of objects in the Model Tree can grow quite considerably as you work on your model. Of course, you may wish to add sub-folders within the main folder structure

to help organise these objects. However, finding a particular object in the tree may still prove to be difficult.

In order to search the Model Tree a Search Bar is included in Archi. This is accessed by clicking on the "Search" button on the toolbar of the Model Tree window. Clicking this button reveals the Search Bar:

The Search Bar revealed

As you type into the text field of the Search Bar the Model Tree updates to show only those objects that match the search criteria in the Search Bar. By default only the name of the objects is matched to the search string. You can also search on the "Documentation" field of the objects by ticking this in the "Filter Options" drop-down menu in the Search Bar:

Searching on both "Name" and "Documentation"

To clear the search text selection click on the icon to the right of the text. To clear the filters, deselect "Name" and/or "Documentation".

Filtering Object Types

To filter certain types of ArchiMate concept you can select the different types to include in the filter/search in the drop-down menu:

Filtering certain object types

Чтобы сбросить фильтр по типу объекта, выберите пункт меню «Сбросить фильтры».

Фильтрация свойств пользователя

Чтобы отфильтровать свойства пользователя объектов, вы можете выбрать различные ключи свойств для включения в фильтр / поиск в раскрывающемся меню:

Фильтрация по свойствам пользователей

Отображение всех папок

По мере того, как вы уточняете свой поиск, в дереве модели будут отображаться только те объекты, которые соответствуют вашим критериям поиска / фильтрации (или вообще не будут отображаться, если ни один из объектов не соответствует). Таким образом, папки без соответствующих дочерних объектов не отображаются. Однако, если вы хотите отображать эти пустые папки при поиске объектов (например, вы можете перетащить объекты в другие папки), вы можете установить это как параметр в меню фильтра, выбрав «Показать все папки».

Чтобы закрыть панель поиска и сбросить фильтр поиска, нажмите кнопку «Поиск» еще раз.

Найти и заменить

Также можно найти и заменить объекты в дереве модели по имени.

Диалог поиска и замены

# 11 Взгляды

Элементы и отношения, которые составляют модель ArchiMate, представленную в дереве модели, могут быть организованы в один или несколько «видов» или визуальных диаграмм. Следовательно, модель ArchiMate может состоять из одного или нескольких представлений, где каждое представление может отображать концепции модели в различных конфигурациях. Например, вы можете захотеть видеть только элементы бизнес-уровня в одном представлении, а элементы интерфейса приложения модели - в другом представлении. Или вы можете захотеть создать «главный» вид, который действует как карта для всех других видов в модели.

ArchiMate поддерживает подход, при котором архитекторы и другие заинтересованные стороны могут определять свои собственные представления об архитектуре предприятия. В этом подходе представления определяются точками обзора. Точки зрения определяют абстракции на наборе моделей, представляющих архитектуру предприятия, каждая из которых нацелена на определенный тип заинтересованных сторон и решает определенный набор проблем. Точки обзора могут использоваться как для изолированного просмотра определенных аспектов, так и для установления связи между двумя или более аспектами.

В Archi View неограничен по объему в соответствии с доступными элементами и отношениями, и разработчик должен наложить любые ограничения для данной точки обзора, как предписано спецификацией ArchiMate.

## 12 Открытие просмотра

Если модель уже содержит вид, он будет виден в папке «Виды» в дереве модели:

Вид по умолчанию в дереве модели

Чтобы открыть и отредактировать вид, дважды щелкните его в дереве модели (или нажмите Ctrl-Shift-O / Command-Shift-O). Откроется редактор представления, в котором будут отображаться холст и палитра редактирования:

Редактор представлений, показывающий пустой холст и палитру для рисования.

Создание нового представления

Модель ArchiMate обычно состоит из более чем одного представления. Чтобы добавить новый вид к модели, щелкните правой кнопкой мыши папку «Виды» в дереве модели и выберите «Создать-> ArchiMate View» из контекстного меню:

Добавление нового вида в модель

После того, как вид был добавлен в модель, его можно открыть из дерева, дважды щелкнув по нему. Любое количество видов можно добавить к модели и открыть одновременно. Представления расположены на вкладках в основной области редактирования окна приложения.

Работа с представлениями

Once a View has been opened you may now "draw" on the canvas, adding and creating new ArchiMate elements, connections (relationships) and annotations (notes). As you add figures to the canvas from the palette, the corresponding ArchiMate elements and relationships are added to the ArchiMate model and are visible in the Model Tree.

You also add existing concepts to the View by dragging and dropping them from the Model Tree into the View. You can add new elements to the Model Tree (see Adding Elements Directly to the Model Tree) and then drag them to any number of Views in the model. Thus, elements and relations can appear in more than one View, each occurrence referencing the same concept in the Model. Thus, if you change the name of the model concept it will change for all occurrences in all Views.

Navigating a View

Panning

If you select the first selection tool from the Palette, click somewhere on the View to give it the focus and then hold the Space bar down the cursor will change to a hand and you can pan the View. You can also pan around the View by holding down the middle mouse button.

Using the Keyboard Instead of the Mouse in a View

It is possible to move and resize selected objects in a View by using the computer keyboard instead of a mouse. To move an object, press the period key (".") once to reveal the MOVE cursor. Then use the Arrow keys, followed by the ENTER key to commit the move. To resize the object, press the period key (".") until the RESIZE cursor appears at the desired resize handle. Press the ENTER key to commit the resize.

Automatic Scrolling in a View

Sometimes you may find that a concept is outside the area of the View area and you wish to draw a new connection between one concept and another concept outside of the View area (the scrollbars would normally need to be used). To do so, simply click on the source concept after selecting the connection tool and then hover the mouse at the edge of the Viewport. After a short pause, the View will automatically scroll.

Zooming a View

You can zoom in and out of a View in a number of different ways:

    - From the main "View" menu
    

    - By using the shortcut key combinations Ctrl +, Ctrl =, Ctrl - and Ctrl 0
    ("Command" key on Mac)
    - By using the Zoom combo box on the main toolbar.
    - By holding the Ctrl key down ("Command" key on Mac) and using the mouse
    scroll wheel

Used in combination with the Outline View you can easily navigate around large diagrams.

Find and Replace

It is also possible to find and replace concepts in a View by name.

Find and Replace dialog

The Palette

The palette contains the drawing tools, and elements and relationships that can be added to a View. It is an area that is attached to a View.

The Palette in a View

To create new elements and relationships in a View select the required object tool on the palette and either click or drag it onto the canvas area. Once the figure has been added to the canvas you can resize and re-position it by the usual drag actions.

You can configure how the Palette displays items by right-clicking on the Palette and choosing "Settings...":

Palette Settings

If you cannot see the palette in a View it may be closed. If this is the case, open it by clicking the "Show Palette" triangle button at the top-right of the View window.

The Detached Palette

By default, each View has its own attached Palette. It is also possible to have a single, detachable Palette that you can drag and dock to any position in the application window. To do this, click on the "Palette" button on the main toolbar:

Кнопка «Палитра» на главной панели инструментов.

Нажатие этой кнопки отключает палитру от вида и создает окно палитры. Вы можете перетащить его и закрепить в любом месте приложения. В следующем примере палитра закреплена в нижнем левом углу:

Окно палитры закреплено в нижнем левом углу.

Закрытие окна палитры повторно прикрепляет его ко всем открытым представлениям.

Инструменты выбора палитры

В палитре доступны два инструмента выделения. Они используются для выбора объектов на диаграмме различными способами.

Инструменты выделения в палитре

Первый инструмент (инструмент выбора) в основном используется для выбора элементов (блоков). При перетаскивании области выделения вокруг элементов и соединений с помощью этого инструмента будут выделены только элементы (прямоугольники).

Второй инструмент (инструмент выделения) активируется раскрывающейся кнопкой и используется для выбора как элементов, так и соединений различными способами:

Параметры инструмента выделения

Вы можете добавить элементы или соединения к выделению с помощью инструмента выделения, удерживая нажатой клавишу Ctrl и щелкая элемент или соединение. Эту же операцию можно использовать для удаления элемента или соединения из выделения.

Когда выбрано несколько элементов или соединений, один будет отмечен темными маркерами. Это называется первичным отбором.

Выбраны три элемента, верхний - это основной выбор

Первичный выбор используется с инструментами выравнивания. Вы можете изменить, какой элемент или соединение является первичным выбором, с помощью инструмента выбора, удерживая клавишу Shift и щелкнув элемент или соединение, которое вы хотите сделать первичным выбором.

    Tip: Pan the View using the selection tool.
    If you select the first selection tool from the Palette, click somewhere on the
    View to give it the focus and then hold the Space bar down the cursor will
    change to a hand and you can pan the View. You can also pan around the
    View using the middle mouse button.

Инструменты создания палитры

Помимо инструментов выбора, на палитре доступны другие инструменты, используемые для создания новых концепций ArchiMate, заметок, групп и отношений между концепциями (связями). Чтобы добавить новый элемент на холст, выберите один и перетащите его на холст или щелкните мышью на нем.

связи

Есть несколько типов отношения ArchiMate и элемент соединения.

Инструменты создания отношений на палитре

Первый инструмент - Magic Connector, используемый для рисования соединений. Затем следуют инструменты создания отношений ArchiMate и элемента Junction.

Заметки и группы

Используется для добавления примечания, контейнера группы или соединения примечания к представлению.

Инструменты создания заметок, групп и примечаний

Элементы ArchiMate

Они разделены на области, соответствующие концептуальным группам ArchiMate «Другое», «Бизнес», «Применение», «Технологии», «Физические аспекты», «Мотивация» и «Внедрение и миграция»:

Инструменты создания элементов ArchiMate

Обратите внимание, что подмножество этих элементов будет доступно только в том случае, если текущий вид ограничен данной точкой обзора.

    Tip: Press the shift key when selecting a palette tool to keep it
    selected.
    By default, once an element or connection has been drawn on the canvas
    the default selection tool (arrow) is re-selected on the palette. If you wish to
    keep the current palette tool selected hold the "Shift" key down when you
    select it.

Форматный художник

Форматирование по образцу - это инструмент на панели инструментов палитры, который позволяет быстро копировать визуальное форматирование одного объекта и вставлять его в другие в представлении. Вместо того, чтобы вручную применять шрифт, цвет шрифта, выравнивание текста и другое форматирование к каждому новому объекту в представлении, вы можете быстро скопировать все атрибуты форматирования с помощью одной кнопки на панели инструментов.

Инструмент Format Painter находится в верхней части палитры:

Инструмент Format Painter

Чтобы скопировать и вставить форматирование в представлении:

1. Выберите инструмент «Формат по образцу» на палитре. Первоначально он будет серым, указывая на то, что он «пустой» и готов к копированию.
1. Щелкните исходный объект или соединение, из которого вы хотите скопировать форматирование. Курсор инструмента «Формат по образцу» изменится на более темный контур и на цвет копируемого объекта заливки или соединения. Кроме того, запись инструмента на палитре станет темнее, и всплывающая подсказка обновится, чтобы объяснить это.
1. Теперь щелкните целевые объекты или соединения, чтобы вставить форматирование.
1. Чтобы очистить средство рисования форматов, чтобы оно было готово к копированию еще одного форматирования, либо дважды щелкните инструмент на палитре, либо дважды щелкните пустое место на холсте.

Обратите внимание, что некоторая часть форматирования не может быть скопирована и вставлена ​​из объекта в соединение и наоборот. Вы можете использовать инструмент Format Painter между различными представлениями. Если он «загружен», просто выберите его из палитры в другом представлении и вставьте форматирование в целевые объекты или соединения.

Добавление новых элементов в вид из палитры

Чтобы создать и добавить новые элементы в представление, выберите требуемый элемент на палитре и либо щелкните, либо перетащите новую фигуру в область холста. После того, как фигура была добавлена ​​на холст, вы можете изменить ее размер и положение обычными действиями перетаскивания.

При добавлении элементов в вид они автоматически добавляются в дерево модели

Важно понимать, что добавление элементов (и отношений) к виду из палитры автоматически добавляет эти элементы в дерево модели. Например, перетаскивание элемента «Business Actor» на холст создает как фигуру в представлении с именем «Business Actor», так и узел в дереве модели с тем же именем.

Более того, если вы удаляете элемент в представлении, соответствующий элемент в дереве модели не удаляется. Это связано с тем, что на элемент можно ссылаться в другом представлении модели. Чтобы полностью удалить элемент, вы должны удалить его в дереве модели или выбрать пункт контекстного меню «Удалить из модели».

Вы можете редактировать имя элемента напрямую, щелкнув текстовую область на рисунке. Двойной щелчок по фигуре открывает окно свойств, в котором вы можете редактировать свойства выбранного элемента.

Редактирование свойств элементов представления

Свойства выбранного элемента в представлении можно редактировать в окне свойств. Чтобы открыть окно свойств, либо дважды щелкните фигуру, либо выберите фигуру и откройте окно на панели инструментов или в главном меню. Каждый элемент в представлении имеет разные свойства, которые можно установить или просмотреть в окне свойств. Для получения дополнительной информации см. Раздел «Окно свойств».

Двойной щелчок по элементу в представлении открывает окно свойств, однократный щелчок по уже выбранному текстовому полю элемента позволяет вам напрямую редактировать текст элемента.

Adding New Relationships (Connections) to the View from

the Palette

To add new relationships (connections) to the View select the required connection tool on the Palette and drag from one element on the View to another on the same View.

As with adding elements from the palette, adding a relationship to a View automatically adds it to the Model Tree as well, in the "Relations" folder.

When adding a new connection in a View, if the same type of model relationship already exists between the source and target elements, a dialog box will appear giving you the option to reference that model relationship from the connection, or create a new connection and model relationship:

A dialog providing the option of re-using a model relationship.

    Relationships, Rules and Regulations.
    ArchiMate elements can connect to other elements by a given set of
    relationships (connections). Some relationships are allowed, others are not.
    If a relationship is not allowed the cursor will show as a "Not Allowed"
    symbol, a circle with a diagonal line. If a relationship is allowed, it will show
    as a "plug" symbol.

Information about Connections

Once a relationship (connection) has been created between elements, some useful information can be revealed when the mouse cursor hovers over the connection to reveal a tooltip. The tooltip displays the relationship's name, its type, and some text that describes the nature of the relationship between the source and target elements.

A tooltip shows useful information when hovering over a connection

Adding Circular Relationships (Connections)

You may add a circular relationship (connection) if you wish. This is a relationship whose target and source element is the same. You can create a connection from an element to itself by selecting the required relationship from the Palette, clicking once on the element and then clicking again on the element:

A circular relationship

Adding New Relationships and Elements to the View using

the Magic Connector

Подключение одного элемента к другому в представлении зависит от того, разрешены ли отношения в соответствии со спецификацией ArchiMate. Например, вы не можете связать связь «Назначение» из прикладного компонента с бизнес-субъектом. Если вы не очень хорошо знакомы с правилами, регулирующими отношения в ArchiMate, может быть неприятно найти допустимые отношения между одним элементом и другим. «Magic Connector» решает эту проблему.

Волшебный соединитель в палитре

Magic Connector имеет два использования: во-первых, для создания нового разрешенного соединения между одним элементом и другим, а во-вторых, для создания нового элемента и разрешенного соединения между исходным элементом и вновь созданным элементом.

Чтобы создать соединение между источником и целевым элементом с помощью Magic Connector, выполните следующие действия:

1. Выберите на палитре инструмент Magic Connector.
1. Щелкните исходный элемент в представлении
1. Щелкните целевой элемент в представлении
1. Появится всплывающее меню, показывающее допустимые отношения между двумя элементами. Выберите нужный тип из меню. Можно создать отношение от источника к целевому элементу, а также в обратном направлении от целевого к исходному элементу. Оба варианта направления разделены во всплывающем меню.

Создание соединения с помощью Magic Connector

Чтобы создать новый элемент и соединение за одну операцию с помощью Magic Connector, выполните следующие действия:

1. Выберите на палитре инструмент Magic Connector.
1. Щелкните исходный элемент
1. Щелкните пустую область холста представления или фигуру группы.
1. Появится каскадное всплывающее меню, показывающее все допустимые элементы и отношения между ними. Выберите нужный элемент и подключение из меню

В следующем примере новый элемент Business Role будет создан вместе с новым отношением Assignment, соединяющимся с исходным выбранным элементом Business Actor.

Использование Magic Connector для создания нового элемента и соединения

Если вы удерживаете клавишу Ctrl (или клавишу Command на Mac) одновременно с нажатием на пустую область холста, то сначала будут показаны элементы, а затем соединения во всплывающих меню (это поведение можно изменить в Предпочтения):

Использование Magic Connector для создания нового элемента и соединения при нажатии клавиши Ctrl / Command

Добавление элементов и взаимосвязей из дерева модели в

Вид

Существующие элементы и связи могут быть добавлены к виду, перетаскивая их из дерева модели на вид.

Перетаскивание отношения в представление также добавляет его исходный и целевой элементы в представление, если они еще не присутствуют в представлении. Для любых существующих элементов в представлении автоматически добавляются все их соединения с удаленными элементами.

    When you drag and drop elements from the Model Tree to a View any
    associated relationships are also added to the view as connections. There
    may be times when you do not want this to happen, you may simply wish to
    drag another instance of an element onto the View, for example. In order to
    do this, on Windows and Linux hold the Ctrl key down, or on Mac hold the Alt
    key down when dragging and dropping.

Такой способ работы означает, что вы можете рассматривать дерево модели как репозиторий элементов и отношений для модели, которые можно добавить в любой вид внутри той же модели. Один и тот же элемент можно добавить в представление более одного раза.

    Important! - A model element or relationship can appear multiple times in
    the same or different Views. You can set its visual appearance individually
    for each occurrence.

Добавление группы

Элементы могут быть сгруппированы в представлении с использованием типа контейнера «Группа». Обратите внимание, что это не то же самое, что группирующий элемент ArchiMate, и что он не имеет семантического значения, кроме визуального набора элементов.

Группу можно добавить из палитры просмотра:

Запись групповой палитры

В следующем примере показаны элементы, сгруппированные вместе с использованием элемента Group для обозначения различных слоев модели:

Пример групп

Имя группы, шрифт и цвет заливки можно редактировать в окне свойств.

Двойной щелчок по группе открывает окно свойств, щелчок по текстовому полю группы позволяет вам напрямую редактировать текст группы.

Добавление примечания

Заметки могут быть добавлены в представление для визуальных аннотаций. Заметка не имеет семантического значения на языке ArchiMate.

Примечание можно добавить из палитры просмотра:

Запись палитры нот

В следующем примере показаны элементы, помеченные примечанием:

Использование заметки в представлении

Текст, шрифт и цвет заливки заметки можно редактировать в окне свойств.

Двойной щелчок по примечанию открывает окно свойств, щелчок по выбранному примечанию позволяет напрямую редактировать текст примечания.

Добавление связи с нотами

Вы можете провести соединительную линию от и к примечанию, используя инструмент «Линия соединения примечаний» на палитре. Он не имеет семантического значения, как другие типы отношений ArchiMate. Двойной щелчок по Note Connection открывает окно свойств.

Добавление перекрестка

Элемент Junction можно добавить из палитры View в разделе палитры Relations:

Запись Junction в палитре

Соединение используется в ряде ситуаций для соединения однотипных отношений. Соединение может иметь несколько входящих отношений и одно исходящее отношение, одно входящее отношение и несколько исходящих отношений или несколько входящих и исходящих отношений (последнее можно рассматривать как сокращение двух последующих соединений).

Есть два типа стыков - «И» и «Или». Тип перекрестка можно задать в окне свойств:

Установка типа перекрестка

Соединения появятся в дереве модели в папке «Другое». Их также можно добавить непосредственно в дерево модели, щелкнув правой кнопкой мыши папку «Другое» и выбрав пункт меню «Новый».

Пример соединения типа "Или"

    Note that Archi does not currently enforce the full ArchiMate rules when
    connecting junctions. You should ensure that only relationships of the same

    type are used to connect concepts and junctions. You can check for
    consistency by using the Validator.

Добавление ссылки на другое представление

Ссылка на представление действует как ссылка на другое представление внутри представления. Это ярлык, который при двойном щелчке открывает связанный вид.

Чтобы добавить ссылку на представление, перетащите узел представления из модели дерева на холст целевого представления. Обратите внимание, что вы не можете ссылаться на одно и то же представление из самого себя. На следующем снимке экрана показано, как пользователь создал представление «Карта» со ссылками на все остальные виды в модели:

Добавление ссылок на представления для создания представления «Карта»

Шрифт и цвет заливки ссылочного рисунка вида можно установить в окне свойств.

Соединение Точки изгиба

Линия соединения (взаимосвязь) может иметь любое количество точек изгиба, так что соединение может быть проложено так, чтобы образовывать изгибы и отклонения на схеме.

Чтобы добавить точку изгиба к соединению, сначала выберите соединение. В середине соединения появится точка изгиба или точка:

Соединение точки изгиба "ручка"

Перетащите маркер точки изгиба в нужном направлении. Обратите внимание, что при перетаскивании ручки к соединению добавляются две новые ручки точки изгиба:

Появляются "ручки" точек изгиба соединения

Вы можете продолжать выбирать и перетаскивать эти ручки для создания новых точек изгиба. По мере создания каждой новой точки изгиба по обе стороны от выбранной ручки будут появляться две новые ручки.

Чтобы удалить точку изгиба, выберите ручку точки изгиба и перетащите ее так, чтобы линия соединения стала прямой. Как только соединительная линия будет выпрямлена, точка изгиба исчезнет.

Точки изгиба привязываются к сетке, если в меню «Вид» включен параметр «Привязать к сетке». Если вам нужен более точный контроль над размещением точки изгиба, вы можете обойти это, удерживая клавишу Alt в Windows, Alt / Shift в Linux или клавишу Ctrl на Mac.

Примечание. Точки изгиба не могут быть добавлены к соединениям, если Тип маршрутизатора соединений для обзора установлен на «Манхэттен». Подробнее см. Здесь.

Установка свойств соединения

Свойства соединения (отношения) можно редактировать, выбрав соединение в представлении и открыв окно свойств. Дополнительную информацию см. В разделе «Свойства внешнего вида соединения отношения».

Текст может быть добавлен к соединению (на вкладке «Основные») и отображаться в одном из трех положений, а также может быть установлена ​​толщина самой линии, а также шрифт и цвет текста. На следующем снимке экрана показано соединение со средней шириной линии и текстом, отображаемым в позиции «Target» синим курсивом и фиолетовым цветом линии:

Установка текста, положения, ширины линии, шрифта, шрифта и цвета линии соединения

Установка типа маршрутизатора подключения для просмотра

По умолчанию соединения рисуются прямыми линиями от объекта к объекту. К соединению можно добавить точки изгиба, как описано здесь. Однако можно установить общий тип маршрутизатора подключения, чтобы подключения проходили вокруг объектов или отображались ортогонально.

Тип маршрутизатора подключения можно установить либо в главном меню «Вид-> Маршрутизатор подключения», либо щелкнув правой кнопкой мыши на представлении, либо на вкладке «Внешний вид» в окне свойств, когда выбран холст просмотра.

    Apart from the view specific settings, the global setting Use orthogonal
    connection anchors from the Connection Preferences tab can be used to
    change the way connections are drawn.

Доступны следующие типы маршрутизаторов:

Руководство

Соединения нарисованы прямыми линиями. Точки изгиба могут быть добавлены пользователем.

Ручной маршрутизатор

Манхэттен

Соединения проложены ортогонально. Точки изгиба не могут быть добавлены пользователем.

Манхэттенский маршрутизатор

Элементы контейнера и отношения вложенных элементов

Each graphical element (except for notes and junctions) can act as a container element for other elements. Dragging and dropping an element inside of another element means that it becomes a child of the parent element. This is useful to represent containment type relationships such as Composition, Aggregation, and Association or for convenient grouping.

In the following screenshot the elements "Register", "Accept", "Valuate" and "Pay" are child elements of the parent "Handle Claim Process" element:

Child elements contained by a parent element

While dragging elements into or over other elements a visual cue is provided to indicate that the dragged element will be moved into the parent (container) element. This is a blue highlight around the target element as the element is dragged over it:

A Child Element being Dragged into a Container Element. The Container highlighted in blue

Creating, Showing and Hiding Relationships between

Nested Parent/Child Elements

The ArchiMate specification states that some relationships may also be expressed by nesting the model elements. That is to say, an explicit connection need not be drawn between the parent and child elements but that it may be represented as a container nesting of elements.

Archi supports this convention with Automatic Relationship Management (ARM). This system ensures that relationships are automatically created and hidden between qualifying parent/child elements. The system can be configured to suit the user's needs. See Preferences to configure the ARM.

The best way to explain the Automatic Relationship Management system (ARM) is by an example.

Example - Nested sub-processes in a Composite relationship

Suppose the user has a Business Process element named "Handle Claim Process" that will act as a container element ("parent") for four sub-processes, "Register", "Accept", "Valuate" and "Pay". The relationship between the parent process and the sub- processes would normally be expressed as four Composition relationships. These can be drawn conventionally using connecting lines as follows:

Composition relationship between parent and child processes

However, this is visually not as clear as if the sub-processes were placed inside of the container parent process.

We can solve this problem by enabling the ARM system in Preferences. This ensures that when the sub-processes are placed in the parent element the connections are hidden in the View, but are still present in the actual semantic model. Dragging the child elements in and out of the parent element hides and shows the explicit relationships. The hidden connections are "implicit" connections.

The Connections now hidden from the View

Adding new elements to a parent element

Adding new elements to a parent element in a View from the Palette or dragging and dropping from the Model Tree results in a dialog box asking if a new relationship should be created between the parent and child elements:

Dialog to create a new nested relationship

Note that the dialog will only display valid relationships between the parent and child elements, and only those that are specified in Preferences. Valid relations between the child and parent elements can also be selected. These are shown as "(reverse)".

If you do not wish to create a new relationship, select "None".

Moving existing elements to a parent element

If more than one element is moved (drag and drop operation) to a parent element in a View or is dragged and dropped from the Model Tree onto a parent element, and there are no existing preferred relationships between the parent and the child elements then a dialog box is displayed offering to create new relationships between the parent element and the child elements. You can choose a different type of relationship for each child element:

Dialog for creating more than one relationship

If you do not wish to create a new relationship for an element, select "(none)" from the drop-down combo box. To select the same type of relationship in the drop-down combo- box, hold down the Ctrl / Command key and select.

Setting the Order of Overlapping Elements

Overlapping elements in a View can be brought to the front or back, or brought forward or sent back. This is also known as the "Z" order. This is achieved by selecting the element in a View and right-clicking to invoke the "Order" menu items. These same menu items are also available from the main "View" menu.

Changing the order of overlapping elements

Selecting Elements in a View

Diagram elements and connections may be selected in the view by clicking on them with the selection tool or the marquee tool. For more information about these tools see Palette Selection Tools.

Copying and Pasting Elements in a View

Diagram elements may be cut, copied and pasted in Views. There are, however, certain constraints on how this works:

    - If an element is pasted into a View from the same model where the element
    already exists in that View then a new model element and a new diagram
    element are created for the View. The new element is a copy of the original. Any
    connections are also newly created as copies.
    - If an element is pasted in a View from the same model where the element does
    not already exist then a new diagram element is created for the View and the
    original model element is referenced. This is equivalent to dragging the element
    from the Model Tree into the View. Any connections are also referenced.

If an element is pasted into a View from a different model then a new model element and a new diagram element are created for the View. The new element is a copy of the original. Any connections are also newly created as copies.

If you choose the "Paste Special" menu option, instead of "Paste" then you can change this behaviour such that references to copied elements are created rather than new elements. You can set the behaviour for this feature in Preferences.

    If you copy some diagram elements and then click on the View before
    pasting, the copied elements will be pasted at the point where you clicked.

Copy As Image to Clipboard

A View (diagram) can be copied as an image to the system clipboard. This is available from the "Copy As Image To Clipboard" menu command from the main "Edit" menu or by right-clicking on a View and selecting the menu item from the contextual menu. This menu command is only available if a View is open and selected. The shortcut key combination is Ctrl-Shift-C (Command key on Mac). Once the View is copied to the system clipboard it can be pasted into other applications such as word processing and drawing tools.

Deleting Elements and Relationships (Connections) in a

View

Selected elements and/or connections in a View can be deleted from the View by choosing the "Delete from View" menu item from the main "Edit" menu, from the main toolbar or from the right-click menu. Note - this action deletes those elements from the View not from the model. To delete the element completely you have to delete it in the Model Tree or select "Delete from Model".

Select in Model Tree

This menu item is available when right-clicking an element or relationship in a View. It will select the corresponding model element in the Model Tree.

Delete from Model

Этот пункт меню доступен при щелчке правой кнопкой мыши по элементу или взаимосвязи в представлении. Выбранные элементы и / или отношения затем удаляются из самой модели и любых представлений, которые ссылаются на эти элементы. Это эквивалент выбора элементов в дереве модели и выбора «Удалить».

Инструменты выравнивания, направляющие и сетка

Чтобы облегчить рисование привлекательных диаграмм, предусмотрены различные инструменты для выравнивания. Они доступны из главного пункта меню «Вид-> Положение», на главной панели инструментов или щелчком правой кнопкой мыши в области холста диаграммы для выбора пунктов меню «Положение». Это следующие:

Увеличение / уменьшение / фактический размер:

    Zoom in and out of the diagram. This is also available on the
    toolbar as a combo box. You can also Zoom in and out by holding
    the Ctrl key and scrolling the mouse wheel.

Привязка к сетке: привязывает элементы к сетке независимо от того, видна она или нет. (Интервал сетки можно установить в настройках.)

Видимая сетка: переключает видимость сетки. (Интервал сетки можно установить в настройках.)

Привязка к направляющим выравнивания:

    These are blue alignment guides (lines) that appear when
    elements are dragged in a diagram. They assist in lining the edges
    and centres of elements.

Выровнять по левому краю: при выборе двух или более элементов выравнивание по левому краю основного выделения.

Выровнять по центру: (^) Если выбраны два или более элемента, выровняйте их по центру по горизонтали относительно основного выделения. Выровнять по правому краю: если выделены два или более элемента, выравнивание по правому краю основного выделения. Выровнять по верхнему краю: если выбраны два или более элемента, выровняйте их по верхнему краю основного выделения. Выровнять по центру: если выбраны два или более элемента, выровняйте их по центру по вертикали относительно основного выделения. Выровнять по нижнему краю: если выделены два или более элемента, выравнивание по нижнему краю основного выделения. Соответствие ширине: (^) Если выбраны два или более элемента, ширина элементов соответствует ширине основного выбора. Соответствие высоте: если выбраны два или более элемента, высота элементов соответствует высоте основного выбора. Размер по умолчанию: установите для выбранного элемента размер по умолчанию.

Для получения информации о первичном выборе см. Инструменты выбора палитры.

Отображение просмотра в полноэкранном режиме

В Windows и Linux представление можно отображать и редактировать в полноэкранном режиме (это недоступно в версии Archi для Mac OS X, так как OS X имеет собственную поддержку полноэкранного режима). Это может быть полезно для максимального увеличения просмотра для презентационных целей. Для этого выберите «Просмотр» и нажмите клавишу F11 или выберите пункт «Во весь экран» в главном меню «Просмотр». Вид будет увеличен:

Просмотр в полноэкранном режиме

Окно плавающей палитры можно закрыть с помощью клавиши Escape или кнопки закрытия окна. Щелчок правой кнопкой мыши на Просмотр в полноэкранном режиме вызывает контекстное меню, в котором может отображаться палитра, если она в данный момент не видна.

Экспорт в виде изображения

Вид (диаграмму) можно экспортировать как файл изображения на диск. Это доступно с помощью команды меню «Экспортировать представление как изображение ...» в главном меню «Файл-> Экспорт» или щелчком правой кнопкой мыши по представлению и выбором пункта меню из контекстного меню. Эта команда меню доступна только в том случае, если вид открыт и выбран.

Доступные форматы: BMP, JPG, PNG, PDF и SVG. Первые три формата можно экспортировать с масштабированием от 25% до 400%. Формат SVG имеет больше возможностей, включая встраивание информации о шрифте и настройку границ viewBox для разных масштабов.

Экспорт представления как изображения

# 13 Точки обзора

В спецификации ArchiMate указано, что «точки обзора - это средство для сосредоточения внимания на определенных аспектах и ​​уровнях архитектуры. Эти аспекты и уровни определяются интересами заинтересованной стороны, с которой происходит общение. Что должно и не должно быть видимым с определенной точки зрения. поэтому полностью зависит от аргументации в отношении озабоченности заинтересованной стороны ".

На практике точка зрения - это подмножество элементов и отношений, нацеленных на заинтересованную сторону. Archi позволяет вам указать следующие точки обзора:

Поддерживаемые точки обзора

When creating a new View in Archi, the default Viewpoint is set to "None", meaning that all concepts can be added to the View. Setting a Viewpoint on a View means that a sub- set of elements is available to place on the View. Some other ArchiMate authoring tools require you to specify the Viewpoint in advance when creating the View. Unfortunately, this means that you cannot change your mind should you wish to later change the Viewpoint in the View. Archi, however, implements Dynamic Viewpoints so that you can change the Viewpoint at any time and those elements that are not permitted for that Viewpoint are "ghosted" out. Dynamic Viewpoints allow you to change your mind. You don't have to decide up-front what the Viewpoint will be. You can experiment with different Viewpoints for the same View. And if you decide to keep the Viewpoint, you can simply remove any disallowed elements from the View.

Setting the Viewpoint

To set the Viewpoint for a View, open the View in the View editor and select the required Viewpoint from the main "View->Viewpoint" menu, or by right-clicking on the View's drawing area and selecting it from the context menu. You can also change the Viewpoint from the View's Properties window.

In the following example we start with a View that has the default "None" Viewpoint:

A View with the "None" Viewpoint

Notice that all elements from all the ArchiMate layers (Business, Application, and Technology) are displayed. Also, the Palette has all elements available.

If we now change the Viewpoint to "Infrastructure" then any elements that do not belong in this Viewpoint are "ghosted" out in the View. Notice, also, that only the elements permitted for the current Viewpoint are available in the Palette, whilst the others are not available:

The same View with the "Technology Usage" Viewpoint

If we look at the elements in the Model Tree we can see that non-permitted elements for the Viewpoint are also greyed out:

Elements not permitted for the Viewpoint are greyed out

If we choose to, we can drag and drop any element from the Model Tree to the View but the resulting element in the View will be greyed out. This means that we can work with the Viewpoint any way we want to but we are reminded at all times of what should and shouldn't be added to the Viewpoint.

If you are unsure of the constraints for a Viewpoint select it then open the Hints Window. A full explanation is available for the Viewpoint:

A Hint for a Viewpoint

# 14 The Properties Window

The Properties Window allows you to edit the properties for selected objects in the Model Tree or selected figures or connections in a View. Some properties (for example, the name) are shared between a concept in the Model Tree and its counterpart in a View. Some properties are only relevant for an object in a View (fill colour and font, for example).

To edit the Properties for selected objects in the Model Tree or in a View, select the object(s) and open the Properties Window either by double-clicking the tree node or View object, or from the main "Window" menu or main toolbar.

If selected, the local menu option in the drop-down menu, "Single Column Layout", will show some controls in the Appearance tab in a single column.

    Note - some properties are only available when the object is selected in
    a View (for example, fill colour or line width).

## 15 Model Properties

Selecting the top level node for a model in the Model Tree means that you can edit or view the following properties in the Properties Window.

The Main Tab

Editing the "Main" Properties for an ArchiMate model

Name: The name of the ArchiMate model

File: The file name of the model (read-only)

Purpose: A space to enter a description of the purpose of the model

    In the "Purpose" text control, URLs that start with "http://" "https://" or
    "ftp://" will show as a hyperlink. Pressing the Ctrl / Command key will change
    the cursor to a "hand" cursor and you can open the link in a Browser.

The Properties Tab

For more information about creating and managing User Properties see User Properties.

Element Properties

Selecting a model element in the Model Tree or in a View means that you can edit or view the following properties in the Properties Window.

The Main Tab

Editing the "Main" Properties for an ArchiMate Element

Name: (^) The name of the ArchiMate element Documentation: A space to enter some user documentation relating to the ArchiMate element In the "Documentation" text control, URLs that start with "http://" "https://" or "ftp://" will show as a hyperlink. Pressing the Ctrl / Command key will change the cursor to a "hand" cursor and you can open the link in a Browser. The Junction connector has an additional property for type:

The Junction Type property

Type: Can be set to "And" or "Or". Setting this also changes the element's icon.

The Properties Tab

For more information about creating and managing User Properties see User Properties.

The Analysis Tab

Viewing the "Analysis" for an ArchiMate Element

Used in Views:

    A table showing the Views (if any) where the selected element is used
    (displayed in a diagram). Double-clicking on an entry in the table will
    open the View and select the element in the diagram.

Model Relations:

    A table showing the relationships (if any) to and from the selected
    element in the model. Double-clicking on an entry in the table will select
    the relationship in the Model Tree window if it is open.

Element Appearance Properties

Selecting an element in a View means that you can edit or view additional visual properties in the Properties Window. Different visual settings can be applied to an element for each separate occurrence in a View. For example, the element "Application Service" may be coloured blue in one View, and grey in another View.

The Appearance Tab

Editing the "Appearance" Properties for an ArchiMate Element in a View

This tab is only available when an element is selected in a View.

Fill colour: Sets the fill colour for the selected element. The "Default" button sets the fill colour to the default setting.

Line colour: Sets the colour of the line used to draw the selected element. The "Default" button sets the line colour to the default setting. If this is disabled it is because line colours are derived from the element's fill colour, as set in Preferences.

Градиент: (^) Устанавливает направление, используемое для рисования градиентной заливки выбранного элемента. Настройки: «Нет», «Сверху», «Слева», «Справа» и «Снизу». Примечание - градиенты не будут отображаться, когда диаграмма экспортируется в формат изображения SVG. Выравнивание текста: выравнивание текста в выбранном элементе по левому краю, по центру или Справа. Положение текста: выравнивание текста в выбранном элементе по верхнему, среднему или нижнему краю. Шрифт: установка шрифта, используемого для текста в выбранном элементе. Кнопка «По умолчанию» устанавливает для шрифта значение по умолчанию, установленное в настройках. Цвет шрифта: устанавливает цвет шрифта, используемого для текста в выбранном элементе. Кнопка «По умолчанию» устанавливает цвет шрифта на настройку по умолчанию. Непрозрачность заливки: устанавливает непрозрачность заливки рисунка. Диапазон от 0 до 255. Контур Непрозрачность: Установите прозрачность контура фигуры. Диапазон от 0 до 255.

Вкладка Label

Добавление выражения метки для отображения в представлении

Эта вкладка доступна только в том случае, если элемент выбран в представлении.

По умолчанию имя элемента будет отображаться в любом представлении, в котором оно появляется. Используя выражение метки для каждого экземпляра представления, вы можете выбрать, что будет отображаться для элемента в представлении. Например, вы можете захотеть отобразить имя элемента и его тип. Или вы можете захотеть отобразить значение одного или нескольких его свойств.

Полный список типов выражений см. В Archi Wiki.

Вкладка Figure

Настройка свойств «Рисунок» для устройства

Эта вкладка доступна только в том случае, если элемент выбран в виде и только для определенных фигур.

Некоторые элементы могут быть представлены альтернативными фигурами. Эти:

    - Application Component
    - Application Event
    - Application Interface

    - Application Process
    - Application Service
    - Business Event
    - Business Interface
    - Business Process
    - Business Service
    - Constraint
    - Device
    - Grouping
    - Implementation Event
    - Node
    - Requirement
    - Technology Event
    - Technology Interface
    - Technology Process
    - Technology Service
    - Value Stream

Фигура по умолчанию для использования при создании новых элементов может быть установлена ​​в настройках.

Свойства отношений

Выбор отношения модели в дереве модели или в виде означает, что вы можете редактировать или просматривать следующие свойства в окне свойств.

Основная вкладка

Редактирование «основных» свойств отношения ArchiMate

Имя: название отношения. Если предоставлено, оно будет отображаться рядом с подключением в представлении.

Документация: (^) Пробел для ввода некоторой пользовательской документации, относящейся к взаимоотношениям.

    In the "Documentation" text control, URLs that start with "http://" "https://"
    or "ftp://" will show as a hyperlink. Pressing the Ctrl / Command key will
    change the cursor to a "hand" cursor and you can open the link in a Browser.

Тип отношения Ассоциация имеет дополнительное свойство:

Направленный: можно выбрать направленный или ненаправленный. Установка этого также изменяет стрелку соединения.

Тип отношения доступа имеет дополнительное свойство:

Тип доступа:

    Can be set to "Access", "Read", "Write" or "Read/Write". Setting this also
    changes the connection's arrow-heads.

Тип отношения "Влияние" имеет дополнительное свойство:

Strength: Can be set to an appropriate value such as "+", "++", "+++", "-", "--", "---".

The Properties Tab

For more information about creating and managing User Properties see User Properties.

The Analysis Tab

Viewing the "Analysis" Properties for an ArchiMate Relationship

Used in Views:

    A table showing the Views (if any) where the selected relationship is used
    (displayed in a diagram). Double-clicking on an entry in the table will open
    the View and select the relationship (connection) in the diagram.

Model Relations:

    A table showing the relationships (if any) to and from the selected
    relationship in the model. Double-clicking on an entry in the table will
    select the relationship in the Model Tree window if it is open. Note - if the
    relationship has no incoming or outgoing relationships, the table will be
    empty.

Relationship Connection Appearance Properties

Selecting a relationship in a View means that you can edit or view additional visual properties in the Properties Window. Different visual settings can be applied to a relationship for each separate occurrence in a View. For example, the relationship "Used By" may be coloured black in one View, and blue in another View.

The Appearance Tab

Editing the "Appearance" Properties for a Relationship in a View

This tab is only available when a relationship is selected in a View.

Show Label:

    If selected will show the label if the connection's text is set.
    

Text Position:

    Specifies the position of the text that will appear next to the line on the
    View. Options are "Source", "Middle" and "Target".

Line Width: Sets the width of the connection line. Options are "Normal", "Medium" and "Heavy".

Line colour:

    Sets the colour of the connection line. The "Default" button sets the line
    colour to the default setting.

Font: Sets the font used for the text in the selected connection. The "Default" button sets the font to the default setting as set in Preferences.

Font Sets the colour of the font used for the text in the selected connection. The

colour: "Default" button sets the fill colour to the default setting.

The Label Tab

Adding a Label Expression to display in the View

This tab is only available when a relationship is selected in a View.

По умолчанию имя отношения будет отображаться в любом представлении, в котором оно появляется. Используя выражение метки для каждого экземпляра представления, вы можете выбрать, что будет отображаться для отношения в представлении. Например, вы можете захотеть отобразить название отношения и его тип. Или вы можете захотеть отобразить значение одного или нескольких его свойств.

Полный список типов выражений см. В Archi Wiki.

Просмотр свойств

Выбор вида в дереве модели или на виде означает, что вы можете редактировать или просматривать следующие свойства в окне свойств.

Основная вкладка

Редактирование «основных» свойств представления

Точка обзора: выберите точку обзора для обзора. Для получения дополнительной информации см. Точки обзора.

Имя: имя представления.

Документация: пространство для ввода некоторой пользовательской документации, относящейся к представлению.

    In the "Documentation" text control, URLs that start with "http://" "https://"
    or "ftp://" will show as a hyperlink. Pressing the Ctrl / Command key will
    change the cursor to a "hand" cursor and you can open the link in a Browser.

Вкладка "Свойства"

Для получения дополнительной информации о создании и управлении Свойствами пользователя см. Свойства пользователя.

Вкладка "Внешний вид"

Редактирование свойств «Внешний вид» для вида

Маршрутизатор подключения:

    Specifies the type of connection router for the whole View. Options
    are:

    Manual - Straight line
    Manhattan - Routes using an orthogonal connector.

    For more information see Setting the Connection Router Type for
    a View

Просмотр справочных свойств

Выбор ссылки на представление в представлении означает, что вы можете редактировать или просматривать следующие свойства в окне свойств.

Основная вкладка

Редактирование «основных» свойств для ссылки на представление

Имя: имя представления.

Вкладка "Внешний вид"

Редактирование свойств «Внешний вид» для ссылки на вид

Цвет заливки: устанавливает цвет заливки для выбранного объекта. Кнопка «По умолчанию» устанавливает для цвета заливки значение по умолчанию.

Цвет линии: устанавливает цвет линии, используемой для рисования выбранного объекта. Кнопка «По умолчанию» устанавливает для цвета линии значение по умолчанию. Если это отключено, это связано с тем, что цвета линий являются производными от цвета заливки объекта, установленного в настройках.

Градиент: задает направление, используемое для рисования градиентной заливки выбранного элемента. Настройки: «Нет», «Сверху», «Слева», «Справа» и «Снизу». Примечание - градиенты не отображаются, когда диаграмма экспортируется в формат изображения SVG.

Выравнивание текста:

    Align text in the selected object to Left, Centred or Right.
    

Положение текста:

    Align text in the selected object to Top, Middle or Bottom.
    

Шрифт: устанавливает шрифт, используемый для текста в выбранном объекте. Кнопка «По умолчанию» устанавливает для шрифта значение по умолчанию, установленное в настройках.

Цвет шрифта: устанавливает цвет шрифта, используемого для текста в выбранном объекте. Кнопка «По умолчанию» устанавливает для цвета шрифта значение по умолчанию.

Непрозрачность заливки: установите непрозрачность заливки фигуры. Диапазон от 0 до 255.

Непрозрачность контура:

    Set the outline opacity of the figure. Range from 0-255.
    

Вкладка Label

По умолчанию имя ссылки на представление будет отображаться в любом представлении, в котором оно отображается. Используя выражение метки для каждого экземпляра представления, вы можете выбрать, что будет отображаться для ссылки на представление в представлении. Например, вы можете захотеть отобразить имя ссылки на представление и значение одного или нескольких его свойств.

Полный список типов выражений см. В Archi Wiki.

Свойства папки

Выбор созданной пользователем папки в дереве модели означает, что вы можете редактировать или просматривать следующие свойства в окне свойств.

Основная вкладка

Редактирование «основных» свойств папки

Имя: имя папки - его можно редактировать только для подпапок, созданных пользователем.

Документация: пространство для ввода некоторой пользовательской документации, относящейся к папке.

    In the "Documentation" text control, URLs that start with "http://" "https://"
    or "ftp://" will show as a hyperlink. Pressing the Ctrl / Command key will
    change the cursor to a "hand" cursor and you can open the link in a Browser.

Вкладка "Свойства"

Для получения дополнительной информации о создании и управлении Свойствами пользователя см. Свойства пользователя.

Вкладка Label

Здесь вы можете установить, как метки дочерних объектов в папке будут отображаться в дереве модели. По умолчанию отображается имя объекта. Используя выражение метки, вы можете выбрать, что будет отображаться для элемента в дереве модели. Например, вы можете захотеть отобразить имя элемента и его тип. Или вы можете захотеть отобразить значение одного или нескольких его свойств. Создавая выражение метки для папки, оно влияет только на ее дочерние объекты, но не на саму папку.

Полный список типов выражений см. В Archi Wiki.

Свойства заметки

Выбор примечания в представлении означает, что вы можете редактировать или просматривать следующие свойства в окне «Свойства».

Основная вкладка

Редактирование «основных» свойств заметки

Контент: текстовое содержание заметки.

Вкладка "Свойства"

Для получения дополнительной информации о создании и управлении Свойствами пользователя см. Свойства пользователя.

Вкладка "Внешний вид"

Редактирование свойств «Внешний вид» заметки

Цвет заливки: устанавливает цвет заливки для выбранного объекта. Кнопка «По умолчанию» устанавливает для цвета заливки значение по умолчанию.

Цвет линии: устанавливает цвет линии, используемой для рисования выбранного объекта. Кнопка «По умолчанию» устанавливает для цвета линии значение по умолчанию. Если это отключено, это связано с тем, что цвета линий являются производными от цвета заливки объекта, установленного в настройках.

Градиент: задает направление, используемое для рисования градиентной заливки выбранного элемента. Настройки: «Нет», «Сверху», «Слева», «Справа» и «Снизу». Примечание - градиенты не отображаются, когда диаграмма экспортируется в формат изображения SVG.

Граница: устанавливает тип границы. Может иметь значение «Собачье ухо», «Прямоугольник» или «Нет».

Выравнивание текста:

    Align text in the selected object to Left, Centred or Right.
    

Положение текста:

    Align text in the selected object to Top, Middle or Bottom.
    

Шрифт: устанавливает шрифт, используемый для текста в выбранном объекте. Кнопка «По умолчанию» устанавливает для шрифта значение по умолчанию, установленное в настройках.

Цвет шрифта: устанавливает цвет шрифта, используемого для текста в выбранном объекте. Кнопка «По умолчанию» устанавливает для цвета шрифта значение по умолчанию.

Непрозрачность заливки: установите непрозрачность заливки фигуры. Диапазон от 0 до 255.

Непрозрачность контура:

    Set the outline opacity of the figure. Range from 0-255.
    

Вкладка Label

По умолчанию текстовое содержимое примечания будет отображаться в том представлении, в котором оно отображается. Используя выражение метки, вы можете выбрать, что будет отображаться для примечания. Например, вы можете захотеть отобразить содержимое заметки и одно или несколько ее свойств.

Полный список типов выражений см. В Archi Wiki.

Свойства подключения

Выбор соединения в представлении означает, что вы можете редактировать или просматривать его свойства в окне свойств.

Основная вкладка

Редактирование «основных» свойств соединения

Имя: имя подключения. Если предоставлено, оно появится рядом с подключением в обзоре.

Документация: пространство для ввода некоторой пользовательской документации, относящейся к Соединению.

Вкладка "Свойства"

Для получения дополнительной информации о создании и управлении Свойствами пользователя см. Свойства пользователя.

Вкладка "Внешний вид"

Редактирование свойств «Внешний вид» соединения на виде

Показать этикетку:

    If selected will show the label if the connection's text is set.
    

Положение текста:

    Sets the position of the text that will appear next to the line on the View.
    Options are "Source", "Middle" and "Target".

Ширина линии: установка ширины соединительной линии. Возможные варианты: «Нормальный», «Средний» и «Тяжелый».

Цвет линии:

    Sets the colour of the connection line. The "Default" button sets the line
    colour to the default setting.

Стиль линии: задает типы исходной и целевой головки соединительной линии, а также стиль основной линии.

Шрифт: устанавливает шрифт, используемый для текста в выбранном соединении. Кнопка «По умолчанию» устанавливает для шрифта значение по умолчанию, установленное в настройках.

Цвет шрифта:

    Sets the colour of the font used for the text in the selected connection. The
    "Default" button sets the font colour to the default setting.

Вкладка Label

По умолчанию имя подключения будет отображаться в том представлении, в котором оно отображается. Используя выражение метки, вы можете выбрать, что будет отображаться для соединения. Например, вы можете захотеть отобразить имя соединения и одно или несколько его свойств.

Полный список типов выражений см. В Archi Wiki.

Свойства группы

Выбор группы в представлении означает, что вы можете редактировать или просматривать следующие свойства в окне «Свойства».

Основная вкладка

Редактирование «основных» свойств группы

Имя: Название группы.

Документация: место для ввода некоторой пользовательской документации, относящейся к Группе.

Вкладка "Свойства"

Для получения дополнительной информации о создании и управлении Свойствами пользователя см. Свойства пользователя.

Вкладка "Внешний вид"

Редактирование свойств «Внешний вид» для группы

Цвет заливки: устанавливает цвет заливки для группы. Кнопка «По умолчанию» устанавливает для цвета заливки значение по умолчанию.

Цвет линии: устанавливает цвет линии, используемой для рисования группы. Кнопка «По умолчанию» устанавливает для цвета линии значение по умолчанию. Если это отключено, это связано с тем, что цвета линий являются производными от цвета заливки объекта, установленного в настройках.

Gradient: (^) Sets the direction used to draw the gradient fill of the selected element. Settings are "None", "Top", Left", "Right" and "Bottom". Note - gradients will not show when a diagram is exported in SVG image format. Border: Sets the border type. Can be either "Tabbed" or "Rectangle". Text Alignment: Align text in the selected object to Left, Centred or Right. Text Position: Align text in the selected object to Top, Middle or Bottom. Font: Sets the font used for the text in the Group. The "Default" button sets the font to the default setting as set in Preferences. Font colour: (^) Sets the colour of the font used for the text in the Group. The "Default" button sets the font colour to the default setting. Fill Opacity: Set the fill opacity of the figure. Range from 0-255. Outline Opacity: Set the outline opacity of the figure. Range from 0-255. The Label Tab By default, a Group's name will be displayed in the View in which it appears. Using a label expression, you can choose what is displayed for the Group. For example you may wish to display the Group's name and one or more of its properties. For a full list of expression types please refer to the Archi Wiki. User Properties User Properties can be created and managed from the "Properties" tab in the Properties Window. The Properties Tab

User Properties

This tab allows you to add arbitrary User Properties, or attributes, to a concept, model, folder, or view, or object. For example you may wish to add information such as "Cost", "Location", "Duration", "Time", "Link" and so on. Properties are stored as name/value pairs. Properties with the same name may appear more than once in the model or object. Values are entered as free text.

If the value of a Property starts with "http://", "https://", "file://", or "ftp://" it will show in blue to denote a hyperlink and an icon will be displayed in the left column. Double- clicking on the icon will open the link in a Browser.

To Add a New User Property entry:

1. Click on the "New" toolbar button to the right of the Properties table, or select "New" from the right-click menu, or double-click in an empty area on the table
1. Edit the Property's name in the table cell. If there are existing Properties with this name elsewhere in the Model you can select one of these instead from the combo box in the table cell
1. Edit the Property's value in the "Value" cell. If there are existing Properties with this value (for this Property name) used elsewhere in the Model you can select one of these instead from the combo box in the cell editor

To Change an Existing User Property Name to a New or Existing Name:

1. Click on the Property Name cell in the Properties table and type in the new name
1. Если есть существующие свойства, используемые где-то еще в модели, вы можете выбрать одно из них вместо этого в поле со списком в редакторе ячеек.

Чтобы удалить запись свойства:

1. Выберите запись свойства или записи, которые вы хотите удалить
1. Нажмите кнопку «Удалить» на панели инструментов справа от таблицы свойств или выберите «Удалить» из контекстного меню.


    Note: Adding a new Property to an object in the Properties window means
    that it becomes available as a re-usable Property for all objects in the same
    model that have User Properties. Removing a Property in the Properties
    window only removes it from the selected object. If it is used in other objects
    it is still available.

Чтобы изменить порядок записей свойств путем перетаскивания:

1. Выберите запись свойства или записи в таблице свойств, которые вы хотите изменить.
1. Перетащите записи в таблице свойств, чтобы изменить их расположение.

Чтобы отсортировать имена свойств:

1. Щелкните заголовок столбца таблицы "Имя".
1. Имена свойств будут отсортированы в алфавитном порядке.

Чтобы добавить запись свойства гиперссылки:

1. Выберите запись свойства в таблице свойств, которую вы хотите использовать в качестве гиперссылки.
1. Измените значение так, чтобы оно содержало URL-адрес, начинающийся с «http: //», «https: //» или «ftp: //».
1. Дважды щелкните значок в левом столбце, чтобы открыть ссылку в браузере.

Чтобы добавить новые записи свойств с использованием существующих имен свойств:

1. Нажмите кнопку «Создать несколько ...» на панели инструментов справа от таблицы свойств или выберите «Создать несколько ...» из контекстного меню.
1. В диалоговом окне выберите свойства, которые вы хотите добавить.
1. Нажмите ОК, а затем отредактируйте новые значения в таблице свойств.

Для глобального управления и просмотра свойств пользователей:

1. Нажмите кнопку «Управление» на панели инструментов справа от таблицы «Свойства» или выберите «Управление» из контекстного меню.
1. Появится диалоговое окно «Диспетчер свойств», в котором показаны все используемые ключи свойств в модели в целом и количество их использований:
1. Вы можете удалить свойства здесь. Все экземпляры свойства и его объявленные значения будут удалены из всех объектов, которые его используют.
1. Вы можете переименовать свойства, отредактировав имя в столбце «Новое имя». Все вхождения имени свойства будут переименованы во всех объектах, которые его используют.

# 16 Окно навигатора

В окне навигатора отображается концепция выбранной в данный момент модели и все ее связи с другими концепциями. Он используется для отображения и обеспечения навигации между связанными концепциями через их отношения и используется вместе с окном «Дерево модели» и «Представлениями».

Дерево модели действует как «плоский» репозиторий для всех элементов, взаимосвязей и представлений в модели. Представления - это графические конфигурации этих концепций. Однако навигатор может отображать все взаимосвязи концепции на уровне модели независимо от того, как они представлены в представлении.

Чтобы использовать окно навигатора, выберите любой элемент или взаимосвязь в дереве модели или на виде. Дерево навигатора обновится, чтобы отразить текущий выбор. В дереве отображается «корневая» выбранная концепция и все отношения, которые из нее проистекают, а также любые «целевые» концепции из этих отношений:

Окно навигатора

На скриншоте выше пользователь выбрал элемент «CRM-система». Между выбранным элементом и тремя элементами «Служба администрирования клиентов», «Служба страхового приложения» и «CIS» существуют три отношения реализации. На основе этих трех элементов показаны дальнейшие отношения между ними и их целевыми концепциями.

Таким образом, можно «углубиться» в дерево навигатора и перейти от концепции к концепции, следуя ей и ее дочерним отношениям от источника к цели.

Выбранная субконцепция может стать «корневой» концепцией, либо дважды щелкнув по ней в дереве, либо нажав кнопку «Перейти» на панели инструментов окна:

Кнопка "Перейти"

И наоборот, нажатие кнопки «Назад» возвращает вас к ранее выбранной концепции:

Кнопка "Назад"

Кнопка «Домой» возвращает вас к исходной основной концепции корня, которая была выбрана изначально:

Кнопка "Домой"

По умолчанию навигатор показывает отношения, которые текут от исходного к целевому концепту. Это можно изменить в обратном порядке, чтобы показать отношения концепции, которые текут от цели к источнику, нажав кнопку «Показать отношения источника» на панели инструментов окна:

Показать режим отношений с источниками

На приведенном выше снимке экрана элемент «CRM-система» является целью двух отношений «Используется». Таким образом, поток идет от «мэйнфрейма» к «службе файлов требований» к «системе CRM» и от «файлового сервера NAS» к «файловой службе клиента» к «системе CRM».

Выбранный концепт можно закрепить, если требуется, нажав кнопку булавки в окне навигатора:

Кнопка "закрепить"

Также можно перетащить любые выбранные элементы и / или отношения из дерева навигатора в представление точно так же, как перетаскивание из дерева модели в представление (см. Добавление элементов и взаимосвязей из дерева модели в представление )

# 17 Окно визуализатора

Окно Visualiser отображает выбранную концепцию модели и все ее связи с другими концепциями модели в графическом виде. Это графический эквивалент навигатора. Выбор элемента или отношения в дереве модели, навигаторе или в представлении диаграммы обновит выбор в визуализаторе.

Окно визуализатора

Чтобы использовать визуализатор, выберите любой элемент или взаимосвязь в дереве модели, навигаторе или в представлении. Визуализатор обновится, чтобы отразить текущий выбор. Визуализатор выделяет выбранную концепцию и показывает все взаимосвязи и любые связанные элементы. Двойной щелчок по одному из связанных элементов позволяет вам «перейти» к элементу, так что он является центральным центральным понятием, и отображаются все его отношения и связанные понятия. Вы также можете «Перейти к элементу» на панели инструментов в окне «Визуализатор», а также выбрать «Назад», чтобы вернуться к предыдущему элементу. Выберите «Главная» на панели инструментов, чтобы вернуться к первой выбранной концепции.

## 18 Глубина

Визуализатор отобразит связанные концепции выбранной концепции с глубиной по умолчанию в один уровень (непосредственные связи). Чтобы изменить уровень глубины расчета соединений, выберите уровень глубины из раскрывающегося меню в окне визуализатора:

Меню визуализатора глубины

## 19 Фильтр точек обзора

Вы можете отфильтровать отображаемые элементы в визуализаторе из меню «Фильтр точки обзора». Это отобразит только те элементы, которые допустимы в данной точке обзора. Для просмотра всех элементов выберите точку обзора «Нет». Для получения дополнительной информации см. Раздел «Точки обзора».

Элементный фильтр

Вы можете отфильтровать отображаемый тип элемента в визуализаторе из меню «Фильтр элементов». Будет отображен только выбранный тип элемента. Для просмотра всех типов элементов выберите вариант «Все».

Фильтр отношений

Вы можете отфильтровать отображаемые отношения в визуализаторе из меню «Фильтр отношений». Будет отображен только выбранный тип отношений. Чтобы просмотреть все типы отношений, выберите вариант «Все».

Направление

Этот пункт меню позволяет вам установить, будут ли отображаться входящие и исходящие отношения и их связанные элементы. Возможны варианты «Оба», «Входящий» и «Исходящий». «Входящие» показывают все входящие отношения, «Исходящие» - исходящие, а «Оба» - как входящие, так и исходящие отношения. Это похоже на функции в навигаторе.

Опции

В первый раз, когда сфокусированная концепция отображается в окне визуализатора, она размещается с макетом по умолчанию. Если вы хотите изменить макет, вы можете нажать кнопку «Макет» на панели инструментов в окне визуализатора.

Вы можете сохранить содержимое визуализатора как изображение в файл или скопировать изображение в системный буфер обмена из контекстного меню.

# 20 Окно подсказок

В окне «Подсказки» отображается подсказка для выбранного объекта или элемента палитры. Может быть полезно предоставить основную информацию о назначении концепций и точек зрения в модели.

Выбранную подсказку можно закрепить, нажав кнопку булавки в окне подсказок.

Окно подсказок

# 21 Окно Outline

Окно Outline действует как миниатюрное окно просмотра для выбранного вида диаграммы, чтобы облегчить навигацию, если диаграмма слишком велика для того, чтобы поместиться в окне.

Чтобы открыть или закрыть окно Outline, выберите опцию в главном меню «Window» или на главной панели инструментов.

Если редактируемое представление слишком велико, чтобы поместиться в окно приложения, в окне структуры появится панель навигации. Перетаскивание этой панели навигации приведет к прокрутке объектов на холсте для рисования.

Окно Outline

# 22 Инструменты

Следующие функции доступны в главном меню «Инструменты».

# 23 Создать вид из элементов

Вы можете создать новый вид диаграммы из выбранных элементов ArchiMate. Выбранные элементы ArchiMate затем становятся фокусом вновь созданного представления. Любые элементы ArchiMate, которые связаны с выбранными элементами, также добавляются в созданный Просмотр вместе с любыми подключениями.

Эта функция позволяет быстро создать новый вид и точку обзора специально для одного или нескольких связанных элементов ArchiMate.

Чтобы создать новое представление из выбранных элементов:

1. Убедитесь, что вы выбрали один или несколько элементов ArchiMate в дереве моделей или в виде диаграммы.
1. Выберите опцию «Создать представление для ...» из контекстного меню, вызываемого правой кнопкой мыши, или из главного меню «Инструменты».
1. В диалоговом окне выберите целевую точку обзора для созданного обзора. Список доступных точек обзора определяется выбранным элементом (ами) и тем, разрешены ли они в точке обзора. Также обратите внимание, что элементы, связанные с выбранным элементом (ами), которые не разрешены в целевой точке обзора, не будут включены в сгенерированный вид. Если вы хотите включить все связанные элементы в целевое представление или если вы не уверены, выберите точку обзора «Нет». При желании вы можете изменить точку обзора позже.
1. Если хотите, измените имя созданного представления.
1. При желании отметьте «Добавить все доступные подключения». Если этот параметр отмечен, все соединения между элементами добавляются в сгенерированный View. Если этот флажок не установлен, в созданный вид добавляются только те соединения, которые напрямую связаны с выбранным элементом (ами).
1. Нажмите ОК.

Создать диалог просмотра

Будет создано новое представление, содержащее выбранные элементы и их соединения.

# 24 Менеджер по свойствам

Доступ к диспетчеру свойств можно получить из меню «Инструменты», а также из вкладки «Свойства». Дополнительные сведения о диспетчере свойств см. В разделе «Свойства пользователя».

# 25 Валидатор

Валидатор предлагает советы и предупреждения о целостности модели ArchiMate. Он может выделить следующие проблемы:

    - Empty Views (Views without diagram objects)
    - Invalid Relations (possible if importing from another format)
    - Invalid nested elements (visual nesting without a relationship or relationship
    present that does not represent nesting)
    - Unused elements (not referenced in a View)
    - Unused relations (not referenced in a View)
    - Invalid elements in viewpoints (elements that don't belong in a viewpoint)
    - Duplicate element names for the same element type

Окно Валидатора можно открыть из главного меню «Инструменты», из главной панели инструментов или из главного меню «Окно».

Чтобы проверить модель, убедитесь, что модель находится в фокусе, выбрав ее в дереве моделей или выбрав одно из представлений модели. Затем либо выберите «Проверить модель» из меню «Инструменты», либо щелкнув правой кнопкой мыши в дереве моделей, либо в самом окне валидатора.

Валидатор показывает подсказки

Двойной щелчок по проблеме или выбор пункта меню правой кнопкой мыши «Показать объект» в окне валидатора откроют затронутый объект либо в дереве моделей, либо в представлении.

Чтобы показать пояснительную подсказку о проблеме, убедитесь, что окно «Подсказки» открыто, или выберите пункт контекстного меню «Показать подсказку с объяснением».

Как только все проблемы будут исправлены в модели, валидатор сообщит, что все в порядке:

Валидатор доволен

Предпочтения

Каждое из правил проверки можно включить или отключить в настройках.

# 26 Предварительный просмотр HTML-отчета

Предварительный просмотр HTML-отчета позволяет вам просматривать сгенерированный HTML-отчет для текущей выбранной модели на вкладке в самом Archi. Возможность сохранить отчет в формате HTML доступна в меню Файл-> Отчет. Для получения дополнительной информации см. HTML-отчеты.

Предварительный просмотр HTML-отчета

Предварительный просмотр HTML-отчета позволяет вам просматривать сгенерированный HTML-отчет на вкладке в самом Archi.

# 27 Открытие, сохранение и печать

## 28 Открытие существующей модели

Чтобы открыть существующую модель ArchiMate, созданную в Archi, выберите пункт меню «Открыть ...» в главном меню «Файл» или на главной панели инструментов. Если модель уже открыта в Archi, эта команда не действует.

Вы также можете перетащить файл «.archimate» с рабочего стола в окно дерева модели, чтобы открыть его.

The Windows and Mac versions of Archi support opening the application from the desktop by opening files with the ".archimate" file extension.

## 29 Saving a Model

A model can be saved to disk from the "Save" menu item available from the main "File" menu or from the main toolbar. If the model has not been previously saved you will be prompted for a file name.

The "Save As..." menu command allow you to save the model with a different name.

## 30 Closing a Model in the Model Tree

It is possible to have more than one ArchiMate model open at the same time in the Model Tree. You may wish to close one or model so that it does not appear in the Model Tree. This is achieved by right-clicking the model in the Model tree and selecting the "Close Model" menu item or selecting the "Close Model" menu item from the main "File" menu. Closing a model does not delete the model and it may be re-opened in Archi at any time from the "Open" command. If the model has been modified you may be prompted to save it before closing it.

## 31 Printing A View (Diagram)

A View (diagram) can be printed to a connected printer. This is available from the "Print..." menu command in the main "File" menu. This menu command is only available if a View is open.

# 32 Экспорт и импорт модели в формате CSV

## 33 Экспорт модели в CSV

Вы можете экспортировать данные модели в формат CSV (значения, разделенные запятыми). Данные экспортируются в три разных файла - «elements.csv», «Relations.csv» и «properties.csv». Все объекты данных идентифицируются уникальными идентификаторами, так что свойство будет ссылаться на элемент или отношение в других файлах.

Эта опция доступна из пункта меню «Экспорт модели в CSV ...» в главном меню «Файл-> Экспорт». Когда модель выбрана в дереве модели или в представлении, этот пункт меню становится доступным.

Экспорт модели в CSV

Формат поля CSV для элементов - «ID», «Тип», «Имя», «Документация».

Формат поля CSV для отношений - «ID», «Тип», «Имя», «Документация», «Источник», «Цель».

Формат поля CSV для свойств - «ID», «Ключ», «Значение».

## 34 Параметры экспорта

Папка вывода Выберите папку для файлов вывода.

Разделитель Выберите символ разделителя полей CSV - запятую, точку с запятой или табуляцию.

Префикс файла. Укажите необязательный префикс для добавления к именам файлов. Например, «MyModel-» изменит имена файлов на «MyModel-elements.csv», «MyModel-Relations.csv» и «MyModel- properties.csv».

Кодировка файла Выберите кодировку файла для использования - ANSI, UTF-8 или UTF-8 BOM. Некоторые программы предпочитают ту или иную кодировку файлов. Например, MS Excel предпочитает кодировку «UTF-8 BOM», если в файле CSV присутствуют символы Unicode.

Удалять символы новой строки. Если этот флажок установлен, все символы новой строки удаляются из многострочного текста, например из документации.

Совместимость с Excel. Если этот флажок установлен, текст, начинающийся с нуля, или пробел будут заключены в кавычки, чтобы данные правильно импортировались в Excel. Кроме того, любое текстовое поле, которое начинается с символа «=», «+», «-» или «@», будет иметь префикс с пробелом, чтобы Excel не интерпретировал его как формулу.

Импорт данных CSV в модель

Вы также можете импортировать данные CSV в существующую модель. Файлы CSV должны быть в том же формате, что и описанный выше. Идентификаторы элемента и отношения не являются обязательными, но вам необходимо предоставить идентификатор для элемента или отношения, если на него ссылается другое понятие или свойство. Если предоставляется идентификатор, он должен быть уникальным для файла с использованием буквенно-цифровых символов, например - «id1», «8fe456d», «субъект3». Если идентификатор не указан, должно быть пустое поле «». В этом случае при импорте будет сгенерирован идентификатор.

При импорте данных CSV в существующую модель вы можете предоставить только один или все три файла (элементы, отношения, свойства). Обычно вы предоставляете все три файла. Формат файлов следующий:

«xxx-elements.csv» «xxx-Relations.csv» «xxx-properties.csv»

Префикс («xxx») необязателен, но должен быть одинаковым для всех трех файлов, если он используется. Все три имени файла должны совпадать, например: «myname-elements.csv», «myname-Relations.csv» и «myname-properties.csv». По крайней мере, имена файлов должны содержать расширение «.csv», а имена заканчиваться на «элементы», «отношения» или «свойства».

Лучший способ понять требуемый формат - это экспортировать существующую модель в формат CSV и открыть полученные файлы в текстовом редакторе или приложении для работы с электронными таблицами.

При импорте файлов CSV в Archi вы можете выбрать любой из трех файлов CSV в диалоговом окне «Импорт». Если есть соответствующие файлы "* .csv", то эти файлы будут автоматически импортированы одновременно.

Также возможно объединить / обновить импортированные данные CSV в существующую модель. Если концепция модели уже существует, как обозначено ее идентификатором, а запись строки CSV содержит данные, отличные от данных в модели, она обновляется. Например, бизнес-субъект с идентификатором «9240f5bf», именем «BA1» и никакая документация не может быть обновлен с помощью следующей записи строки:

«ID», «Тип», «Имя», «Документация» «9240f5bf», «BusinessActor», «Новое имя», «Дополнительная документация»

You can import just one or two CSV files into an existing model. If you import just an "elements.csv" file then only elements will be imported. If you then import a "relations.csv" file that uses the corresponding concept IDs you can import just the relations. The same is true for the "properties.csv" file.

If you are manually creating CSV files make sure you save them using UTF-8 format to preserve all special characters.

Note - it is currently not possible to import and export View diagram information in CSV format.

# 35 Importing Another Model into the Current Model

It is possible to import and merge another Archi model into the currently selected model. You can then maintain the imported model as a reference model that you can update separately and re-import as required.

Некоторые моменты, которые следует учитывать при импорте другой модели:

    - Model objects are uniqely referenced by their type and identifier. When importing
    a model, these are used to match the imported objects to the target objects.
    - All User Properties for an object are replaced when importing, there is no
    merging at this level.
    - Some changes in the imported model might affect connections in Views if
    relationships are changed or deleted. These are reported in the status dialog
    after import.
    - Existing target objects and folders will not be deleted even if these are deleted
    from the imported model.

## 36 Импорт другой модели Archi

Чтобы импортировать другую модель Archi в текущую выбранную модель, выберите «Импортировать модель Archi в текущую выбранную модель» в главном меню «Файл». Появится следующий диалог:

Импорт другой модели

## 37 Параметры импорта

Обновить существующие объекты и папки. Если этот флажок установлен, все существующие целевые объекты и папки будут обновлены при импорте.

Обновить информацию о модели и папки верхнего уровня. Если этот флажок установлен, то при любых изменениях в узле модели (Имя,

Документация, Свойства) они будут обновлены. Если есть изменения в каких-либо папках верхнего уровня (Документация, Свойства), они также будут обновлены.

Показать диалоговое окно состояния после импорта. Если этот флажок установлен, после импорта модели отображается диалоговое окно состояния. Это будет список того, что было обновлено или изменено.

# 38 Формат файла Open Group Exchange

Стандарт Open Group определяет стандартный формат файла, который поддерживает обмен моделями ArchiMate между инструментами. Объем стандарта ограничен элементами и взаимосвязями модели ArchiMate. В него не входят функции, зависящие от производителя, но рассматриваются способы их реализации. Формат файла обмена содержит основную информацию о модели, в том числе:

    - Objects of all ArchiMate types with basic attributes
    - Relationship details between objects
    - Diagrammatic information (Phase 2)

Формат файла обмена не предназначен в качестве постоянного формата файла для самой модели, это механизм для передачи данных экземпляра от одного инструмента к другому. Данные, содержащиеся в формате файла обмена, предназначены для обработки с помощью инструмента, поддерживающего ArchiMate, что исключает автономный семантический вывод. После того, как данные экземпляра были импортированы в инструмент ArchiMate, этот инструмент, вероятно, сохранит их в собственном проприетарном формате файла.

## 39 Экспорт и настройки

Чтобы экспортировать модель Archi в файл формата Open Exchange, выберите пункт меню «Файл-

> Экспорт-> Модель для открытия файла обмена ... ».

## 40 Опции

Включить организацию папок. Если этот флажок установлен, в экспортируемый файл включается организационная структура папок элементов и отношений модели.

Проверить после экспорта. Если этот флажок установлен, то экспортируемый файл XML проверяется на соответствие файлам схемы XSD в качестве окончательной проверки.

Копировать файл схемы XSD в целевое расположение. Если этот флажок установлен, файлы XSD формата ArchiMate Open Exchange копируются в то же расположение, что и выходной файл.

Код языка Устанавливает двухбуквенный код языка для строковых значений, как определено в ISO 639.

## 41 Добавление метаданных

Вы также можете включить базовые метаданные Dublin Core в файл обмена XML.

Каждую модель можно дополнительно описать с помощью метаданных. Это необязательный набор элементов, которые можно использовать для описания самой модели. Использование метаданных для дальнейшего описания модели может быть полезно для утверждения таких вещей, как издатель, права и использование, авторское право и лицензирование. Набор элементов метаданных Dublin Core состоит из 15 элементов метаданных:

Заголовок Имя, присвоенное ресурсу.

Создатель. Сущность, которая несет основную ответственность за создание ресурса.

Тема (^) Тема ресурса. Описание Аккаунт ресурса. Издатель. Субъект, ответственный за предоставление ресурса. Участник. Субъект, ответственный за внесение вкладов в ресурс. Дата Точка или период времени, связанный с событием в жизненном цикле ресурса. Тип Характер или жанр ресурса. Формат Формат файла, физический носитель или размеры ресурса. Идентификатор. Однозначная ссылка на ресурс в заданном контексте. Источник Связанный ресурс, из которого происходит описанный ресурс. Язык Язык ресурса. Связь Связанный ресурс. Охват Пространственная или временная тема ресурса, пространственная применимость ресурса или юрисдикция, в которой ресурс актуален. Права Информация о правах на ресурс. Если все поля оставлены пустыми, то в экспортируемый XML-файл метаданные не включаются. Импорт из файла Open Exchange XML Чтобы импортировать файл в формате Open Exchange, выберите пункт меню «Файл-> Импорт-> Open Exchange XML Model ...». Выберите и откройте требуемый XML-файл. Это создаст новую модель ArchiMate в дереве моделей.

# 42 Составление отчетов

Archi может создавать два типа отчетов из моделей ArchiMate:

HTML отчеты

Джаспер отчеты

# 43 HTML отчеты

Archi поддерживает веб-функции отчетности посредством создания HTML-страниц, содержащих дерево модели, сводные таблицы объектов модели и представления в модели.

Эта опция доступна из пункта меню «Отчет-> HTML ...» в главном меню «Файл». Когда модель выбрана в дереве модели или в представлении, этот пункт меню становится доступным. Выберите папку для экспорта модели и ее видов.

В выбранной выходной папке создается одна HTML-страница «index.html» вместе с вспомогательными файлами и файлами изображений для представлений в модели.

Сгенерированный HTML-отчет

# 44 Джаспер отчеты

Jasper Reports - самый популярный в мире механизм отчетов Java. Комбинируйте источники данных и создавайте документы с идеальным разрешением, которые можно просматривать, распечатывать или экспортировать в различные форматы документов с помощью этого мощного инструмента создания отчетов. Archi может экспортировать модели в различные форматы с помощью шаблонов отчетов Jasper.

Эта опция доступна из пункта меню «Отчет-> Jasper ...» в главном меню «Файл». Когда модель выбрана в дереве модели или в представлении, этот пункт меню становится доступным. Предоставьте подробные сведения на следующей странице мастера:

Мастер отчетов Jasper, страница 1

Затем на следующей странице мастера выберите шаблон отчета, который вы предпочитаете, а также языковой стандарт, если вы предоставили строки локализованного языка для шаблона отчета:

Мастер отчетов Jasper, страница 2

Настраиваемый отчет

Если вы выбираете шаблон «Настраиваемый отчет» при экспорте, вы можете установить различные свойства для макета отчета, если вы основываете свою модель на шаблоне «Настраиваемый отчет» при создании новой модели. См. «Создание новой модели из шаблона» для получения более подробной информации.

Установив определенные свойства в модели, основанной на шаблоне модели «Настраиваемый отчет», вы можете точно настроить вывод. Когда вы создаете новую модель на основе шаблона модели «Настраиваемый отчет», существует представление под названием « _README_ », в котором перечислены свойства.

Свойства настраиваемого отчета

Шаблоны отчетов пользователей

Если вы хотите создать свои собственные шаблоны отчетов Jasper, вы можете поместить их в папку с именем «jasper-reports» в папке настроек приложения. Вы можете изменить расположение этой папки в настройках. Кроме того, вы можете вручную выбрать файл шаблона («main.jrxml») из комбинированного варианта «Выбрать ...».

Пример структуры папок для настраиваемого отчета:

C: \ Users \ Bagpuss \ Application Data \ Archi \ jasper-reports

------ Мой персонализированный отчетmain.jrxml------style.jrxt------другие файлы...

Для получения дополнительной информации о создании пользовательских отчетов Jasper обратитесь к разделу для разработчиков на веб-сайте Archi.

Вывод

Ниже приводится пример отчета в формате PDF:

Часть сгенерированного отчета Jasper в формате PDF

# 45 Шаблоны

Archi поддерживает использование повторно используемых моделей или шаблонов ArchiMate. Шаблон - это модель, которая была сохранена в архивном файле с расширением «* .architemplate». Дополнительная информация, описывающая шаблон и дополнительные изображения эскизов представлений модели, также содержится в файле шаблона. Шаблоны - удобная отправная точка для создания новых моделей.

## 46 Создание нового шаблона

Чтобы создать новый шаблон, выполните следующие действия:

1. Создайте новую модель Archi или откройте существующую модель, которую вы создали, и отредактируйте ее, чтобы она соответствовала вашему желанию.
1. Убедитесь, что модель, которую вы хотите сохранить как шаблон, открыта и выбрана в дереве модели.
1. Выберите в главном меню пункт «Файл-> Сохранить как шаблон ...». Откроется мастер:
1. В мастере укажите имя файла для расположения файла шаблона, имя для шаблона (оно отличается от имени модели) и описание.
1. Выберите, хотите ли вы включать миниатюрные изображения видов в шаблон модели. Если вы решите включить в шаблон эскизы представлений, выберите, какое из изображений будет «ключевым» эскизом. Это будет первое миниатюрное изображение, отображаемое в мастере «Новая модель из шаблона».
1. Нажмите «Далее», чтобы перейти к следующей странице мастера:
1. Выберите, хотите ли вы добавить шаблон в свою коллекцию. Ваша коллекция шаблонов - это список, отсортированный по категориям, который будет отображаться в мастере «Новая модель из шаблона». Если нет доступных для выбора категорий, вы можете создать новую категорию, нажав кнопку «Создать ...» в мастере.
1. Нажмите «Готово».

Шаблон будет сохранен в вашей файловой системе с расширением «* .architemplate». Вы можете поделиться этим шаблоном с другими пользователями Archi, если хотите.

Создание новой модели из шаблона

Чтобы создать новую модель на основе существующего шаблона, выполните следующие действия:

1. Выберите пункт меню «Файл-> Создать-> Модель из шаблона ...» в главном меню. Откроется мастер:
1. Выбираем желаемый шаблон. Некоторые из них представлены в разделе «Установленные шаблоны», а созданные пользователем шаблоны перечислены в своих категориях в разделе «Мои шаблоны» (см. «Создание нового шаблона»). Имя и описание выбранного шаблона отображаются в окне предварительного просмотра галереи.
1. Вы можете предварительно просмотреть все миниатюры для шаблона, перемещая указатель мыши из стороны в сторону по миниатюре в галерее. Вы также можете изменить размер изображений в галерее с помощью ползунка изменения размера.
1. Если вы хотите открыть шаблон из файла, который не отображается в мастере, выберите пункт «Открыть ...». Диалоговое окно файла позволит вам выбрать файл шаблона "* .architemplate".
1. Нажмите Готово. Новая модель будет создана и добавлена ​​в дерево модели. Имя модели имеет префикс «(новый)».

Управление вашими шаблонами

Вы храните шаблоны в своей файловой системе как файлы «* .architemplate». Их можно хранить где угодно в вашей локальной файловой системе. Archi позволяет создавать коллекции пользователей, которые указывают на эти шаблоны. Это ярлыки к актуальным шаблонам. Чтобы управлять своей коллекцией шаблонов, выполните следующие действия:

1. Выберите пункт меню «Файл-> Создать-> Модель из шаблона ...» в главном меню. Откроется мастер:
1. Выберите «Управление ...» в разделе «Шаблоны» слева от мастера. Откроется диалоговое окно:
1. Этот диалог позволяет вам добавлять, переименовывать и удалять новые категории шаблонов, а также добавлять шаблоны из файла в вашу коллекцию. Вы также можете редактировать и изменять имя и описание каждого шаблона.
1. Чтобы добавить шаблон из файла, нажмите кнопку «Добавить шаблон ...». В открывшемся диалоговом окне выберите файл «* .architemplate».
1. Чтобы добавить новую категорию шаблона, нажмите кнопку «Новая категория ...». Укажите название категории.
1. Чтобы добавить шаблоны в категорию, перетащите запись шаблона из таблицы «Шаблоны» в папку категории в дереве «Категории». Обратите внимание, что шаблон может отображаться в нескольких папках категорий.

# 47 Отношения в ArchiMate

Вы можете просмотреть все юридические отношения ArchiMate между объектами. Вы можете получить доступ к этому окну из Help | Пункт меню «Связи ArchiMate». Они предназначены только для чтения и только в информационных целях.

Матрица отношений

# 48 Вид эскиза

Sketch View - это экспериментальная функция Archi. Идея Sketch View вдохновлена ​​документом спецификации ArchiMate, определяющим «Вводную точку зрения»:

    "The Introductory viewpoint forms a subset of the full ArchiMate language
    using a simplified notation. It is typically used at the start of a design
    trajectory, when not everything needs to be detailed yet, or to explain the
    essence of an architecture model to non-architects that require a simpler
    notation. Another use of this basic, less formal viewpoint is that it tries to
    avoid the impression that the architectural design is already fixed, an idea
    that may easily arise when using a more formal, highly structured or
    detailed visualization. We use a simplified notation for the concepts, and
    for the relations. All relations except "triggering" and "realization" are
    denoted by simple lines; "realization" has an arrow in the direction of the
    realized service; "triggering" is also represented by an arrow." - ArchiMate
    Specification 1.0 p.72

Это в некотором роде похоже на описание процессов моделирования Марком Ланкхорстом с использованием техник разговора, цель которых - уловить суть модели:

    "In architecture development, we find a number of common conversation
    techniques where it concerns the communication of architectural models:

* Сессия с коричневой бумагой: структурированная групповая сессия, похожая на мозговой штурм (примерно до 15 человек), в которой элементы (ключевые слова или короткие фразы) запрашиваются у отдельных лиц в группе в ответ на такой вопрос, как: 'Каковы основные проблемы с функциональностью в нашей нынешней ИТ-архитектуре? » Как правило, каждый отдельный предмет написан на небольшой клейкой наклейке («Post-It»). Затем предметы собираются на листе бумаги (традиционно дешевой коричневой бумаги) и с помощью открытого творческого группового процесса структурируются и классифицируются. Это может включать добавление, удаление, объединение или изменение элементов. Обычно задействован посредник или фасилитатор ». - Марк Ланкхорст и др.« Архитектура предприятия в действии », второе издание, стр.82

В Archi можно создать «Эскизный вид». Чтобы добавить новый вид эскиза к модели, щелкните правой кнопкой мыши папку «Виды» в дереве модели и выберите «Создать-> Вид эскиза» из контекстного меню:

Добавление нового вида "Эскиз"

После добавления вида эскиза к модели его можно открыть из дерева, дважды щелкнув по нему. Любое количество видов можно добавить к модели и открыть одновременно. Представления расположены на вкладках в основной области окна приложения.

Пример просмотра эскиза

Вы можете добавить новые «стикеры» (стикеры) к виду, фигурку «актера» и три типа связи. Нет никаких правил относительно того, что означают отношения или пристрастия. Все объекты можно редактировать в окне свойств. Вы можете сделать эскиз своей модели, а затем преобразовать его в полностью ограниченную модель ArchiMate и представление.

Двойной щелчок по стикеру открывает окно свойств, щелчок по выбранному стикеру позволяет напрямую редактировать текст стикера.

При желании можно установить фоновое изображение по умолчанию в настройках, а также установить фон для каждого вида эскиза на вкладке «Внешний вид» окна свойств:

Параметры фона просмотра эскиза

Надеемся, что более поздние версии этой функции позволят вам:

    - Transform the Sketch into a full ArchiMate View by means of parameters and
    queries
    - Record the modelling conversation in Archi to better capture the purpose of the
    Sketch

# 49 Набор инструментов для моделирования холста

Набор инструментов моделирования холста - это расширение Archi, отчасти похожее на представление эскиза, которое предоставляет инструменты для создания и редактирования «холста», такого как холст бизнес-модели. С помощью набора инструментов Canvas Modeling Toolkit вы можете проектировать и создавать повторно используемые шаблоны Canvas, чтобы делиться ими с коллегами или просто, или вы можете использовать его в качестве инструмента предварительного проектирования для набросков идей и моделей. Вы также можете связать с другими представлениями в вашей модели, чтобы вы могли, например, связать из представления ArchiMate с представлением холста бизнес-модели, чтобы предоставить бизнес-план.

Холст бизнес-модели в Archi

Business Model Canvas находится под лицензией Creative Commons Attribution-Share Alike 3.0 Unported License.

## 50 Начиная

Самый быстрый способ начать работу с набором инструментов для моделирования холста - создать новый холст на основе существующего шаблона. Мы создадим новый холст бизнес-модели.

1. Создайте новую пустую модель в дереве модели. См. Инструкции здесь, чтобы узнать, как это сделать.
1. Выберите папку «Виды» в дереве модели, щелкните ее правой кнопкой мыши и выберите «Создать-

> Холст из шаблона ... "
1. Откроется диалоговое окно мастера. Выберите шаблон «Холст бизнес-модели» из шаблонов в разделе «Установленные шаблоны»:
1. Нажмите «Готово». Новое представление «Холст бизнес-модели» появится в дереве модели, где вы можете изменить имя по умолчанию. Сам вид будет открыт для редактирования:

Холст состоит из 9 пустых «блоков». Каждый блок действует как контейнер, который может содержать «стикеры» и другие объекты, добавленные из палитры. Каждый блок в настоящее время заблокирован, поэтому вы не можете перемещать его или изменять его размер. По сути, блоки действуют как фоновые контейнеры. Каждый блок также имеет связанную с ним текстовую «подсказку», которая отображается в окне подсказок.

Добавьте стикеры из палитры и отредактируйте текст в стикерах, чтобы создать модель холста:

Добавление стикеров на холст

Business Model Canvas находится под лицензией Creative Commons Attribution-Share Alike 3.0 Unported License.

Вникание в детали

Основными компонентами и концепциями, составляющими холст, являются блоки, стикеры, изображения, соединения, подсказки и блокировка. Шаблон холста обычно состоит из ряда (заблокированных) блоков и изображений, на которые пользователь может добавлять стикеры, изображения, соединения и дополнительные блоки, если это необходимо. В следующих разделах будет подробно описана каждая из этих концепций, начиная с описания палитры холста и примера построения воображаемого холста.

Палитра холста

При работе с холстом палитра представляет инструменты, необходимые для создания этих объектов.

Палитра холста

Select a tool in the Palette and draw it onto the Canvas. The coloured squares represent "Stickies". Note that you are not restricted to the provided colours as you can change the colour of the Sticky in the Properties Window. Similarly with the provided Connections, you can change the line and arrow head style of a Connection in its Properties Window.

Constructing a new Canvas - an Example

Let's work through the process of constructing our own Canvas based on mapping Past, Present and Future concepts.

Assuming that you have a model selected in the Model Tree follow these steps:

1. Right click on the "Views" folder of your model on the Model Tree and select "New->Blank Canvas":
1. The Blank Canvas View will automatically open. You can rename it at this point in the Model Tree if you wish.
1. From the Palette select the Block tool and draw a tall rectangular Block on the Canvas. Edit its text content by clicking on it and changing it to "Past":
1. Create two more Blocks named "Present" and "Future" adding them to the Canvas so that they line up as follows:
1. Now let's add some icons to these Blocks to make them visually more appealing. Double-click on the first Block to open the Properties Window. In the Properties Window select the "Image" tab. Then select the "Choose..." drop-down box and the "Set Image..." item:


    When the "My Images" Image Manager dialog window opens, select the "Open
    from File..." option and choose an appropriate image from your computer's file
    system. Do the same for the other Blocks.

1. Here's how it looks so far with the images that we have selected for the three Blocks:
1. Now that we have constructed our three main Blocks we could take this opportunity to change their background colour, their text fonts and positions in the Properties Window. But for now let's add an Image underneath the Blocks. From the Palette select the Image tool and draw a rectangular Image place-holder on the Canvas right underneath the Blocks. Double-click on the Image place-holder to open the Properties Window. In the Properties Window on the "Main" tab select the "Choose..." drop-down box and the "Set Image..." item, as you did before for a Block, and select an appropriate image from your computer's file system. Then from the "Appearance" tab set the border to "None". The Canvas now looks like the following:

Adding Hints and Locking

For the finishing touches let's add some Hints to the Blocks and then lock them so that we can re-use the Canvas as a Template. Why do we want to add Hints to the Blocks? Well, as with the other objects in Archi models it's extremely helpful to provide a rubric that suggests to the end user the intent of the object and how it can be used in the model. Let's add the hints:

1. First ensure that the Hints Window is open. You can open it from the main "Window" menu.
1. Double-click on the first Block (the "Past" Block) in order to open the Properties Window.
1. In the Properties Window select the "Hint" tab.
1. Type "Past" for the Hint title, and some text for the Hint Content. Note that you can use HTML to mark up your content text. Here's what it looks like now:
1. Add Hints for the other Blocks.
1. Now let's lock all these objects so that we can use the Canvas. Select each Block and the Image in turn. In the Properties Window tick the "Locked" checkbox:

Now that we have created the Blocks, added an Image, provided the Hints and locked the objects we can save the whole thing as a Canvas Template and then create new instances of the Canvas from the template. See the sections "Saving a Canvas as a Template" and "Creating a New Canvas from a Template" to do this.

Creating a new Canvas instance from the template means we can now start using it for real:

Our imaginary Canvas

For more ideas, look at how the built-in Canvas templates are constructed for further examples. See the section "Creating a New Canvas from a Template".

    Archi uses a different file format for "*.archimate" files when adding
    Canvasses that contain images.
    Normally Archi saves "*.archimate" files as single plain text XML format files.
    However, when images are used in a Canvas the file format used is a binary
    archive file (zip format) that contains both the model's XML file and any
    image files. This is to keep all related files together ensuring that you don't
    have to worry about managing the image files.

Canvas Block

A Block object is a container area that can contain text and an icon. You can also provide your own Help Hints. You can lock the Block if you want to make it read-only. A typical scenario is to create a number of container Blocks on the Canvas, arrange them into the desired framework, lock them, and then save the Canvas as a template.

Properties

Selecting a Block in a Canvas View means that you can edit or view the following properties in the Properties window.

The Main Tab

Main Properties for a Canvas Block

Locked: Selecting this ensures that the Block cannot be moved or edited.

Content: A space to enter some text content for the Block. The text will show up in the Block.

The Properties Tab

For more information about creating and managing User Properties see User Properties.

The Hint Tab

Hint Properties for a Canvas Block

Hint Title: The title of the Hint to be displayed in the Hints window when the Block is selected.

Hint A space to enter some text content for the Hint to be displayed in the Hints

Content: window when the Block is selected.. HTML tags are permitted.

The Appearance Tab

Appearance Properties for a Canvas Block

Fill colour: Sets the fill colour for the selected object. The "Default" button sets the fill colour to the default setting.

Border colour:

    Sets the colour of the border used for the selected object. The "None"
    button removes the border from the object.

Text Alignment:

    Align text in the selected object to Left, Centred or Right.
    

Text Position:

    Align text in the selected object to Top, Middle or Bottom.
    

Font: (^) Sets the font used for the text in the selected object. The "Default" button sets the font to the default setting as set in Preferences. Font colour: Sets the colour of the font used for the text in the selected object. The "Default" button sets the font colour to the default setting. Fill Opacity: Set the fill opacity of the figure. Range from 0-255. Outline Opacity: Set the outline opacity of the figure. Range from 0-255. The Image Tab

Image Properties for a Canvas Block

Preview: A preview image that shows how the image will appear. Images are resized to a maximum width and height of 100 pixels. Double-clicking the Preview box will launch the Image Chooser dialog window. You can also drag and drop an image file from the desktop onto the Preview box.

Image: Select an image for the object or clear the image. See "Adding Images to Objects" for more details

Position: Sets the position of the image relative to the object.

Canvas Sticky

A Sticky object can contain text and an icon. You can lock the Sticky if you want to make it read-only. There are a number of ready-coloured Stickies available in the Palette, but you can always change the colour in the Properties window.

Properties

Selecting a Sticky in a Canvas View means that you can edit or view the following properties in the Properties window.

The Main Tab

Main Properties for a Canvas Sticky

Locked: Selecting this ensures that the Sticky cannot be moved or edited.

Content: A space to enter some text content for the Sticky. The text will show up in the Sticky.

Notes: A space to enter some text notes for the Sticky. Any notes will appear in the tooltip for the Sticky.

The Properties Tab

For more information about creating and managing User Properties see User Properties.

The Appearance Tab

Appearance Properties for a Canvas Sticky

Цвет заливки: (^) Устанавливает цвет заливки для выбранного объекта. Кнопка «По умолчанию» устанавливает для цвета заливки значение по умолчанию. Цвет границы: устанавливает цвет границы, используемой для выбранного объекта. Кнопка «Нет» убирает границу с объекта. Выравнивание текста: выравнивание текста в выбранном объекте по левому краю, по центру или по правому краю. Положение текста: выравнивание текста в выбранном объекте по верхнему, среднему или нижнему краю. Шрифт: устанавливает шрифт, используемый для текста в выбранном объекте. Кнопка «По умолчанию» устанавливает для шрифта значение по умолчанию, установленное в настройках. Цвет шрифта: (^) Устанавливает цвет шрифта, используемого для текста в выбранном объекте. Кнопка «По умолчанию» устанавливает для цвета шрифта значение по умолчанию. Непрозрачность заливки: установите непрозрачность заливки фигуры. Диапазон от 0 до 255. Непрозрачность контура: Установите прозрачность контура фигуры. Диапазон от 0 до 255.

Вкладка "Изображение"

Свойства изображения для холста-стикера

Предварительный просмотр: изображение для предварительного просмотра, показывающее, как оно будет выглядеть. Размер изображений изменяется до максимальной ширины и высоты 100 пикселей. Двойной щелчок по полю предварительного просмотра откроет диалоговое окно Image Chooser. Вы также можете перетащить файл изображения с рабочего стола в окно предварительного просмотра.

Изображение: выберите изображение для объекта или очистите изображение. См. «Добавление изображений к объектам» для получения более подробной информации.

Позиция: устанавливает положение изображения относительно объекта.

Изображение холста

Объект Image - это заполнитель для изображения. Вы можете заблокировать объект Image, если хотите сделать его доступным только для чтения. Изображения могут быть любого размера, но мы рекомендуем делать их достаточно маленькими, чтобы не потреблять слишком много ресурсов.

    When resizing an image with the mouse you can hold the Shift key at the
    same time in order to maintain its aspect ratio. Alternatively, you can select
    the image object and select the "View->Position->Reset Aspect Ratio" menu
    item (also available on the toolbar).

Характеристики

Выбор изображения в представлении холста означает, что вы можете редактировать или просматривать следующие свойства в окне «Свойства».

Основная вкладка

Основные свойства изображения холста

Заблокировано: выбор этого параметра гарантирует, что изображение нельзя будет перемещать или редактировать.

Изображение: выберите изображение для объекта или очистите изображение. См. «Добавление изображений к объектам» для получения более подробной информации.

Документация: (^) Пробел для ввода некоторой пользовательской документации, относящейся к Образу. Вкладка «Свойства». Для получения дополнительных сведений о создании свойств пользователя и управлении ими см. «Свойства пользователя». Вкладка «Внешний вид» Свойства внешнего вида для цвета границы изображения холста: устанавливает цвет границы, используемой для выбранного объекта. Кнопка «Нет» убирает границу с объекта. Непрозрачность заливки: установите непрозрачность заливки фигуры. Диапазон от 0 до 255. Непрозрачность контура: установите непрозрачность контура фигуры. Диапазон от 0 до 255. Соединение холста Выбор соединения в холсте означает, что вы можете редактировать или просматривать его свойства в окне свойств.

Характеристики

Выбор соединения в представлении холста означает, что вы можете редактировать или просматривать следующие свойства в окне «Свойства».

Основная вкладка

Редактирование «основных» свойств соединения

Locked: Selecting this ensures that the Connection cannot be moved or edited.

Name: The name of the Connection. If supplied this will appear next to the Connection on the View.

Documentation: A space to enter some user documentation relating to the Connection

The Properties Tab

For more information about creating and managing User Properties see User Properties.

The Appearance Tab

Editing the "Appearance" Properties for a Connection in a Canvas

Show Label:

    If selected will show the label if the connection's text is set.
    

Text Position:

    Sets the position of the text that will appear next to the line on the View.
    Options are "Source", "Middle" and "Target".

Line Width: Sets the width of the connection line. Options are "Normal", "Medium" and "Heavy".

Line colour:

    Sets the colour of the connection line. The "Default" button sets the line
    colour to the default setting.

Line Style: Sets the connection line's source and target head types, and main line style.

Font: Sets the font used for the text in the selected connection. The "Default" button sets the font to the default setting as set in Preferences.

Font colour:

    Sets the colour of the font used for the text in the selected connection. The
    "Default" button sets the font colour to the default setting.

The Label Tab

By default, a connection's name will be displayed in any View in which it appears. Using a label expression per View instance, you can choose what is displayed for the connection in the View. For example you may wish to display the connection's name and its type. Or you may wish to display the value of one or more of its properties.

For a full list of expression types please refer to the Archi Wiki.

Adding Images to Objects

Canvas Blocks, Image place-holders and Stickies can contain images. The images in Blocks and Stickies are icons and are resized to a maximum width and height of 100 pixels. Images can be any size but we suggest that you keep them reasonably small so as not to consume too many resources.

To add an image to one of these objects, open the Properties window and select the object. Double-clicking the object on the Canvas will also open the Properties window. Find the Image tab in the Properties window and select the Image Chooser with the "Set Image..." option:

Selecting the Image Chooser from the Properties window

This will open the "My Images" Image Chooser dialog window:

The Image Chooser dialog window

All images that are contained in any loaded models are displayed in the Chooser so that you can re-use them. If you wish to open an image file from your computer select the "Open from File..." option.

    You can drag and drop Image files from the desktop to the Canvas.
    

Removing an image from an object

To remove an image from an object select the "Remove Image" option from the Image Chooser.

Saving a Canvas as a Template

To Save an existing Canvas as a template follow these steps:

1. Create a new Canvas or open an existing model containing a Canvas.
1. Select the Canvas in the Model Tree, right-click on it and choose "Save Canvas as Template...". A wizard will open:
1. In the wizard, provide a file name for the location for the template file, a name for the template (this is different than the name of the model) and a description.
1. Выберите, хотите ли вы включить в шаблон миниатюру холста.
1. Нажмите «Далее», чтобы перейти к следующей странице мастера:
1. Выберите, хотите ли вы добавить шаблон в свою коллекцию. Ваша коллекция шаблонов - это список, отсортированный по категориям, который будет отображаться в мастере «Создать холст из шаблона». Если нет доступных для выбора категорий, вы можете создать новую категорию, нажав кнопку «Создать ...» в мастере.
1. Нажмите «Готово».

Шаблон будет сохранен в вашей файловой системе с расширением «* .archicanvas». Вы можете поделиться этим шаблоном с другими пользователями Archi, если хотите.

Создание нового холста из шаблона

Чтобы создать новый холст на основе существующего шаблона, выполните следующие действия:

1. Выберите папку «Views» для выбранной модели в дереве модели, щелкните ее правой кнопкой мыши и выберите «New-> Canvas from Template ...». Откроется мастер:
1. Выбираем желаемый шаблон. Некоторые из них представлены в разделе «Установленные шаблоны», а созданные пользователем шаблоны перечислены в своих категориях в разделе «Мои шаблоны» (см. «Сохранение холста как шаблона»). Имя и описание выбранного шаблона отображаются в окне предварительного просмотра галереи.
1. Вы можете изменить размер миниатюр в галерее с помощью ползунка изменения размера.
1. Если вы хотите открыть шаблон из файла, который не отображается в мастере, выберите пункт «Открыть ...». Диалоговое окно файла позволит вам выбрать файл шаблона "* .archicanvas".
1. Нажмите Готово. Новый холст создается и добавляется в папку «Виды» в дереве модели, где вы можете изменить имя по умолчанию. Сам вид будет открыт для редактирования.

Управление вашими шаблонами холста

Вы храните шаблоны Canvas в своей файловой системе как файлы «* .archicanvas». Их можно хранить где угодно в вашей локальной файловой системе. Archi позволяет создавать коллекции пользователей, которые указывают на эти шаблоны. Это ярлыки к актуальным шаблонам. Чтобы управлять своей коллекцией шаблонов, выполните следующие действия:

1. Выберите папку «Views» для выбранной модели в дереве модели, щелкните ее правой кнопкой мыши и выберите «New-> Canvas from Template ...». Откроется мастер:
1. Выберите «Управление ...» в разделе «Шаблоны» слева от мастера. Откроется диалоговое окно:
1. Этот диалог позволяет вам добавлять, переименовывать и удалять новые категории шаблонов, а также добавлять шаблоны из файла в вашу коллекцию. Вы также можете редактировать и изменять имя и описание каждого шаблона.
1. Чтобы добавить шаблон из файла, нажмите кнопку «Добавить шаблон ...». В открывшемся диалоговом окне выберите файл «* .archicanvas».
1. Чтобы добавить новую категорию шаблона, нажмите кнопку «Новая категория ...». Укажите название категории.
1. Чтобы добавить шаблоны в категорию, перетащите запись шаблона из таблицы «Шаблоны» в папку категории в дереве «Категории». Обратите внимание, что шаблон может отображаться в нескольких папках категорий.

# 51 Предпочтения

Настройки для Archi доступны из пункта меню «Настройки». Предпочтения следующие.

# 52 Настройки внешнего вида, цветов и шрифтов

## 53 Appearance

Enable Theming If selected, themes are enabled or disabled. A restart will be required for this change to take effect.

Theme Choose the theme to use for Archi. A restart will be required for this change to fully take effect.

Use round tabs Whether to use round or square tabs.

Show Status Bar Show or hide the status bar. A restart will be required for this change to take effect.

## 54 Colours

Choose the default colours to use for elements, connections and folders. These are the colours that will be displayed when a fill or line colour is set to "Default" in the Properties window for a diagram element or connection. The default colours can be set differently for each installation of Archi so, for example, one user can have a completely different set of default fill colours than another user. The colours will not be saved in the .archimate model file unless the option to "Save the default fill colour for a new concept in the .archimate file" is ticked. Folder colours are global for the application and are not saved in the model.

Derive element line colours from fill colours If this is checked a diagram element's line colour is derived as a darker shade of its fill colour. You can adjust the amount of contrast with the "Contrast factor" control. If this option is set, user line colours are ignored.

Save the default fill colour for elements in the model file If this is checked an element's default colour is saved in the model file and will then be "fixed" in the file. This ensures that if the file is shared with another user they will see these colours.

Edit Edit the selected colour(s).

Reset Reset the selected colour(s) to default value.

Import Scheme Import a colour scheme that has previously been exported.

Export Scheme Export a colour scheme to share with other users.

Fonts

Устанавливает шрифт по умолчанию для использования элементов и соединений в схемах (представлениях) и шрифтов для использования в различных элементах управления пользовательского интерфейса. При нажатии кнопки «По умолчанию» устанавливается шрифт по умолчанию для выбранных элементов. Кнопка «Редактировать» позволит вам установить шрифт для выбранных элементов.

# 55 Настройки набора инструментов для моделирования холста

## 56 Общий

Включить инструментарий моделирования холста Если этот флажок не установлен, элементы меню инструментария моделирования холста не будут присутствовать в дереве модели.

# 57 Настройки подключений

## 58 Подключения

## 59 Магический соединитель

Сначала отобразите элементы (используйте клавишу Ctrl / Command, чтобы поменять местами). При щелчке из Magic Connector на пустой холст View сначала отобразите элементы, а затем Connections во всплывающих меню. Одновременное удерживание клавиши Ctrl / Command изменит это.

Сначала покажите соединения (используйте клавишу Ctrl / Command, чтобы поменять местами). При щелчке из Magic Connector на пустой холст View сначала покажите Connections, а затем Elements во всплывающих меню. Одновременное удерживание клавиши Ctrl / Command изменит это.

## 60 Рисунок

Использование сглаживания подключений В операционных системах Windows и Linux обеспечивает более плавное отображение подключений.

Использовать якоря ортогонального соединения. Если этот флажок установлен, используется новый метод вычисления точки привязки для соединения (положение, в котором соединение соединяется с фигурой). По умолчанию (опция не отмечена) точка привязки вычисляется как пересечение границы фигуры и соединения, нацеленного на центр фигуры. С помощью этой опции вычисляется точка привязки, чтобы сделать соединение вертикальной или горизонтальной линией (если это невозможно, она соединяется с одним из углов фигуры). Эту точку привязки можно переместить, просто переместив фигуру или создав точку изгиба в соединении и переместив ее.

Например, если флажок не установлен (по умолчанию), соединения будут выглядеть следующим образом:

Если этот флажок установлен, соединения отображаются следующим образом:

Использовать линейные кривые. Если этот параметр включен, соединения отображаются с кривыми в точках изгиба.

Использовать линейные переходы для пересечения связей. Если этот параметр включен, кривая перехода отображается, когда одно соединение пересекает другое.

Фон метки Устанавливает стратегию рисования фона меток соединений. Это может быть «Прозрачный», «Непрозрачный» или «Обрезанный».

Общий

Отображать предупреждающее сообщение, когда повторное соединение влияет на другие представления. При повторном соединении между элементами ArchiMate в представлении эти элементы и соединение могут присутствовать в одном или нескольких других представлениях. Повторное подключение повлияет на эти представления, и это предупреждение предупреждает пользователя об этом, и действие может быть отменено.

РУКА

Автоматическое управление отношениями

Для получения дополнительной информации см. Элементы контейнера и отношения вложенных элементов.

Разрешить неявные соединения в представлениях для вложенных элементов. Если этот параметр включен, считается, что вложенные родительские / дочерние элементы имеют неявное соединение в представлении, представляющее связь между элементами в модели.

Предложить создать новое отношение при создании нового элемента из палитры. Если этот параметр включен, при добавлении нового элемента из палитры в родительский элемент в представлении появляется диалоговое окно, предлагающее создать новую взаимосвязь между родительским и дочерним элементами.

Предлагать создать новое отношение при добавлении элемента из дерева модели. Если этот параметр включен, то при добавлении нового элемента из дерева модели в родительский элемент в представлении появляется диалоговое окно с предложением создать новое отношение между родительским и дочерним элементами, если таковые имеются. еще не существует.

Предложить создать новое отношение при перемещении элемента в новый родительский элемент. Если этот параметр включен, то, когда элемент в представлении перетаскивается на родительский элемент в представлении, появляется диалоговое окно с предложением создать новое отношение между родительским и дочерним элементами, если один еще не существует.

Типы отношений, предлагаемые при создании новых отношений. Выберите типы отношений, которые будут предлагаться при создании новых неявных связей между родительскими и дочерними элементами в представлении.

Типы обратных отношений, предлагаемые при создании новых отношений. Выберите типы отношений, которые будут предлагаться при создании новых неявных связей между дочерними и родительскими элементами в представлении. Это «перевернутые» вложения.

Типы отношений, которые нужно скрыть, когда элементы вложены. Выберите типы взаимосвязей, которые будут скрыты в представлении при наличии вложенных родительских и дочерних элементов.

# 61 Настройки диаграммы

## 62 Вид

Размер сетки Устанавливает интервал сетки, используемый в представлениях диаграммы.

Палитра открывается при открытии представлений. Если этот параметр включен, палитра в представлении будет открываться при открытии представления.

Показывать всплывающие подсказки в представлениях. Если включено, всплывающие подсказки в представлениях будут отображаться.

Редактировать имя после создания нового объекта из палитры Если этот параметр включен, когда новый элемент добавляется из палитры, вы можете сразу же редактировать его имя.

## 63 Точки обзора

Запрещенные концепции в дереве модели выделены серым. Когда этот параметр установлен, все концепции, запрещенные в точке обзора, отображаются серым цветом. Для получения дополнительной информации см. Точки обзора.

Скрыть запрещенные концепции из палитры Если этот параметр установлен, любые концепции, которые запрещены в точке обзора, не отображаются на палитре. Для получения дополнительной информации см. Точки обзора.

Скрыть запрещенные концепции из Magic Connector Если этот параметр установлен, любые концепции, запрещенные в точке обзора, не отображаются в Magic Connector. Для получения дополнительной информации см. Точки обзора.

Призрачные недопустимые концепции в представлении Когда этот параметр установлен, запрещенные концепции в точке обзора «скрываются». Для получения дополнительной информации см. Точки обзора.

## 64 Вставить особое поведение

Всегда вставлять ссылку на скопированный элемент. Если этот параметр установлен, скопированные элементы на схеме всегда ссылаются на исходные элементы.

Всегда вставлять дубликат скопированного элемента. Если этот параметр установлен, скопированные элементы на диаграмме всегда являются дубликатами исходных элементов.

Для получения дополнительной информации см. Копирование, Вставка, Выбор и удаление элементов.

Поведение при изменении размера

Позиции дочерних объектов фиксированы (по умолчанию). Когда этот параметр установлен, дочерние объекты сохраняют свое абсолютное положение при изменении размера верхнего / левого угла родительского объекта. Изменение размера вверху или слева создаст новое пространство в родительском объекте.

Положение дочернего объекта относительно родительского. Когда этот параметр установлен, дочерние объекты сохраняют свое относительное положение по отношению к родительскому объекту при изменении размера верхнего / левого угла родительского объекта. Изменение размера вверху или слева не приведет к созданию нового пространства в родительском объекте.

Другой

Использовать более старый метод для рисования изображений Если этот параметр установлен, в фигурах изображения холста используется более старый метод рисования масштабированных изображений. Это быстрее, но прозрачность изображения не сохраняется. По умолчанию это должно быть отключено, но опция включена для обратной совместимости.

Использовать смещение при рисовании контуров на дисплеях с высоким разрешением. Когда этот параметр установлен, контуры фигур рисуются с небольшим смещением, чтобы компенсировать дисплеи с более высоким разрешением. Обычно это требуется только на устройствах Windows с дисплеями высокого разрешения.

Появление

Глобальный

Это глобальные настройки приложения.

Стиль переноса слов Установите стиль переноса слов по умолчанию для фигур ArchiMate.

Жесткий перенос будет происходить только при допустимом разрыве строки.

Мягкий перенос всегда будет происходить в конце доступного места с разрывом в середине слова. Усеченный - перенос всегда будет происходить в конце доступного пространства, усекая слово, если оно не умещается.

Значения по умолчанию для новых фигур ArchiMate

Это значения по умолчанию для использования при создании новой фигуры ArchiMate. После этого вы можете изменить эти настройки по отдельности.

Ширина Установите ширину по умолчанию для новых фигур ArchiMate.

Высота Установите высоту по умолчанию для новых фигур ArchiMate.

Выравнивание текста Установите выравнивание текста по умолчанию для новых фигур ArchiMate.

Положение текста Установите положение текста по умолчанию для новых фигур ArchiMate.

Градиент по умолчанию Установите градиент по умолчанию для новых элементов схемы. Примечание. Градиенты не отображаются, когда диаграмма экспортируется в формате изображения SVG.

Просмотр эскиза

Фон по умолчанию Установите фон по умолчанию для вновь созданных видов эскиза.

Цифры по умолчанию

Альтернативные рисунки по умолчанию предусмотрены для рисования определенных фигур в видах диаграмм. Щелкните фигуру, чтобы задать форму по умолчанию, которая будет использоваться при создании новой фигуры.

# 65 Общие настройки

## 66 Файлы

Автоматически открывать виды в модели при открытии из файла При открытии модели из файла выберите, следует ли автоматически открывать все виды в модели.

Автоматически создавать файл резервной копии (* .bak) при сохранении. Если этот флажок установлен, при каждом сохранении файла .archimate сначала будет создана резервная копия с расширением файла .bak.

Размер списка недавно открытых файлов Установите размер кеша для списка недавно открытых файлов в меню «Файл-> Открыть последние». Можно установить от 3 до 15.

## 67 Модельное дерево

Отображать неиспользуемые понятия курсивом. Если этот флажок установлен, любые элементы или отношения, которые не используются в представлениях, отображаются курсивом.

Обновлять результат поиска по мере ввода. Если этот флажок установлен, результаты поиска в дереве модели обновляются по мере ввода (по умолчанию). Если этот флажок не установлен, результат поиска будет обновляться при нажатии клавиши Return.

Всегда предупреждать при удалении объектов. Если этот флажок установлен, при удалении объектов в дереве моделей всегда отображается предупреждение. Если этот флажок не установлен, предупреждение отображается только при удалении объектов, если объекты используются в представлениях.

## 68 Выражения метки

Использовать для имен представлений в таблице анализа. Если этот флажок установлен, параметр «Используется в представлениях» в разделе «Анализ» использует метку, определяемую выражением метки родительской папки (если установлено).

## 69 Другой

Экспорт изображений в двойном масштабе. Если этот флажок установлен, изображения экспортируются и копируются в буфер обмена с удвоенным увеличением.

нормальный размер. Это установлено по умолчанию для операционных систем Windows, где масштабирование дисплея превышает 100%, и на устройствах Mac Retina. Это сделано для того, чтобы качество экспортируемого изображения не ухудшилось, поскольку невозможно установить более высокое разрешение в разрешении на дюйм в изображении. Этот параметр обычно не требуется для дисплеев Linux.

Если результирующее изображение должно иметь свой логический размер, вы можете отредактировать его в редакторе изображений и установить для DPI двойное значение. Например, на Mac измените DPI с 72 на 144.

# 70 Настройки помощи

Устанавливает различные предпочтения для отображения содержимого справки в зависимости от платформы операционной системы.

# 71 Настройки отчетов Jasper

## 72 Настройки

Папка пользовательских шаблонов Задайте корневую папку, в которой хранятся настроенные пользовательские шаблоны отчетов Jasper. Каждый шаблон должен быть в отдельной подпапке. При экспорте модели в Jasper Reports имя папки будет отображаться в мастере экспорта. Для получения дополнительной информации см. Отчетность.

# 73 Настройки валидатора

## 74 Правила для проверки

Каждое правило проверки можно включить или отключить.

# 75 Управление надстройками

Вы можете установить и удалить плагины Archi с помощью Archi Plug-ins Manager или вручную.

## 76 Использование диспетчера подключаемых модулей

Чтобы установить или удалить подключаемый модуль Archi, выберите «Управление подключаемыми модулями ...» в меню «Справка».

Откроется диалоговое окно диспетчера подключаемых модулей Archi. Отсюда вы можете просмотреть установленные плагины и их подробную информацию.

## 77 Установка

Чтобы установить подключаемый модуль Archi этим методом, вам необходимо иметь подключаемый модуль в формате подключаемого модуля Archi. Это архивный файл (с расширением * .archiplugin или * .zip), содержащий один или несколько файлов jar и файл маркера. Примерами этого типа подключаемого модуля Archi являются подключаемые модули Collaboration и jArchi Scripting. Если подключаемый модуль представляет собой файл jar, вам необходимо установить его вручную (см. Ниже).

Чтобы установить новый плагин, нажмите кнопку «Установить новый ...». Выберите файл или файлы подключаемого модуля, которые вы хотите установить. При желании вы можете выбрать и установить несколько подключаемых модулей. Вам будет предложено перезапустить Archi.

## 78 Удаление

Установленные плагины будут отображаться в виде таблицы в диалоговом окне. Если вы хотите установить один или несколько плагинов, выберите их и нажмите кнопку «Удалить». Вам будет предложено перезапустить Archi.

## 79 Ручная установка

Если плагин имеет формат файла * .jar, вы можете просто скопировать файл (ы) * .jar в специальный каталог «dropins» Archi. (Перед тем как сделать это, убедитесь, что вы вышли из Archi.)

Каталог dropins находится в следующих местах:

Windows:% user.home% / AppData / Roaming / Archi4 / dropins

Mac:% user.home% / Библиотека / Поддержка приложений / Archi4 / dropins

Linux:% user.home% /. Archi4 / dropins

("% user.home%" обозначает ваш домашний каталог.)

Если каталог dropins не существует, вам нужно сначала его создать.

https://www.archimatetool.com/downloads/Archi User Guide.pdf
