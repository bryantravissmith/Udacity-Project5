#Summary

My data visualization is highlighting the chemcial properties of wine that are associated with the ranking of the wine.   The data comes from http://www3.dsi.uminho.pt/pcortez/wine/ and is a ranking of 6000+ red and white wines from Portugal along with 11 chemcial properties.   The visualization guides the user through some interesting graphics, then allows the user to explore the data themselves at the end of a guided story.  

#Design

My iital goal was to guild an simple way to see visualization of all the wine data.  I wanted to make it easy for someone new to see the trends and patterns in all the data, and to explore it, without needs to do coding.  I thought my story would be to show some of the intersting assocaitions between quality and wine.

My intial design was a sketch of the User Interface that I showed on of my students who has built and sold numerous mobile apps.  He liked the separation of the menu and graphics, but suggested that I move the menu to the left side.  He said most sights have menus on the left side.  Additioanlly he suggest using a css framework.  After reviewing some I decided to use Pure CSS.

I wanted to let the user subset data so they can decide to plot only wines of a certain quality or of a specific type.   For instance, only white wines with quality greater than 6.   This required that I have a way to both subset the data nad visual indicate the which data is selected.   This was done using the Pure CSS styling options, and intially with the D3.select.  As the page grew more than 500 lines of code, I decided to swithc to jQuery for the user interactions because it was easier to choose and change properties on the page, as well as to simulate users selections for the guided story.


In the intial implemntation (index001.html)  I impleneted a percent/density visualization in the histograms because of feedback from my wife.  She was confused why some numbers changed when puting in the count, but seemed to describe the distirubtions accurately when they were displayed as percentages.   She also found the side menu intuative, but didn't understand what the variables ment. I added the description under the graphic to help give the user context to the data and to develope a narrative during the intial animation.  

My wife also did not like hte colors I used for the scatter plots.  She called them ugly.   We settled on the yellow and reds used the final product.  

My friend Travis thought some trend lines would help digest the information better than the scatter plots.   He also had some formatting issues when he looked at in on his computer.   I decided to add another plot option of to show the aveage and 1 standard deviation, as well as make the plot resize in the browser (index005.html).

After the Udacity review, it was clear to me that I had build something for exploring instead of explaining the data.  My scope was too big, and my goal unfocused.   I decided I would focus on red wine, which the data has some relatively strong association with quality and chemical properites.   The results also match the intuation one gets for reds if they read any wine literature.

I decided to refocus on the story - good wines are alcoholic and fruity, and they are not yet vinegar.  I limited the variables I would display, and allow the user to control, to alcohol, citric.acid, volatile.acidity, and quality.   I also remove the control bar for the first half of the story, not showing it until it added new information, and did not give the option for the user to skip it.

Every graphic in the story supports the idea that well rated reds tend to be fruiter, alcoholic, and not vinegary.   


#Feedback

My feed back was gaged in person where I asked people nere me to "look at this" and guided them through the final story I have implemented.   This coverstaion were less then 15 minutes.  

##1
A student suggested that I use a css framework and move the menu from the right side of the graphic to the left side of the graphic. 

##2
My wife examined an early version of the visualization.  She thought I should use percentages instad of raw counts for displaying the values in the histogram bars, and to add discriptions of the variables/graphs below each graph.  She liked the sidebar menu to control the visualization.  She was also adimate that drinking wine is better then making graphs of wine.  


##3
My friend Travis said that there were too many points to get a feel for trends and would have liked to added a best fit line.  He also said the plot was not fitting in his browser.  He was very inerested in the wine, being a self professed 'Wino', and expressed that he would like to see this again if I found similar data for California wines.    

#4
Udacity review stated that I have given too much control to the user, and that dozens of plots can be generated with current setup.  I should focus on an explantory story instead of an exploratory setup.  I did not tell a specific enough story, and should focus on one story with a few key varibles and plots.


#Resources

##http://bl.ocks.org/mbostock/3048166

I used this site for the intial design and implementation of the histogram.

##Stack Overflow

I used stack overflow to look up any specific issues in trying to implement my visualization.   More often than not it was syntax or not being currently farmilar with javascript methods of interacting with different datatypes.  

## Pure CSS - http://purecss.io/

I ended up using this framework because it was externally hosted, light weight, and easy to use.  


list any sources you consulted to create your visualization

