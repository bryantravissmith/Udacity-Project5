#Summary

My data visualization is highlighting the chemcial properties of wine that are associated with the ranking of the wine.   The data comes from http://www3.dsi.uminho.pt/pcortez/wine/ and is a ranking of 6000+ red and white wines from Portugal along with 11 chemcial properties.   The visualization guides the user through some interesting graphics, then allows the user to explore the data themselves.  

#Design

My intial design was a sketch that I showed on of my students who has built and sold numerous mobile apps.  He liked the separation of the menu and graphics, but suggested that I move the menu to the left side.  He said most sights have menus on the left side.

In the intial implemntation (index001.html)  I impleneted a percent/density visualization in the histograms because of feedback from my wife.  She was confused why some numbers changed when puting in the count, but seemed to describe the distirubtions accurately when they were displayed as percentages.   She also found the side menu intuative, but didn't understand what the variables ment. I added the description under the graphic to help give the user context to the data and to develope a narrative during the intial animation.

My friend Travis manages a hedge fund and thought some trend lines would help digest the information better than the scatter plots.   He also had some formatting issues when he looked at in on his computer.   I decided to add another plot option of to show the aveage and 1 standard deviation, as well as make the plot resize in the browser (index005.html).


explain any design choices you made including changes to the visualization after collecting feedback

#Feedback

##0
A student suggested that I use a css framework and move the menu from the right side of the graphic to the left side of the graphic. 

##1
My wife examined an early version of the visualization.  She thought I should use percentages instad of raw counts for displaying the values in the histogram bars, and to add discriptions of the variables/graphs below each graph.  She liked the sidebar menu to control the visualization.


##2
My friend said that there were too many points to get a feel for trends and would have liked to added a best fit line.  He also said the plot was not fitting in his browser.   


#Resources

##http://bl.ocks.org/mbostock/3048166

I used this site for the intial design and implementation of the histogram.

##Stack Overflow

I used stack overflow to look up any specific issues in trying to implement my visualization.   More often than not it was syntax or not being currently farmilar with javascript methods of interacting with different datatypes.  

## Pure CSS - http://purecss.io/

I ended up using this framework because it was externally hosted, light weight, and easy to use.  


list any sources you consulted to create your visualization

