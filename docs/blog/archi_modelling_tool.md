---
title: Archi modelling tool
date: 2021/01/17 10:51:50
cover_index: "http://picsum.photos/450/450?random=20"
tags:
- Archi
- ArchiMate
categories:
- Innovate
- BPM
---

## Version 4.8.




# Introduction

Archi® is a free, open source, cross-platform tool to create ArchiMate models.

The Archi® modelling tool is targeted toward all levels of Enterprise Architects and
Modellers. It provides a low cost to entry solution to users who may be making their first
steps in the ArchiMate modelling language, or who are looking for a free, cross-platform
ArchiMate modelling tool for their company or institution and wish to engage with the
language within a TOGAF® or other Enterprise Architecture framework.

Since its introduction, Archi has been widely adopted for real-world use in the
commercial and educational sectors and is used in-house by major global companies
and consultants. It is rapidly becoming the de facto open source ArchiMate modelling
tool.

The ArchiMate® modelling language is an open and independent Enterprise Architecture
standard that supports the description, analysis and visualization of architecture within
and across business domains. ArchiMate is one of the open standards hosted by The
Open Group® and is fully aligned with TOGAF®.

Archi® is a registered trademark of Phillip Beauvoir.
ArchiMate®, The Open Group® and TOGAF® are registered trademarks of The Open
Group.

Thanks to:

```
- All the Archi users, too many to mention, who have supported Archi, contributed
ideas and suggestions.
- Jean-Baptiste Sarrodie for co-leading the Archi project, contributing features,
code, ideas, support, vision, encouragement and much more.
- Andrew Josey and The Open Group for positivity and support.
```
Copyright (c) 2013-2020 Phillip Beauvoir, Jean-Baptiste Sarrodie, The Open Group. All
Rights Reserved.


# Installing and Launching Archi

Download the required version from https://www.archimatetool.com

The Windows version has an installer. Run the installer to install Archi to your system.
Windows 7, 8 and 10 64-bit versions are supported. The installer simply copies the
program files to the target directory and associates *.archimate files with Archi. An
uninstaller is also included.

You can also install Archi manually with a zip installation. Unzip this file and run either
the "Archi" or program file. Also included are some Windows batch files -
"RegisterFileAssociation.bat" and "UnregisterFileAssociation.bat". The first of these files
will register the *.archimate file extension with Archi in the Windows Registry. The
second batch file will unregister the file association.

The Mac and Linux versions are packaged in zip and tar.gz files respectively. Simply un-
archive the downloaded archive file and double-click the "Archi" application file to launch
the program.

## Launching Archi

The new, blank Archi workspace looks like the following:

The Default Archi Workspace

The workspace is divided into the following sub-windows:


```
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
```
These sub-windows can be re-arranged by dragging them into new positions, or by
dragging them out of the main application window to become detached from the main
window.

The various windows may be shown or hidden by selecting the appropriate menu items
from the "Window" menu on the main menu bar or from the buttons on the toolbar:

The Windows Toolbar

To reset the Archi window workspace to its default layout, select "Reset Window
Layout" from the "Window" menu from the main menu.

You can hide or show the main toolbar by selecting "Hide/Show Toolbar" from the
"Window" menu from the main menu.


# Working in Archi

As you work in the application, you may wish to be aware of how things work generally.

## Windows and Tabs

The main editing area for Views is in the central-right portion of the application. Windows
and tabs can be dragged and dropped to be re-arranged as you wish. You can even
detach some windows so that they "float".

```
If ever you wish to reset the layout of application windows and tabs back
to their defaults, choose "Reset Window Layout" from the main "Window"
menu. You can also reset Archi to its default settings from the "Reset Archi
to Defaults..." menu item under the "Help" menu.
```
## Undo/Redo (contextual per model)

Full Undo and Redo commands are available for every action that is performed by the
user in Archi.

```
Undo and Redo commands are contextual depending on the selected
model in the Model Tree or a View. Clicking onto a View or the Model Tree
will enable the command if an action has been performed for that model.
```
## Cheat Sheets

Cheat sheets can help guide the user through a series of steps in order to achieve some
overall goal. Some steps can be performed by the cheat sheet, and some are described
so that the user can manually complete the step. Cheat sheets are available from the
main "Help" menu. Currently, Archi ships with two Cheat sheets - "Create a Map View"
and "Create a New Model".

## Getting Help

Contextual and full help is available from the main "Help" menu. On Windows pressing
the "F1" key will invoke contextual help.


# Creating a New ArchiMate Model

To create a new, blank ArchiMate model in Archi do the following:

Select "Empty Model" from the main "File->New" menu or from the button on the main
toolbar:

The "New" button

A model entitled "(new model)" will be created and visible in the Models Tree window
with the "Default View" open with a blank drawing canvas and palette:

The default Archi workspace with a new model created

Note that the model is named by default "(new model)". You may change this by
renaming it directly in the Model Tree or selecting it in the Model Tree and editing the
name in the Properties Window. You may also add a "Purpose" here in the Properties
Window describing the purpose and aims of the model.

Note also that one "View" has automatically been created for the model and named
"Default View" and is placed in the "Views" folder in the Model Tree. If the View is not
open (i.e. visible with blank drawing canvas and palette) you can open it by double-
clicking on it in the Model Tree. Doing so will open the View (diagram) editor to the right.
If you wish to rename the View, simply select it on the Model Tree and edit the name in
the Properties Window.


The Models window can display more than one Model Tree which means that you can
work on more than one model at the same time.

The asterisk that appears on a model in the Tree when changes have been made
indicates that this model was changed, but that the changes have not yet been saved.


# The Model Tree

An ArchiMate model consists of a number of ArchiMate concepts belonging to different
"layers" - the "Business" layer, the "Application" layer and the "Technology" layer. Each
ArchiMate concept belongs to one of these layers. For example, a "Business Object"
belongs to the "Business" layer and an "Application Component" belongs to the
Application layer.

Each concept in the model can connect to one or more other concepts via one or more
relationships (connections) according to the rules of ArchiMate.

It is beyond the scope of this guide to explain these concepts and their relationships. For
more information refer to the ArchiMate Specification)

An ArchiMate model consists of configurations of these concepts connected to each
other via the various relationships. An ArchiMate model is represented in Archi in the
"Models" window as a tree structure organised into folders:

The Model Tree window showing an example model

Each ArchiMate concept is placed into its appropriate folder in the Model Tree.


Adding Elements Directly to the Model Tree

To add new ArchiMate elements directly to the Model Tree, select one of the folders,
"Business", "Application", "Technology" or "Connectors" and right-click. A "New" menu
item allows you to add new elements to the tree:

Adding a new element directly to the Model Tree

When the element is added to the Model Tree, the focus is given to the element and you
can provide a new name for it.

Note that it is not possible to add relationships directly to the Model Tree as these can
only be added by drawing them in the View (diagram) editor window.

Folders and Organisation

A model in Archi is organised into a folder structure representing the ArchiMate layers
and the concepts' relationships. A new model comprises the following top level folders:

Business Contains the elements in the "Business" layer and any user-
created sub-folders

Application Contains the elements in the "Application" layer and any user-
created sub-folders

Technology Contains the elements in the "Technology" layer and any user-
created sub-folders


Motivation Contains the elements in the "Motivation" category and any
user-created sub-folders

Implementation &
Migration

```
Contains the elements in the "Implementation & Migration"
category and any user-created sub-folders
```
Other Contains the Location, Grouping, and Junction type elements
and any user-created sub-folders

Relations Contains the relationships between concepts as they are
created in Views (diagrams) and any user-created sub-folders

Views (^) Contains links to Views (diagrams)
ArchiMate elements can be created and deleted directly in the Model Tree (see Adding
Elements Directly to the Model Tree) or are automatically added to the appropriate type
folder as objects are drawn onto the canvas of a View (see Adding New Elements to the
View from the Palette). All concepts in a folder are automatically sorted alphabetically.
User-Created Sub-Folders
User sub-folders can be created under the main top-level folders. This allows you to
organise the concepts in any way you wish. To add a new sub-folder to the Model Tree,
select a top-level folder (or a user-created sub-folder), and right-click. A "New" menu
item allows you to add a new sub-folder to the tree.
Note that a sub-folder can only contain concepts of the same type as the topmost parent
folder. For example, only "Business" type concepts can be created in the "Business"
folder and any of its sub-folders.
You can also drag and drop concepts and sub-folders within the same folder branch, but
not across folders of different types.
To rename a sub-folder in the Model Tree choose "Rename" from the main Edit menu or
from the right-click context menu.
Working in the Model Tree
Generally, you can add, delete, duplicate, move, and rename concepts and Views in the
Model Tree. You can also create folders under the main folder groupings in order to
group concepts together.


Drag and drop

Objects are managed with drag and drop in folders. Note that you cannot move
concepts from one main folder type to another. For example, Business concepts can
only be in the "Business" folder or one of its sub-folders, and relationships can only be in
the "Relations" folder or one of its sub-folders.

Cut and Paste

In addition to drag and drop you can cut and paste objects between folders. After
selecting objects in the tree select "Cut" and, after selecting the target folder, select
"Paste" to move the objects.

Deleting Objects from the Model Tree

To delete one or more objects in the Model Tree select them and choose "Delete" from
the main "Edit" menu or from the main toolbar.

Note that if a concept that you wish to delete appears in one or more Views you will be
warned that it is referenced in those Views. If you then delete the concept from the
tree you will also delete it from any Views where it is referenced.

Warning about deleting a concept

Renaming an Object in the Model Tree

To rename an object in the Model Tree choose "Rename" from the main Edit menu or
from the right-click context menu. You can also rename it in the Properties Window.

Duplicating an Element or View in the Model Tree

To duplicate Elements or Views in the Model Tree select "Duplicate" from the main "Edit"
menu or from the right-click context menu. Note that Duplicate Views contain references
to the original concepts copied.


Editing Properties for an Object in the Model Tree

To edit the Properties for a selected object in the Model Tree, select the object in the
tree and open the Properties Window either by double-clicking the object or from the
main "Window" menu or main toolbar.

Each object in the Model Tree has different properties that can be set or viewed in the
Properties Window. For more information see the section, The Properties Window.

Note - some properties can only be edited when the object is selected in a View (for
example, the fill colour, font or line width).

Concepts in the Model Tree and Views

Concepts in the Model Tree can be added to any number of diagram Views in the model
by dragging them onto the View's canvas (see the section, "Views"). When a concept
has been added or used in a View the font used in the Model Tree for that concept is
normal. However, if the concept only exists in the Model Tree and is not used in any
View it is shown with an italic font:

Italic font shows concepts not used in Views

This makes it convenient to see those concepts that may have become redundant and
can be deleted.

Synchronising Selections in the Model Tree and a View

When selecting concepts in the Model Tree and in diagram Views it is sometimes useful
to synchronise the selection between the concepts in both windows. Pressing the "Link
to View" button in the Model Tree window enables or disables synchronising selected
concepts between the Model Tree and a diagram:


The "Link to View" button

This button is a toggle and can be turned off or on.

Synchronised selection is possible on more than one selected concept.

Note that synchronised selection is only possible if a relevant View is open. Selecting a
concept in the Model Tree will not synchronise a selection in a View if that View does not
contain that particular concept or concepts.

Drill Down

Using the Drill Down buttons, "Home", "Back" and "Go Into", it is possible to "drill into" a
model or folder. The path to the currently selected object or folder is shown in the Status
Bar.

The "Drill Down" buttons

Searching and Filtering in the Model Tree

The number of objects in the Model Tree can grow quite considerably as you work on
your model. Of course, you may wish to add sub-folders within the main folder structure


to help organise these objects. However, finding a particular object in the tree may still
prove to be difficult.

In order to search the Model Tree a Search Bar is included in Archi. This is accessed by
clicking on the "Search" button on the toolbar of the Model Tree window. Clicking this
button reveals the Search Bar:

The Search Bar revealed

As you type into the text field of the Search Bar the Model Tree updates to show only
those objects that match the search criteria in the Search Bar. By default only the name
of the objects is matched to the search string. You can also search on the
"Documentation" field of the objects by ticking this in the "Filter Options" drop-down
menu in the Search Bar:


Searching on both "Name" and "Documentation"

To clear the search text selection click on the icon to the right of the text. To clear the
filters, deselect "Name" and/or "Documentation".

Filtering Object Types

To filter certain types of ArchiMate concept you can select the different types to include
in the filter/search in the drop-down menu:


Filtering certain object types

To reset the object-type filter, select the "Reset Filters" menu item.

Filtering User Properties

To filter User Properties of objects you can select the different Property keys to include
in the filter/search in the drop-down menu:

Filtering on User Properties


Showing All Folders

As you refine your search the Model Tree will only show those objects that match your
search/filter criteria (or none at all if no objects match). Thus, folders with no matching
child objects are not shown. If however you wish to show these empty folders as you
search for objects (you may wish to drag and drop objects to other folders, for example)
then you can set this as an option in the filter menu by selecting "Show All Folders".

To close the Search Bar and reset the search filter press the "Search" button one more
time.

Find and Replace

It is also possible to find and replace objects in the Model Tree by name.

Find and Replace dialog


# Views

The elements and relationships that constitute an ArchiMate model as represented in
the Model Tree can be arranged into one or more "Views" or visual diagrams. Therefore
an ArchiMate model can consist of one or more Views where each View can display the
model concepts in various configurations. For example, you may wish to only see the
Business Layer elements in one View and the model's Application Interface elements in
another View. Or you may wish to create a "master" View that acts as a map to all of the
other Views in the model.

ArchiMate advocates an approach in which architects and other stakeholders can define
their own Views on the enterprise architecture. In this approach, Views are specified by
viewpoints. Viewpoints define abstractions on the set of models representing the
enterprise architecture, each aimed at a particular type of stakeholder and addressing a
particular set of concerns. Viewpoints can both be used to view certain aspects in
isolation, and for relating two or more aspects.

In Archi a View is unlimited in scope according to the available elements and relations,
and it is up to the designer to impose any constraints for a given viewpoint as prescribed
by the ArchiMate specification.

