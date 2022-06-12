Layout 1

Summary

You are coding the home page for Cardamom Farm.
This layout uses the material covered in Modules 1 - 3.
The layout is to be built primarily with flexbox, with just a bit of positioning.
This should render properly in all the browsers identified in the course syllabus.

Basic Setup

Create an HTML5 page named index.html
All of your CSS is to be in a single external file.
You will also be bringing in Web Fonts from Google. Here is the code:
<link href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@300;700&family=Economica:wght@400;700&family=Noto+Sans+JP:wght@300;400;700&display=swap" rel="stylesheet" />
Be sure to include the preconnect link tags as well that Google Web Fonts provides the code for (and self-terminate them).
The containing element is 1040px at its widest.
Keep in mind that headings come with default margins that you may need to set to 0.
Every anchor in this layout should be set to "#".
Text is #000, unless noted otherwise.
The images you are to use in this layout are in an attached zip archive. Do not modify these images; they are to be used as provided.
Background images should be set to cover and should be centered, unless noted otherwise.
Modern browsers will use the WEBP format images. Internet Explorer 11 will use the JPG and PNG versions, with the @media CSS hack used to override the background image code for that browser. This ensures that the layout continues to look correct across all the browsers.
The default font settings are 400 font weight, 16px tall, 1.3 line-height, and 'Noto Sans JP', sans-serif.
All of the h2's use the same basic settings, unless noted otherwise: 300 font weight, 35px tall, line-height set to 1, and 'Averia Serif Libre', cursive.
Use text-transform to uppercase text as necessary. It is best to leave the underlying text in a more natural case and to style as you go.
Keep in mind that changing the box model for some elements is likely to be necessary.
The vertical spacing amounts in these specifications reflect the values I used. Depending on your code setup and the extra space you are picking up from default margins (for example), you may need to adjust the values to match the video and screenshots (or track down the extra space from padding and/or margin and eliminate it). Your goal is to match the video and the screenshots.
We are not using SASS, LESS, or any other preprocessor. Again, our focus is modules 1-3.
You do not need to do any code minification. This is not going into production at this point.

Masthead (Top of Layout)

The large barn image that goes behind the logo and top navigation needs to be a CSS background image.
Positioning the background as center 35% is recommended. We are trying to ensure that the top navigation is always visible above the treeline.
In order to make that image accessible, if you apply it to a header element you can specify an aria-label attribute for that header to provide an image description.
The logo is an h1 element; the font sequence is 'Economica, sans-serif'. The first word is 700 weight, 38px tall, with 35px line-height. The second word is 400 weight, 30px tall, and 35px line-height.
The logo has 20px of vertical space above and below it.
Set up the top navigation using flexbox, with 15px margins on the left/right of each link.
The top navigation is #000, changing to #980404 on hover and when given focus.
The top navigation is 16px tall, has a line-height of 1, 700 font-weight, and 'Averia Serif Libre', cursive.

Quotation / Virtual Tour Section

Use flexbox to center this horizontally and vertically. The entire section has a 376px height.
The quotation is an h2 with #980404 as its color.
The virtual tour should be an anchor with 15px top/bottom padding, 30px left/right padding, a 1px #980404 border, and 14px tall text. On hover and focus the background changes to #980404 and the text becomes #fff.
50px of vertical space separates the quotation from the virtual tour anchor.

Farm Fresh Eggs / Fresh Vegetables Section

This is another flexbox setup.
Both of the images (chicken and squash) need to be background images on anchors. This allows for aria-label to again be used on the anchors, thus providing an accessible image description. In actuality, these would link to the about page; in this case we will just use "#" for the href values.
'Farm Fresh Eggs' and 'Fresh Vegetables' are both h2.
This section has 40px of vertical space below the photos and below the paragraphs, with 20px of vertical space between the headings and the paragraphs following them.
The paragraphs have 1.8 line-height and 80px of spacing on their left and right sides.

Saturday Market Section

The colored bar is 7px solid #FC0.
Below that bar is 60px of vertical space.
The content below the bar should be set up using flexbox.
'Our Saturday Market is a fun day out for the whole family.' is an h2 with 1.3 line-height.
All the images are anchors with background images and descriptive aria-label attributes.
The two columns are 48%. The three columns are 31%.
The vertical space separating the two-column from the three-column is 40px.
Between the three-column photos and their text label is 20px of vertical space.
There is 60px of vertical space following the three-column row.

Farmshares Section

