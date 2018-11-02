# taplar-ddoplanner
Source files for https://taplar.github.io/ddoplanner

# FAQ (or questions I just thought up)

> Why doesn't my Firefox initialize the application?
1. Verify that you are using a supported version of Firefox
    1. Hit "Alt" to make the menu visible on the top of the browser
    1. Click "Help", followed by "About Firefox"
    1. Your version should be "44" or beyond
        * If your version is prior to this, you will need to update to use this application
1. You may need to enable Service Workers (<a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_new">What Are Service Workers?</a>)
    1. Enter "about:config" in your address bar to bring up the browser configuration controls
    1. Search for "dom.serviceWorkers.enabled"
    1. If the value is "false", double click it to toggle it to "true"
        * This should enable Service Workers for you

> Why does your application use Service Workers?

1. Service Workers allow for the creation of web applications that appear to work on your desktop/mobile device as if they were native applications.  If you can make a web application work like this, you do not have to worry about interacting with any app store or whatever to download the program.  You just visit the site and it is available on your device.
1. Service Workers can make content available while you are offline.  So a user could visit the application, begin creating a new character build, and shut off their internet access.  The application should continue to work.
1. It's a bit of an experiment, I'll admit.  I want to see if I can make an application like this and learn some things in the process.

> Why can I not save my character builds so I can see them on another device?

The ability to save the builds and make them available across devices would require the application to be able to communicate with a website that is capable of storing the builds and also retrieving them for later use.  I may implement this logic later on after the application has been pretty well fleshed out and all that is left is just updating enhancements when the developers change the game.  Or I may make some sort of export functionality where you can copy some save text or something that you can import into the application on another device to see the complete build.  Not entirely sure at this point.  We'll see!

> Can I help you create/update this application?

At the moment I'm not completely up to speed on the ability of git to do pull requests and how that whole architecture works.  For now I'll probably say that if you are interested in helping you could always try to do a pull request, but no guarentees that I won't be an idiot and take a while to figure out how to do that.

In the short term I'll definitely have a thread on the DDO Forums related to this application that people can make comments about, and eventually I may try to figure out how to make GitHub allow Issues to be created for the applciation.