## Opening a View

If the model already contains a View it will be visible in the "Views" folder in the Model
Tree:

The Default View in the Model Tree

To open and edit the View, double-click it in the Model Tree (or press Ctrl-Shift-O /
Command-Shift-O). The View Editor will open showing the editing canvas and palette:


The View Editor showing a blank drawing canvas and palette

Creating a New View

An ArchiMate model usually consists of more than one View. To add a new View to the
model, right-click on the "Views" folder in the Model Tree and select "New->ArchiMate
View" from the context menu:

Adding a new View to a Model

Once the View has been added to the model it can be opened from the tree by double-
clicking on it. Any number of Views can be added to a model and be open at the same
time. Views are arranged in tabs in the main editing area of the application window.


Working with Views

Once a View has been opened you may now "draw" on the canvas, adding and creating
new ArchiMate elements, connections (relationships) and annotations (notes). As you
add figures to the canvas from the palette, the corresponding ArchiMate elements and
relationships are added to the ArchiMate model and are visible in the Model Tree.

You also add existing concepts to the View by dragging and dropping them from the
Model Tree into the View. You can add new elements to the Model Tree (see Adding
Elements Directly to the Model Tree) and then drag them to any number of Views in the
model. Thus, elements and relations can appear in more than one View, each
occurrence referencing the same concept in the Model. Thus, if you change the name of
the model concept it will change for all occurrences in all Views.

Navigating a View

Panning

If you select the first selection tool from the Palette, click somewhere on the View to give
it the focus and then hold the Space bar down the cursor will change to a hand and you
can pan the View. You can also pan around the View by holding down the middle mouse
button.

Using the Keyboard Instead of the Mouse in a View

It is possible to move and resize selected objects in a View by using the computer
keyboard instead of a mouse. To move an object, press the period key (".") once to
reveal the MOVE cursor. Then use the Arrow keys, followed by the ENTER key to
commit the move. To resize the object, press the period key (".") until the RESIZE cursor
appears at the desired resize handle. Press the ENTER key to commit the resize.

Automatic Scrolling in a View

Sometimes you may find that a concept is outside the area of the View area and you
wish to draw a new connection between one concept and another concept outside of the
View area (the scrollbars would normally need to be used). To do so, simply click on the
source concept after selecting the connection tool and then hover the mouse at the edge
of the Viewport. After a short pause, the View will automatically scroll.

Zooming a View

You can zoom in and out of a View in a number of different ways:

```
- From the main "View" menu
```

```
- By using the shortcut key combinations Ctrl +, Ctrl =, Ctrl - and Ctrl 0
("Command" key on Mac)
- By using the Zoom combo box on the main toolbar.
- By holding the Ctrl key down ("Command" key on Mac) and using the mouse
scroll wheel
```
Used in combination with the Outline View you can easily navigate around large
diagrams.

Find and Replace

It is also possible to find and replace concepts in a View by name.

Find and Replace dialog

The Palette

The palette contains the drawing tools, and elements and relationships that can be
added to a View. It is an area that is attached to a View.


The Palette in a View

To create new elements and relationships in a View select the required object tool on
the palette and either click or drag it onto the canvas area. Once the figure has been
added to the canvas you can resize and re-position it by the usual drag actions.

You can configure how the Palette displays items by right-clicking on the Palette and
choosing "Settings...":

Palette Settings

If you cannot see the palette in a View it may be closed. If this is the case, open it by
clicking the "Show Palette" triangle button at the top-right of the View window.


The Detached Palette

By default, each View has its own attached Palette. It is also possible to have a single,
detachable Palette that you can drag and dock to any position in the application window.
To do this, click on the "Palette" button on the main toolbar:

The "Palette" button on the main toolbar

Pressing this button detaches the Palette from the View and creates a Palette window.
You can drag and dock this to anywhere in the application space. The following example
has the Palette docked in the lower left corner:

The Palette window docked in the lower left corner

Closing the Palette window re-attaches it to any open Views.

Palette Selection Tools

There are two selection tools available in the Palette. These are used to select the
objects in a diagram in various ways.

The selection tools in the Palette


The first tool (selection tool) is primarily used to select elements (boxes). When dragging
a marquee area around elements and connections with this tool, only the elements
(boxes) will be selected.

The second tool (marquee tool) is activated by a drop-down button and is used to select
both elements and connections in various ways:

The selection tool options

You can add elements or connections to a selection with the selection tool by holding
down the Ctrl key and clicking on the element or connection. The same operation can be
used to remove an element or connection from a selection.

When several elements or connections are selected, one will be marked with dark
handles. This is called the primary selection.

Three elements selected, topmost is the primary selection

The primary selection is used with the alignment tools. You can change which element
or connection is the primary selection with the selection tool by holding down the Shift
key and clicking the element or connection you wish to make the primary selection.

```
Tip: Pan the View using the selection tool.
If you select the first selection tool from the Palette, click somewhere on the
View to give it the focus and then hold the Space bar down the cursor will
change to a hand and you can pan the View. You can also pan around the
View using the middle mouse button.
```

Palette Creation Tools

Apart from the Selection Tools there are other tools available on the Palette used to
create new ArchiMate concepts, Notes, Groups and Relations between concepts
(connections). To add a new element to the canvas select one and drag it onto or click
onto the canvas.

Relations

There are several types of ArchiMate relation and a Junction element.

The Relations Creation Tools in the Palette

The first tool is the Magic Connector, used for drawing connections. This is followed by
creation tools for ArchiMate relations and a Junction element.

Notes and Groups

Used for adding a Note, Group Container, or a Note Connection to a View.

Note, Group and Note Connection Creation Tools

ArchiMate Elements

These are divided into areas corresponding to the "Other", Business", "Application",
"Technology", "Physical", "Motivation", and "Implementation & Migration" ArchiMate
concept groupings:

The ArchiMate Element Creation tools


Note that a sub-set of these elements will only be available if the current View is
restricted to a given Viewpoint.

```
Tip: Press the shift key when selecting a palette tool to keep it
selected.
By default, once an element or connection has been drawn on the canvas
the default selection tool (arrow) is re-selected on the palette. If you wish to
keep the current palette tool selected hold the "Shift" key down when you
select it.
```
The Format Painter

The Format Painter is a tool on the Palette toolbar that allows you to quickly copy the
visual formatting of one object and paste it to others in a View. Instead of having to
manually apply the font, font colour, text alignment, and other formatting to each new
object in a View, you can quickly copy all of the formatting attributes by using one
toolbar button.

The Format Painter tool is at the top of the Palette:

The Format Painter tool

To copy and paste formatting in View:

1. Select the Format Painter tool from the Palette. Initially it will appear grey,
    indicating that it is "empty" and ready to copy.
2. Click on the source object or connection from which you wish to copy the
    formatting. The Format Painter tool cursor will change to a darker outline and to
    the colour of the fill object or connection that is copied. Also, the tool entry on the
    Palette will appear darker and the tooltip will update to explain this.
3. Now click on the target objects or connections to paste the formatting.
4. To clear the Format Painter so it is ready to copy some more formatting, either
    double-click on the tool in the Palette or double-click on an empty space on the
    canvas.

Note that some formatting cannot be copied and pasted from an object to a connection,
and vice-versa. You can use the Format Painter tool between different Views. If it is
"primed", simply select it from the Palette in another View and paste the formatting to
target objects or connections.


Adding New Elements to the View from the Palette

To create and add new elements to the View select the required element on the Palette
and either click or drag the new figure onto the canvas area. Once the figure has been
added to the canvas you can resize and re-position it by the usual drag actions.

Adding Elements to the View Automatically Adds them to the Model
Tree

It is important to understand that adding elements (and relationships) to a View from the
palette automatically adds those elements to the Model Tree as well. For example,
dragging a "Business Actor" element onto the canvas creates both a figure on the View
called "Business Actor" and also a node on the Model Tree with the same name.

Furthermore, if you delete an element in a View the corresponding element in the Model
Tree is not deleted. This is because the element may be referenced in another View in
the model. To delete the element completely you have to delete it in the Model Tree or
choose the right-click menu item, "Delete from Model".

You can edit the element's name directly by clicking the text area on a figure. Double-
clicking on the figure opens the Properties Window where you may edit the properties of
the selected element.

Editing the View's Elements' Properties

The properties for a selected element in a View can be edited in the Properties Window.
To open the Properties Window, either double-click the figure or select the figure and
open the window from the toolbar or main menu. Each element in the View has different
properties that can be set or viewed in the Properties Window. For more information see
the section, The Properties Window.

Double-clicking an Element in a View opens the Properties Window, single-clicking on
an already selected Element's text field allows you to directly edit the Element's text.

Adding New Relationships (Connections) to the View from

the Palette

To add new relationships (connections) to the View select the required connection tool
on the Palette and drag from one element on the View to another on the same View.

As with adding elements from the palette, adding a relationship to a View automatically
adds it to the Model Tree as well, in the "Relations" folder.


When adding a new connection in a View, if the same type of model relationship already
exists between the source and target elements, a dialog box will appear giving you the
option to reference that model relationship from the connection, or create a new
connection and model relationship:

A dialog providing the option of re-using a model relationship.

```
Relationships, Rules and Regulations.
ArchiMate elements can connect to other elements by a given set of
relationships (connections). Some relationships are allowed, others are not.
If a relationship is not allowed the cursor will show as a "Not Allowed"
symbol, a circle with a diagonal line. If a relationship is allowed, it will show
as a "plug" symbol.
```
Information about Connections

Once a relationship (connection) has been created between elements, some useful
information can be revealed when the mouse cursor hovers over the connection to
reveal a tooltip. The tooltip displays the relationship's name, its type, and some text that
describes the nature of the relationship between the source and target elements.

A tooltip shows useful information when hovering over a connection

Adding Circular Relationships (Connections)


You may add a circular relationship (connection) if you wish. This is a relationship whose
target and source element is the same. You can create a connection from an element to
itself by selecting the required relationship from the Palette, clicking once on the element
and then clicking again on the element:

A circular relationship

Adding New Relationships and Elements to the View using

the Magic Connector

Connecting one element to another in a View depends on whether the relationship is
allowed according to the ArchiMate specification. For example, you cannot connect an
Assignment relationship from an Application Component to a Business Actor. Unless
you are very familiar with the rules governing the relationships in ArchiMate it can be
frustrating to find the allowable relationships between one element and another. The
"Magic Connector" solves this problem.

The Magic Connector in the Palette

The Magic Connector has two uses - firstly to create a new allowed connection between
one element and another, and secondly to create a new element and an allowed
connection between the source element and the newly created element.

To create a connection between a source and a target element using the Magic
Connector follow these steps:

1. Select the Magic Connector tool from the palette
2. Click on the source element in the View
3. Click on the target element in the View
4. A popup menu will appear showing the allowable relationships between the two
    elements. Choose the required type from the menu. It is possible to create a
    relationship from the source to the target element, and also in reverse from the
    target to the source element. Both directional options are separated in the popup
    menu.


Drawing a connection using the Magic Connector

To create a new element and connection in one operation using the Magic Connector
follow these steps:

1. Select the Magic Connector tool from the palette
2. Click on the source element
3. Click on a blank area of the View's canvas, or on a Group figure
4. A cascading popup menu will appear showing all allowable elements and
    relationships between the two. Choose the required element and connection from
    the menu

In the following example a new Business Role element will be created together with a
new Assignment relationship connecting to the original selected Business Actor element.

Using the Magic Connector to create a new element and connection

If you hold down the Ctrl key (or the Command key on Mac) at the same time as clicking
on a blank area of the canvas then the Elements will be shown first followed by the
Connections in the popup menus (this behaviour can be reversed in Preferences):


Using the Magic Connector to create a new element and connection while pressing the Ctrl /
Command key

Adding Elements and Relations from the Model Tree to a

View

Existing elements and relationships can be added to a View by dragging and dropping
them from the Model Tree to a View.

Dragging and dropping a relationship into a View also adds its source and target
elements to the View if they are not already present on the View. Any existing elements
on the View automatically have all their connections to the dropped element(s) added as
well.

```
When you drag and drop elements from the Model Tree to a View any
associated relationships are also added to the view as connections. There
may be times when you do not want this to happen, you may simply wish to
drag another instance of an element onto the View, for example. In order to
do this, on Windows and Linux hold the Ctrl key down, or on Mac hold the Alt
key down when dragging and dropping.
```
Working this way means that you can regard the Model Tree as a repository of elements
and relations for the model that can be added to any View within the same model. The
same element can be added more than once to a View.


```
Important! - A model element or relationship can appear multiple times in
the same or different Views. You can set its visual appearance individually
for each occurrence.
```
Adding a Group

Elements can be grouped together in a View using a Group container type. Note that
this is not the same as an ArchiMate Grouping Element, and that it has no semantic
meaning other than being a visual collection of elements.

A Group can be added from the View's Palette:

The Group Palette Entry

The following example shows elements grouped together using the Group element to
indicate the various layers in the model:

Example of Groups

A Group's name, font and fill colour can be edited in the Properties Window.


Double-clicking a Group opens the Properties Window, clicking on the Group's text field
allows you to directly edit the Group's text.

Adding a Note

Notes can be added to the View to allow for visual annotations. A note has no semantic
meaning in the ArchiMate language.

A Note can be added from the View's Palette:

The Note Palette entry

The following example shows elements annotated with a Note:

Using a Note in a View

A Note's text, font and fill colour can be edited in the Properties Window.

Double-clicking the Note opens the Properties Window, clicking on a selected Note
allows you to directly edit the Note's text.

Adding a Note Connection

You can draw a connecting line from and to a Note using the "Note Connection" line tool
in the Palette. It has no semantic meaning like the other ArchiMate relationship types.
Double-clicking the Note Connection opens the Properties Window.

Adding a Junction


A Junction element can be added from the View's palette in the Relations palette
section:

The Junction entry in the Palette