Flexbox is not needed in this area of the layout.
The large image of vegetables is a background image on an anchor.
'CSA Farmshares' is an anchor within an h2. That h2 is #fff and 40px tall.
There is 60px of vertical space above/below that h2.
The background behind 'CSA Farmshares' is #530001.
'Every week pick up your box of fruits and vegetables from the farm. Your box will contain produce picked fresh just days before you pick it up.' is a paragraph with 60px above it and 40px below it. That paragraph should have an 80% width and be 300 font weight, 30px tall, 1.3 line-height, and use 'Averia Serif Libre', cursive.
The form should have action="#" and method="post". The form should be 50% of the container width.
'Email address' is placeholder text for an email input, with an aria-label also provided (because otherwise the input has no label). This input stretches the width of the form. The line bordering the bottom of the input is 1px solid #363636. The input has top/bottom padding of 10px and left/right padding of 5px.
Use a button element set to type="submit" for the arrow. This arrow is in the sprite image, so you're using that as a background image. You will need to absolutely position this button 5px from the right edge of the form; I also had 5px for its top placement. Give the button a 'pointer' cursor. A button element was much preferred to a submit input because buttons are more easily styled.
There is 60px of vertical space below the form.

Events Section

Use flexbox in this section.
Background color is #228500 and text is #fff.
There is 60px vertical space before and after content in this section.
'Event Spaces' is an h2.
40px of vertical space separates the h2 from the text below.
Columns are 30% width.
'The Big Red Barn' and the other column headings are h3 sized at 16px tall.
The text below the h3 is 1.6 line-height and has 300 font weight.
There is one typo in the screenshots and video: 'ideallic' is properly spelled as 'idyllic'. You can either fix it or match the screenshots and video.

Footer

Use flexbox for the footer layout.
The footer has 60px of vertical space above and below its content.
Columns are 32% width.
Left nav items have 1em of space between them and change to #980404 for their color on hover and focus.
The footer logo uses the same font settings as the h1 (top logo) but should not be an h1. A div is fine there. Using a heading for this is repetitive and best avoided.
Social media icons are anchors that use the sprite background and have 15px of space between them. Mind their right alignment to the container edge and their top alignment with the logo.
To help you with locating the logos in the sprite, the background position of the Instagram logo is -6px -115px. Spend some time making adjustments of a few pixels to those values and seeing how the image shifts. You need to get your bearings (do I need to make the negative number bigger or smaller?) and I find that to be very helpful.

Breakpoint 1: 1050px

We again are triggering our first breakpoint a bit wider than the 1040px container, as browsers will otherwise show a small horizontal scrollbar briefly.
The container element should lose its fixed width.
The text content areas gain 30px of space on their left and right sides. We need this so there is a gutter on the sides as we go smaller and smaller. Images that were full-width or up to the container edges remain that way.

Breakpoint 2: 800px

The Farm Fresh Eggs / Fresh Vegetables Section linearizes, with 60px of vertical space between the former columns.
In the Events Section the column width change to 45%, with 40px separating the first row from the second row.

Breakpoint 3: 700px
Footer columns change to 48% width and the social media icons left-align.

Breakpoint 4: 600px

Top navigation links change to 50% width and are centered. 10px of vertical space separates the rows.
In the Saturday Market Section the three columns change to 48% width, with 40px between the rows.
The space between the Saturday Market Section and the Farmshares Section changes to 40px.
The signup form now occupies 80% of the container width.
In the Events Section the content linearizes.

Breakpoint 5: 500px

In the Saturday Market Section the content has linearized.
The footer content has also linearized, centered, and has 40px of vertical space between the former columns.

Printing

Consult the screenshots for what to hide.
All links are now #000.
Default font size is 12pt.
h1 is 28pt (first line) and 24pt (second line).
h2 is 18pt.
h3 is 15pt.
There is 50pt of vertical space between the content area and the footer.






Teacher's Comments for fixes in Layout 1:

To answer your URL question: when no file is indicated, index.html loads by default.

Set the header to the height of the barn image - that is the only way to always have the full barn visible at all times.  This has important ramifications, including with how the nav there overlaps the background on phones.

The wrong typeface is used for the navigation bar in the footer.  It should be Noto Sans JP.

The social media icons should be closer together.

Between 600px and 992px, there is a horizontal scrollbar on the window.  This is invariably due to a width issue, but tracking down the problem can take some effort.

The 'Our big red barn...' text should always be centered.

The #lineBreak div should be a border. No need for etra markup.

The 3 activities background images also need aria-label attributes for their anchors.

Social media anchors need aria-labels and titles.

Self-terminate all link and input tags.

CSS can be streamlined further.  Rules communicating the same instructions can be consolidated.  Shorthands can be leveraged even more effectively.  For example:

margin: 0 15px 0 15px;
should be:
margin: 0 15px;
As another example, background-position should be in with the rest of the background shorthand.