# homepage
All source files for my private homepage

# Version

### 1.11.0 - 08/02/2016

NEW
===
    ---------------------
    chg: updated elk stack
    - using json output for elk


CHANGE
======
    ---------------------
    updated elk stack
    - using json output for elk
    
    ---------------------
    using json as logging output
    - with json it should be easier to use ELK


FIX
===
    ---------------------
    chg: updated elk stack
    - using json output for elk


### 1.10.0 - 02/02/2016

CHANGE
======
    ---------------------
    building node modules from maven
    - as all jenkins problems could be solved, the whole build is done via maven
    
    ---------------------
    changed favicon
    - using background image as new favicon
    - previous one was not recognizable


### 1.9.0 - 01/02/2016

NEW
===
    ---------------------
    speeding up docker build
    - adding .dockerignore to send only important files to docker engine
    
    ---------------------
    add test for back browsing
    - added a test to check if back browsing works
    - previously back navigation refreshed the same page


CHANGE
======
    ---------------------
    updated spring cloud
    - trying to use latest clout starter pom angel.sr6
    - jenkins still makes problems although mvn works on a commandline
    
    ---------------------
    providing more information about my cv
    - added a detailed description of my life so far


FIX
===
    ---------------------
    new: speeding up docker build
    - adding .dockerignore to send only important files to docker engine


### 1.8.0 - 15/01/2016

CHANGE
======
    ---------------------
    corrected jenkins jobs
    - increased memory on jenkins server
    - aligned mvn directories on master and slave

### 1.7.0 - 15/01/2016

NEW
===
    ---------------------
    enabled firefox tests
    - e2e tests executed with firefox
    - currently the bootstrap mail modal does not open with protractor
    - but the mail modal works when used manually

### 1.6.0 - 13/01/2016

NEW
===
    ---------------------
    templates for readme
    - added initial changelog
    - added templates to create final readme file
    
    ---------------------
    commit template
    - start of new changelog file
    - everything is driven via the commit messages


CHANGE
======
    ---------------------
    increase timer for e2e test
    - sometimes selenium test cases fail, after a navigation is made
    - added additional timer to wait before the whole page is loaded


FIX
===
    ---------------------
    back button did not work
    - because of a wrong anchor, any back button refreshed the page
    - added a div with the id 'content' on the home page to fix that
    - adapted test cases


### 1.5.0 - 06/01/2016

### 1.4.0 - 06/01/2016

### 1.3.0 - 25/12/2015

### 1.2.0 - 09/11/2015

### 1.1.0 - 31/10/2015

### 1.0.0 - 18/10/2015

### 0.4.0 - 13/10/2015

### 0.3.0 - 26/09/2015

### 0.2.0 - 24/09/2015

### 0.1.0 - 11/09/2015

Copyright 2015 Maximilian Wollnik