A junction is used in a number of situations to connect relationships of the same type. A
junction may have multiple incoming relationships and one outgoing relationship, one
incoming relationship and multiple outgoing relationships, or multiple incoming and
outgoing relationships (the latter can be considered a shorthand of two subsequent
junctions).

There are two types of Junction - "And" and "Or". The type of Junction can be set in the
Properties window:

Setting the type of Junction

Junctions appear in the Model tree in the "Other" folder. They can also be added directly
to the Model Tree by right-clicking on the "Other" folder and selecting the "New" menu
item.

Example of an "Or" type Junction

```
Note that Archi does not currently enforce the full ArchiMate rules when
connecting junctions. You should ensure that only relationships of the same
```

```
type are used to connect concepts and junctions. You can check for
consistency by using the Validator.
```
Adding a Reference to Another View

A View Reference figure acts as a link to another View from within a View. It's a shortcut
that when double-clicked opens the linked View.

To add a View Reference drag a View node from the Tree Model onto the canvas of the
target View. Note that you cannot reference the same View from itself. The following
screenshot shows how the user has created a "Map" View with View References to all
the other Views in the model:

Adding View References to create a "Map" View

The font and fill colour of the View Reference figure can be set in the Properties
Window.

Connection Bend-points

A connection line (relationship) can have any number of bend-points so that the
connection can be routed to form bends and deviations in the diagram.

To add a bend-point to a connection firstly select the connection. A bend-point "handle",
or dot, will appear in the middle of the connection:


A connection bend-point "handle"

Drag the bend-point handle in the desired direction. Notice that as you drag the handle
two new bend-point handles are added to the connection:

Connection bend-point "handles" appear

You can continue to select and drag these handles to create new bend-points. As each
new bend-point is created, two new handles will appear either side of the selected
handle.

To delete a bend-point, select the bend-point's handle and drag it so that the connection
line becomes straight. Once the connection line is straightened the bend-point will
disappear.

Bend points snap to grid if "Snap to Grid" is turned on in the "View" menu. If you need
finer control over placing the bend-point you can over-ride this by holding down the Alt
key on Windows, Alt/Shift on Linux, or the Ctrl key on Mac.

Note - bend-points cannot be added to connections if the Connection Router Type for
the View is set to "Manhattan". See here for more details.

Setting the Properties of a Connection

A Connection's (Relationship's) properties can be edited by selecting the connection on
the View and opening the Properties Window. See the section, Relationship Connection
Appearance Properties, for more information.

Text can be added to a connection (on the "Main" tab) and displayed in one of three
positions, and the thickness of the line itself can be set as can the text's font and colour.
The following screenshot shows a connection with a medium line width and text showing
in the "Target" position with a blue italic font and purple line colour:


Setting a Connection's Text, Position, Line Width, Font, Font and Line Colour

Setting the Connection Router Type for a View

By default, connections are drawn as straight lines from object to object. Bend-points
can be added to a connection as detailed here. However, it is possible to set the overall
connection router type so that the connections route around objects or are drawn
orthogonally.

The connection router type can be set either from the main "View->Connection Router"
menu or by right-clicking on a View or from the "Appearance" tab in the Properties
Window when the View canvas is selected.

```
Apart from the view specific settings, the global setting Use orthogonal
connection anchors from the Connection Preferences tab can be used to
change the way connections are drawn.
```
The available router types are as follows:

Manual

Connections are drawn in straight lines. Bend-points can be added by the user.


Manual Router

Manhattan

Connections are routed orthogonally. Bend-points cannot be added by the user.

Manhattan Router

Container Elements and Nested Element Relationships

Each graphical element (except for notes and junctions) can act as a container element
for other elements. Dragging and dropping an element inside of another element means
that it becomes a child of the parent element. This is useful to represent containment
type relationships such as Composition, Aggregation, and Association or for convenient
grouping.

In the following screenshot the elements "Register", "Accept", "Valuate" and "Pay" are
child elements of the parent "Handle Claim Process" element:


Child elements contained by a parent element

While dragging elements into or over other elements a visual cue is provided to indicate
that the dragged element will be moved into the parent (container) element. This is a
blue highlight around the target element as the element is dragged over it:

A Child Element being Dragged into a Container Element. The Container highlighted in blue

Creating, Showing and Hiding Relationships between

Nested Parent/Child Elements

The ArchiMate specification states that some relationships may also be expressed by
nesting the model elements. That is to say, an explicit connection need not be drawn
between the parent and child elements but that it may be represented as a container
nesting of elements.

Archi supports this convention with Automatic Relationship Management (ARM). This
system ensures that relationships are automatically created and hidden between
qualifying parent/child elements. The system can be configured to suit the user's needs.
See Preferences to configure the ARM.

The best way to explain the Automatic Relationship Management system (ARM) is by
an example.

Example - Nested sub-processes in a Composite relationship

Suppose the user has a Business Process element named "Handle Claim Process" that
will act as a container element ("parent") for four sub-processes, "Register", "Accept",
"Valuate" and "Pay". The relationship between the parent process and the sub-
processes would normally be expressed as four Composition relationships. These can
be drawn conventionally using connecting lines as follows:


Composition relationship between parent and child processes

However, this is visually not as clear as if the sub-processes were placed inside of the
container parent process.

We can solve this problem by enabling the ARM system in Preferences. This ensures
that when the sub-processes are placed in the parent element the connections are
hidden in the View, but are still present in the actual semantic model. Dragging the child
elements in and out of the parent element hides and shows the explicit relationships.
The hidden connections are "implicit" connections.

The Connections now hidden from the View

Adding new elements to a parent element

Adding new elements to a parent element in a View from the Palette or dragging and
dropping from the Model Tree results in a dialog box asking if a new relationship should
be created between the parent and child elements:

Dialog to create a new nested relationship

Note that the dialog will only display valid relationships between the parent and child
elements, and only those that are specified in Preferences. Valid relations between the
child and parent elements can also be selected. These are shown as "(reverse)".


If you do not wish to create a new relationship, select "None".

Moving existing elements to a parent element

If more than one element is moved (drag and drop operation) to a parent element in a
View or is dragged and dropped from the Model Tree onto a parent element, and there
are no existing preferred relationships between the parent and the child elements then a
dialog box is displayed offering to create new relationships between the parent element
and the child elements. You can choose a different type of relationship for each child
element:

Dialog for creating more than one relationship

If you do not wish to create a new relationship for an element, select "(none)" from the
drop-down combo box. To select the same type of relationship in the drop-down combo-
box, hold down the Ctrl / Command key and select.

Setting the Order of Overlapping Elements

Overlapping elements in a View can be brought to the front or back, or brought forward
or sent back. This is also known as the "Z" order. This is achieved by selecting the
element in a View and right-clicking to invoke the "Order" menu items. These same
menu items are also available from the main "View" menu.


Changing the order of overlapping elements

Selecting Elements in a View

Diagram elements and connections may be selected in the view by clicking on them with
the selection tool or the marquee tool. For more information about these tools see
Palette Selection Tools.

Copying and Pasting Elements in a View

Diagram elements may be cut, copied and pasted in Views. There are, however, certain
constraints on how this works:

```
- If an element is pasted into a View from the same model where the element
already exists in that View then a new model element and a new diagram
element are created for the View. The new element is a copy of the original. Any
connections are also newly created as copies.
- If an element is pasted in a View from the same model where the element does
not already exist then a new diagram element is created for the View and the
original model element is referenced. This is equivalent to dragging the element
from the Model Tree into the View. Any connections are also referenced.
```
If an element is pasted into a View from a different model then a new model element and
a new diagram element are created for the View. The new element is a copy of the
original. Any connections are also newly created as copies.


If you choose the "Paste Special" menu option, instead of "Paste" then you can change
this behaviour such that references to copied elements are created rather than new
elements. You can set the behaviour for this feature in Preferences.

```
If you copy some diagram elements and then click on the View before
pasting, the copied elements will be pasted at the point where you clicked.
```
Copy As Image to Clipboard

A View (diagram) can be copied as an image to the system clipboard. This is available
from the "Copy As Image To Clipboard" menu command from the main "Edit" menu or
by right-clicking on a View and selecting the menu item from the contextual menu. This
menu command is only available if a View is open and selected. The shortcut key
combination is Ctrl-Shift-C (Command key on Mac). Once the View is copied to the
system clipboard it can be pasted into other applications such as word processing and
drawing tools.

Deleting Elements and Relationships (Connections) in a

View

Selected elements and/or connections in a View can be deleted from the View by
choosing the "Delete from View" menu item from the main "Edit" menu, from the main
toolbar or from the right-click menu. Note - this action deletes those elements from the
View not from the model. To delete the element completely you have to delete it in the
Model Tree or select "Delete from Model".

Select in Model Tree

This menu item is available when right-clicking an element or relationship in a View. It
will select the corresponding model element in the Model Tree.

Delete from Model

This menu item is available when right-clicking an element or relationship in a View. The
selected elements and/or relationships are then deleted from the model itself and any
Views that reference those elements. This is the equivalent of selecting the elements in
the Model Tree and choosing "Delete".


Alignment Tools, Guides and the Grid

In order to facilitate the drawing of pleasing diagrams, various alignment tools are
provided. These are available from the main "View->Position" menu item, from the main
toolbar or by right-clicking on the diagram's canvas area to select the "Position" menu
items. These are as follows:

Zoom in / Zoom
out / Actual Size:

```
Zoom in and out of the diagram. This is also available on the
toolbar as a combo box. You can also Zoom in and out by holding
the Ctrl key and scrolling the mouse wheel.
```
Snap to Grid: Snaps elements to the Grid whether it is visible or not. (Grid
spacing can be set in Preferences.)

Grid Visible: Toggles the visibility of the Grid. (Grid spacing can be set in
Preferences.)

Snap to
Alignment
Guides:

```
These are blue alignment guides (lines) that appear when
elements are dragged in a diagram. They assist in lining the edges
and centres of elements.
```
Align Left: When two or more elements are selected align on the left edge of
the primary selection.

Align Center: (^) When two or more elements are selected align centrally
horizontally to the primary selection.
Align Right: When two or more elements are selected align on the right edge of
the primary selection.
Align Top: When two or more elements are selected align on the top edge of
the primary selection.
Align Middle: When two or more elements are selected align centrally vertically
to the primary selection.
Align Bottom: When two or more elements are selected align on the bottom edge
of the primary selection.
Match Width: (^) When two or more elements are selected match the width of the
elements to the primary selection.
Match Height: When two or more elements are selected match the height of the
elements to the primary selection.
Default Size: Set the selected element to its default size. If disabled then the
element is already set to its default size.


For information about the primary selection see Palette Selection Tools.

Showing a View in Full Screen Mode

On Windows and Linux, a View can be displayed and edited in Full Screen mode (this is
not available on the Mac OS X version of Archi since OS X has its own full screen
support). This can be useful to maximise the View for presentation purposes. To do so
select a View and press the F11 key, or choose the "Full Screen" menu item from the
main "View" menu. The View will be maximised:

A View in Full Screen mode

The Floating Palette window can be closed with the Escape key or the window's close
button. Right-clicking on the View in Full Screen mode invokes a context menu where
the Palette may be shown if it is not currently visible.

Export View As Image

A View (diagram) can be exported as an image file to disk. This is available from the
"Export View As Image..." menu command from the main "File->Export" menu or by
right-clicking on a View and selecting the menu item from the contextual menu. This
menu command is only available if a View is open and selected.


Available formats are BMP, JPG, PNG, PDF and SVG. The first three formats can be
exported at scaled ranging from 25% to 400%. SVG format has more options including
embedding font information and setting the viewBox bounds for different scales.

Exporting a View as an image


# Viewpoints

The ArchiMate Specification states that "Viewpoints are a means to focus on particular
aspects and layers of the architecture. These aspects and layers are determined by the
concerns of a stakeholder with whom communication takes place. What should and
should not be visible from a specific viewpoint is therefore entirely dependent on the
argumentation with respect to a stakeholder's concerns."

In practice, a Viewpoint is a sub-set of elements and relationships aimed at a
stakeholder. Archi allows you to specify the following Viewpoints:

Supported Viewpoints

When creating a new View in Archi, the default Viewpoint is set to "None", meaning that
all concepts can be added to the View. Setting a Viewpoint on a View means that a sub-
set of elements is available to place on the View. Some other ArchiMate authoring tools
require you to specify the Viewpoint in advance when creating the View. Unfortunately,
this means that you cannot change your mind should you wish to later change the
Viewpoint in the View. Archi, however, implements Dynamic Viewpoints so that you
can change the Viewpoint at any time and those elements that are not permitted for that
Viewpoint are "ghosted" out. Dynamic Viewpoints allow you to change your mind. You
don't have to decide up-front what the Viewpoint will be. You can experiment with
different Viewpoints for the same View. And if you decide to keep the Viewpoint, you can
simply remove any disallowed elements from the View.


Setting the Viewpoint

To set the Viewpoint for a View, open the View in the View editor and select the required
Viewpoint from the main "View->Viewpoint" menu, or by right-clicking on the View's
drawing area and selecting it from the context menu. You can also change the Viewpoint
from the View's Properties window.

In the following example we start with a View that has the default "None" Viewpoint:

A View with the "None" Viewpoint

Notice that all elements from all the ArchiMate layers (Business, Application, and
Technology) are displayed. Also, the Palette has all elements available.

If we now change the Viewpoint to "Infrastructure" then any elements that do not belong
in this Viewpoint are "ghosted" out in the View. Notice, also, that only the elements
permitted for the current Viewpoint are available in the Palette, whilst the others are not
available:


The same View with the "Technology Usage" Viewpoint

If we look at the elements in the Model Tree we can see that non-permitted elements for
the Viewpoint are also greyed out:

Elements not permitted for the Viewpoint are greyed out

If we choose to, we can drag and drop any element from the Model Tree to the View but
the resulting element in the View will be greyed out. This means that we can work with
the Viewpoint any way we want to but we are reminded at all times of what should and
shouldn't be added to the Viewpoint.


If you are unsure of the constraints for a Viewpoint select it then open the Hints Window.
A full explanation is available for the Viewpoint:

