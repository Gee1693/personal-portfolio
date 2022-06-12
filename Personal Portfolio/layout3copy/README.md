Layout 3

Summary

You are coding the home page for Caturra Coffee.
This layout uses the material covered in Modules 7 - 9.
The layout is to be built primarily with Bootstrap 5.
Chrome, Firefox, Edge, and Safari should render this properly.

Basic Setup

Create an HTML5 page named index.html
All of the CSS that you write is to be in a single external file.
You will, of course, be bringing in the Bootstrap 5 CSS.
The JavaScript for Bootstrap 5 is not needed. Do not load it.
You will also be bringing in Web Fonts (with the associated preconnect link tags) from Google. Here is the code:
<link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
As you can tell, all the fonts are 'PT Sans', sans-serif.
The colors used are either #502712, #000, or #fff.
We are using container-xl for the container width.
The standard Bootstrap 5 breakpoints are used, as well as one additional breakpoint at 1070px.
Almost every anchor in this layout should be set to "#". The social media icons can be linked to their respective websites (Instagram, Twitter, Facebook) and there is a 'Jump to main content' link that should be linked to the content following the masthead (as a within-page anchor).
The images you are to use in this layout are in an attached zip archive. Do not modify these images; they are to be used as provided.
Background images should be set to cover and should be placed center, unless noted otherwise.
The default font settings are 400 font weight, 18px tall, 1.3 line-height, and 'PT Sans', sans-serif.
The vertical spacing amounts in these specifications reflect the values I used. Depending on your code setup, you may need to adjust the values to match the video and screenshots (or track down the extra space from padding and/or margin and eliminate it). Your goal is to match the video and the screenshots.
If you want to use SASS or custom properties, you may do so. You do not need to use them; it is your choice.
You do not need to do any code minification. This is not going into production at this point.

Accessibility Considerations

Implement landmark roles in cases where there is not an implicit role.
Anchors have a 2px solid outline, with a 3px outline offset. Most of the time this outline is #502712. When the background is #502712, the outline changes to #fff. Watch the video to see all the focus visual changes / styling.
There is a 'Jump to main content' that is the first element in the page that gains focus; this is a within-page anchor that bypasses the masthead. That link, when given focus, is 10px from the top and left of the browser window. Its text color is #000.
The images that span the width of the browser window are backgrounds. They are not linked because that creates possible issues on mobile devices (since they fill the entire window and trying to scroll past them is likely to click them). And since they are not anchors, aria-label is not a reasonable option. As a fallback, you can nest an element with font-size of 0, as well as 0 height/width, and that will only be output to assistive technology. I have some concerns that there could be a negative SEO impact, but we're going to err on the side of making this accessible.
In the footer are abbreviations (NH, M-F, S-S) that should be tagged with abbr and use title attributes to provide the full text.

SEO Considerations

Implement microdata for the 3 store addresses in the footer. The specification is at http://schema.org/PostalAddress.
All three of those should be valid postal addresses - no errors or warnings when tested using the schema.org validator.
There is a Store microdata specification that would have been ideal to use, as we could have tagged the days/hours that they are open, but the specification requires a name as well as an image. We could have managed adding a name, but we don't have a photo of each store. So we're not able to go down that road.
Include a good description meta tag.
The title tag value to use is shown in the video.
The nav tags should have descriptive aria-label values.

Masthead (Logo and Top Navigation)

There is 30px of vertical space above/below the masthead content.
Look to the screenshots and video to determine ideal spacing for nav items to get them to vertically align with the logo.
You may want to float the nav items. The Bootstrap grid will still control their placement (it will still hold them), but within that holder float may be necessary.
Nav items are 16px.
When hovered over, the nav items change to #000.
At the largest window sizes there is 30px of space between nav items.
At the 1070px breakpoint the space between nav items shrinks to 20px.
Starting at the medium breakpoint the logo needs to begin scaling down in size, because there is simply not enough room left.
At the small and extra small breakpoints the left/right nav are gone, and a select menu appears that has all of the nav items as options. Be sure to assign a descriptive aria-label to that select menu. There is 30px of vertical space above the form. We are not making that menu do anything; we would need JavaScript to get it to reload the page when a selection is made. Using a select menu here ties in well with the native controls on mobile devices (such as a spinner control on iOS) and can provide a superior user experience to a hamburger menu in some cases.

Content Area

The block of color above the first hero image is 20px of #502712.
There is 60px of space below the first hero image.
Use h1's for 'We love tea too!', 'Gift Packages', 'Giving Back', and 'New Menu Items'. This is a case where there is not just one top-level heading, because the page content is not set up that way.
The h1's for 'We love tea too!', 'Gift Packages', and 'Giving Back' are 24px, 700 font-weight, and 1.3 line-height.
The #502712 callouts for 'We love tea too!', 'Gift Packages', and 'Giving Back' have 40px top/bottom internal spacing, 20px left/right internal spacing, and start off with a height of 280px. At the 992px breakpoint their fixed height will go away and they will have 30px of space between them. At larger sizes there is 60px of space below them.
The h1 for 'New Menu Items' is 28px. It is #fff on #502712, with 25px of vertical space above/below the text. You will need to work out a setup that allows for the 1px solid #502712 line to extend across the browser window and still have the block of color overlay it.
'Drinks' and 'Baked Goods' are h2's sized at 22px, #502712, with 15px of vertical space below the text.
The line below the menu items is 1px solid #502712.
The Chemex image is linked and will be an image that scales down as the browser window shrinks. This is a good example of why we have been using background images, because as regular images scale down they can become too small and any text in them also can become unreadable.
Spacing above/below the Chemex image is 60px.
At the smaller window sizes the Chemex image will gain 15px of space to its left and right sides, which allows for mobile device users to scroll past it without clicking the image.
The video shows the focus appearance for the 'VIEW...' links.

Footer Section

Footer text is #fff on #502712 and sized at 16px.
The footer section has 50px of vertical space before its content, 30px of vertical space after the columns, and 15px of vertical space above the copyright.
The social media icons are a sprite, so just arrange the links there over their particular icon. Provide a descriptive aria-label for each link. Turning on outlines while figuring out the height/width/spacing is helpful.

Printing

Consult the screenshot for what to hide.
All links are now #000.
Default font size is 15pt.
h1 is 20pt.
h2 is 17pt.
The vertical spacing between sections of content is always 40pt.
The line above the footer is 1pt solid #000.






Teacher's Comments for fixes in Layout 3:

The within-page anchor still does not work.  I won't deduct any points for that, but I do wonder why you wrapped that in a div.  Consult the solution. Bring over the code from the solution (HTML and CSS) and see if that works.

There are actually 3 postal addresses in the footer. You only coded for 1, and you only captured 1 data point. See the solution - there are a lot more things to tag for each postal address.

The masthead (very top of layout) needs some adjustments. The top nav need to vertically center-align with the logo and the overall height of the masthead needs to be reduced.

The text below the 3 h1's needs its line-height increased.

The 'New Menu Items' text is not using the correct text styling and the bar passing through it needs to pass at the middle of the text and be thinner.

For the Chemex image use max-width: 100% rather than width: 100%

Footer text needs to be smaller.

Always self-terminate meta and link tags.

We do not use the meta tag for IE=edge. We aren't even supporting IE!

Meta description can be improved; see the solution.  We want this to be something that is informative and encourages people to click through from search results!

When printing the logo should be left-aligned.

aria-label is not needed on the anchors containing text. The text link says it all.