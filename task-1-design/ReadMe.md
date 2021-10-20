The Code is in the App.js file

To handle font:
For Mobile:
I created an "assets/fonts" in the root directory. Then I downloaded the Roboto font and moved it there. 
I created react-native-config.js file, then I added the assets config to it.
After this, I ran "npx react-native link" so that the assets can be linked with android folder.

In my App.js file , I created an object that contains the fontFamily, I then spread this object into the style of any Component that
needs it.

To make it work in web:
I copied the assets folder and paste it into the public folder. Then I
updated the index.html file to include a font style that points to the added Roboto font.


I used the Flex property to make the pass phrase items responsive on different screen sizes.