A Hint for a Viewpoint


# The Properties Window

The Properties Window allows you to edit the properties for selected objects in the
Model Tree or selected figures or connections in a View. Some properties (for example,
the name) are shared between a concept in the Model Tree and its counterpart in a
View. Some properties are only relevant for an object in a View (fill colour and font, for
example).

To edit the Properties for selected objects in the Model Tree or in a View, select the
object(s) and open the Properties Window either by double-clicking the tree node or
View object, or from the main "Window" menu or main toolbar.

If selected, the local menu option in the drop-down menu, "Single Column Layout", will
show some controls in the Appearance tab in a single column.

```
Note - some properties are only available when the object is selected in
a View (for example, fill colour or line width).
```
## Model Properties

Selecting the top level node for a model in the Model Tree means that you can edit or
view the following properties in the Properties Window.

The Main Tab

Editing the "Main" Properties for an ArchiMate model

Name: The name of the ArchiMate model

File: The file name of the model (read-only)

Purpose: A space to enter a description of the purpose of the model


```
In the "Purpose" text control, URLs that start with "http://" "https://" or
"ftp://" will show as a hyperlink. Pressing the Ctrl / Command key will change
the cursor to a "hand" cursor and you can open the link in a Browser.
```
The Properties Tab

For more information about creating and managing User Properties see User Properties.

Element Properties

Selecting a model element in the Model Tree or in a View means that you can edit or
view the following properties in the Properties Window.

The Main Tab

Editing the "Main" Properties for an ArchiMate Element

Name: (^) The name of the ArchiMate element
Documentation: A space to enter some user documentation relating to the ArchiMate
element
In the "Documentation" text control, URLs that start with "http://" "https://"
or "ftp://" will show as a hyperlink. Pressing the Ctrl / Command key will
change the cursor to a "hand" cursor and you can open the link in a Browser.
The Junction connector has an additional property for type:


The Junction Type property

Type: Can be set to "And" or "Or". Setting this also changes the element's icon.

The Properties Tab

For more information about creating and managing User Properties see User Properties.

The Analysis Tab

Viewing the "Analysis" for an ArchiMate Element

Used in
Views:

```
A table showing the Views (if any) where the selected element is used
(displayed in a diagram). Double-clicking on an entry in the table will
open the View and select the element in the diagram.
```
Model
Relations:

```
A table showing the relationships (if any) to and from the selected
element in the model. Double-clicking on an entry in the table will select
the relationship in the Model Tree window if it is open.
```
Element Appearance Properties

Selecting an element in a View means that you can edit or view additional visual
properties in the Properties Window. Different visual settings can be applied to an
element for each separate occurrence in a View. For example, the element "Application
Service" may be coloured blue in one View, and grey in another View.


The Appearance Tab

Editing the "Appearance" Properties for an ArchiMate Element in a View

This tab is only available when an element is selected in a View.

Fill colour: Sets the fill colour for the selected element. The "Default" button sets the
fill colour to the default setting.

Line colour: Sets the colour of the line used to draw the selected element. The
"Default" button sets the line colour to the default setting. If this is
disabled it is because line colours are derived from the element's fill
colour, as set in Preferences.

Gradient: (^) Sets the direction used to draw the gradient fill of the selected element.
Settings are "None", "Top", Left", "Right" and "Bottom". Note - gradients
will not show when a diagram is exported in SVG image format.
Text
Alignment:
Align text in the selected element to Left, Centred or Right.
Text
Position:
Align text in the selected element to Top, Middle or Bottom.
Font: Sets the font used for the text in the selected element. The "Default"
button sets the font to the default setting as set in Preferences.
Font colour: Sets the colour of the font used for the text in the selected element. The
"Default" button sets the font colour to the default setting.
Fill Opacity: Set the fill opacity of the figure. Range from 0-255.
Outline
Opacity:
Set the outline opacity of the figure. Range from 0-255.


The Label Tab

Adding a Label Expression to display in the View

This tab is only available when an element is selected in a View.

By default, an element's name will be displayed in any View in which it appears. Using a
label expression per View instance, you can choose what is displayed for the element in
the View. For example you may wish to display the element's name and its type. Or you
may wish to display the value of one or more of its properties.

For a full list of expression types please refer to the Archi Wiki.

The Figure Tab

Setting the "Figure" Properties for a Device

This tab is only available when an element is selected in a View and only for certain
figures.

Some elements can be represented by alternate figures. These are:

```
- Application Component
- Application Event
- Application Interface
```

```
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
```
The default figure to use when creating new elements can be set in Preferences.

Relationship Properties

Selecting a model relationship in the Model Tree or in a View means that you can edit or
view the following properties in the Properties Window.

The Main Tab

Editing the "Main" Properties for an ArchiMate Relationship

Name: The name of the relationship. If provided, this will be displayed next
to the connection in a View.

Documentation: (^) A space to enter some user documentation relating to the
relationship.


```
In the "Documentation" text control, URLs that start with "http://" "https://"
or "ftp://" will show as a hyperlink. Pressing the Ctrl / Command key will
change the cursor to a "hand" cursor and you can open the link in a Browser.
```
The Association relationship type has an additional property:

Directed: Can be set to directed or non-directed. Setting this also changes the
connection's arrow-head.

The Access relationship type has an additional property:

Access
Type:

```
Can be set to "Access", "Read", "Write" or "Read/Write". Setting this also
changes the connection's arrow-heads.
```
The Influence relationship type has an additional property:

Strength: Can be set to an appropriate value such as "+", "++", "+++", "-", "--", "---".

The Properties Tab

For more information about creating and managing User Properties see User Properties.

The Analysis Tab

Viewing the "Analysis" Properties for an ArchiMate Relationship

Used in
Views:

```
A table showing the Views (if any) where the selected relationship is used
(displayed in a diagram). Double-clicking on an entry in the table will open
the View and select the relationship (connection) in the diagram.
```

Model
Relations:

```
A table showing the relationships (if any) to and from the selected
relationship in the model. Double-clicking on an entry in the table will
select the relationship in the Model Tree window if it is open. Note - if the
relationship has no incoming or outgoing relationships, the table will be
empty.
```
Relationship Connection Appearance Properties

Selecting a relationship in a View means that you can edit or view additional visual
properties in the Properties Window. Different visual settings can be applied to a
relationship for each separate occurrence in a View. For example, the relationship "Used
By" may be coloured black in one View, and blue in another View.

The Appearance Tab

Editing the "Appearance" Properties for a Relationship in a View

This tab is only available when a relationship is selected in a View.

Show
Label:

```
If selected will show the label if the connection's text is set.
```
Text
Position:

```
Specifies the position of the text that will appear next to the line on the
View. Options are "Source", "Middle" and "Target".
```
Line Width: Sets the width of the connection line. Options are "Normal", "Medium" and
"Heavy".

Line
colour:

```
Sets the colour of the connection line. The "Default" button sets the line
colour to the default setting.
```
Font: Sets the font used for the text in the selected connection. The "Default"
button sets the font to the default setting as set in Preferences.

Font Sets the colour of the font used for the text in the selected connection. The


colour: "Default" button sets the fill colour to the default setting.

The Label Tab

Adding a Label Expression to display in the View

This tab is only available when a relationship is selected in a View.

By default, an relationship's name will be displayed in any View in which it appears.
Using a label expression per View instance, you can choose what is displayed for the
relationship in the View. For example you may wish to display the relationship's name
and its type. Or you may wish to display the value of one or more of its properties.

For a full list of expression types please refer to the Archi Wiki.

View Properties

Selecting a View in the Model Tree or in a View means that you can edit or view the
following properties in the Properties Window.

The Main Tab

Editing the "Main" Properties for a View


Viewpoint: Select the Viewpoint for the View. For more information see
Viewpoints

Name: The name of the View

Documentation: A space to enter some user documentation relating to the View

```
In the "Documentation" text control, URLs that start with "http://" "https://"
or "ftp://" will show as a hyperlink. Pressing the Ctrl / Command key will
change the cursor to a "hand" cursor and you can open the link in a Browser.
```
The Properties Tab

For more information about creating and managing User Properties see User Properties.

The Appearance Tab

Editing the "Appearance" Properties for a View

Connection
Router:

```
Specifies the type of connection router for the whole View. Options
are:
```
```
Manual - Straight line
Manhattan - Routes using an orthogonal connector.
```
```
For more information see Setting the Connection Router Type for
a View
```
View Reference Properties

Selecting a View Reference in a View means that you can edit or view the following
properties in the Properties Window.


The Main Tab

Editing the "Main" Properties for a View Reference

Name: The name of the View

The Appearance Tab

Editing the "Appearance" Properties for a View Reference

Fill colour: Sets the fill colour for the selected object. The "Default" button sets the fill
colour to the default setting.

Line colour: Sets the colour of the line used to draw the selected object. The "Default"
button sets the line colour to the default setting. If this is disabled it is
because line colours are derived from the object's fill colour, as set in
Preferences.

Gradient: Sets the direction used to draw the gradient fill of the selected element.
Settings are "None", "Top", Left", "Right" and "Bottom". Note - gradients
will not show when a diagram is exported in SVG image format.

Text
Alignment:

```
Align text in the selected object to Left, Centred or Right.
```
Text
Position:

```
Align text in the selected object to Top, Middle or Bottom.
```

Font: Sets the font used for the text in the selected object. The "Default" button
sets the font to the default setting as set in Preferences.

Font colour: Sets the colour of the font used for the text in the selected object. The
"Default" button sets the font colour to the default setting.

Fill Opacity: Set the fill opacity of the figure. Range from 0-255.

Outline
Opacity:

```
Set the outline opacity of the figure. Range from 0-255.
```
The Label Tab

By default, an View Reference's name will be displayed in any View in which it appears.
Using a label expression per View instance, you can choose what is displayed for the
View Reference in the View. For example you may wish to display the View Reference's
name and the value of one or more of its properties.

For a full list of expression types please refer to the Archi Wiki.

Folder Properties

Selecting a user-created folder in the Model Tree means that you can edit or view the
following properties in the Properties Window.

The Main Tab

Editing the "Main" Properties for a Folder

Name: The name of the Folder - this can only be edited for user-created sub-
folders.


Documentation: A space to enter some user documentation relating to the folder

```
In the "Documentation" text control, URLs that start with "http://" "https://"
or "ftp://" will show as a hyperlink. Pressing the Ctrl / Command key will
change the cursor to a "hand" cursor and you can open the link in a Browser.
```
The Properties Tab

For more information about creating and managing User Properties see User Properties.

The Label Tab

Here you can set how child objects' labels in a folder are displayed in the Model Tree. By
default, an object's name will be displayed. Using a label expression, you can choose
what is displayed for the element in the Model Tree. For example you may wish to
display the element's name and its type. Or you may wish to display the value of one or
more of its properties. By creating a label expression for a folder, it affects only its child
objects, not the folder itself.

For a full list of expression types please refer to the Archi Wiki.

Note Properties

Selecting a Note in a View means that you can edit or view the following properties in
the Properties Window.

The Main Tab


Editing the "Main" Properties for a Note

Content: The textual content for the Note

The Properties Tab

For more information about creating and managing User Properties see User Properties.

The Appearance Tab

Editing the "Appearance" Properties for a Note

Fill colour: Sets the fill colour for the selected object. The "Default" button sets the fill
colour to the default setting.

Line colour: Sets the colour of the line used to draw the selected object. The "Default"
button sets the line colour to the default setting. If this is disabled it is
because line colours are derived from the object's fill colour, as set in
Preferences.

Gradient: Sets the direction used to draw the gradient fill of the selected element.
Settings are "None", "Top", Left", "Right" and "Bottom". Note - gradients
will not show when a diagram is exported in SVG image format.

Border: Sets the border type. Can be either "Dog Ear", "Rectangle" or "None".

Text
Alignment:

```
Align text in the selected object to Left, Centred or Right.
```
Text
Position:

```
Align text in the selected object to Top, Middle or Bottom.
```
Font: Sets the font used for the text in the selected object. The "Default" button
sets the font to the default setting as set in Preferences.


Font colour: Sets the colour of the font used for the text in the selected object. The
"Default" button sets the font colour to the default setting.

Fill Opacity: Set the fill opacity of the figure. Range from 0-255.

Outline
Opacity:

```
Set the outline opacity of the figure. Range from 0-255.
```
The Label Tab

By default, a Note's text content will be displayed in the View in which it appears. Using
a label expression, you can choose what is displayed for the Note. For example you may
wish to display the Note's content and one or more of its properties.

For a full list of expression types please refer to the Archi Wiki.

Connection Properties

Selecting a Connection in a View means that you can edit or view its properties in the
Properties Window.

The Main Tab

Editing the "Main" Properties for a Connection

Name: The name of the Connection. If supplied this will appear next to the
Connection on the View.

Documentation: A space to enter some user documentation relating to the Connection

The Properties Tab

For more information about creating and managing User Properties see User Properties.


The Appearance Tab

Editing the "Appearance" Properties for a Connection in a View

Show
Label:

```
If selected will show the label if the connection's text is set.
```
Text
Position:

```
Sets the position of the text that will appear next to the line on the View.
Options are "Source", "Middle" and "Target".
```
Line Width: Sets the width of the connection line. Options are "Normal", "Medium" and
"Heavy".

Line
colour:

```
Sets the colour of the connection line. The "Default" button sets the line
colour to the default setting.
```
Line Style: Sets the connection line's source and target head types, and main line
style.

Font: Sets the font used for the text in the selected connection. The "Default"
button sets the font to the default setting as set in Preferences.

Font
colour:

```
Sets the colour of the font used for the text in the selected connection. The
"Default" button sets the font colour to the default setting.
```
The Label Tab

By default, a connection's name will be displayed in the View in which it appears. Using
a label expression, you can choose what is displayed for the connection. For example
you may wish to display the connection's name and one or more of its properties.

For a full list of expression types please refer to the Archi Wiki.


Group Properties

Selecting a Group in a View means that you can edit or view the following properties in
the Properties Window.

The Main Tab

