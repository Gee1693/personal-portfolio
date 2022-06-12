Layout 4

Summary

For this assignment you are taking Layout 2 (Go Greek Tours) and adding JavaScript functionality.
You can either start from the Layout 2 solution or from your Layout 2, with any fixes implemented.

JavaScript Overview

You are building customization controls for this layout.
The user will be able to scale text sizes up to a larger size and to a largest size. The smallest size is the default. Even though browsers have long supported zooming, some users (often older users) greatly appreciate the inclusion of controls to scale text larger on desktops and laptops.
The user will be able to switch to a 'Dark Theme' and back to the 'Light Theme' (this is the default).
Any combination of text size and theme is possible; they are independent of one another.
All of the controls will be generated via document.createElement() and document.createTextNode(), so that if the user lacks JavaScript support the controls never appear.
All of the JavaScript will be in a single external file, called just before the close of the body tag.
We are not retaining any of these settings over time. If the user reloads the page, they are back to the defaults (light theme, small text size). Various approaches to retaining and reloading these settings are covered in WEB 230; they are beyond the scope of this course.
We are not using jQuery.
To keep the global namespace as clean as possible, only use a single global variable, which is an object literal.
The changes we are making to display (theming and sizing) are only for screen display. They have no impact on print output.  That said, the controls you are creating should not appear in the print output.
You must use addEventListener() for event assignment. You can choose to use event delegation or not use it; that is at your discretion.
This functionality should work properly in all target browsers.

Text (Re)Sizing

When scaling text larger it is often best to work in relative units, rather than absolute units. rem is a relative unit, while px is an absolute unit.
rem's are relative to the font size for the root element, which is the html element in this case. Browsers almost always have a font size of 16px for their root element, so 1rem = 16px.
The first thing you should do is convert all of your px font sizes to rem sizing. Here is a list of all the default / starting sizes after conversion:
.875rem
1rem
1.125rem
1.375rem
1.625rem
2.125rem
2.5rem
If you're wondering what those are in pixels, just multiply the rem value by 16. The result is the number of pixels.
The sizes given above are the defaults (the smallest sizes and starting values).
These scale as follows:
.875rem increases to 1rem increases to 1.25rem
1rem increases to 1.25rem increases to 1.5rem
1.125rem increases to 1.4rem increases to 1.65rem
1.375rem increases to 1.6rem increases to 1.85rem
1.625rem increases to 1.85rem increases to 2.1rem
2.125rem increases to 2.25rem increases to 2.5rem
2.5rem increases to 2.75rem increases to 3rem
So if the text is 1rem at the smallest size (the default), it would grow to 1.25rem at the larger size, and 1.5rem at the largest size.

Changing the Theme

The default theme is the 'Light Theme'.
Clicking on 'Dark Theme' changes to that theme and the button text changes to 'Light Theme'. Clicking it again toggles to the light theme and the button label changes to 'Dark Theme'. This can be toggled as much as desired.
The dark theme changes the body background to #000 and the text for the blockquote and footer text/links to #fff.
The dark theme changes the hover and focus styling of the footer links to be #ccc for their text color.
The dark theme also changes the hover and focus styling of the 'Join' button to be #000 text on a #ccc background color.

Styling and Accessibility of the Controls

The controls area is best implemented as an absolutely positioned container that is 0 from the top and right of the layout container.
Give the controls area 10px padding and a background of rgba(255,255,255,.5). That allows for the image behind the controls to still be somewhat visible.
Use a type="button" input for the theme control button; it needs a 'pointer' cursor and should use the same font size as 'body' (.875rem). Give this button 10px of left/right padding.
On hover and when given focus, the theme control button changes appearance to #fff text on a #000 background.
Anchors should be used for the text size controls, with left/right padding of 5px and 10px of margin between them.
The smallest 'A' is .875rem, the next larger 'A' is 1rem, and the largest 'A' is 1.125rem. These letters scale up and down in size, along with everything else (earlier in these specifications the amount that they scale is indicated).
Assign a title of 'Regular Text Size' to the smallest 'A', 'Larger Text Size' to the next larger 'A', and 'Largest Text Size' to the largest 'A'.
The currently selected 'A' has an outline of 2px solid #000.
Be sure to preventDefault() on the event object so the URL does not change when the anchors are clicked.
These anchors continue to have any hover/focus styling from Layout 2 that pertains to anchors.
At the 1010px breakpoint, hide the theme control button. At that size and below the theming doesn't make as much visual impact.
At the 600px breakpoint hide the entire controls area, because space is tight on phones and the user can zoom by manipulating the screen (and is much more used to doing that).
Also have aria-hidden="true" on the controls container element. Why? Because these controls have no importance or utility for someone navigating with a screen reader. They shouldn't even encounter them. You should add that via setAttribute().






Teacher's Comments for fixes in Layout 4:

The generated controls need to use the layout wrapper as their reference point, not body.

The theme button is not using the right typeface.

By default the smallest "A" should have the border around it.  That border should remain for whichever "A" is clicked.

Print output should not have changed; the controls should only be shown when printing and the effects of the controls should not impact print output.

CSS can be streamlined. For example, 'background' can be used rather than 'background-color'.

The preventDefault() should be part of the smallText, mediumText, and largeText functions.  They should not have that as a separate, anonymous function call.

Rather than aria-label, a title should be added to the generated anchors.

Remove the trailing comma after largeText() - it is just after its } character. It is best to not have an extra comma after the final code in your object literal.