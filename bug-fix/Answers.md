Answer to Questions:


q1- The component will not work on all platforms because it uses the 'window' object which is not available on mobile OS and code also has some bugs in it


q2-  The button click doesnt work because it uses onClick instead of OnPress, the button also was supposed to call the toggleNotify function to hide the notification.

q3- The useEffect hook expects 2 params, a function and an array of dependencies. The array was missing.
Also instead of using window event listener which is only available on the web,I passed in an empty array as the second param, to tell React to only run this effect function once when the component/page is loaded.

q4- To simplify:
I removed the window event listener and pass in the toggleNotify function in the hook. I also passed in an empty array to make this hook run only once

OnPress of the Button, I called the toggleNotify method

Instead of setNotify(!notify). I passed in a function to ensure we always get the latest notify value and then set the opposite of this value as the new value