Editing the "Main" Properties for a Group

Name: The name of the Group

Documentation: A space to enter some user documentation relating to the Group

The Properties Tab

For more information about creating and managing User Properties see User Properties.

The Appearance Tab

Editing the "Appearance" Properties for a Group

Fill colour: Sets the fill colour for the Group. The "Default" button sets the fill colour
to the default setting.


Line colour: Sets the colour of the line used to draw the Group. The "Default" button
sets the line colour to the default setting. If this is disabled it is because
line colours are derived from the object's fill colour, as set in Preferences.

Gradient: (^) Sets the direction used to draw the gradient fill of the selected element.
Settings are "None", "Top", Left", "Right" and "Bottom". Note - gradients
will not show when a diagram is exported in SVG image format.
Border: Sets the border type. Can be either "Tabbed" or "Rectangle".
Text
Alignment:
Align text in the selected object to Left, Centred or Right.
Text
Position:
Align text in the selected object to Top, Middle or Bottom.
Font: Sets the font used for the text in the Group. The "Default" button sets the
font to the default setting as set in Preferences.
Font colour: (^) Sets the colour of the font used for the text in the Group. The "Default"
button sets the font colour to the default setting.
Fill Opacity: Set the fill opacity of the figure. Range from 0-255.
Outline
Opacity:
Set the outline opacity of the figure. Range from 0-255.
The Label Tab
By default, a Group's name will be displayed in the View in which it appears. Using a
label expression, you can choose what is displayed for the Group. For example you may
wish to display the Group's name and one or more of its properties.
For a full list of expression types please refer to the Archi Wiki.
User Properties
User Properties can be created and managed from the "Properties" tab in the Properties
Window.
The Properties Tab


User Properties

This tab allows you to add arbitrary User Properties, or attributes, to a concept, model,
folder, or view, or object. For example you may wish to add information such as "Cost",
"Location", "Duration", "Time", "Link" and so on. Properties are stored as name/value
pairs. Properties with the same name may appear more than once in the model or
object. Values are entered as free text.

If the value of a Property starts with "http://", "https://", "file://", or "ftp://" it will show in
blue to denote a hyperlink and an icon will be displayed in the left column. Double-
clicking on the icon will open the link in a Browser.

To Add a New User Property entry:

1. Click on the "New" toolbar button to the right of the Properties table, or select
    "New" from the right-click menu, or double-click in an empty area on the table
2. Edit the Property's name in the table cell. If there are existing Properties with this
    name elsewhere in the Model you can select one of these instead from the
    combo box in the table cell
3. Edit the Property's value in the "Value" cell. If there are existing Properties with
    this value (for this Property name) used elsewhere in the Model you can select
    one of these instead from the combo box in the cell editor

To Change an Existing User Property Name to a New or Existing Name:

1. Click on the Property Name cell in the Properties table and type in the new name
2. If there are existing Properties used elsewhere in the Model you can select one of
    these instead from the combo box in the cell editor


To Remove a Property Entry:

1. Select the Property entry or entries you wish to remove
2. Click on the "Remove" toolbar button to the right of the Properties table, or select
    "Remove" from the right-click menu

```
Note: Adding a new Property to an object in the Properties window means
that it becomes available as a re-usable Property for all objects in the same
model that have User Properties. Removing a Property in the Properties
window only removes it from the selected object. If it is used in other objects
it is still available.
```
To Re-order Property Entries by Drag and Drop:

1. Select the Property entry or entries in the Properties table you wish to re-order
2. Drag and Drop the entries in the in the Properties table to re-arrange them

To Sort the Property Names:

1. Click on the "Name" table column header
2. The Property Names will be sorted alphabetically

To Add a Hyperlink Property Entry:

1. Select the Property entry in the Properties table you wish to use as a hyperlink
2. Edit the value so that it contains a URL that starts with "http://", "https://" or "ftp://"
3. Double-click the icon in the left column to open the link in a Browser

To Add New Property Entries using Existing Property Names:

1. Click on the "New Multiple..." toolbar button to the right of the Properties table, or
    select "New Multiple..." from the right-click menu
2. Select the Properties you wish to add from the dialog
3. Press OK and then edit the new Values in the Properties table


To Manage and View User Properties Globally:

1. Click on the "Manage" toolbar button to the right of the Properties table, or select
    "Manage" from the right-click menu
2. The "Properties Manager" dialog appears showing all used Property keys in the
    Model globally and the number of times they have been used:
3. You can Delete Properties here. All occurrences of the Property and its declared
    Values will be deleted from all objects that use it
4. You can Rename Properties by editing the name in the "New Name" column. All
    occurrences of the Property Name will be renamed in all objects that use it


# The Navigator Window

The Navigator window displays the currently selected model concept and all of its
relationships with other concepts. It is used to display and allow navigation between
connected concepts via their relationships and is used in conjunction with the Model
Tree window and Views.

The Model Tree acts as a "flat" repository for all the elements, relationships and Views in
a model. Views are graphical configurations of those concepts. However, the Navigator
is able to show all of a concept's relationships at the model level regardless of how they
are presented in a View.

To use the Navigator window, select any element or relationship in the Model Tree or in
a View. The Navigator tree will update to reflect the current selection. The tree shows
the "root" selected concept and any relationships that stem from it and any "target"
concepts from those relationships:

The Navigator Window

In the above screenshot the user has selected the element "CRM System". There are
three Realisation relationships between the selected element and the three elements
"Customer Administration Service", "Insurance Application Service", and "CIS". From
these three elements further relationships are shown between them and their target
concepts.

It is possible, therefore, to "drill down" into the Navigator tree and traverse from concept
to concept following it and its child relationships from source to target.

A selected sub-concept can become the "root" concept by either double-clicking on it in
the tree or by clicking on the "Go Into" button on the window's toolbar:


The "Go Into" Button

Conversely, pressing the "Back" button takes you back to the previously selected
concept:

The "Back" button

The "Home" button takes you back to the main root concept that was originally selected:

The "Home" button

By default, the Navigator shows relationships that flow from the source to the target
concept. It is possible to reverse this to show the concept's relations that flow from the
target to the source by clicking on the "Show source relations" button on the window's
toolbar:

Show source relations mode

In the above screenshot the element "CRM System" is the target of the two "Used By"
relationships. So the flow is from "Mainframe" to "Claim Files Service" to "CRM System",
and from "NAS File Server" to "Customer File Service" to "CRM System".


The selected concept can be pinned if required by selecting the pin button in the
Navigator window:

The "pin" button

It is also possible to drag and drop any selected elements and/or relationships from the
Navigator Tree to a View, in exactly the same way as dragging from the Model Tree to a
View (see Adding Elements and Relations from the Model Tree to a View)


# The Visualiser Window

The Visualiser window displays the selected model concept and all of its relationships
with other model concepts in a graphical way. It is the graphical equivalent of the
Navigator. Selecting an element or relationship in the Model Tree, the Navigator or in a
Diagram View will update the selection in the Visualiser.

The Visualiser Window

To use the Visualiser, select any element or relationship in the Model Tree, the
Navigator, or in a View. The Visualiser will update to reflect the current selection. The
Visualiser highlights the selected concept and shows all relationships and any
connected elements. Double-clicking on one of the connected elements allows you to
"Go Into" to the element so that it is the focal central concept, and all of its relationships
and connected concepts are displayed. You can also "Go Into" an element from the
toolbar in the Visualiser window, and also select "Back" to return to the previous
element. Select "Home" on the toolbar to return to the first selected concept.

## Depth

The Visualiser will display the selected concept's connected concepts to a default depth
of one level (immediate connections). To change the depth level of how far the
connections are calculated, select the Depth level from the drop-down menu in the
Visualiser window:

The Visualiser Menu for Depth

## Viewpoint Filter


You can filter the displayed elements in the Visualiser from the "Viewpoint Filter" menu.
This will display only those elements that are permissible in the given Viewpoint. To view
all elements select the "None" Viewpoint. For more information see the Viewpoints
section.

Element Filter

You can filter the displayed type of element in the Visualiser from the "Element Filter"
menu. This will display only the selected element type. To view all element types select
the "All" option.

Relationship Filter

You can filter the displayed relationship in the Visualiser from the "Relationship Filter"
menu. This will display only the selected relationship type. To view all relationship types
select the "All" option.

Direction

This menu item allows you to set whether relationships incoming and outgoing
relationships and their connected elements are displayed. Options are "Both",
"Incoming" and "Outgoing". "Incoming" shows all incoming relationships, "Outgoing"
shows outgoing relationships, while "Both" shows both incoming and outgoing
relationships. This is similar to the functionality in the Navigator.

Options

The first time a focussed concept is displayed in the Visualiser window it is laid out with
a default layout. If you wish to re-layout, you can press the "Layout" button on the toolbar
in the Visualiser window.

You can save the contents of the Visualiser as an image to file, or copy the image to the
system clipboard from the context menu.


# The Hints Window

The Hints window shows a hint for the selected object or palette entry. It can be useful to
provide basic information about the purpose of the concepts and viewpoints in a model.

The selected hint can be pinned by selecting the pin button in the Hints window.

The Hints Window


# The Outline Window

The Outline window acts as a miniature viewport onto the selected diagram View in
order to aid in navigation if the diagram is too large to fit in the window.

To open or close the Outline window, choose the option from the main "Window" menu
or from the main toolbar.

If the View that is being edited is too large to fit into the application's window then a
navigation pane will appear in the Outline window. Dragging this navigation pane will
scroll the objects into view in the drawing canvas.

The Outline Window


# Tools

The following features are available from the main "Tools" menu.


# Generate a View from Elements

You can generate a new diagram View from selected ArchiMate element(s). Selected
ArchiMate element(s) then become the focus of a newly generated View. Any ArchiMate
elements that are related to the selected elements are also added to the generated View
together with any connections.

This feature allows you to quickly create a new View and Viewpoint specifically for one
or more related ArchiMate elements.

To generate a new View from selected element(s):

1. Ensure that you have selected one or more ArchiMate elements in the Models
    Tree or in a diagram View.
2. Select the option "Generate View For..." from the right-click context menu, or
    from the main "Tools" menu.
3. In the dialog window select the target Viewpoint for the generated View. The list
    of available Viewpoints is determined by the selected element(s) and whether
    they are permitted in a Viewpoint. Note also that elements that are related to the
    selected element(s) that are not permitted in the target Viewpoint will not be
    included in the generated View. If you want to include all related elements in the
    target View, or if you are not sure, choose the "None" Viewpoint. You can change
    the Viewpoint later if you wish.
4. If you wish, change the name of the generated View.
5. Optionally check "Add all available connections". If this option is checked, all
    connections between elements are added to the generated View. If unchecked,
    only connections that are directly related to the selected element(s) are added to
    the generated View.
6. Click OK

Generate View Dialog

A new View will be created containing the selected element(s) and their connections.


# Properties Manager

The Properties Manager can be accessed from the "Tools" menu as well as from the
Properties tab. For more information about the Properties Manager see User Properties.


# The Validator

The Validator offers advice and warnings on the integrity of an ArchiMate model. It can
highlight the following issues:

```
- Empty Views (Views without diagram objects)
- Invalid Relations (possible if importing from another format)
- Invalid nested elements (visual nesting without a relationship or relationship
present that does not represent nesting)
- Unused elements (not referenced in a View)
- Unused relations (not referenced in a View)
- Invalid elements in viewpoints (elements that don't belong in a viewpoint)
- Duplicate element names for the same element type
```
The Validator window can be opened from the main "Tools" menu, from the main
toolbar, or from the main "Window" menu.

To validate a model, ensure that the model has the focus by selecting it in the Models
Tree or selecting one of the model's Views. Then either select "Validate Model" from the
"Tools" menu, or from right-clicking in the Models Tree, or in the Validator window itself.

The Validator showing tips

Double-clicking on an issue, or selecting the right-click menu item "Reveal Object" in the
Validator window, will reveal the affected object in either the Models tree or a View.

To show an explanatory hint about the issue, ensure the Hints window is open, or select
the right-click menu item "Show Explanation Hint".

Once all issues have been fixed in the model the Validator will indicate that everything is
OK:


The Validator is happy

Preferences

Each of the validation rules can be enabled or disabled in Preferences.


# Preview HTML Report

The Preview HTML Report allows you to view a generated HTML report of the currently
selected model in a tab within Archi itself. The ability to save the HTML report is
available from the File->Report menu. For more information see HTML Reports

Preview HTML Report

The Preview HTML Report allows you to view a generated HTML report in a tab within
Archi itself.


# Opening, Saving and Printing

## Opening an Existing Model

To open an existing ArchiMate model that has been created in Archi, choose the
"Open..." menu item from the main "File" menu or from the main toolbar. If the model is
already open in Archi, this command has no effect.

You can also drag an ".archimate" file from the desktop onto the Model Tree window to
open it.

The Windows and Mac versions of Archi support opening the application from the
desktop by opening files with the ".archimate" file extension.

## Saving a Model

A model can be saved to disk from the "Save" menu item available from the main "File"
menu or from the main toolbar. If the model has not been previously saved you will be
prompted for a file name.

The "Save As..." menu command allow you to save the model with a different name.

## Closing a Model in the Model Tree

It is possible to have more than one ArchiMate model open at the same time in the
Model Tree. You may wish to close one or model so that it does not appear in the Model
Tree. This is achieved by right-clicking the model in the Model tree and selecting the
"Close Model" menu item or selecting the "Close Model" menu item from the main "File"
menu. Closing a model does not delete the model and it may be re-opened in Archi at
any time from the "Open" command. If the model has been modified you may be
prompted to save it before closing it.

## Printing A View (Diagram)

A View (diagram) can be printed to a connected printer. This is available from the
"Print..." menu command in the main "File" menu. This menu command is only available
if a View is open.


# Exporting and Importing the Model in CSV Format

## Export Model To CSV

You can export a model's data to CSV format (Comma Separated Values). The data is
exported in three different files - "elements.csv", "relations.csv" and "properties.csv". All
data objects are identified by unique identifiers so that a property will reference an
element or relation in the other files.

