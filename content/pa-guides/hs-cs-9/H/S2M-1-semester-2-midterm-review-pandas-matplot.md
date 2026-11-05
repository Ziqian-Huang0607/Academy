# S2M-1 Semester 2 Midterm review: Pandas, Matplotlib

> From the Grade 9 Resource Department's Semester 2 Midterm Computer Science H review guide (PA). Writers: Atticus Lee 9-4, Rick Yu 9-4. Editor: Caitlin Zhou 9-2. Range: Pandas, Matplotlib. Student-made reference material: where it differs from class, follow class.

**Pandas**

**Overview**

- nstall third party module in command center, type: python -m pip install pandas
- Import convention:
  - import module (pandas) as alias (pd)
- Series and DataFrame

**Boolean Operations with Series and DataFrame**

- and: & or: |
- (Condition) operator (Condition)

**Series**

- one-dimensional array that consists of a set of index and a set of data
- its data can be any list, dict, or scalar value, create through pd.Series() function
- Creation
  - M1:
    - data=['value 1','value 2']
    - s1=pd.Series(data, index=[1, 2])
  - M2:
    - data={1:'value 1', 2:'value 2'}
    - s2=pd.Series(data)
- Modification
  - perform operations on entire Series:
    - s=s*10 #multiplies all values in Series by 10
- Data Retrieval
  - s.loc['index'] #retrieve data through index
  - s.iloc[index position] #retrieve through position
- Filter with Boolean Series (A Series of True/False values)
  - s=s[s>30] #keeps all values over 30
  - s=s[(s>30)|(s<10)] #keeps all values over 30 and all values under 10

**DataFrame**

- 2 dimensional array, can store a set of data with 2 indexes (row, column) for each value
- Creation
  - 1. A dictionary of lists or Series
    - a dictionary of any array makes each such array a column
  - 2. A list of lists(nested list) or Series or dictionary
    - a list of any array makes each such array a row
  - pd.DataFrame(data, index = ind, columns = col)
- Core Functions
  - pd.read_excel('filename.xlsx') #read excel, to DataFrame
  - df.to_excel('filename.xlsx') #export to excel
  - pd.read_csv('filename.csv') #read csv, to DataFrame
  - df.to_csv('filename.csv') #export to csv
  - df['col'] #retrieve single column, for multiple columns use a list of columns
  - df.loc['row', 'column']
    - select based on row, column
    - can be used to modify data
    - end-inclusive data splicing
    - df.loc[df[‘col1’] == ‘condition’, ‘col2’] = value
  - df.iloc[row index, column index]
    - select based on row postition (index), column position (index)
    - end-exclusive data splicing
  - df.index, df.columns #retrieving the indices and columns of a DataFrame
- Other Functions

| **Function** | **Use** |
|---|---|
| df.head() | keep the first specified amount of rows |
| df.tail() | keep the last specified amount of rows |
| df.drop() | deletes the specified row |
| df.sort_values(by='col',ascending=) | sort the df based on the values of specified column |
| df.dropna() | remove all rows with null content |
| df.fillna(value) | replace the null with the specified value |
| df.drop_duplicates(subset='col') | remove the duplicates in specified column |
| df.reset_index() | reset the index to the 0,1,2,3... |
| df.T | transpose the DataFrame, change index to column name, column name to index |

**Matplotlib**

**Overview**

- a comprehensive python library used for plotting/creating graphs/visualizations
- import matplotlib.pyplot as plt

**Customization**

- Marker Style
  - Style of data points
  - Shape:

| **Character** | **Description** |
|---|---|
| 'o' | circle marker |
| 'v' | triangle_down marker |
| '^' | triangle_up marker |
| 's' | square marker |
| '*' | star marker |
| '.' | point marker |
| 'x' | x marker |
| 'd' | diamond marker |

  - Properties:
    - markersize: size of marker
    - markerfacecolor: color of marker’s interior
    - markeredgecolor: color of marker’s border
- Line Style
  - Style of lines connecting data points

| **Character** | **Description** |
|---|---|
| '-' | solid |
| '--' | dashed |
| '-.' | dashdot |
| ':' | dotted |

- Colors
  - Can be specified in several formats for lines, markers and text
  - Named Colors: standard colors / more specific ones such as 'red', 'blue', 'skyblue'
  - Shortcuts Naming: Single-letter codes such as 'r', 'g', 'b' , 'k' (black), 'w' (white)
  - Hex & RGB: Hexadecimal strings ('#FFFFFF') / RGB tuples ((255,255,255))
- Layout
  - Layout management ensures that multiple subplts and labels fit neatly within the figure.
  - Subplots:
    - plt.subplots(nrows, ncols, idx) to create a grid of plots & selects the "active" area
  - Automatic Adjustment
    - plt.tight_layout(): Automatically adjusts subplot params to prevent possible overlapping

**Charts**

- Line Plot
  - plt.plot()
  - connects data points with straight lines by default
  - typically showing how one variable changes over a continuous interval (e.g. time)
- Scatter Plot
  - plt.scatter()
  - ideal for observing the relationship between 2 vars where points are not necessarily connected.
- Vertical Bar Plot
  - plt.bar(width = w)
  - displays categorical data using vertical bars where height represents the value
- Horizontal Bar Plot
  - plt.bar(height = h)
  - bar chart but runs horizontally
- Multiple Bar Plot
  - created by calling plt.bar multiple times with adjusted x-positions
  - used to compare different sets of data across the same categories side-by-side.
  - usually requires shifts in position of each set of bars by a certain width to avoid overlap.
