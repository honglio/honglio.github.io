Github User Site
=============

Single page site for gihub user showcase.


1. Background Settings
--------

Slideshow picture:

The pictures are at least 1920x1080px in dimensions, representing the biggest most-common screen resolution. You can make them as big as you want, but is important to make them at least 1920x1080px to fit almost all the screens. Save the pictures inside the "images" folder with number sequence.

replace the image path with your own image path:

    <div class="bannerPart"> <img src="http://placehold.it/1920x1080&text=image1" alt="" class="bannerImg"> </div>


2. Skill Chart Settings
-----------

Open index.html file and change the data-percent="90" to adjust the Skill chart setings.

    <div class=" col-xs-12 col-sm-6 col-md-6 col-lg-6 skills"> <span class="chart skilBg" data-percent="90"> <span class="percent"></span> </span>


3. Portfolio Settings
-----------

**Portfolio tabs:**

To add, delete or modify portfolio tabs open the index.html files and edit the code in the following section. In the below image is showing onlyhow to add a new tab.

<img src="http://i.imgur.com/scRzc1P.jpg?1" title="Portfolio tabs" />

To add a new tab you have to mention a data-filter name which will categories the images with the tabs data-filter=".webdesign"

**Portfolio image:**

You can easily add new images in the portfolio section. Use the following code and edit the mention area according to your need.

<img src="http://i.imgur.com/Vzg3u5r.jpg?1" title="Portfolio image" />


4. Google Map Settings
-----

Copy the sources embed code from https://maps.google.com/ and replace the code with this existing code

    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/?ie=UTF8&amp;ll=-37.817682,144.957595&amp;spn=0.01134,0.026157&amp;t=m&amp;z=16&amp;output=embed"></iframe>


5. Contact Form
---------------

To set up the contact form to send emails with the persons which are contacting you, find the following code and change the email with your own email.

	<div id="message"></div>
    <form method="post" action="//forms.brace.io/hong.liu@live.cn" name="cform" id="cform">


6. Related JavaScript Files
---------------

**js/jquery.easing.min.js** - Uses the built in easing capabilities added In jQuery 1.1. To offer multiple easing options.

**js/jquery.easypiechart.js** - Lightweight plugin to render simple, animated and retina optimized pie charts.

**js/jquery.gridrotator.js** - A jQuery plugin for creating a responsive image grid that will switch images using different animations and timings.

**js/jquery.isotope.js** - An exquisite jQuery plugin for magical layouts.

**js/jquery.placeholder.js** - Placeholder is offering support for old browsers to recognize the 'placeholder' HTML5 tag inside the forms.

**js/jquery.jquery.contact.js** - The code is animating the contact form when is used.

**js/jquery.ui.rlightbox.js** - This code use for the lightbox effect for protfolio images.

**js/custom.js** - Implementation of the plugins listed above and custom javascript functionality code for PaperLaunch.

**js/stickUp.js** - A simple plugin that "sticks" an element to the top of the browser window while scrolling past it, always keeping it in view.

7. Sources and Credits
-------

**Jquery** - http://jquery.com/

**Bootstrap** - http://getbootstrap.com/

**Easypiechart** - https://github.com/rendro/easy-pie-chart

**Gridrotator** - http://tympanus.net/codrops/2012/08/02/animated-responsive-image-grid/

**StickUp** - https://github.com/LiranCohen/stickUp

**Placeholder** - https://github.com/danbentley/placeholder

**Portfolo filter** - http://www.webdesigntunes.com/coding/jquery-filterable-portfolio

**Rlightbox** - http://ryrych.github.io/rlightbox2/

**Open Sans Font** - http://www.fontsquirrel.com/fonts/open-sans

**iconic fonts** - http://fontawesome.io/