This option is available from the "Export Model To CSV..." menu item from the main
"File->Export" menu. Once a model is selected in the Model Tree or in a View this menu
item is enabled.

Exporting the model to CSV

The CSV field format for elements is - "ID", "Type", "Name", "Documentation"

The CSV field format for relations is - "ID","Type", "Name", "Documentation", "Source",
"Target"

The CSV field format for properties is - "ID", "Key", "Value"

## Export Options

Output Folder
Select the folder for the output files.

Delimiter
Select the CSV field delimiter character - comma, semicolon, or tab.


File prefix
Provide an optional prefix to add to the file names. For example, "MyModel-" will change
the file names to "MyModel-elements.csv", "MyModel-relations.csv", and "MyModel-
properties.csv".

File encoding
Select the file encoding to use - ANSI, UTF-8 or UTF-8 BOM. Some programs prefer
one or the other file encoding. For example, MS Excel prefers the "UTF- 8 BOM"
encoding if Unicode characters are present in the CSV file.

Strip newline characters
If selected will remove all newline characters from multi-line text such as documentation.

Excel compatible
If selected will surround text starting with a zero or space with quote marks so that the
data imports correctly into Excel. Also, any text field that starts with a "=", "+", "-", or "@"
character will be prefixed with a space so that Excel does not interpret it as a formula.

Importing CSV Data into a Model

You can also import CSV data into an existing model. The CSV files need to be in the
same format as described above. Element and relationship IDs are optional, but you
need to provide an ID for an element or relationship if it is referenced by another concept
or property. If providing an ID then it needs to be unique to the file using alpha-numeric
characters, for example - "id1", "8fe456d", "actor3". If an ID is not provided, a blank field
"" should be present. In this case, an ID will be generated on import.

When importing CSV data into an existing model you can provide just one or all three
files (elements, relations, properties). Usually you will provide all three files. The format
of the files is as follows:

"xxx-elements.csv"
"xxx-relations.csv"
"xxx-properties.csv"

The prefix ("xxx") is optional but must be the same for all three files if used. All three file
names need to match - for example: "myname-elements.csv", "myname-relations.csv"
and "myname-properties.csv". At the very least, the filenames need to contain the ".csv"
extension and the names end with "elements", "relations" or "properties".

The best way to understand the required format is to export an existing model to CSV
format, and open the resulting files in a text editor, or spreadsheet application


When importing the CSV file(s) into Archi you can select any of the three CSV files in the
Import dialog box. If there are corresponding "*.csv" files then these file(s) will be
automatically imported at the same time.

It is also possible to merge/update the imported CSV data into an existing model. If a
model concept already exists as denoted by its ID, and the CSV row entry contains
different data to that in the model it is updated. For example, a Business Actor with id
"9240f5bf", named "BA1", and no documentation can be updated with a row entry as
follows:

"ID","Type","Name","Documentation"
"9240f5bf","BusinessActor","New Name","Additional Documentation"

You can import just one or two CSV files into an existing model. If you import just an
"elements.csv" file then only elements will be imported. If you then import a
"relations.csv" file that uses the corresponding concept IDs you can import just the
relations. The same is true for the "properties.csv" file.

If you are manually creating CSV files make sure you save them using UTF-8 format to
preserve all special characters.

Note - it is currently not possible to import and export View diagram information in CSV
format.


# Importing Another Model into the Current Model

It is possible to import and merge another Archi model into the currently selected model.
You can then maintain the imported model as a reference model that you can update
separately and re-import as required.

Some things to consider when importing another model:

```
- Model objects are uniqely referenced by their type and identifier. When importing
a model, these are used to match the imported objects to the target objects.
- All User Properties for an object are replaced when importing, there is no
merging at this level.
- Some changes in the imported model might affect connections in Views if
relationships are changed or deleted. These are reported in the status dialog
after import.
- Existing target objects and folders will not be deleted even if these are deleted
from the imported model.
```
## Importing another Archi model

To import another Archi model into the currently selected model select "Import an Archi
model into the currently selected model" from the main "File" menu. The following dialog
will appear:

Importing another model

## Import Options

Update existing objects and folders
If this is selected then any existing target objects and folders will be updated when
importing.

Update model information and top-level folders
If this is selected then if there are any changes to the model node (Name,


Documentation, Properties) these will be udpated. If theres are changes to any top-level
folders (Documentation, Properties) these will also be updated.

Show Status Dialog after importing
If this is selected then a status dialog is shown after importing a model. This will list what
was updated or changed.


# The Open Group Exchange File Format

The Open Group standard defines a standard file format that supports exchange of
ArchiMate models between tools. The scope of the standard is restricted to the elements
and the relationships of an ArchiMate model. It excludes features that are vendor-
specific, although addresses how these can be accommodated. The exchange file
format contains basic model information including:

```
- Objects of all ArchiMate types with basic attributes
- Relationship details between objects
- Diagrammatic information (Phase 2)
```
The exchange file format is not intended as a persistent file format for the model itself, it
is a mechanism to convey instance data from one tool to another. The data contained in
the exchange file format is meant to be processed by an "ArchiMate aware" tool, thus
ruling out standalone semantic inference. Once the instance data has been imported
into an ArchiMate tool, that tool will probably save it in its own proprietary file format.

## Exporting and Settings

To export an Archi model to an Open Exchange Format file, select the menu item "File-
>Export->Model To Open Exchange File...".

## Options

Include Folder Organization
If this is checked then the organisational structure of the model's elements' and relations'
folders is included in the exported file.

Validate after export
If this is checked then the exported XML file is validated against the Schema XSD files
as a final check.

Copy XSD schema file to target location
If this is checked then the ArchiMate Open Exchange format XSD files are copied to the
same location as the output file.

Language code
Sets the two letter language code for string values as defined in ISO 639.

## Adding Metadata

You can also include basic Dublin Core Metadata in the XML exchange file.


Each model can be further described by the use of Metadata. This constitutes an
optional set of elements that can be used to describe the model itself. The use of
metadata to further describe a model can be useful to assert such things as publisher,
rights and usage, copyright, and licensing. The Dublin Core Metadata Element Set
consists of 15 metadata elements:

Title A name given to the resource.

Creator An entity primarily responsible for making the resource.

Subject (^) The topic of the resource.
Description An account of the resource.
Publisher An entity responsible for making the resource available.
Contributor An entity responsible for making contributions to the resource.
Date A point or period of time associated with an event in the lifecycle of the
resource.
Type The nature or genre of the resource.
Format The file format, physical medium, or dimensions of the resource.
Identifier An unambiguous reference to the resource within a given context.
Source A related resource from which the described resource is derived.
Language A language of the resource.
Relation A related resource.
Coverage The spatial or temporal topic of the resource, the spatial applicability of the
resource, or the jurisdiction under which the resource is relevant.
Rights Information about rights held in and over the resource.
If all the fields are left blank then no Metadata is included in the exported XML file.
Importing from an Open Exchange XML file
To import an Open Exchange Format file, select the menu item "File->Import->Open
Exchange XML Model...". Select and open the required XML file. This will create a new
ArchiMate model in the Models Tree.


# Reporting

Archi is able to produce two types of reports from ArchiMate models:

HTML Reports

Jasper Reports


# HTML Reports

Archi supports web-based reporting functionality by means of generating HTML pages
containing a model tree, summary tables of the model objects and the Views in a model.

This option is available from the "Report->HTML..." menu item from the main "File"
menu. Once a model is selected in the Model Tree or in a View this menu item is
enabled. Select a folder to export the model and its Views.

A single HTML page, "index.html" is generated in the chosen output folder, together with
supporting files and image files for the Views in the model.

A generated HTML Report


# Jasper Reports

Jasper Reports is the world's most popular Java reporting engine. Combine data
sources and produce pixel-perfect documents that can be viewed, printed, or exported
into a variety of document formats with this powerful reporting tool. Archi can export
models in various formats using Jasper Reports Templates.

This option is available from the "Report->Jasper..." menu item from the main "File"
menu. Once a model is selected in the Model Tree or in a View this menu item is
enabled. Provide the details in the following wizard page:

Jasper Reports wizard page 1

And then in the next wizard page, choose the report template that you prefer, and also
the locale if you have provided localised language strings for the report template:

Jasper Reports wizard page 2


Customisable Report

If you choose the "Customizable Report" template when exporting, then you can set
various properties for the report's layout if you base your model on the "Customizable
Report" model template when creating a new model. See "Creating a New Model from a
Template" for more details.

By setting certain properties in the model that is based on the "Customizable Report"
model template you can fine tune the output. When you create a new model based on
the "Customizable Report" model template there is a View called "_README_" that lists
the properties.

Custom report properties

User Report Templates

If you wish to create your own custom Jasper Report templates you can place these in
the folder named "jasper-reports" in the application preference folder. You can change
the location of this folder in Preferences. Alternatively, you can manually select a
template file ("main.jrxml") from the "Choose..." combo option.


An example folder structure for a custom report:

C:\Users\Bagpuss\Application Data\Archi\jasper-reports
|------My Custom Report
|------
main.jrxml
|------
style.jrxt
|------
other files...

For more information on creating custom Jasper Reports please refer to the developer
section of the Archi website.

Output

The following is an example of a PDF format report:

Part of a Generated Jasper Report in PDF format


# Templates

Archi supports the use of re-usable ArchiMate models, or templates. A template is a
model that has been saved in an archive file with the extension "*.architemplate". Further
information describing the template and optional thumb-nail images of the model's Views
is also contained in the template file. Templates are convenient starting points for
creating new models.

## Creating a New Template

To create a new template follow these steps:

1. Create a new Archi model or open an existing model that you have created and
    edit it so that it as you want the template to be.
2. Make sure the model you wish to save as a template is open and selected in the
    Model Tree.
3. Choose the "File->Save As Template..." menu item from the main menu. A
    wizard will open:
4. In the wizard, provide a file name for the location for the template file, a name for
    the template (this is different than the name of the model) and a description.


5. Select whether you want to include thumbnail images of the Views in the model
    template. If you choose to include thumbnails of the Views in the template choose
    which of the images will be the "key" thumbnail. This will be the first thumbnail
    image displayed in the "New Model from Template" wizard.
6. Click "Next" to move on to the next page of the wizard:
7. Choose whether you wish to add the template to your collection. Your collection
    of templates is a list sorted into categories that will be displayed in the "New
    Model from Template" wizard. If there are no categories available to choose from
    you can create a new category by clicking on the "New..." button in the wizard.
8. Press "Finish".

The template will be saved on your file system with an "*.architemplate" extension. You
can share this template with other Archi users if you like.

Creating a New Model from a Template

To create a new Model based on an existing template follow these steps:

1. Choose the "File->New->Model From Template..." menu item from the main
    menu. A wizard will open:


2. Choose the desired template. Some are provided in the "Installed Templates"
    section while user-created templates are listed in their categories in the "My
    Templates" section (see "Creating a New Template"). The selected template's
    name and description are displayed in the Gallery's preview window.
3. You can preview all of the thumbnail images for a template by moving your
    mouse from side to side across the thumbnail image in the Gallery. You can also
    resize the images in the Gallery by using the resize slider control.
4. If you wish to open a template from file that is not shown in the wizard select the
    "Open..." item. A file dialog will allow you to choose a "*.architemplate" template
    file.
5. Press Finish. A new model is created and added to the Model Tree. The Model's
    name is prefixed with "(new)".

Managing your Templates

You store templates on your file system as "*.architemplate" files. These can be stored
anywhere on your local filing system. Archi allows you to create user collections that
point to these templates. These are shortcuts to the actual templates. To manage your
collection of templates follow these steps:

1. Choose the "File->New->Model From Template..." menu item from the main
    menu. A wizard will open:


2. Select "Manage..." from the "Templates" section on the left of the wizard. A dialog
    window will open:


3. This dialog allows you to add, rename and remove new template categories, and
    also to add templates from file to your collection. You can also edit and change
    the name and description of each template.
4. To add a template from file, click on the "Add Template..." button. Choose the
    "*.architemplate" file from the file dialog that appears.
5. To add a new template category, click on the "New Category..." button. Provide a
    name for the category.
6. To add templates to a category, drag and drop a template entry from the
    "Templates" table to a category folder in the "Categories" tree. Note that a
    template can appear in more than one category folder.


# Relationships in ArchiMate

You can view all of the legal ArchiMate relationships between entities. You can access
this window from the Help | ArchiMate Relationships menu item. These are read-only
and for informational purposes only.

Relationships matrix


# The Sketch View

The Sketch View is an experimental feature of Archi. The idea behind the Sketch View is
inspired by the ArchiMate specification document defining an "Introductory viewpoint":

```
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
```
This is in some ways similar to Marc Lankhorst's description of modelling processes
using conversation techniques whose aim is to capture the essence of the model:

```
"In architecture development, we find a number of common conversation
techniques where it concerns the communication of architectural models:
```
- Brown-paper session: Structured brainstorm-like group session (up to
about 15 people) in which items (keywords or short phrases) are elicited
from the individuals in the group in answer to a question such as: 'What
are the key functionality issues in our current IT architecture?' Typically,
every individual item is written on a small adhesive note ('Post-It'). The
items are then collected on a sheet of paper (traditionally of the cheap
brown kind) and, by means of an open and creative group process,
structured and categorised. This may involve adding, deleting, merging, or
changing items. Usually, a mediator or facilitator is involved." - Marc
Lankhorst et al. "Enterprise Architecture at Work", Second Edition, p.82

In Archi it is possible to create a "Sketch View". To add a new Sketch View to the model,
right-click on the "Views" folder in the Model Tree and select "New->Sketch View" from
the context menu:


Adding a new "Sketch" View

Once the Sketch View has been added to the model it can be opened from the tree by
double-clicking on it. Any number of Views can be added to a model and be open at the
same time. Views are arranged in tabs in the main area of the application window.

An example Sketch View