- Pie Plot
  - plt.pie()
  - a circular chart that shows data as percentages of whole.
  - each wedge represents a category's contribution to the total.

**Axes-Related**

- plt.xlabel() / plt.y_label(): Sets the text label for the x and y axes
- plt.xticks() / plt.y_ticks(): Sets the location and label of the ticks(the marks on the axis).
  - Allows iterable obj. (e.g. plt.xticks([0,1], ['Low', 'High']))
- plt.xlim() / plt.ylim(): Sets the minimum and maximum boundaries of the axes
- plt.axis(): A shortcut to set limits and aspect ratios

**Graph-Related**

- plt.title(): Adds a main title above the plot
- plt.legend(): Displays a box identifying different data series. Looks for the label arg. used inside plotting functions.
- plt.show(): open the window to display the figure.
- plt.close(): Closes the figure window & deactivate the diagram
- ax.twinx(): Creates a twin axis that shares the x-axis but has a completely independent y-axis. perfect for overlaying 2 or more different metrics on the same chart.
- ax.twiny(): Creates a twin axis that shares the y-axis but has a secondary x-axis. use when showing the same data in different units / comparing 2 vars that share a common dependent var in y-axis.

**Full Parameters & Functions List**

- Parameters (Simplified vers. used in Functions descriptions)

| **Real name** | **Simplified ver.** | **Definition** | **Type** |
|---|---|---|---|
| linestyle | ls | defines the line style | str |
| marker | m | the shape of point markers | str |
| width | w | the thickness | float |
| height | h | the height | float |
| autopct | apct | label the wedges with numerical % value | string (formatted)
(e.g. '%1.1f%%') |
| index | idx | 1-based idx
(idx from L to R, then up to down) | int |
| x | / | horizontal position | float/list of float |
| y | / | vertical position | float/list of float |
| nrows | / | no. of rows | int |
| ncolumns | / | no. of columns | int |
| color | c | sets the color | str |
| size | s | sets the size | float |

- Functions

| **Function** | **Notes** | **Definition** |
|---|---|---|
| plt.plot(x,y,c,ls,m,label) | label: the identity of plot | a function plots coordinate at (x,y) coordinate & automatically generates a line that connects data points |
| plt.scatter(x,y,m,c,s) | / | A scatter plot at (x,y) with varying marker size/color |
| plt.bar(x,h,w,c, tick_label, label) | tick_label: str/list of str, the tick labels of the bars.; label: str/listof str, a single label attached to the resulting bar container as a label for the whole bar chart. | Make a bar plot. each bar is positioned at each x coordinate with specified height & width. |
| plt.barh(y,w, h, c, tick_label, label) | / (same as bar) | Make a horizontal bar plot. each bar is positioned at each y coordinte with specified height & width |
| plt.pie(x,apct,explode, labels, startangle, colors) | x: the wedge size; explode: the fraction of the radius with which to offset each wedge; labels: a sequence of strings providing the labels; colors: A sequence of colors.; startangle: the angle by which the start of the pie is rotated | make a pie chart of array x. the wedges are plotted counterclockwise, by default starting from the x-axis |
| plt.grid(axis,c,ls) | axis='both'/'x'/'y': the axis to apply the changes on | configure the grid lines |
| plt.subplot(nrows,ncols,idx) | idx: 1-based idx
(the position in side the nrows*ncols grid)
(idx L to R, then U to D) | add an axes to the current figure / retrieve an existing axes |
| plt.savefig(img) | img | img |
| plt.rcParams[arg]=[param] | / |  |
| plt.xlabel(xlabel) | xlabel: the label text | set the label for the x-axis |
| plt.ylabel(ylabel) | ylabel: the label text | set the label for y-axis |
| plt.xticks(ticks, labels) | ticks: optional, the list of xtick locations; labels: optional, the labels to place at the given ticks location | get/set the current tick locations and labels for the x-axis |
| plt.yticks(ticks, labels) | ticks: optional, the list of ytick locations.; labels: The labels to place at the given ticks locations. | get/set the current tick locations and labels for the y-axis |
| plt.xlim(left, right); plt.xlim((left,right)) | left: optional, sets the mininum value of the x-axis; right: optional, sets the maxinum value of the x-axis; (left, right): allows to pass the limit as a single sequence | to get/set the view limits of the x-axis |
| plt.ylim(bottom, top); plt.ylim((bottom, top)) | bottom, top: set the min/max limit; (bottom, top): set both limits | to get/set the view limits of the y-axis |
| plt.text(x, y, text, c) | x, y: pos; text: content | create a text instance at x,y with specified color (optional) |
| plt.title(label) | label: text to use for the title | set a title for grph |
| plt.figure(figsize, facecolor, edgecolor) | figsize=(w, h): set the figure size in inches.; facecolor: fill color; edge color: border color | create/activate an existing figure |
| ax.twinx() | / | Make and return a second axes that shares the x-axis. |
| ax.twiny() | / | Make and return a second axes that shares the y-axis |
| plt.tight_layout() | / | Adjust the padding between and around subplots. |
| plt.legend(loc, title) | loc: the legend position; title: adds a heading to the legend box | add a visual key (legend) to a plot. identifies different data, series by labeling lines, markers / colors. |
| plt.show() | / | display all currently active figure objects. |
| plt.close() | / | close a figure window and deactivate figures set before |