You can add new "Stickies" (Post-Its) to the View, an "Actor" figure and three types of
connection. There are no rules as to what the relationships or stickies mean. All objects
can be edited in the Properties Window. You are free to capture a sketch of your model
and then later convert it into a fully constrained ArchiMate model and View.

Double-clicking a Sticky opens the Properties Window, clicking on a selected Sticky
allows you to directly edit the Sticky's text.

It is possible to set the default background image in Preferences if you wish, and to set
the background for each Sketch view in the "Appearance" tab of the Properties Window:


Sketch View background options

Later versions of this feature would hopefully allow you to:

```
- Transform the Sketch into a full ArchiMate View by means of parameters and
queries
- Record the modelling conversation in Archi to better capture the purpose of the
Sketch
```

# The Canvas Modelling Toolkit

The Canvas Modelling Toolkit is an extension to Archi somewhat akin to the Sketch
View that provides the tools for you to create and edit a "Canvas" such as the Business
Model Canvas. With the Canvas Modelling Toolkit you can design and create re-usable
Canvas Templates to share with colleagues or simply or you can use it as a pre-design
tool to sketch out ideas and models. You can also link to other Views in your model so
you could, for example, link from an ArchiMate View to a Business Model Canvas View
to provide a Business Plan.

The Business Model Canvas in Archi

The Business Model Canvas is licensed under the Creative Commons Attribution-Share
Alike 3.0 Unported License

## Getting Started

The quickest way to get started with the Canvas Modelling Toolkit is to create a new
Canvas based on an existing template. We'll create a new Business Model Canvas.

1. Create a new Empty Model in the Model Tree. See the instructions here for how
    to do this.
2. Select the "Views" folder on the Model Tree, right-click on it and select "New-
    >Canvas from Template..."


3. A wizard dialog window will open. Select the "Business Model Canvas" template
    from the templates in the "Installed Templates" section:
4. Press "Finish". A new "Business Model Canvas" View will appear in the Model
    Tree where you can edit the default name. The View itself will be open ready for
    you to edit:


The Canvas consists of 9 empty "Blocks". Each Block acts as container that can contain
"Stickies" and other objects that are added from the Palette. Each Block is currently
locked so that you cannot move or resize it. Effectively, the Blocks act as backdrop
containers. Each Block also has a textual "hint" associated with it that show in the Hints
Window.

Add "Stickies" from the Palette and edit the text in the Sticky to create your Canvas
model:

Adding "Stickies" to the Canvas

The Business Model Canvas is licensed under the Creative Commons Attribution-Share
Alike 3.0 Unported License


Getting into the Details

The main components and concepts that constitute a Canvas are Blocks, Stickies,
Images, Connections, Hints and Locking. A Canvas template typically consists of a
number of (locked) Blocks and Images onto which the user can add Stickies, Images,
Connections and additional Blocks if required. The following sections will describe each
of these concepts in detail starting with a description of the Canvas Palette and an
example of constructing an imaginary Canvas.

The Canvas Palette

When working with a Canvas, the Palette presents you with the tools that you need to
create these objects.

The Canvas Palette

Select a tool in the Palette and draw it onto the Canvas. The coloured squares represent
"Stickies". Note that you are not restricted to the provided colours as you can change the
colour of the Sticky in the Properties Window. Similarly with the provided Connections,
you can change the line and arrow head style of a Connection in its Properties Window.

Constructing a new Canvas - an Example

Let's work through the process of constructing our own Canvas based on mapping Past,
Present and Future concepts.

Assuming that you have a model selected in the Model Tree follow these steps:

1. Right click on the "Views" folder of your model on the Model Tree and select
    "New->Blank Canvas":


2. The Blank Canvas View will automatically open. You can rename it at this point in
    the Model Tree if you wish.
3. From the Palette select the Block tool and draw a tall rectangular Block on the
    Canvas. Edit its text content by clicking on it and changing it to "Past":
4. Create two more Blocks named "Present" and "Future" adding them to the
    Canvas so that they line up as follows:


5. Now let's add some icons to these Blocks to make them visually more appealing.
    Double-click on the first Block to open the Properties Window. In the Properties
    Window select the "Image" tab. Then select the "Choose..." drop-down box and
    the "Set Image..." item:

```
When the "My Images" Image Manager dialog window opens, select the "Open
from File..." option and choose an appropriate image from your computer's file
system. Do the same for the other Blocks.
```
6. Here's how it looks so far with the images that we have selected for the three
    Blocks:


7. Now that we have constructed our three main Blocks we could take this
    opportunity to change their background colour, their text fonts and positions in the
    Properties Window. But for now let's add an Image underneath the Blocks. From
    the Palette select the Image tool and draw a rectangular Image place-holder on
    the Canvas right underneath the Blocks. Double-click on the Image place-holder
    to open the Properties Window. In the Properties Window on the "Main" tab
    select the "Choose..." drop-down box and the "Set Image..." item, as you did
    before for a Block, and select an appropriate image from your computer's file
    system. Then from the "Appearance" tab set the border to "None". The Canvas
    now looks like the following:


Adding Hints and Locking

For the finishing touches let's add some Hints to the Blocks and then lock them so that
we can re-use the Canvas as a Template. Why do we want to add Hints to the Blocks?
Well, as with the other objects in Archi models it's extremely helpful to provide a rubric
that suggests to the end user the intent of the object and how it can be used in the
model. Let's add the hints:

1. First ensure that the Hints Window is open. You can open it from the main
    "Window" menu.
2. Double-click on the first Block (the "Past" Block) in order to open the Properties
    Window.
3. In the Properties Window select the "Hint" tab.
4. Type "Past" for the Hint title, and some text for the Hint Content. Note that you
    can use HTML to mark up your content text. Here's what it looks like now:


5. Add Hints for the other Blocks.
6. Now let's lock all these objects so that we can use the Canvas. Select each Block
    and the Image in turn. In the Properties Window tick the "Locked" checkbox:

Now that we have created the Blocks, added an Image, provided the Hints and locked
the objects we can save the whole thing as a Canvas Template and then create new
instances of the Canvas from the template. See the sections "Saving a Canvas as a
Template" and "Creating a New Canvas from a Template" to do this.

Creating a new Canvas instance from the template means we can now start using it for
real:


Our imaginary Canvas

For more ideas, look at how the built-in Canvas templates are constructed for further
examples. See the section "Creating a New Canvas from a Template".

```
Archi uses a different file format for "*.archimate" files when adding
Canvasses that contain images.
Normally Archi saves "*.archimate" files as single plain text XML format files.
However, when images are used in a Canvas the file format used is a binary
archive file (zip format) that contains both the model's XML file and any
image files. This is to keep all related files together ensuring that you don't
have to worry about managing the image files.
```
Canvas Block

A Block object is a container area that can contain text and an icon. You can also
provide your own Help Hints. You can lock the Block if you want to make it read-only. A
typical scenario is to create a number of container Blocks on the Canvas, arrange them
into the desired framework, lock them, and then save the Canvas as a template.


Properties

Selecting a Block in a Canvas View means that you can edit or view the following
properties in the Properties window.

The Main Tab

Main Properties for a Canvas Block

Locked: Selecting this ensures that the Block cannot be moved or edited.

Content: A space to enter some text content for the Block. The text will show up in the
Block.

The Properties Tab

For more information about creating and managing User Properties see User Properties.

The Hint Tab

Hint Properties for a Canvas Block

Hint Title: The title of the Hint to be displayed in the Hints window when the Block is
selected.

Hint A space to enter some text content for the Hint to be displayed in the Hints


Content: window when the Block is selected.. HTML tags are permitted.

The Appearance Tab

Appearance Properties for a Canvas Block

Fill colour: Sets the fill colour for the selected object. The "Default" button sets the
fill colour to the default setting.

Border
colour:

```
Sets the colour of the border used for the selected object. The "None"
button removes the border from the object.
```
Text
Alignment:

```
Align text in the selected object to Left, Centred or Right.
```
Text
Position:

```
Align text in the selected object to Top, Middle or Bottom.
```
Font: (^) Sets the font used for the text in the selected object. The "Default"
button sets the font to the default setting as set in Preferences.
Font colour: Sets the colour of the font used for the text in the selected object. The
"Default" button sets the font colour to the default setting.
Fill Opacity: Set the fill opacity of the figure. Range from 0-255.
Outline
Opacity:
Set the outline opacity of the figure. Range from 0-255.
The Image Tab


Image Properties for a Canvas Block

Preview: A preview image that shows how the image will appear. Images are resized
to a maximum width and height of 100 pixels. Double-clicking the Preview
box will launch the Image Chooser dialog window. You can also drag and
drop an image file from the desktop onto the Preview box.

Image: Select an image for the object or clear the image. See "Adding Images to
Objects" for more details

Position: Sets the position of the image relative to the object.

Canvas Sticky

A Sticky object can contain text and an icon. You can lock the Sticky if you want to make
it read-only. There are a number of ready-coloured Stickies available in the Palette, but
you can always change the colour in the Properties window.

Properties

Selecting a Sticky in a Canvas View means that you can edit or view the following
properties in the Properties window.

The Main Tab

Main Properties for a Canvas Sticky


Locked: Selecting this ensures that the Sticky cannot be moved or edited.

Content: A space to enter some text content for the Sticky. The text will show up in the
Sticky.

Notes: A space to enter some text notes for the Sticky. Any notes will appear in the
tooltip for the Sticky.

The Properties Tab

For more information about creating and managing User Properties see User Properties.

The Appearance Tab

Appearance Properties for a Canvas Sticky

Fill colour: (^) Sets the fill colour for the selected object. The "Default" button sets the
fill colour to the default setting.
Border
colour:
Sets the colour of the border used for the selected object. The "None"
button removes the border from the object.
Text
Alignment:
Align text in the selected object to Left, Centred or Right.
Text
Position:
Align text in the selected object to Top, Middle or Bottom.
Font: Sets the font used for the text in the selected object. The "Default"
button sets the font to the default setting as set in Preferences.
Font colour: (^) Sets the colour of the font used for the text in the selected object. The
"Default" button sets the font colour to the default setting.
Fill Opacity: Set the fill opacity of the figure. Range from 0-255.
Outline
Opacity:
Set the outline opacity of the figure. Range from 0-255.


The Image Tab

Image Properties for a Canvas Sticky

Preview: A preview image that shows how the image will appear. Images are resized
to a maximum width and height of 100 pixels. Double-clicking the Preview
box will launch the Image Chooser dialog window. You can also drag and
drop an image file from the desktop onto the Preview box.

Image: Select an image for the object or clear the image. See "Adding Images to
Objects" for more details

Position: Sets the position of the image relative to the object.

Canvas Image

An Image object is a place-holder for an image. You can lock the Image object if you
want to make it read-only. Images can be any size but we suggest that you keep them
reasonably small so as not to consume too many resources.

```
When resizing an image with the mouse you can hold the Shift key at the
same time in order to maintain its aspect ratio. Alternatively, you can select
the image object and select the "View->Position->Reset Aspect Ratio" menu
item (also available on the toolbar).
```
Properties

Selecting an Image in a Canvas View means that you can edit or view the following
properties in the Properties window.

The Main Tab


Main Properties for a Canvas Image

Locked: Selecting this ensures that the Image cannot be moved or edited.

Image: Select an image for the object or clear the image. See "Adding
Images to Objects" for more details.

Documentation: (^) A space to enter some user documentation relating to the Image.
The Properties Tab
For more information about creating and managing User Properties see User Properties.
The Appearance Tab
Appearance Properties for a Canvas Image
Border
colour:
Sets the colour of the border used for the selected object. The "None"
button removes the border from the object.
Fill Opacity: Set the fill opacity of the figure. Range from 0-255.
Outline
Opacity:
Set the outline opacity of the figure. Range from 0-255.
Canvas Connection
Selecting a Connection in a Canvas means that you can edit or view its properties in the
Properties Window.


Properties

Selecting a Connection in a Canvas View means that you can edit or view the following
properties in the Properties window.

The Main Tab

Editing the "Main" Properties for a Connection

Locked: Selecting this ensures that the Connection cannot be moved or
edited.

Name: The name of the Connection. If supplied this will appear next to the
Connection on the View.

Documentation: A space to enter some user documentation relating to the Connection

The Properties Tab

For more information about creating and managing User Properties see User Properties.

The Appearance Tab

Editing the "Appearance" Properties for a Connection in a Canvas


Show
Label:

```
If selected will show the label if the connection's text is set.
```
Text
Position:

```
Sets the position of the text that will appear next to the line on the View.
Options are "Source", "Middle" and "Target".
```
Line Width: Sets the width of the connection line. Options are "Normal", "Medium" and
"Heavy".

Line
colour:

```
Sets the colour of the connection line. The "Default" button sets the line
colour to the default setting.
```
Line Style: Sets the connection line's source and target head types, and main line
style.

Font: Sets the font used for the text in the selected connection. The "Default"
button sets the font to the default setting as set in Preferences.

Font
colour:

```
Sets the colour of the font used for the text in the selected connection. The
"Default" button sets the font colour to the default setting.
```
The Label Tab

By default, a connection's name will be displayed in any View in which it appears. Using
a label expression per View instance, you can choose what is displayed for the
connection in the View. For example you may wish to display the connection's name and
its type. Or you may wish to display the value of one or more of its properties.

For a full list of expression types please refer to the Archi Wiki.

Adding Images to Objects

Canvas Blocks, Image place-holders and Stickies can contain images. The images in
Blocks and Stickies are icons and are resized to a maximum width and height of 100
pixels. Images can be any size but we suggest that you keep them reasonably small so
as not to consume too many resources.

To add an image to one of these objects, open the Properties window and select the
object. Double-clicking the object on the Canvas will also open the Properties window.
Find the Image tab in the Properties window and select the Image Chooser with the "Set
Image..." option:


Selecting the Image Chooser from the Properties window

This will open the "My Images" Image Chooser dialog window:

The Image Chooser dialog window

All images that are contained in any loaded models are displayed in the Chooser so that
you can re-use them. If you wish to open an image file from your computer select the
"Open from File..." option.

```
You can drag and drop Image files from the desktop to the Canvas.
```
Removing an image from an object

To remove an image from an object select the "Remove Image" option from the Image
Chooser.

Saving a Canvas as a Template

To Save an existing Canvas as a template follow these steps:


1. Create a new Canvas or open an existing model containing a Canvas.
2. Select the Canvas in the Model Tree, right-click on it and choose "Save Canvas
    as Template...". A wizard will open:
3. In the wizard, provide a file name for the location for the template file, a name for
    the template (this is different than the name of the model) and a description.
4. Select whether you want to include a thumbnail image of the Canvas in the
    template.


5. Click "Next" to move on to the next page of the wizard:
6. Choose whether you wish to add the template to your collection. Your collection
    of templates is a list sorted into categories that will be displayed in the "New
    Canvas from Template" wizard. If there are no categories available to choose
    from you can create a new category by clicking on the "New..." button in the
    wizard.
7. Press "Finish".

The template will be saved on your file system with an "*.archicanvas" extension. You
can share this template with other Archi users if you like.

Creating a New Canvas from a Template

To create a new Canvas based on an existing template follow these steps:

1. Select the "Views" folder for the chosen Model in the Model Tree, right-click on it
    and select "New->Canvas from Template..." A wizard will open:


2. Choose the desired template. Some are provided in the "Installed Templates"
    section while user-created templates are listed in their categories in the "My
    Templates" section (see "Saving a Canvas as a Template"). The selected
    template's name and description are displayed in the Gallery's preview window.
3. You can resize the thumbnail images in the Gallery by using the resize slider
    control.
4. If you wish to open a template from file that is not shown in the wizard select the
    "Open..." item. A file dialog will allow you to choose a "*.archicanvas" template
    file.
5. Press Finish. A new Canvas is created and added to the "Views" folder in the
    Model Tree where you can edit the default name. The View itself will be open
    ready for you to edit.

Managing your Canvas Templates

You store Canvas templates on your file system as "*.archicanvas" files. These can be
stored anywhere on your local filing system. Archi allows you to create user collections
that point to these templates. These are shortcuts to the actual templates. To manage
your collection of templates follow these steps:

1. Select the "Views" folder for the chosen Model in the Model Tree, right-click on it
    and select "New->Canvas from Template..." A wizard will open:


2. Select "Manage..." from the "Templates" section on the left of the wizard. A dialog
    window will open:


3. This dialog allows you to add, rename and remove new template categories, and
    also to add templates from file to your collection. You can also edit and change
    the name and description of each template.
4. To add a template from file, click on the "Add Template..." button. Choose the
    "*.archicanvas" file from the file dialog that appears.
5. To add a new template category, click on the "New Category..." button. Provide a
    name for the category.
6. To add templates to a category, drag and drop a template entry from the
    "Templates" table to a category folder in the "Categories" tree. Note that a
    template can appear in more than one category folder.


# Preferences

The Preferences for Archi are available from the "Preferences" menu item. Preferences
are as follows.


# Appearance, Colours, and Fonts Preferences

## Appearance

Enable Theming
If selected, themes are enabled or disabled. A restart will be required for this change to
take effect.

Theme
Choose the theme to use for Archi. A restart will be required for this change to fully take
effect.

Use round tabs
Whether to use round or square tabs.

Show Status Bar
Show or hide the status bar. A restart will be required for this change to take effect.

## Colours

Choose the default colours to use for elements, connections and folders. These are the
colours that will be displayed when a fill or line colour is set to "Default" in the Properties
window for a diagram element or connection. The default colours can be set differently
for each installation of Archi so, for example, one user can have a completely different
set of default fill colours than another user. The colours will not be saved in the
.archimate model file unless the option to "Save the default fill colour for a new concept
in the .archimate file" is ticked. Folder colours are global for the application and are not
saved in the model.

Derive element line colours from fill colours
If this is checked a diagram element's line colour is derived as a darker shade of its fill
colour. You can adjust the amount of contrast with the "Contrast factor" control. If this
option is set, user line colours are ignored.

Save the default fill colour for elements in the model file
If this is checked an element's default colour is saved in the model file and will then be
"fixed" in the file. This ensures that if the file is shared with another user they will see
these colours.

Edit
Edit the selected colour(s).


Reset
Reset the selected colour(s) to default value.

Import Scheme
Import a colour scheme that has previously been exported.

Export Scheme
Export a colour scheme to share with other users.

Fonts

Sets the default font to use elements and connections in diagrams (Views) and fonts to
use for various user interface controls. Clicking the "Default" button sets the default font
for the selected items. The "Edit" button will allow you to set the font for the selected
items.


# Canvas Modelling Toolkit Preferences

## General

Enable Canvas Modelling Toolkit
If this is unchecked, the Canvas Modelling Toolkit menu items will not be present in the
Model Tree.


# Connections Preferences

## Connections

## Magic Connector

Show Elements first (Use the Ctrl/Command key to swap)
When clicking from the Magic Connector onto the empty View canvas show Elements
first then Connections in the popup menus. Holding the Ctrl / Command key at the same
time will reverse this.

Show Connections first (Use the Ctrl/Command key to swap)
When clicking from the Magic Connector onto the empty View canvas show Connections
first then Elements in the popup menus. Holding the Ctrl/Command key at the same time
will reverse this.

## Drawing

Use anti-aliasing on connections
On Windows and Linux operating systems ensures that connections are drawn more
smoothly.

Use orthogonal connection anchors
If this is ticked then a new method to calculate the anchor point for a connection is used
(the position where a connection connects to a figure). By default (option not ticked), the
anchor point is computed as the intersection of the figure's border and the connection
targeting the figure's centre. With this option, the anchor point is computed to make the
connection either a vertical or horizontal line (if this not possible, it connects to one of
the figure's corners). It is possible to move this anchor point just by moving the figure or
by creating a bend point in the connection and moving that.

For example if not ticked (default) the connections appear as follows:

If ticked the connections appear as follows:


Use line curves
If this is enabled, connections are shown with curves at bend-points.

Use line jumps for intersecting relations
If this is enabled, a jump curve is shown when one connection crosses another.

Label background
Sets the strategy for drawing connection label backgrounds. This can be one of
"Transparent", "Opaque" or "Clipped".

General

Show a warning message when a reconnection affects other Views
When making a reconnection between ArchiMate elements in a View those elements
and connection may be present in one or more other Views. The reconnection will affect
those Views and this warning alerts the user to this and the action can be undone.

ARM

Automatic Relationship Management

For more information see Container Elements and Nested Element Relationships.

Enable implicit connections in Views for nested elements
If this is enabled then nested parent/child elements are considered to have an implicit
connection in a View representing a relationship between the elements in the model.

Offer to create new relation when creating new element from Palette
If this is enabled then when a new element is added from the Palette onto a parent
element in the View a dialog appears offering to create a new relationship between the
parent and child elements.

Offer to create new relation when adding element from Model Tree
If this is enabled then when a new element is added from the Model Tree onto a parent
element in the View a dialog appears offering to create a new relationship between the
parent and child elements if one does not already exist.


Offer to create new relation when moving an element to a new parent element
If this is enabled then when an element in a View is dragged onto a parent element in
the View a dialog appears offering to create a new relationship between the parent and
child elements if one does not already exist.

Relation types offered when creating new relations
Select the types of relationship that will be offered when new implicit connections are
created between parent and child elements in a View.

Reverse relation types offered when creating new relations
Select the types of relationship that will be offered when new implicit connections are
created between child and parent elements in a View. These are "reversed" nestings.

Relation types to hide when elements are nested
Select the types of relationship connection that will be hidden in a View when there are
nested parent and child elements.


# Diagram Preferences

## View

Grid Size
Sets the grid spacing used in diagram Views.

Palette is open when opening Views
If enabled the palette in a View will be open when the View is opened.

Show tooltips in Views
If enabled tooltips in Views will be shown.

Edit name after creating new object from Palette
If enabled when a new element is added from the Palette you can immediately edit its
name.

## Viewpoints

Grey out disallowed concepts in the Model Tree
When this option is set any concepts that are disallowed in a Viewpoint are greyed out.
For more information see Viewpoints.

Hide disallowed concepts from the Palette
When this option is set any concepts that are disallowed in a Viewpoint are not shown in
the Palette. For more information see Viewpoints.

Hide disallowed concepts from the Magic Connector
When this option is set any concepts that are disallowed in a Viewpoint are not shown in
the Magic Connector. For more information see Viewpoints.

Ghost disallowed concepts in a View
When this option is set disallowed concepts in a Viewpoint are "ghosted" out. For more
information see Viewpoints.

## Paste Special behaviour

Always paste a reference to copied element
When this option is set copied elements in a diagram always reference the original
elements.


Always paste a duplicate of copied element
When this option is set copied elements in a diagram are always duplicates of the
original elements.

For more information see Copying, Pasting, Selecting and Deleting Elements.

Resize behaviour

Child object positions are fixed (default)
When this option is set child objects maintain their absolute position when the parent
object's top/left is resized. Resizing at the top or left will create new space in the parent
object.

Child object positions are relative to parent
When this option is set child objects maintain their relative position to the parent object
when the parent object's top/left is resized. Resizing at the top or left will not create new
space in the parent object.

Other

Use older method for drawing images
When this option is set an older method for drawing scaled images is used in Canvas
image figures. It is faster but image transparency is not preserved. By default this should
be disabled but the option is included for backward compatibility.

Use an offset when drawing outlines on hi-res displays
When this option is set figure outlines are drawn with a small offset to compensate for
higher resolution displays. This is normally only needed on Windows devices with hi-res
displays.

Appearance

Global

These are global settings for the application.

Word wrap style
Set the default word wrap style for ArchiMate figures.

Hard - wrapping will only occur at valid line breaks.


Soft - wrapping will always occur at the end of the available space, breaking in the
middle of a word.
Truncated - wrapping will always occur at the end of available space, truncating a word if
it doesn't fit.

Defaults for new ArchiMate figures

These are the defaults to use when creating a new ArchiMate figure. You can change
these settings individually thereafter.

Width
Set the default width for new ArchiMate figures.

Height
Set the default height for new ArchiMate figures.

Text Alignment
Set the default text alignment for new ArchiMate figures.

Text Position
Set the default text position for new ArchiMate figures.

Default Gradient
Set the default gradient for new diagram elements. Note - gradients will not show
when a diagram is exported in SVG image format.

Sketch View

Default Background
Set the default background for newly created Sketch Views.

Default Figures

Alternate default figures are provided for drawing certain figures in diagram Views. Click
on a figure to set the default shape to be used when creating a new Figure.


# General Preferences

## Files

Automatically open Views in a Model when opening from file
When opening a Model from a file, choose whether to automatically open all the Views
in the model.

Automatically create a backup file (*.bak) when saving
If this is ticked, whenever an .archimate file is saved, a backup copy with file extension
.bak will be created first.

Size of recently opened file list
Set the cached sized of the recently opened file list in the "File->Open Recent" menu.
Can be set from 3 - 15.

## Model Tree

Display unused concepts in italics
When this is ticked, any elements or relations that are not used in Views are displayed in
an Italic font.

Update search result as you type
When this is ticked, search results in the Model Tree are updated as you type (default). If
not ticked the search result will update when the Return key is pressed.

Always warn when deleting objects
When this is ticked a warning is always displayed when objects are deleted in the
Models Tree. If unticked, a warning is only displayed when deleting objects if the objects
are used in Views.

## Label Expressions

Use for View names in Analysis table
When this is ticked, the "Used in Views" in the "Analysis "section uses a label
determined by an ancestor folder's label expression (if set).

## Other

Export images at double scale
When this is ticked, images are exported and copied to the clipboard at twice their


normal size. This is set on by default for Windows operating systems where display
scaling is greater than 100%, and on Mac Retina devices. This is so that the exported
image quality is not compromised since it is not possible to set a higher DPI in the
image. This setting is usually not needed on Linux displays.

If the resulting image needs to be at its logical size you could edit it in an image editor
and set the DPI to double its value. For example, on Mac change the DPI from to 72 to
144.


# Help Preferences

Sets various preferences for displaying Help contents depending on Operating System
platform.


# Jasper Reports Preferences

## Settings

User Templates Folder
Set the root location of where customised user Jasper Reports templates are stored.
Each template should be in its own sub-folder. When exporting a model to Jasper
Reports the name of the folder will be displayed in the export wizard. For more
information see Reporting.


# Validator Preferences

## Rules to check

Each validation rule can be enabled or disabled.


# Managing Plug-ins

You can install and uninstall Archi plug-ins with the Archi Plug-ins Manager or manually.

## Using the Plug-ins Manager

To install or uninstall an Archi plug-in, select "Manage Plug-ins..." from the Help menu.

The Archi Plug-ins Manager dialog will show. From here you can view installed plug-ins
and their details.

## Installing

To install an Archi plug-in using this method you need to have the plug-in in Archi plug-in
format. This is an archive file (*.archiplugin or *.zip file extension) containing one or more
jar files and a marker file. Examples of this type of Archi plug-in are the Collaboration
and jArchi Scripting plug-ins. If the plug-in is a jar file you will need to install it manually
(see below).

To install a new plug-in, click the "Install New..." button. Select the plug-in file or files that
you wish to install. You can select and install more than one plug-in if you wish. You will
be prompted to restart Archi.

## Uninstalling

Installed plug-ins will be displayed in the table view in the dialog. If you wish to install
one or more plug-ins, select them and click the "Uninstall" button. You will be prompted
to restart Archi.

## Manual installation

If the plug-in is in *.jar file format you can simply copy the *.jar file(s) to Archi's special
"dropins" directory. (Ensure you quit Archi first before doing this.)

The "dropins" directory is located in the following places:

Windows: %user.home%/AppData/Roaming/Archi4/dropins

Mac: %user.home%/Library/Application Support/Archi4/dropins

Linux: %user.home%/.archi4/dropins

("%user.home%" denotes your home directory.)

If the "dropins" directory does not exist, you will need to create it first.


https://www.archimatetool.com/downloads/Archi%20User%20Guide.pdf
