
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["gettingstartedandroid.html#getting-started"] = "Getting started";
index.add({
    url: "gettingstartedandroid.html#getting-started",
    title: "Getting started",
    body: "# Getting started  &lt;img src=\&quot;images/WT_HG_Developer_Overview_IMG.png\&quot; style=\&quot;float:right;\&quot;/&gt;  Welcome to the Wikitude SDK. This document is designed to help you from your very first steps with the Wikitude SDK all the way through to advanced concepts and examples for developing your augmented reality project.   "
});

documentTitles["gettingstartedandroid.html#recommended-usage-of-this-documentation"] = "Recommended Usage of this Documentation";
index.add({
    url: "gettingstartedandroid.html#recommended-usage-of-this-documentation",
    title: "Recommended Usage of this Documentation",
    body: "### Recommended Usage of this Documentation  The documentation is arranged in a way to guide you through the various steps in your development process. We recommend  following each of the steps outlined below and reading the documentation in the order displayed.  1. **[Setup your project](setupguideandroid.html)** - in this section we describe the necessary steps to setup a project in a detailed guide. 2. **[View the samples](samples.html)** - all of the included samples are complete augmented reality experiences which run in `SDKExamples` app. Browse through this section and get an idea of what the SDK is capable of. The relevant parts of the samples are described in more detail to highlight the applied concepts and patterns. These examples are designed to help you get off to a great start with the Wikitude SDK.  	Viewing samples based on vision based augmented reality requires the corresponding reference images. All of them are available directly in the description of the sample or available as a collection in a [PDF file](images/target_images_examples.pdf), which you can either view on the screen or print. 3. **[Write your own Architect World](workflow.html)** - this section will introduce you to best practices for your development workflow once you write your own code for your augmented reality experience. 4. **[Get good at what you do](tools.html)** - the Wikitude SDK comes with several tools which help you to develop more complex augmented reality experiences. This section covers how to use these tools and how they will assist you in your daily work.   "
});

documentTitles["gettingstartedandroid.html#the-wikitude-sdk-augmented-reality-for-your-own-app"] = "The Wikitude SDK - Augmented Reality for your own app";
index.add({
    url: "gettingstartedandroid.html#the-wikitude-sdk-augmented-reality-for-your-own-app",
    title: "The Wikitude SDK - Augmented Reality for your own app",
    body: "### The Wikitude SDK - Augmented Reality for your own app  The Wikitude SDK is a software library and framework for mobile apps used to create augmented reality experiences. The SDK supports any kind of location based use case as well as use cases which require image recognition and tracking technology (vision based augmented reality).   "
});

documentTitles["gettingstartedandroid.html#how-to-code-for-the-wikitude-sdk"] = "How to code for the Wikitude SDK";
index.add({
    url: "gettingstartedandroid.html#how-to-code-for-the-wikitude-sdk",
    title: "How to code for the Wikitude SDK",
    body: "### How to code for the Wikitude SDK The Wikitude SDK builds heavily on web technologies (HTML, JavaScript, CSS) to allow developers to write cross platform augmented reality experiences. These augmented reality experiences are called ARchitect worlds and are basically ordinary HTML pages that can utilize the ARchitect API to create objects in augmented reality.  Integrating the Wikitude SDK into your application is done by adding the platform specific view component called `ARchitectView` to your applications user interface. See the setup guide for how to setup a native project and load an ARchitect World.  Get started with writing augmented reality experiences by viewing through the examples included in the SDK. Each example is explained in detail in this documentation. Additional information about the ARchitect API can be found in the included API specification.  "
});

documentTitles["gettingstartedandroid.html#the-wikitude-developer-portal"] = "The Wikitude Developer Portal";
index.add({
    url: "gettingstartedandroid.html#the-wikitude-developer-portal",
    title: "The Wikitude Developer Portal",
    body: "### The Wikitude Developer Portal The &lt;a href=\&quot;http://www.wikitude.com\&quot; target=\&quot;_top\&quot;&gt;Wikitude Developer Section&lt;/a&gt; should be your first stop when you have specific development related questions. The portal hosts a very active &lt;a href=\&quot;http://www.wikitude.com/developer/developer-forum\&quot; target=\&quot;_top\&quot;&gt;Developer Community Forum&lt;/a&gt; where Wikitude staff members are constantly assisting other developers with helpful tips and advice. A &lt;a href=\&quot;http://www.wikitude.com/developer/knowledge-base\&quot; target=\&quot;_top\&quot;&gt;Knowledge Base&lt;/a&gt; helps with various questions.  "
});

documentTitles["gettingstartedandroid.html#feedback-and-contact"] = "Feedback and Contact";
index.add({
    url: "gettingstartedandroid.html#feedback-and-contact",
    title: "Feedback and Contact",
    body: "### Feedback and Contact We are always interested in your feedback and suggestions how we can improve this documentation. Please use the &lt;a href=\&quot;http://www.wikitude.com/contact\&quot; target=\&quot;_top\&quot;&gt;contact form&lt;/a&gt; on our website or visit us on &lt;a href=\&quot;https://plus.google.com/103004921345651739447/\&quot; target=\&quot;_top\&quot;&gt;Google+&lt;/a&gt; or &lt;a href=\&quot;http://www.facebook.com/WIKITUDE\&quot; target=\&quot;_top\&quot;&gt;Facebook&lt;/a&gt; "
});



documentTitles["setupguideandroid.html#setup-guide-android"] = "Setup Guide Android";
index.add({
    url: "setupguideandroid.html#setup-guide-android",
    title: "Setup Guide Android",
    body: "## Setup Guide Android &lt;img src=\&quot;images/WT_HG_Developer_GetStarted_Android_IMG.png\&quot; /&gt; "
});

documentTitles["setupguideandroid.html#project-setup"] = "Project Setup";
index.add({
    url: "setupguideandroid.html#project-setup",
    title: "Project Setup",
    body: "### Project Setup * Create a new &lt;a href=\&quot;http://developer.android.com/tools/projects/projects-eclipse.html#CreatingAProject\&quot; target=\&quot;_top\&quot;&gt;Android Application Project&lt;/a&gt; (There is also a working SampleProject bundled in this SDK, where all these steps are already made) * Create a `libs` folders in your project root directory and copy `libs/wikitudesdk.jar` * In Eclipse enter `Preferences` -&gt; `Android` -&gt; `Build` and ensure the option `Force error when external jars contain native libraries` is unchecked  	![External jar contains native libraries](images/android_setup_nativelib.png)  * Add the following permissions to your Manifest.xml  ``` xml &lt;uses-permission android:name=\&quot;android.permission.INTERNET\&quot; /&gt; &lt;uses-permission android:name=\&quot;android.permission.ACCESS_COARSE_LOCATION\&quot; /&gt; &lt;uses-permission android:name=\&quot;android.permission.ACCESS_FINE_LOCATION\&quot; /&gt; &lt;uses-permission android:name=\&quot;android.permission.ACCESS_NETWORK_STATE\&quot; /&gt; &lt;uses-permission android:name=\&quot;android.permission.ACCESS_WIFI_STATE\&quot; /&gt; &lt;uses-permission android:name=\&quot;android.permission.ACCESS_GPS\&quot; /&gt; &lt;uses-permission android:name=\&quot;android.permission.CAMERA\&quot; /&gt; &lt;uses-permission android:name=\&quot;android.permission.WRITE_EXTERNAL_STORAGE\&quot; /&gt; &lt;uses-feature android:name=\&quot;android.hardware.camera\&quot; android:required=\&quot;true\&quot; /&gt; &lt;uses-feature android:name=\&quot;android.hardware.location\&quot; android:required=\&quot;true\&quot; /&gt; &lt;uses-feature android:name=\&quot;android.hardware.sensor.accelerometer\&quot; android:required=\&quot;true\&quot; /&gt; &lt;uses-feature android:name=\&quot;android.hardware.sensor.compass\&quot; android:required=\&quot;true\&quot; /&gt; &lt;uses-feature android:glEsVersion=\&quot;0x00020000\&quot; android:required=\&quot;true\&quot; /&gt; &lt;uses-sdk android:targetSdkVersion=\&quot;19\&quot; android:minSdkVersion=\&quot;9\&quot;/&gt; ```  * The activity holding the AR-View (called `architectView` in the following) must have set `android:configChanges=\&quot;screenSize|orientation\&quot;` in the `AndroidManifest.xml`, for example this could look like:  ``` &lt;activity android:name=\&quot;com.yourcompany.yourapp.YourArActivity\&quot;    android:configChanges=\&quot;screenSize|orientation\&quot;/&gt; ```  * Enter a valid trial license key. Read this chapter on how to [obtain a free trial key](triallicense.html).  "
});

documentTitles["setupguideandroid.html#ar-view-in-activity"] = "AR View in Activity";
index.add({
    url: "setupguideandroid.html#ar-view-in-activity",
    title: "AR View in Activity",
    body: "### AR View in Activity  Keep in mind that the Wikitude SDK is not a native Android SDK as you know from other SDK's. The basic concept is to add an `architectView` to your project and notify it about lifecycle events. The `architectView` creates a camera surface and handles sensor events. The experience itself, sometime referred to as ARchitect World, is implemented in JavaScript and packaged in your application's asset-folder (as in this project) or on your own server. The experiences are written in HTML and JavaScript and call methods in Wikitude's `AR`-namespace (e.g. [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html)).   You have to include   ```   &lt;script src=\&quot;architect://architect.js\&quot;&gt;&lt;/script&gt;   ```  	 in your HTML files to use the `AR` namespace and the `architectView` will handle them properly. To test an ARchitect World on a desktop browser, you must include `ade.js` tool instead to avoid JavaScript errors and see a development console.    It is recommended to handle your augmented reality experience in a separate &lt;a href=\&quot;http://developer.android.com/reference/android/app/Activity.html\&quot; target=\&quot;_top\&quot;&gt;Activity&lt;/a&gt;.  Declare the `architectView` inside a &lt;a href=\&quot;http://developer.android.com/guide/topics/ui/declaring-layout.html\&quot; target=\&quot;_top\&quot;&gt;layout XML&lt;/a&gt;. E.g. Add this within &lt;a href=\&quot;http://developer.android.com/reference/android/widget/FrameLayout.html\&quot; target=\&quot;_top\&quot;&gt;FrameLayout&lt;/a&gt;'s parent tags.  ``` &lt;com.wikitude.architect.ArchitectView android:id=\&quot;@+id/architectView\&quot;    android:layout_width=\&quot;fill_parent\&quot; android:layout_height=\&quot;fill_parent\&quot;/&gt;     ```	 	  ArchitectView is creating a camera surface so ensure to properly &lt;a href=\&quot;http://developer.android.com/reference/android/hardware/Camera.html\&quot; target=\&quot;_top\&quot;&gt;release the camera&lt;/a&gt; in case you're using it somewhere else in your application.  Besides the rear-camera the ArchitectView also makes use of compass and accelerometer values, requires &lt;a href=\&quot;http://www.khronos.org/opengles/2_X/\&quot; target=\&quot;_top\&quot;&gt;OpenGL 2.0&lt;/a&gt; and at least Android 2.3.  `ArchitectView.isDeviceSupported(Context context)` checks wether the current device has all required hard- and software in place or not.  *Note: Make AR-View only accessible to supported devices*    It is very important to notify the `ArchitectView` about &lt;a href=\&quot;http://developer.android.com/reference/android/app/Activity.html#ActivityLifecycle\&quot; target=\&quot;_top\&quot;&gt;life-cycle events&lt;/a&gt; of the Activity. Call architectView's `onCreate(), onPostCreate(), onPause(), onResume(), onDestroy()` inside your Activity's lifecycle methods. Best practice is to define a member variable for the `architectView` in your Activity. Set it right after `setContentView`in Activity's `onCreate()`, and then access `architectView` via member-variable later on.  ```  this.architectView = (ArchitectView)this.findViewById( R.id.architectView ); final ArchitectConfig config = new ArchitectConfig( \&quot;\&quot; /* license key */ ); this.architectView.onCreate( config ); ``` 		 Activity's `onPostCreate()` is the best place to load the AR-Experience.  ``` this.architectView.onPostCreate(); this.architectView.load( \&quot;YOUR-AR-URL\&quot; ); ``` 		 The `architectView.load()` argument is the path to the html file that defines your AR experience. It can be relative to the asset folder root or a web-url (starting with `http://` or `https://`). e.g. `architectView.load('arexperience.html')` opens the html in your project's `assets`-folder, whereat `architectView.load('http://your-server.com/arexperience.html')` loads the file from a server.  *Note: You can only pass arguments to the html file when loading it via url. `architectView.load('arexperience.html?myarg=1')` does not work.*   "
});

documentTitles["setupguideandroid.html#location"] = "Location";
index.add({
    url: "setupguideandroid.html#location",
    title: "Location",
    body: "### Location  Management of the location is important in  location based augmented reality applications. Depending on the use-case location is used via GPS or network and may be updated every second or once in a while. Although the SDKExamples project provides a basic implementation of a `LocationProvider` this is by far not the best &lt;a href=\&quot;http://developer.android.com/guide/topics/location/strategies.html\&quot; target=\&quot;_top\&quot;&gt;location strategy&lt;/a&gt; available for Android.  **Please use your own advanced location strategy implementation in case you have special requirements**.   "
});

documentTitles["setupguideandroid.html#android-44-kitkat"] = "Android 4.4 (KitKat)";
index.add({
    url: "setupguideandroid.html#android-44-kitkat",
    title: "Android 4.4 (KitKat)",
    body: "### Android 4.4 (KitKat)  Android SDK 19 (KitKat) changes various implementations of the WebView. Please have a look at the &lt;a href=\&quot;http://developer.android.com/guide/webapps/migrating.html\&quot; target=\&quot;_top\&quot;&gt;Android 4.4 WebView Migration&lt;/a&gt; document by Google for details. Furthermore debugging of your ARchitect World improved a lot, have a look at the &lt;a href=\&quot;http://developer.android.com/guide/webapps/debugging.html\&quot;&gt;Debugging Web Apps&lt;/a&gt; documentation by Google for a step-by-step guide.   "
});



documentTitles["supporteddevicesandroid.html#supported-android-devices"] = "Supported Android Devices";
index.add({
    url: "supporteddevicesandroid.html#supported-android-devices",
    title: "Supported Android Devices",
    body: "## Supported Android Devices  Wikitude SDK is running on devices fulfilling the following requirements:  &lt;table&gt; &lt;tr&gt; &lt;th&gt;&lt;/th&gt; &lt;th style=\&quot;width:42%;\&quot;&gt;Sensor-based AR (Geo-AR)&lt;/th&gt; &lt;th style=\&quot;width:42%;\&quot;&gt;Image recognition and tracking&lt;/th&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;&lt;a name=\&quot;supporteddevicesandroid\&quot;&gt;&lt;/a&gt;&lt;strong&gt;Android&lt;/strong&gt;&lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Android 2.3+ (API Level 9+) &lt;br/&gt;  recommended: Android 4.0+ (API Level 14+)&lt;/li&gt;  &lt;li&gt;Compass&lt;/li&gt;  &lt;li&gt;GPS and / or network positioning&lt;/li&gt;  &lt;li&gt;Accelerometer&lt;/li&gt;  &lt;li&gt;&lt;a href=\&quot;http://developer.android.com/guide/practices/screens_support.html\&quot; target=\&quot;_top\&quot;&gt;High resolution devices (hdpi)&lt;/a&gt;&lt;/li&gt;  &lt;li&gt;Rear-facing camera&lt;/li&gt;  &lt;li&gt;&lt;a href=\&quot;http://developer.android.com/guide/topics/graphics/opengl.html\&quot; target=\&quot;_top\&quot;&gt;OpenGL 2.0&lt;/a&gt;&lt;/li&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Android 2.3+ (API Level 9+) &lt;br/&gt;  recommended: Android 4.0+ (API Level 14+)&lt;/li&gt;   &lt;li&gt;&lt;a href=\&quot;http://developer.android.com/guide/practices/screens_support.html\&quot; target=\&quot;_top\&quot;&gt;High resolution devices (hdpi)&lt;/a&gt;&lt;/li&gt;    &lt;li&gt;Rear-facing camera&lt;/li&gt;  &lt;li&gt;Devices with a capable CPU (armv7a and NEON support) e.g.&lt;/li&gt;  &lt;ul&gt;&lt;li&gt;Samsung Galaxy S2 or newer&lt;/li&gt;  &lt;li&gt;Nexus 4 or newer&lt;/li&gt;  &lt;li&gt;Nexus 10 (2012) or newer&lt;/li&gt; &lt;/ul&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;/tr&gt;  &lt;/table&gt;  Requirements for other operating systems and platforms are listed in [this overview](supporteddevices.html)."
});



documentTitles["supporteddevices.html#supported-devices"] = "Supported Devices";
index.add({
    url: "supporteddevices.html#supported-devices",
    title: "Supported Devices",
    body: "#### Supported Devices Wikitude SDK is running on devices fulfilling the following requirements:  &lt;table&gt; &lt;tr&gt; &lt;th&gt;&lt;/th&gt; &lt;th style=\&quot;width:42%;\&quot;&gt;Sensor-based AR (Geo-AR)&lt;/th&gt; &lt;th style=\&quot;width:42%;\&quot;&gt;Image recognition and tracking&lt;/th&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;&lt;a name=\&quot;supporteddevicesandroid\&quot;&gt;&lt;/a&gt;&lt;strong&gt;Android&lt;/strong&gt;&lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Android 2.3+ (API Level 9+) &lt;br/&gt;  recommended: Android 4.0+ (API Level 14+)&lt;/li&gt;  &lt;li&gt;Compass&lt;/li&gt;  &lt;li&gt;GPS and / or network positioning&lt;/li&gt;  &lt;li&gt;Accelerometer&lt;/li&gt;  &lt;li&gt;&lt;a href=\&quot;http://developer.android.com/guide/practices/screens_support.html\&quot; target=\&quot;_top\&quot;&gt;High resolution devices (hdpi)&lt;/a&gt;&lt;/li&gt;  &lt;li&gt;Rear-facing camera&lt;/li&gt;  &lt;li&gt;&lt;a href=\&quot;http://developer.android.com/guide/topics/graphics/opengl.html\&quot; target=\&quot;_top\&quot;&gt;OpenGL 2.0&lt;/a&gt;&lt;/li&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Android 2.3+ (API Level 9+) &lt;br/&gt;  recommended: Android 4.0+ (API Level 14+)&lt;/li&gt;   &lt;li&gt;&lt;a href=\&quot;http://developer.android.com/guide/practices/screens_support.html\&quot; target=\&quot;_top\&quot;&gt;High resolution devices (hdpi)&lt;/a&gt;&lt;/li&gt;    &lt;li&gt;Rear-facing camera&lt;/li&gt;  &lt;li&gt;Devices with a capable CPU (armv7a and NEON support) e.g.&lt;/li&gt;  &lt;ul&gt;&lt;li&gt;Samsung Galaxy S2 or newer&lt;/li&gt;  &lt;li&gt;Nexus 4 or newer&lt;/li&gt;  &lt;li&gt;Nexus 10 (2012) or newer&lt;/li&gt; &lt;/ul&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;&lt;a name=\&quot;supporteddevicesepson\&quot;&gt;&lt;/a&gt;&lt;strong&gt;Epson&lt;/strong&gt;&lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Epson Moverio BT-200&lt;/li&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Epson Moverio BT-200&lt;/li&gt;  &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;&lt;a name=\&quot;supporteddevicesglass\&quot;&gt;&lt;/a&gt;&lt;strong&gt;Google Glass&lt;/strong&gt;&lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Google Glass&lt;/li&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Google Glass&lt;/li&gt;  &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt;  &lt;tr&gt; &lt;td&gt;&lt;a name=\&quot;supporteddevicesios\&quot;&gt;&lt;/a&gt;&lt;strong&gt;iOS&lt;/strong&gt;&lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Devices running iOS 6.0 and up&lt;/li&gt;  &lt;li&gt;Compass&lt;/li&gt;  &lt;li&gt;GPS and / or network positioning&lt;/li&gt;  &lt;li&gt;Accelerometer&lt;/li&gt;  &lt;li&gt;Rear-facing camera&lt;/li&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;   &lt;li&gt;Devices running iOS 6.0 and up&lt;/li&gt;   &lt;li&gt;Rear-facing camera&lt;/li&gt;  &lt;li&gt;Devices with a capable CPU (minimum Apple A4 SoC) e.g.&lt;/li&gt;  &lt;ul&gt;&lt;li&gt;iPhone 4 or newer&lt;/li&gt;  &lt;li&gt;iPad2 or newer&lt;/li&gt;  &lt;li&gt;iPod Touch 5th gen&lt;/li&gt;&lt;/ul&gt;  &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;&lt;a name=\&quot;supporteddevicesvuzix\&quot;&gt;&lt;/a&gt;&lt;strong&gt;Vuzix&lt;/strong&gt;&lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Vuzix M100&lt;/li&gt;  &lt;/ul&gt;  &lt;/td&gt; &lt;td style=\&quot;vertical-align:top;\&quot;&gt;  &lt;ul&gt;  &lt;li&gt;Vuzix M100&lt;/li&gt;  &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; "
});



documentTitles["samples.html#examples"] = "Examples";
index.add({
    url: "samples.html#examples",
    title: "Examples",
    body: "# Examples  The following examples should give you an overview of the capabilities offered by the Wikitude SDK. Each sample is capable of running without modifications on all supported platforms.   Each of the included examples is structured as following:  * `index.html`: entry point for the experience * `js/*`: includes the necessary JavaScript files * `css/*`: css style sheets required * `assets/*`: contains images, 3D models and tracker files  Inside the `js/` folder the main JavaScript file is named like the example. (the example *Image Recognition* has its JavaScript code in the `js/imagerecognition.js` file). Code which is mentioned in the description of the examples can be found in this file, if not explicitly stated otherwise.  "
});

documentTitles["samples.html#samples-on-github"] = "Samples on GitHub";
index.add({
    url: "samples.html#samples-on-github",
    title: "Samples on GitHub",
    body: "### Samples on GitHub  If you are just interested in browsing through the code of the augmented reality experience you can also find the entire source code of the samples on &lt;a href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples\&quot; target=\&quot;_top\&quot;&gt;GitHub&lt;/a&gt;### Android SDK Examples  This section describes the `SDK Sample` project in detail and highlights the main features and use-cases of the Wikitude SDK. The project is part of the SDK bundle and is an Android Eclipse project, ready to run on any of the supported Android devices.  *Note: You cannot run Wikitude SDK project on Android Emulator due to OpenGL restrictions.*  Run through the setup guide, install the sample project on your device and scroll through the sample list.  The project's `asset` folder contains implementation of the various ARchitect World's.  Implementation of the native Android activities is available in the `src` folder.     "
});

documentTitles["samples.html#setup"] = "Setup";
index.add({
    url: "samples.html#setup",
    title: "Setup",
    body: "### Setup  * Download latest &lt;a href=\&quot;http://developer.android.com/sdk/index.html\&quot; target=\&quot;_top\&quot;&gt;Android SDK&lt;/a&gt; * Launch ADT, which is part of the Android SDK or &lt;a href=\&quot;http://www.eclipse.org/downloads/packages/eclipse-classic-422/junosr2\&quot; target=\&quot;_top\&quot;&gt;Eclipse&lt;/a&gt; with installed &lt;a href=\&quot;http://developer.android.com/tools/sdk/eclipse-adt.html\&quot; target=\&quot;_top\&quot;&gt;Android Plugin&lt;/a&gt;  * From the main menu bar, select   `File` -&gt; `Import…` which will open the import wizard. * Select `General` -&gt; `Existing Project into Workspace` and click `Next`. * Choose `Select root directory`, click `Browse` * Navigate to the `SDKExamples` project folder in your filesystem. * Click `Finish` to start the import. * Right click the project folder, click `Preferences` and `Android` * Ensure you have very latest SDK (14+) checked in the Build Target list    ![Project Build Targets](images/android_sdk_version.png)    * Use an Android device that has all hard- and software requirements (should be similar to Samsung Galaxy S2) and &lt;a href=\&quot;http://support.google.com/coordinate/bin/answer.py?hl=en&amp;answer=2569281\&quot; target=\&quot;_top\&quot;&gt;enable your location services in system settings&lt;/a&gt; * Enter `Settings` -&gt; `Applications` -&gt; `Developer` -&gt; check `USB debugging` * Plug in the device via USB. * Right click the project folder again select `Run as…` - `Android Application` and select the target device * The sample application is then installed onto your device  "
});

documentTitles["samples.html#nativejavascript-communication"] = "Native/JavaScript Communication";
index.add({
    url: "samples.html#nativejavascript-communication",
    title: "Native/JavaScript Communication",
    body: "### Native/JavaScript Communication  The samples mainly describe  how to launch an AR experience in your Android activity - anything relevant for AR is written in the provided HTML/JS file.  Although it is highly recommended to implement logic in pure HTML and JavaScript at some point in time it makes sense to interact between native Android and the JavaScript of your AR experience.  One may for instance pass data for points of interest (POI) from native Android to JavaScript.  Define a method named `newData(json)` in the JavaScript file and use `architectView.callJavascript(newData('\&quot; + poiDataAsJson +\&quot;)')` to call the method and pass over the values properly. &lt;a href=\&quot;http://www.json.org/\&quot; target=\&quot;_top\&quot;&gt;JSON Format&lt;/a&gt; is the fastest way to pass bulk of information, like translations, metadata and POI information over to your JavaScript.  There are several ways to &lt;a href=\&quot;http://developer.android.com/reference/org/json/package-summary.html\&quot; target=\&quot;_top\&quot;&gt;create a JSON in Android&lt;/a&gt;.  Sometimes events like a click in your AR experience should cause a reaction in native Android, like launching another screen when clicking a placemark or image target. To achieve that you   need to register a `urlListener` using `architectView.registerUrlListener()` in the activity. Any `document.location` changes to `architectsdk://` will fire an event in your listener (e.g. `document.location = architectsdk://YOUR-INFO`). Listener is informed about the invoked url and can then react on.  *Note: Missing urlListener registration will cause an HTTP error when calling `document.location = architectsdk://YOUR-INFO`*  "
});



documentTitles["imagerecognition.html#image-recognition"] = "Image Recognition";
index.add({
    url: "imagerecognition.html#image-recognition",
    title: "Image Recognition",
    body: "## Image Recognition  This example shows how to recognize images in the viewfinder and overlay it with images. Furthermore it shows how to recognize multiple different images and how to react on user clicks on the overlaid elements.  For a better understanding, here are some terms that will be used in the following and other section of this documentation related to vision-based augmented reality.  - **Target**: A target image and its associated extracted data that is used by the tracker to recognize an image.  - **Target collection**: An archive storing a collection of targets that can be recognized by the tracker. A target collection can hold up to 1000 targets.  - **Tracker**: The tracker analyzes the live camera image and detects the targets stored in its associated target collection. Multiple trackers can be created, however only one tracker can be active for recognition at any given time.  This sample consists of five parts  1. [Image on Target](#imageontarget) 2. [Multiple Targets](#multipletarget) 3. [Interactivity](#interactivity) 4. [Adding HTML content](#htmldrawables) 5. [Bonus: Sparkle Animations](#bonussparkle)  &lt;a id=\&quot;imageontarget\&quot;&gt;&lt;/a&gt; "
});

documentTitles["imagerecognition.html#image-on-target-14"] = "Image on Target (1/4)";
index.add({
    url: "imagerecognition.html#image-on-target-14",
    title: "Image on Target (1/4)",
    body: "### Image on Target (1/4)  With these terms in mind let's start by defining what actually should be recognized (target) and create a corresponding target collection that the tracker can use. In this case, the target collection includes the following single magazine page.  To view the sample you can use the image in [this PDF on page 2](images/target_images_examples.pdf)  ![Page of a magazine that should be augmented.](images/magazine_page_one.jpeg \&quot;Page of a magazine that should be augmented\&quot;)  See [Target Management](targetmanagement.html) for instructions how to create target collections which can be used in the Wikitude SDK.  This is the same process for every use of image recognition in ARchitect. You'll first need to define your targets and then create a target collection for it. Now let us have a look at the JavaScript for enabling image recognition.  ```js // Initialize Tracker // Important: If you replace the tracker file with your own, make sure to change the target name accordingly. // Use a specific target name to match only a certain target or use a wildcard to match any or a certain group of targets.  this.tracker = new AR.Tracker(\&quot;assets/magazine.wtc\&quot;, {     onLoaded: this.worldLoaded });  // Create overlay for page one var imgOne = new AR.ImageResource(\&quot;assets/imageOne.png\&quot;); var overlayOne = new AR.ImageDrawable(imgOne, 1, {     offsetX: -0.15,     offsetY: 0 });  var pageOne = new AR.Trackable2DObject(this.tracker, \&quot;*\&quot;, {     drawables: {         cam: overlayOne     } }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/1_ImageRecognition_1_ImageOnTarget/js/imagerecognition.js#L19-L41\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  First an  [`AR.Tracker`](architectapi://reference/classes/ImageDrawable.html) needs to be created in order to start the recognition engine. It is initialized with a URL specific to the target collection. Optional parameters are passed as object in the last argument. In this case a callback function for the `onLoaded` trigger is set. Once the tracker is fully loaded the function `worldLoaded()` is called.  The next step is to create the augmentation. In this example an image resource is created and passed to the [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html). A drawable is a visual component that can be connected to an target image  [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html) or a geolocated object  [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html). The [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html) is initialized by the image and its size. Optional parameters allow for position it relative to the recognized target.  The last line combines everything by creating an [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html) with the previously created tracker, the name of the image target and the drawable that should augment the recognized image. Please note that in this case the target name is a wildcard `*`. Wildcards can be used to match any target defined in the target collection. If you want to match specific targets only for a particular [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html) simply provide the target name as specified in the target collection.  &lt;div class=\&quot;warning\&quot;&gt;  **Recognize your own images**   &lt;ol&gt;  &lt;li&gt;Upload your images to the &lt;a href=\&quot;http://www.wikitude.com/developer/tools/target-manager\&quot; target=\&quot;_top\&quot;&gt;target management tool (log-in required)&lt;/a&gt;&lt;/li&gt;  &lt;li&gt;Generate your target collection file (.wtc)&lt;/li&gt;  &lt;li&gt;In your code create an  `AR.Tracker` and load the target collection file from the previous step&lt;/li&gt;  &lt;li&gt;Create an AR.Trackable2DObject and assign &lt;strong&gt;your&lt;/strong&gt; targetName&lt;/li&gt;  &lt;/ol&gt; &lt;br /&gt;  Make sure that the `targetName` used with the `AR.Trackable2DObject` correspond to one of the target names in your target collection. You can also use a wildcard to match any target or only a specific subset of targets. Please refer to the [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html) main documentation for more information about wildcards.  &lt;/div&gt;  &lt;a id=\&quot;multipletarget\&quot;&gt;&lt;/a&gt; "
});

documentTitles["imagerecognition.html#multiple-targets-24"] = "Multiple Targets (2/4)";
index.add({
    url: "imagerecognition.html#multiple-targets-24",
    title: "Multiple Targets (2/4)",
    body: "### Multiple Targets (2/4)  Adding multiple targets to a target collection is straightforward. Simply follow the guide at [Target Management](targetmanagement.html). Each target in the target collection is identified by its `target name`. By using this `target name`, it is possible to create an [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html) for every target in the target collection.  To view the sample you can use the image in [this PDF on page 3](images/target_images_examples.pdf)  ![Second page of a magazine that should be augmented.](images/magazine_page_two.jpeg \&quot;Second page of a magazine that should be augmented.\&quot;)  ```js // Create overlay for page two var imgTwo = new AR.ImageResource(\&quot;assets/imageTwo.png\&quot;); var overlayTwo = new AR.ImageDrawable(imgTwo, 0.5, {     offsetX: 0.12,     offsetY: -0.01 }); var pageTwo = new AR.Trackable2DObject(this.tracker, \&quot;pageTwo\&quot;, {     drawables: {         cam: overlayTwo     } });  ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/1_ImageRecognition_2_MultipleTargets/js/imagerecognition.js#L48-L61\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Similar to the first part, the image resource and the [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html) for the second overlay are created. The [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html) for the second page uses the same tracker but with a different target name.    &lt;a id=\&quot;interactivity\&quot;&gt;&lt;/a&gt; "
});

documentTitles["imagerecognition.html#interactivity-34"] = "Interactivity (3/4)";
index.add({
    url: "imagerecognition.html#interactivity-34",
    title: "Interactivity (3/4)",
    body: "### Interactivity (3/4)  The final step is to add interactivity to the image target. For this example a button is added to each target that opens a webpage.  The button is created similar to the overlay feature. An [`AR.ImageResource`](architectapi://reference/classes/ImageResource.html) defines the look of the button and is reused for both buttons.  ``` this.imgButton = new AR.ImageResource(\&quot;assets/wwwButton.png\&quot;); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/1_ImageRecognition_3_Interactivity/js/imagerecognition.js#L28\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  For each target an [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html) for the button is created by utilizing the helper function `createWwwButton(url, options)`. The returned drawable is then added to the `drawables.cam` array on creation of the [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html).  ```js var pageOneButton = this.createWwwButton(\&quot;http://www.wikitude.com/pageone\&quot;, 0.1, {     offsetX: -0.25,     offsetY: -0.25 }); var pageOne = new AR.Trackable2DObject(this.tracker, \&quot;pageOne\&quot;, {     drawables: {         cam: [overlayOne, pageOneButton]     } }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/1_ImageRecognition_3_Interactivity/js/imagerecognition.js#L42-46\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  As the button should be clickable the `onClick` trigger is defined in the options passed to the [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html). In general each drawable can be made clickable by defining its `onClick` trigger.  ```js createWwwButton: function createWwwButtonFn(url, size, options) {     options.onClick = function() {         AR.context.openInBrowser(url);     };     return new AR.ImageDrawable(this.imgButton, size, options); }, ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/1_ImageRecognition_3_Interactivity/js/imagerecognition.js#L81-89\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The function assigned to the click trigger calls [`AR.context.openInBrowser`](architectapi://reference/classes/context.html#method_openInBrowser) with the specified URL, which opens the URL in the browser.   &lt;a id=\&quot;htmldrawables\&quot;&gt;&lt;/a&gt; "
});

documentTitles["imagerecognition.html#adding-html-content-44"] = "Adding HTML content (4/4)";
index.add({
    url: "imagerecognition.html#adding-html-content-44",
    title: "Adding HTML content (4/4)",
    body: "### Adding HTML content (4/4)  Using an [`AR.HtmlDrawable`](architectapi://reference/classes/HtmlDrawable.html) it is possible to display HTML content inside the AR scene, the same way images are displayed. In this example a weather widget is added on top of the image target to present the real-time weather in Maui, Hawaii.  In general any HTML content can be loaded by passing a relative or absolute URL. Additionally HTML content can also be passed as a string; please see the API reference for more details on how to specify the content when creating the drawable. This example uses a relative URL to the weather widget that is stored as `.html` file in the example's `assets` subfolder.  Once the content has been chosen it is important to think about the viewport the content will need in order to be laid out correctly. The viewport is the area that is available to the HTML content when it is rendered. It is independent of the actual area the [`AR.HtmlDrawable`](architectapi://reference/classes/HtmlDrawable.html) will need on screen when placed in the AR scene.  The viewport width and height needs to be set when constructing the [`AR.HtmlDrawable`](architectapi://reference/classes/HtmlDrawable.html) and should also be set as meta tag inside the  HTML content that is used. This tells the HTML rendering engine to use the specified viewport size during rendering.  ```html &lt;meta name=\&quot;viewport\&quot;        content=\&quot;target-densitydpi=device-dpi, width = 320, user-scalable = 0\&quot;&gt; ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/1_ImageRecognition_4_HtmlDrawable/assets/weather.html#L3\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Make sure that the value of `width` is set according to the size (in pixel) the HTML content needs. It should also correspond to the `viewportWidth` value specified during the creation of the [`AR.HtmlDrawable`](architectapi://reference/classes/HtmlDrawable.html).  Similar to  `viewportWidth` the `viewportHeight` is specified to define the available pixel height during rendering of the content. If you are unsure of the pixel size of the HTML content at hand, you can use the developer tools built into modern browsers (e.g. WebInspector) to take measure.  In the code example below we are putting that all together to a working [`AR.HtmlDrawable`](architectapi://reference/classes/HtmlDrawable.html). The created drawable is added to the list of [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html) drawables just like any other drawable.  ```js var weatherWidget = new AR.HtmlDrawable({     uri: \&quot;assets/weather.html\&quot; }, 0.25, {     viewportWidth: 320,     viewportHeight: 100,     backgroundColor: \&quot;#FFFFFF\&quot;,     offsetX: +0.36,     offsetY: 0.5,     horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,     verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,     clickThroughEnabled: true,     allowDocumentLocationChanges: false,     onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {         AR.context.openInBrowser(uri);     } }); var pageOne = new AR.Trackable2DObject(this.tracker, \&quot;pageOne\&quot;, {     drawables: {         cam: [overlayOne, pageOneButton, weatherWidget, sparkles]     } }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/1_ImageRecognition_4_HtmlDrawable/js/imagerecognition.js#L68-L83\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Interaction with an [`AR.HtmlDrawable`](architectapi://reference/classes/HtmlDrawable.html) is controlled with the [`clickThroughEnabled`](architectapi://reference/classes/HtmlDrawable.html#property_clickThroughEnabled) and [`allowDocumentLocationChanges`](architectapi://reference/classes/HtmlDrawable.html#property_allowDocumentLocationChanges) properties. Setting [`clickThroughEnabled`](architectapi://reference/classes/HtmlDrawable.html#property_clickThroughEnabled) will forward click events to the HTML content making it possible to follow links or click buttons. If the content of the HTML drawable should not change [`allowDocumentLocationChanges`](architectapi://reference/classes/HtmlDrawable.html#property_allowDocumentLocationChanges) can be set to `false` so links are not followed. It is still possible to react on clicked links by using the [`onDocumentLocationChanged`](architectapi://reference/classes/HtmlDrawable.html#event_onDocumentLocationChanged) trigger. The example uses this trigger to open clicked links fullscreen in a browser. The result then looks like this  ![HTML Drawable - Real time weather widget](images/IRExample_HTML_2.jpg) &lt;a id=\&quot;bonussparkle\&quot;&gt;&lt;/a&gt;  "
});

documentTitles["imagerecognition.html#bonus-sparkles"] = "Bonus: Sparkles";
index.add({
    url: "imagerecognition.html#bonus-sparkles",
    title: "Bonus: Sparkles",
    body: "### Bonus: Sparkles  This section adds a little bonus to the above example. Sprite sheet animations can be used to animate images similar to animated GIFs and are used in this example to add sparkles to the overlay.  A sprite sheet is an image file that contains all key frame images required for the animation. The key frame image size (width and height) is passed at creation time and must be equal for all key frame images. Key frame images will be managed in an array, starting with entry 0. The key frame image array will be filled from left to right, row by row. Any partly filled key frames at the edge of the sprites sheet will be ignored.  ![Sprite sheet of sparkles for this example.](images/imageSparkles.png \&quot;Sprite sheet of sparkles for this example.\&quot;)  First the image resource is created which is used for creating the [`AR.AnimatedImageDrawable`](architectapi://reference/classes/AnimatedImageDrawable.html). Since the width/height of the sprite sheet is 512 and it carries 16 key frames, the width and height of a single image is 128. So we set 128 as the width and height of the [`AR.AnimatedImageDrawable`](architectapi://reference/classes/AnimatedImageDrawable.html).  ```js // Sparkles var imgSparkles = new AR.ImageResource(\&quot;assets/imageSparkles.png\&quot;); var sparkles = new AR.AnimatedImageDrawable(imgSparkles, 0.25, 128, 128, {     offsetX: -0.2,     offsetY: 0.5,     rotation: 75 }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/1_ImageRecognition_5_Bonus-Sparkles/js/imagerecognition.js#L36-L41\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  To start the animation the order of the keyframes needs to be passed as array. Additionally the time each frame is displayed in ms and the loop count needs to be defined. In this case each image is displayed 100ms before it changes and a loop count of `-1` plays the animation in an infinite loop.  ```js sparkles.animate([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 100, -1); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/1_ImageRecognition_5_Bonus-Sparkles/js/imagerecognition.js#L46\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The last step is to add it as drawable to the [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html) so it will be overlaid on the first page.  ```js var pageOne = new AR.Trackable2DObject(this.tracker, \&quot;pageOne\&quot;, {     drawables: {         cam: [overlayOne, pageOneButton, weatherWidget, sparkles]     } }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/1_ImageRecognition_5_Bonus-Sparkles/js/imagerecognition.js#L106-110\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt; "
});



documentTitles["imagerecognitionand3d.html#3d-models"] = "3D Models";
index.add({
    url: "imagerecognitionand3d.html#3d-models",
    title: "3D Models",
    body: "## 3D Models  This example shows how to augment a target image with 3D content. It starts by displaying a 3D model on a target and advances by adding displayed animations and interactivity. The last part of this sample adds snap-to-screen functionality mixed with touch and swipe gestures.  If you are not yet familiar with how to create a vision based augmented reality scene (based on image recognition and tracking), please have a look at the previous example [Image Recognition][irexample].  3D content within Wikitude can only be loaded from `Wikitude 3D Format` files (.wt3).  This is a compressed binary format for describing 3D content which is optimized for fast loading and handling of 3D content on a mobile device. You still can use 3D models from your favorite 3D modeling tools (Autodesk® Maya® or Blender) but you'll need to convert them into the wt3 file format. The Wikitude 3D Encoder desktop application (Windows and Mac) encodes your 3D source file. The Encoder can handle Autodesk® FBX® files (.fbx) and the open standard Collada (.dae) file formats for encoding to .wt3.  For more details on how to convert your 3D content please see the [Wikitude 3D Encoder][wikitude3dencoder] section. In this example the .wt3 file has already been prepared and saved to assets/car.wt3.  3D content is rendered on top of 2D objects. This limitation exists because of some SDK internal restrictions and might change in an upcoming release.  This sample consists of four parts  1. [3D Model on Target Image](#3dmodelontarget) 2. [Appearing Animation](#appearinganimation) 3. [Interactivity](#interactivity) 4. [Snap to Screen](#snapToScreen)  ![Rendering of car model in Wikitude 3D Encoder](images/car.jpg \&quot;Rendering of the car model used in this example.\&quot;)  The following fictional print advertisement is used as target image, which will be augmented with a 3D model of the car advertised in the print ad.  ![Print ad used as image target](images/carAd.jpg \&quot;Car ad used as image target.\&quot;)   [wikitude3dencoder]: encoder.html [irexample]: imagerecognition.html  &lt;a id=\&quot;3dmodelontarget\&quot;&gt;&lt;/a&gt; "
});

documentTitles["imagerecognitionand3d.html#3d-model-on-target-14"] = "3D Model on Target (1/4)";
index.add({
    url: "imagerecognitionand3d.html#3d-model-on-target-14",
    title: "3D Model on Target (1/4)",
    body: "### 3D Model on Target (1/4)  First of all create an [`AR.Model`](architectapi://reference/classes/Model.html) and pass the URL to the actual .wt3 file of the model. Additional options allow for scaling, rotating and positioning the model in the scene.  ```js this.modelCar = new AR.Model(\&quot;assets/car.wt3\&quot;, { 	onLoaded: this.loadingStep, 	scale: { 		x: 0.045, 		y: 0.045, 		z: 0.045 	}, 	translate: { 		x: 0.0, 		y: 0.05, 		z: 0.0 	}, 	rotate: { 		roll: -25 	} }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/2_3dAndImageRecognition_1_3dModelOnTarget/js/imagerecognitionand3d.js#L31-L46\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  In this example a function is attached to the `onLoaded` trigger to receive a notification once the 3D model is fully loaded. Depending on the size of the model and where it is stored (locally or remotely) it might take some time to completely load and it is recommended to inform the user about the loading time.  Similar to 2D content the 3D model is added to the `drawables.cam` property of an [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html).   ```js var trackable = new AR.Trackable2DObject(this.tracker, \&quot;*\&quot;, { 	drawables: { 		cam: [this.modelCar] 	} }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/2_3dAndImageRecognition_1_3dModelOnTarget/js/imagerecognitionand3d.js#L51-L55\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  This is everything that is needed to allow the 3D model appear on an image target. To adjust scaling and position of the model pass the scale and translate properties as options to the [`AR.Model`](architectapi://reference/classes/Model.html).  To view the sample you can use the image in [this PDF on page 4](images/target_images_examples.pdf)  &lt;a id=\&quot;appearinganimation\&quot;&gt;&lt;/a&gt; "
});

documentTitles["imagerecognitionand3d.html#appearing-animation-24"] = "Appearing Animation (2/4)";
index.add({
    url: "imagerecognitionand3d.html#appearing-animation-24",
    title: "Appearing Animation (2/4)",
    body: "### Appearing Animation (2/4)  As a next step, an appearing animation is added which scales up the 3D model once the target is inside the field of vision. Creating an animation on a single property of an object is done using an [`AR.PropertyAnimation`](architectapi://reference/classes/PropertyAnimation.html). Since the car model needs to be scaled up on all three axis, three animations are needed. These animations are grouped together utilizing an [`AR.AnimationGroup`](architectapi://reference/classes/AnimationGroup.html) that allows them to play them in parallel.  ```js var sx = new AR.PropertyAnimation(model, \&quot;scale.x\&quot;, 0, scale, 1500, { 	type: AR.CONST.EASING_CURVE_TYPE.EASE_OUT_QUAD }); var sy = new AR.PropertyAnimation(model, \&quot;scale.y\&quot;, 0, scale, 1500, { 	type: AR.CONST.EASING_CURVE_TYPE.EASE_OUT_QUAD }); var sz = new AR.PropertyAnimation(model, \&quot;scale.z\&quot;, 0, scale, 1500, { 	type: AR.CONST.EASING_CURVE_TYPE.EASE_OUT_QUAD });  return new AR.AnimationGroup(AR.CONST.ANIMATION_GROUP_TYPE.PARALLEL, [sx, sy, sz]); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/2_3dAndImageRecognition_2_AppearingAnimation/js/imagerecognitionand3d.js#L87-L97\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Each [`AR.PropertyAnimation`](architectapi://reference/classes/PropertyAnimation.html) targets one of the three axis and scales the model from 0 to the value passed in the `scale` variable. An `EASE_OUT_QUAD` easing curve is used to create a more dynamic effect of the animation.  To get a notification once the image target is inside the field of vision the `onEnterFieldOfVision` trigger of the [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html) is used. In the example the function `appear()` is attached.  ```js appear: function appearFn () { 	World.appearingAnimation.start(); } ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/2_3dAndImageRecognition_2_AppearingAnimation/js/imagerecognitionand3d.js#L100-L102\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;   Within the `appear` function the previously created [`AR.AnimationGroup`](architectapi://reference/classes/AnimationGroup.html) is started by calling its `start()` function which plays the animation once.  &lt;a id=\&quot;interactivity\&quot;&gt;&lt;/a&gt; "
});

documentTitles["imagerecognitionand3d.html#interactivity-34"] = "Interactivity (3/4)";
index.add({
    url: "imagerecognitionand3d.html#interactivity-34",
    title: "Interactivity (3/4)",
    body: "### Interactivity (3/4)  To add more functionality, a rotating animation is added to the 3D model. It is started and paused by clicking on the button or on the 3D model.  Additionally to the 3D model an image that will act as a button is added to the image target. This can be accomplished by loading an [`AR.ImageResource`](architectapi://reference/classes/ImageResource.html) and creating a drawable from it.  ```js var imgRotate = new AR.ImageResource(\&quot;assets/rotateButton.png\&quot;); var buttonRotate = new AR.ImageDrawable(imgRotate, 0.2, { 	offsetX: 0.35, 	offsetY: 0.45, 	onClick: this.toggleAnimateModel }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/2_3dAndImageRecognition_3_Interactivity/js/imagerecognitionand3d.js#L67-L72\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  To add the [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html) to the image target together with the 3D model both drawables are supplied to the [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html).  ```js var trackable = new AR.Trackable2DObject(this.tracker, \&quot;*\&quot;, { 	drawables: { 		cam: [this.modelCar, buttonRotate] 	}, 	onEnterFieldOfVision: this.appear }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/2_3dAndImageRecognition_3_Interactivity/js/imagerecognitionand3d.js#L79-L84\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The rotation animation for the 3D model is created by defining an [`AR.PropertyAnimation`](architectapi://reference/classes/PropertyAnimation.html) for the `rotate.roll` property.  ```js // Rotation Animation this.rotationAnimation = new AR.PropertyAnimation(this.modelCar, \&quot;rotate.roll\&quot;, -25, 335, 10000); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/2_3dAndImageRecognition_3_Interactivity/js/imagerecognitionand3d.js#L62\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The drawables are made clickable by setting their `onClick` triggers. Click triggers can be set in the options of the drawable when the drawable is created. Thus, when the 3D model `onClick: this.toggleAnimateModel` is set in the options it is then passed to the [`AR.Model`](architectapi://reference/classes/Model.html) constructor. Similar the button's `onClick: this.toggleAnimateModel` trigger is set in the options passed to the [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html) constructor. `toggleAnimateModel()` is therefore called when the 3D model or the button is clicked.  Inside the `toggleAnimateModel()` function, it is checked if the animation is running and decided if it should be started, resumed or paused.  ```js toggleAnimateModel: function toggleAnimateModelFn() { 	if (!World.rotationAnimation.isRunning()) { 		if (!World.rotating) { 			World.rotationAnimation.start(-1); 			World.rotating = true; 		} else { 			World.rotationAnimation.resume(); 		} 	} else { 		World.rotationAnimation.pause(); 	}  	return false; } ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/2_3dAndImageRecognition_3_Interactivity/js/imagerecognitionand3d.js#L135-L151\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Starting an animation with `.start(-1)` will loop it indefinitely.   &lt;a id=\&quot;snapToScreen\&quot;&gt;&lt;/a&gt; "
});

documentTitles["imagerecognitionand3d.html#snap-to-screen-44"] = "Snap to Screen (4/4)";
index.add({
    url: "imagerecognitionand3d.html#snap-to-screen-44",
    title: "Snap to Screen (4/4)",
    body: "### Snap to Screen (4/4) To finish things up, the snap to screen feature is added so that the 3D model can be explored in a more immersive way. Snap to screen will bring the drawables, attached to a [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html), out of the augmented reality scene and directly onto the screen. Once snapped, the drawables will stay on the screen as long as they are not set back into the augmented reality context. Thereby users can explore content even if they don't look at the target image.  The snap position on the screen is defined through a `div` element. During the [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html) creation, the `div` is passed as a additional option. In this example a `div` with id `snapContainer` is used.  ```js this.trackable = new AR.Trackable2DObject(this.tracker, \&quot;*\&quot;, { 	drawables: { 		... 	}, 	snapToScreen: { 		snapContainer: document.getElementById('snapContainer') 	}, 	... }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/2_3dAndImageRecognition_4_SnapToScreen/js/imagerecognitionand3d.js#L139-L147\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Snapping is then enabled through an additional button. The button is created and setup just the same way as the rotate button. The only difference is that the `onClick` function of the newly created button is pointing to a different function.  ```js toggleSnapping: function toggleSnappingFn() {  	World.snapped = !World.snapped;		 	World.trackable.snapToScreen.enabled = World.snapped;  	if ( !World.snapped ) {  		World.applyLayout(World.layout.snapped);  		World.addInteractionEventListener();  	} else {  		World.applyLayout(World.layout.normal);  		World.removeInteractionEventListener(); 	} } ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/2_3dAndImageRecognition_4_SnapToScreen/js/imagerecognitionand3d.js#L295-L312\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  To enable snapping, set the [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html) property [`snapToScreen.enabled`](architectapi://reference/classes/Trackable2DObject.html#property_snapToScreen.enabled) accordingly (either `true` or `false`). Based on the current snapping state, the drawables are positioned and scaled differently and event listeners are added or removed so that the 3D model can only be modified while it is snapped.  In the sample the 3D model can be rotated and scaled through touch and gesture events once it is snapped to the screen. To apply the new rotation and scale values, the JavaScript events `touchmoved` and `gesturechange` are used. Inside these listener functions scale and rotation values are calculated and applied to the 3D model. "
});



documentTitles["poi.html#point-of-interest-poi"] = "Point Of Interest (POI)";
index.add({
    url: "poi.html#point-of-interest-poi",
    title: "Point Of Interest (POI)",
    body: "## Point Of Interest (POI)  The Point Of Interest (POI) example series will show how you can create a marker that is placed at a specific geolocation. The example is split into four different parts that depend on each other. You will have a complete and reusable marker at the end of the series which has a title, description, a selected and an idle state which animates smoothly from one to another.   This sample consists of four parts  1. [POI at Location](#poiatlocation) 2. [POI with Label](#poiwithlabel) 3. [Multiple POIs](#multiplepois) 4. [Selecting POIs](#selectingpois)  &lt;a id=\&quot;poiatlocation\&quot;&gt;&lt;/a&gt; "
});

documentTitles["poi.html#poi-at-location-14"] = "POI at Location (1/4)";
index.add({
    url: "poi.html#poi-at-location-14",
    title: "POI at Location (1/4)",
    body: "### POI at Location (1/4)  The first part of the series will present an image at a geolocation. To do so, we will use the `AR.context.onLocationChanged()` callback to get the current location. After the location has been retrieved, we will use it to place an [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html) there.  All JavaScript code can be found in the file `poiatlocation.js`.  The example [Image Recognition](imagerecognition.html#ImageRecognitionExample) already explained how images are loaded and displayed in the augmented reality view. This sample loads an [`AR.ImageResource`](architectapi://reference/classes/ImageResource.html) when the `World` variable was defined. It will be reused for each marker that we will create afterwards.  The last line of the `poiatlocation.js` shows how to set a custom `AR.context.onLocationChanged` callback.  ```js AR.context.onLocationChanged = World.onLocationChanged; ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_1_PoiAtLocation/js/poiatlocation.js#L76\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The custom function `World.onLocationChanged` checks with the flag `World.initiallyLoadedData` if  the function was already called. There is also a possibility to set `AR.context.onLocationChanged` to null. In this case the function will not be called anymore and no further location updates will be received.  On the first call of `World.onLocationChanged` an object that contains geo information will be created which will be later used to create a marker using the `World.loadPoisFromJsonData` function. ```js locationChanged: function locationChangedFn(lat, lon, alt, acc) { 	// request data if not already present 	if (!World.initiallyLoadedData) { 		var poiData = { 			\&quot;id\&quot;: 1, 			\&quot;longitude\&quot;: (lon + (Math.random() / 5 - 0.1)), 			\&quot;latitude\&quot;: (lat + (Math.random() / 5 - 0.1)), 			\&quot;altitude\&quot;: 100.0 		}; 		World.loadPoisFromJsonData(poiData); 		World.initiallyLoadedData = true; 	} } ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_1_PoiAtLocation/js/poiatlocation.js#L58-L69\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The `loadPoisFromJsonData` function creates an [`AR.ImageResource`](architectapi://reference/classes/ImageResource.html) which is later used as an image for the marker. ```js // start loading marker assets World.markerDrawable_idle = new AR.ImageResource(\&quot;assets/marker_idle.png\&quot;); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_1_PoiAtLocation/js/poiatlocation.js#L15\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  For creating the marker a new object [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html) will be created at the specified geolocation. An [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html) connects one or more `AR.GeoLocations` with multiple `AR.Drawables`. The `AR.Drawables` can be defined for multiple targets. A target can be the camera, the radar or a direction indicator. Both the radar and direction indicators will be covered in more detail in later examples.  ```js // create the marker var markerLocation = new AR.GeoLocation(poiData.latitude, poiData.longitude, poiData.altitude); var markerImageDrawable_idle = new AR.ImageDrawable(markerDrawable_idle, 2.5, { 	zOrder: 0, 	opacity: 1.0 });  // create GeoObject var markerObject = new AR.GeoObject(markerLocation, { 	drawables: { 		cam: [markerImageDrawable_idle] 	} }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_1_PoiAtLocation/js/poiatlocation.js#L20-L31\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Finally the status message is updated as a user feedback that everything was loaded properly: ```js World.updateStatusMessage('1 place loaded'); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_1_PoiAtLocation/js/poiatlocation.js#L34\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  &lt;a id=\&quot;poiwithlabel\&quot;&gt;&lt;/a&gt; "
});

documentTitles["poi.html#poi-with-label-24"] = "POI with Label (2/4)";
index.add({
    url: "poi.html#poi-with-label-24",
    title: "POI with Label (2/4)",
    body: "### POI with Label (2/4)  The second part adds a title and description label to our marker object and covers more drawable related options.  ![](images/sample_poi_poiwithlabel.jpg)  All JavaScript changes are in `poiwithlabel.js`. Note that the file is only renamed but its content is mostly identical to `poiatlocation.js`.  The `locationChanged` function adds a description and a title to the marker: ```js var poiData = { 	\&quot;id\&quot;: 1, 	\&quot;longitude\&quot;: (lon + (Math.random() / 5 - 0.1)), 	\&quot;latitude\&quot;: (lat + (Math.random() / 5 - 0.1)), 	\&quot;altitude\&quot;: 100.0, 	\&quot;description\&quot;: \&quot;This is the description of POI#1\&quot;, 	\&quot;title\&quot;: \&quot;POI#1\&quot; }; ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_2_PoiWithLabel/js/poiwithlabel.js#L49-L56\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt; Since there are additional changes concerning the marker it makes sense to extract the code to a separate `Marker` class (see **marker.js**). Parts of the code are moved from `loadPoisFromJsonData` to the `Marker`class: the creation of the `AR.GeoLocation`, the creation of the [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html) and the creation of the [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html). Then instantiate the `Marker` in the function `loadPoisFromJsonData`:  ```js // create the marker var marker = new Marker(poiData); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_2_PoiWithLabel/js/poiwithlabel.js#L20\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  There are two major points that need to be considered while drawing multiple `AR.Drawables` at the same location. It has to be defined which one is before or behind another drawable (rendering order) and if they need a location offset. For both scenarios, ARchitect has some functionality to adjust the drawable behavior.  To position the `AR.Label` in front of the background, the background drawable(`AR.ImageDrawable2D`) receives a `zOrder` of 0. Both labels have a `zOrder` of 1. This way it is guaranteed that the labels will be drawn in front of the background drawable.  Assuming both labels will be drawn on the same geolocation connected with the same [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html) they will overlap. To adjust their position change the `offsetX` and `offsetY` property of an `AR.Drawable2D` object. The unit for offsets are SDUs. See this chapter for more information about [SDUs](sdu-dbs.html).  In the following both `AR.Labels` are initialized and positioned. Note that they are added to the cam property of the [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html) the same way as an [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html). ```js function Marker(poiData) {      this.poiData = poiData;      var markerLocation = new AR.GeoLocation(poiData.latitude, poiData.longitude, poiData.altitude);     this.markerDrawable_idle = new AR.ImageDrawable(World.markerDrawable_idle, 2.5, {         zOrder: 0,         opacity: 1.0     });      this.titleLabel = new AR.Label(poiData.title.trunc(10), 1, {         zOrder: 1,         offsetY: 0.55,         style: {             textColor: '#FFFFFF',             fontStyle: AR.CONST.FONT_STYLE.BOLD         }     });      this.descriptionLabel = new AR.Label(poiData.description.trunc(15), 0.8, {         zOrder: 1,         offsetY: -0.55,         style: {             textColor: '#FFFFFF'         }     });      // Changed:      this.markerObject = new AR.GeoObject(markerLocation, {         drawables: {             cam: [this.markerDrawable_idle, this.titleLabel, this.descriptionLabel]         }     });      return this; } ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_2_PoiWithLabel/js/marker.js#L1-L49\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Additionally a function which truncates a text string that is longer than the given length is added. This function is used to shorten titles or descriptions. ```js String.prototype.trunc = function(n) {    	return this.substr(0, n - 1) + (this.length &gt; n ? '...' : ''); }; ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_2_PoiWithLabel/js/marker.js#L53-L55\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  &lt;a id=\&quot;multiplepois\&quot;&gt;&lt;/a&gt; "
});

documentTitles["poi.html#multiple-pois-34"] = "Multiple POIs (3/4)";
index.add({
    url: "poi.html#multiple-pois-34",
    title: "Multiple POIs (3/4)",
    body: "### Multiple POIs (3/4)  The third example consist of two parts. The first part shows how to create multiple markers and in the second part an implementation of a marker selection is described.   ![](images/sample_poi_multiple_poi.jpg)  For creating multiple markers change the class `World`. Add a function `requestDataFromLocal` with the geo information as parameters (latitude, longitude) which are used for creating different poi data to a random location in the user's vicinity. The new function is called from `locationChanged` instead of calling `loadPoisFromJsonData` like in the previous example: ```js World.requestDataFromLocal(lat, lon); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_3_MultiplePois/js/multiplepois.js#L71\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt; 	 The function `loadPoisFromJsonData` will be called within the new function `requestDataFromLocal` after the POI data was created: ```js  	// request POI data 	requestDataFromLocal: function requestDataFromLocalFn(centerPointLatitude, centerPointLongitude) { 		var poisToCreate = 20; 		var poiData = [];  		for (var i = 0; i &lt; poisToCreate; i++) { 			poiData.push({ 				\&quot;id\&quot;: (i + 1), 				\&quot;longitude\&quot;: (centerPointLongitude + (Math.random() / 5 - 0.1)), 				\&quot;latitude\&quot;: (centerPointLatitude + (Math.random() / 5 - 0.1)), 				\&quot;description\&quot;: (\&quot;This is the description of POI#\&quot; + (i + 1)), 				\&quot;altitude\&quot;: \&quot;100.0\&quot;, 				\&quot;name\&quot;: (\&quot;POI#\&quot; + (i + 1)) 			}); 		} 		World.loadPoisFromJsonData(poiData); 	} 	 ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_3_MultiplePois/js/multiplepois.js#L100-L114\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt; 	 Since the argument of `loadPoisFromJsonData` is used as an array and not like a single object as before some adaptations are necessary. The POI information array which is delivered as an argument in the function `loadPoisFromJsonData` is used to create poiData objects. In a for loop iterate through all the poi information objects. For each object create a new object `singlePoi`. To create multiple markers `new Marker(poiData)` can be called multiple times with different locations, titles and descriptions as defined in the poiData object. Now create the `Marker` objects and store them in an array `markerList` which is defined as a member variable in the `World` class. The `markerList` array is needed for selection/deselection of markers and will be described later in this example. Finally the status message is updated with the number of POIs loaded. ```js 		 		// called to inject new POI data 		loadPoisFromJsonData: function loadPoisFromJsonDataFn(poiData) { 	 			// empty list of visible markers 			World.markerList = []; 	 			// start loading marker assets 			World.markerDrawable_idle = new AR.ImageResource(\&quot;assets/marker_idle.png\&quot;); 	 			// loop through POI-information and create an AR.GeoObject (=Marker) per POI 			for (var currentPlaceNr = 0; currentPlaceNr &lt; poiData.length; currentPlaceNr++) { 				var singlePoi = { 					\&quot;id\&quot;: poiData[currentPlaceNr].id, 					\&quot;latitude\&quot;: parseFloat(poiData[currentPlaceNr].latitude), 					\&quot;longitude\&quot;: parseFloat(poiData[currentPlaceNr].longitude), 					\&quot;altitude\&quot;: parseFloat(poiData[currentPlaceNr].altitude), 					\&quot;title\&quot;: poiData[currentPlaceNr].name, 					\&quot;description\&quot;: poiData[currentPlaceNr].description 				}; 	 				World.markerList.push(new Marker(singlePoi)); 			} 	 			World.updateStatusMessage(currentPlaceNr + ' places loaded'); 		} 	 ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_3_MultiplePois/js/multiplepois.js#L17-L43\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  At this point the implementation for displaying multiple markers is finished. Let's have a look on how to change the marker background image after it was selected and handle the different selection states.  A second [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html) is defined in `marker.js`.  To react on user interaction, an `onClick` property can be set for each `AR.Drawable`. The property is a function which will be called each time the user taps on the drawable. The following snippet shows the adapted [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html) creation. ```js this.markerDrawable_idle = new AR.ImageDrawable(World.markerDrawable_idle, 2.5, { 	zOrder: 0, 	opacity: 1.0, 	onClick: Marker.prototype.getOnClickTrigger(this) }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_3_MultiplePois/js/marker.js#L13-L20\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The function called on each tap is returned from the following helper function defined in `marker.js`. The function returns a function which checks the selected state with the help of the variable `isSelected` and executes the appropriate function. The clicked marker is passed as an argument.  ```js Marker.prototype.getOnClickTrigger = function(marker) {      return function() { 			if (marker.isSelected) {                 Marker.prototype.setDeselected(marker);              } else {                 Marker.prototype.setSelected(marker);                 try {                     World.onMarkerSelected(marker);                 } catch (err) {                     alert(err);                 }             }     }; }; ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_3_MultiplePois/js/marker.js#L58-L84\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The `setSelected` and `setDeselected` functions are prototype `Marker` functions.  Both functions perform the same steps but inverted, hence only one function (`setSelected`) is covered in detail. Three steps are necessary to select the marker. First the state will be set appropriately. Second the background drawable will be enabled and the standard background disabled. This is done by setting the opacity property to 1.0 for the visible state and to 0.0 for an invisible state. Third the `onClick` function is set only for the background drawable of the selected marker. ```js Marker.prototype.setSelected = function(marker) {      marker.isSelected = true;      marker.markerDrawable_idle.opacity = 0.0;     marker.markerDrawable_selected.opacity = 1.0;      marker.markerDrawable_idle.onClick = null;     marker.markerDrawable_selected.onClick = Marker.prototype.getOnClickTrigger(marker); }; ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_3_MultiplePois/js/marker.js#L86-L94\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  To be able to deselect a marker while the user taps on the empty screen, the `World` object holds an array that contains each marker. ```js World.markerList.push( new Marker(poiData) ); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_3_MultiplePois/js/multiplepois.js#L40\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  To detect clicks where no drawable was hit set a custom function on `AR.context.onScreenClick` where the currently selected marker is deselected. ```js onScreenClick: function onScreenClickFn() { 	if (World.currentMarker) { 		World.currentMarker.setDeselected(World.currentMarker); 	} } ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_3_MultiplePois/js/multiplepois.js#L93-L97\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  &lt;a id=\&quot;selectingpois\&quot;&gt;&lt;/a&gt; "
});

documentTitles["poi.html#selecting-pois-44"] = "Selecting POIs (4/4)";
index.add({
    url: "poi.html#selecting-pois-44",
    title: "Selecting POIs (4/4)",
    body: "### Selecting POIs (4/4)  ![](images/sample_poi_selecting_poi.jpg)  The last part describes the concepts behind `AR.PropertyAnimations` and `AR.AnimationGroups`. It also explains how direction indicators can be used to visualize selected objects that are currently not visible in the viewfinder.  With `AR.PropertyAnimations` you are able to animate almost any property of ARchitect objects. This sample will animate the opacity of both background drawables so that one will fade out while the other one fades in. The scaling is animated too. The marker size changes over time so the labels need to be animated too in order to keep them relative to the background drawable. `AR.AnimationGroups` are used to synchronize all animations in parallel or sequentially.  In `marker.js` there are two new variables declared. They hold a reference to an [`AR.AnimationGroup`](architectapi://reference/classes/AnimationGroup.html) that is used to either start or stop the animations. ```js this.animationGroup_idle = null; this.animationGroup_selected = null; ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_4_SelectingPois/js/marker.js#L13-L14\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The functions `setSelected` and `setDeselected` in `marker.js` have to be adapted. Again only the changes in `setSelected` are explained.   There are two types of `AR.AnimationGroups`. Parallel animations are running at the same time, sequential animations are played one after another. This example uses a parallel [`AR.AnimationGroup`](architectapi://reference/classes/AnimationGroup.html).  ```js if (marker.animationGroup_selected === null) {  	var hideIdleDrawableAnimation = new AR.PropertyAnimation(marker.markerDrawable_idle, \&quot;opacity\&quot;, null, 0.0, kMarker_AnimationDuration_ChangeDrawable);         var showSelectedDrawableAnimation = new AR.PropertyAnimation(marker.markerDrawable_selected, \&quot;opacity\&quot;, null, 0.8, kMarker_AnimationDuration_ChangeDrawable);          var idleDrawableResizeAnimation = new AR.PropertyAnimation(marker.markerDrawable_idle, 'scaling', null, 1.2, kMarker_AnimationDuration_Resize, new AR.EasingCurve(AR.CONST.EASING_CURVE_TYPE.EASE_OUT_ELASTIC, {             amplitude: 2.0         }));         var selectedDrawableResizeAnimation = new AR.PropertyAnimation(marker.markerDrawable_selected, 'scaling', null, 1.2, kMarker_AnimationDuration_Resize, new AR.EasingCurve(AR.CONST.EASING_CURVE_TYPE.EASE_OUT_ELASTIC, {             amplitude: 2.0         }));          var titleLabelResizeAnimation = new AR.PropertyAnimation(marker.titleLabel, 'scaling', null, 1.2, kMarker_AnimationDuration_Resize, new AR.EasingCurve(AR.CONST.EASING_CURVE_TYPE.EASE_OUT_ELASTIC, {             amplitude: 2.0         }));         var descriptionLabelResizeAnimation = new AR.PropertyAnimation(marker.descriptionLabel, 'scaling', null, 1.2, kMarker_AnimationDuration_Resize, new AR.EasingCurve(AR.CONST.EASING_CURVE_TYPE.EASE_OUT_ELASTIC, {             amplitude: 2.0         }));          marker.animationGroup_selected = new AR.AnimationGroup(AR.CONST.ANIMATION_GROUP_TYPE.PARALLEL, [hideIdleDrawableAnimation, showSelectedDrawableAnimation, idleDrawableResizeAnimation, selectedDrawableResizeAnimation, titleLabelResizeAnimation, descriptionLabelResizeAnimation]); } ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_4_SelectingPois/js/marker.js#L163-L190\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Launch the [`AR.AnimationGroup`](architectapi://reference/classes/AnimationGroup.html) using the `start` function. ```js     marker.animationGroup_selected.start();  ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_4_SelectingPois/js/marker.js#L156\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  In the function `Marker.prototype.getOnClickTrigger` the selection functions are only called if no animation is currently running: ```js if (!Marker.prototype.isAnyAnimationRunning(marker)) { 	if (marker.isSelected) { 	 		Marker.prototype.setDeselected(marker); 	 	} else { 		Marker.prototype.setSelected(marker); 		try { 			World.onMarkerSelected(marker); 		} catch (err) { 			alert(err); 		} 		 	} 	} else { 		AR.logger.debug('a animation is already running'); 	} } ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_4_SelectingPois/js/marker.js#L86-L102\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Create an [`AR.ImageResource`](architectapi://reference/classes/ImageResource.html) referencing the image that should be displayed for a direction indicator. Then create an [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html) using the [`AR.ImageResource`](architectapi://reference/classes/ImageResource.html). Set options regarding the offset and anchor of the image so that it will be displayed correctly on the edge of the screen. ```js this.directionIndicatorDrawable = new AR.ImageDrawable(World.markerDrawable_directionIndicator, 0.5, {     enabled: false }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_4_SelectingPois/js/marker.js#L59-L62\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The last step is to define the [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html) as an `indicator` target on the marker [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html). The direction indicator is displayed automatically when necessary. `AR.Drawable` subclasses (e.g. [`AR.Circle`](architectapi://reference/classes/Circle.html)) can be used as direction indicators. ```js this.markerObject = new AR.GeoObject(markerLocation, { 	drawables: { 		cam: [	this.markerDrawable_idle,  				this.markerDrawable_selected,  				this.titleLabel,  				this.descriptionLabel 			 ],             indicator: this.directionIndicatorDrawable         }     }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/3_PointOfInterest_4_SelectingPois/js/marker.js#L67-L75\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt; "
});



documentTitles["retrievingpoidata.html#retrieving-poi-data"] = "Retrieving POI Data";
index.add({
    url: "retrievingpoidata.html#retrieving-poi-data",
    title: "Retrieving POI Data",
    body: "## Retrieving POI Data There are several ways to request and work with POI detail information in an ARchitect World. Depending on your application and use case, one might fit better than the other.  This sample consists of three parts  1. [From Application Model](#applicationmodel) 2. [From a Local Resource ](#local) 3. [From a Webservice](#webservice)  &lt;a id=\&quot;applicationmodel\&quot;&gt;&lt;/a&gt; "
});

documentTitles["retrievingpoidata.html#from-application-model-13"] = "From Application Model (1/3)";
index.add({
    url: "retrievingpoidata.html#from-application-model-13",
    title: "From Application Model (1/3)",
    body: "### From Application Model (1/3) Besides loading data from assets it is also possible to load data from a database, or to create it in native code. Use the platform common way to create JSON Objects of your data and use `architectView.callJavaScript()` to pass them to the ARchitect World's JavaScript.  Have a look at `SampleCamContentFromNativeActivity.java` to get a better understanding of how data can be injected to JavaScript. &lt;a id=\&quot;local\&quot;&gt;&lt;/a&gt; "
});

documentTitles["retrievingpoidata.html#from-a-local-resource-23"] = "From a Local Resource (2/3)";
index.add({
    url: "retrievingpoidata.html#from-a-local-resource-23",
    title: "From a Local Resource (2/3)",
    body: "### From a Local Resource (2/3) In case the data of your ARchitect World is static the content should be stored within the application. Create a JavaScript file (e.g. `myJsonData.js`) where a globally accessible variable is defined: ```js var myJsonData = …[YOUR-JSON-DATA] ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/4_ObtainPoiData_2_FromLocalResource/js/myJsonData.js#L1\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Include the JavaScript in the ARchitect Worlds HTML by adding `&lt;script src=\&quot;js/myJsonData.js\&quot;/&gt;` to make POI information available anywhere in your JavaScript.  ```js // request POI data requestDataFromLocal: function requestDataFromLocalFn(lat, lon) { 	World.loadPoisFromJsonData(myJsonData); } ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/4_ObtainPoiData_2_FromLocalResource/js/fromLocalResource.js#L103-L114\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt; 	 *Note: This sample uses static POI data and overwrites latitude and longitude values using `Helper.bringPlacesToUser`, you must remove this line to avoid this.*  &lt;a id=\&quot;webservice\&quot;&gt;&lt;/a&gt; "
});

documentTitles["retrievingpoidata.html#from-a-webservice-33"] = "From a Webservice (3/3)";
index.add({
    url: "retrievingpoidata.html#from-a-webservice-33",
    title: "From a Webservice (3/3)",
    body: "### From a Webservice (3/3) &lt;a href=\&quot;http://jquery.com/\&quot; target=\&quot;_top\&quot;&gt;JQuery&lt;/a&gt; provides a number of tools to load data from a remote origin. It is highly recommended to use the JSON format for POI information. Requesting and parsing is done in a few lines of code.  Use e.g. `AR.context.onLocationChanged = World.locationChanged;` to define the method invoked on location updates. In this sample POI information is requested after the very first location update. Note: You may set `AR.context.onLocationChanged = null` afterwards to no longer receive location updates in `World.locationChanged`.  It is recommended to store server information separately. ```js // holds server information var ServerInformation = { 	// sample service returning dummy POIs 	POIDATA_SERVER: \&quot;http://example.wikitude.com/GetSamplePois/\&quot;, 	POIDATA_SERVER_ARG_LAT: \&quot;lat\&quot;, 	POIDATA_SERVER_ARG_LON: \&quot;lon\&quot;, 	POIDATA_SERVER_ARG_NR_POIS: \&quot;nrPois\&quot; }; ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/4_ObtainPoiData_3_FromWebservice/js/fromWebservice.js#L2-L7\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Ensure that the server returns valid JSON and it is escaped properly (e.g. special characters in POI name…).   The server response is passed over to `World.loadPoisFromJsonData(poiData)`, where the creation of markers and their camera representation is defined. ```js  // location updates locationChanged: function locationChangedFn(lat, lon, alt, acc) { 	 	/* Request data from server only once*/ 	if (!World.alreadyRequestedData) { 		World.requestDataFromServer(lat, lon); 		World.alreadyRequestedData = true; 	} },  ```	 &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/4_ObtainPoiData_3_FromWebservice/js/fromWebservice.js#L73-L80\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  ```js  // request POI data requestDataFromServer: function requestDataFromServerFn(lat, lon) {  	// set helper var to avoid requesting places while loading 	World.isRequestingData = true; 	World.updateStatusMessage('Requesting places from web-service');  	// server-url to JSON content provider 	var serverUrl = ServerInformation.POIDATA_SERVER + \&quot;?\&quot; + ServerInformation.POIDATA_SERVER_ARG_LAT + \&quot;=\&quot; + lat + \&quot;&amp;\&quot; + ServerInformation.POIDATA_SERVER_ARG_LON + \&quot;=\&quot; + lon + \&quot;&amp;\&quot; + ServerInformation.POIDATA_SERVER_ARG_NR_POIS + \&quot;=20\&quot;;  	var jqxhr = $.getJSON(serverUrl, function(data) { 		World.loadPoisFromJsonData(data); 	}) 		.error(function(err) { 			World.updateStatusMessage(\&quot;Invalid web-service response.\&quot;, true); 			World.isRequestingData = false; 		}) 		.complete(function() { 			World.isRequestingData = false; 		}); }  ```	 &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/4_ObtainPoiData_3_FromWebservice/js/fromWebservice.js#L115-L137\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt; "
});



documentTitles["browsingpois.html#browsing-pois"] = "Browsing POIs";
index.add({
    url: "browsingpois.html#browsing-pois",
    title: "Browsing POIs",
    body: "## Browsing POIs Displaying numerous POIs in the camera is a challenge. How many POIs should be offered? How to deal with POIs in same direction? What is the maximum range to show POIs and how to display a long description? The following example cover frequently asked questions related to the POI browser use case and consists of five parts plus a bonus section  1. [Presenting Details](#presentingdetails) 2. [POI and AR Radar](#poiarradar) 3. [Limiting Visible POIs](#limitingvisiblepois) 4. [Reloading POI Data](#reloadingpoidata) 5. [Native Detail Screen](#nativedetailscreen) 6. [Capture Screen Bonus](#capturescreen)  &lt;a id=\&quot;presentingdetails\&quot;&gt;&lt;/a&gt; "
});

documentTitles["browsingpois.html#presenting-details-16"] = "Presenting Details (1/6)";
index.add({
    url: "browsingpois.html#presenting-details-16",
    title: "Presenting Details (1/6)",
    body: "### Presenting Details (1/6) POIs usually have a name and sometimes a quite long description. Depending on your content type you may e.g. display a marker with its name and cropped description but allow the user to get more information after selecting it.  ![](images/sample_poi_details.jpg)  &lt;a href=\&quot;http://jquerymobile.com/\&quot; target=\&quot;_top\&quot;&gt;jQuery Mobile&lt;/a&gt; is an easy way to create appealing user interfaces for mobile devices. It takes the \&quot;write less, do more\&quot; mantra to the next level: Instead of writing unique apps for each mobile device or OS, the jQuery mobile framework allows you to design a single highly-branded web site or application that will work on all popular smartphones, tablets, and desktop platforms (quote from their website). We recommend to use jQuery mobile for the implementation of the UI in the augmented reality view. It is well documented and can even be bundled into the app or hosted on your own web server.  In this sample a POI detail panel appears when pressing a cam-marker (the blue box with title &amp; description), compare **index.html** in the sample's directory.   	&lt;!-- panel containing POI detail information --&gt; 	&lt;div data-role=\&quot;panel\&quot; id=\&quot;panel-poidetail\&quot; data-position=\&quot;right\&quot; data-display=\&quot;overlay\&quot; style=\&quot;background-color:#F0F0F0;\&quot; data-theme=\&quot;c\&quot;&gt; 	 	&lt;!-- header with \&quot;close\&quot; button --&gt;     &lt;div data-role=\&quot;header\&quot; data-theme=\&quot;c\&quot;&gt;     	&lt;h1&gt;Details&lt;/h1&gt;         &lt;a href=\&quot;#header\&quot; data-rel=\&quot;close\&quot;&gt;Close&lt;/a&gt; 	&lt;/div&gt;  	&lt;!-- content of POI detail page, you may also add thumbnails etc. here if you like --&gt; 	&lt;div data-role=\&quot;content\&quot;&gt; 		&lt;!-- title --&gt; 		&lt;h3 id=\&quot;poi-detail-title\&quot;&gt;&lt;/h3&gt; 		 		&lt;!-- description --&gt; 		&lt;h4 id=\&quot;poi-detail-description\&quot;&gt;&lt;/h4&gt; 		 		&lt;!-- distance --&gt; 	    &lt;h4&gt;Distance: &lt;a id=\&quot;poi-detail-distance\&quot;&gt;&lt;/a&gt;&lt;/h4&gt;     &lt;/div&gt; &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_1_PresentingDetails/index.html#L53-L73\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  When selecting a marker the content shown in the POI detail `div` is updated. At the same time the panel is animated from right to left.  To deselect the marker the `panelbeforeclose` event is used, compare **presentingPoiDetails.js**  ```js onMarkerSelected: function onMarkerSelectedFn(marker) {  	World.currentMarker = marker;  	// update panel values 	$(\&quot;#poi-detail-title\&quot;).html(marker.poiData.title); 	$(\&quot;#poi-detail-description\&quot;).html(marker.poiData.description);  	var distanceToUserValue = (marker.distanceToUser &gt; 999) ? ((marker.distanceToUser / 1000).toFixed(2) + \&quot; km\&quot;) : (Math.round(marker.distanceToUser) + \&quot; m\&quot;);  	$(\&quot;#poi-detail-distance\&quot;).html(distanceToUserValue);  	// show panel 	$(\&quot;#panel-poidetail\&quot;).panel(\&quot;open\&quot;, 123);  	$(\&quot;#panel-poidetail\&quot;).on(\&quot;panelbeforeclose\&quot;, function(event, ui) { 	World.currentMarker.setDeselected(World.currentMarker); }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_1_PresentingDetails/js/presentingPoiDetails.js#L106-L131\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  &lt;a id=\&quot;poiarradar\&quot;&gt;&lt;/a&gt; "
});

documentTitles["browsingpois.html#poi-and-ar-radar-26"] = "POI and AR Radar (2/6)";
index.add({
    url: "browsingpois.html#poi-and-ar-radar-26",
    title: "POI and AR Radar (2/6)",
    body: "### POI and AR Radar (2/6) It is recommended to give the user a hint where places are located in the user's vicinity. The easiest way to provide orientation assistance is an [`AR.Radar`](architectapi://reference/classes/radar.html) element. Every [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html) (e.g. a cam marker) can have a representation in the radar element, usually indicated by a small dot.  ![](images/sample_poi_radar.jpg)  The representation of an [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html) in the radar is defined in its drawables set (second argument of [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html) constructor). Once `drawables.radar` is set the object is also shown on the radar e.g. as an [`AR.Circle`](architectapi://reference/classes/Circle.html), compare **marker.js**:  ```js this.radarCircle = new AR.Circle(0.03, { 	horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.CENTER, 	opacity: 0.8, 	style: { 		fillColor: \&quot;#ffffff\&quot; 	} });  this.radardrawables = []; this.radardrawables.push(this.radarCircle); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_2_AddingRadar/js/marker.js#L64-L81\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;    Additionally create circles with a different color for the selected state, compare **marker.js**:  ```js this.radarCircleSelected = new AR.Circle(0.05, {        horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.CENTER,        opacity: 0.8,        style: {            fillColor: \&quot;#0066ff\&quot;        }    });  this.radardrawablesSelected = [];    this.radardrawablesSelected.push(this.radarCircleSelected);  this.markerObject = new AR.GeoObject(markerLocation, {        drawables: {            cam: [	this.markerDrawable_idle,             		this.markerDrawable_selected,             		this.titleLabel,             		this.descriptionLabel ],            indicator: this.directionIndicatorDrawable,            radar: this.radardrawables        }    }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_2_AddingRadar/js/marker.js#L83-L95\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  To highlight a selected marker in the radar update the drawables in the function   ![](images/sample_poi_focus_radar.jpg) ![](images/sample_poi_focus_radar_selected.jpg)    `Marker.prototype.setSelected` and `Marker.prototype.setDeselected`, compare **marker.js**:  ```js marker.markerObject.drawables.radar = marker.radardrawablesSelected; [...] marker.markerObject.drawables.radar = marker.radardrawables; ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_2_AddingRadar/js/marker.js#L178-L188\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The position of the radar and its size are defined using a DOM element. In our example a `div` element with id `radarContainer`, compare **index.html**:  	&lt;div class=\&quot;radarContainer_left\&quot; id=\&quot;radarContainer\&quot;&gt;&lt;/div&gt; &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_2_AddingRadar/index.html#L49\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The size and position of the radar is defined in a css class, see **poi-radar.css**:  	/* position of POI-radar*/ 	 	.radarContainer_left { 		position:absolute; 		top:0px; 		left:0px; 		width:100px; 		height:100px; 	}  &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_2_AddingRadar/css/poi-radar.css#L7-L13\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  We advise you to use an absolute position for the element which will be referred to the radar container. Keep in mind: In case the DOM element is updated on the fly via jQuery or responsive design use `AR.radar.notifyUpdateRadarPosition();` to force radar position/size updates, otherwise the very first position/size will be used.  The radar itself can be customized and should be implemented as a separate component in your JavaScript code, compare **radar.js**. ```js var PoiRadar = {  	hide: function hideFn() { 		AR.radar.enabled = false; 	},  	show: function initFn() {  		// the div defined in the index.htm 		AR.radar.container = document.getElementById(\&quot;radarContainer\&quot;);  		// set the back-ground image for the radar 		AR.radar.background = new AR.ImageResource(\&quot;assets/radar_bg.png\&quot;);  		// set the north-indicator image for the radar  		// (not necessary if you don't want to display a north-indicator) 		AR.radar.northIndicator.image = new AR.ImageResource(\&quot;assets/radar_north.png\&quot;);  		// center of north indicator and radar-points in the radar asset,  		// usually center of radar is in the exact middle of the background,  		// meaning 50% X and 50% Y axis --&gt; 0.5 for centerX/centerY 		AR.radar.centerX = 0.5; 		AR.radar.centerY = 0.5;  		AR.radar.radius = 0.3; 		AR.radar.northIndicator.radius = 0.0;  		AR.radar.enabled = true; 	},  	updatePosition: function updatePositionFn() { 		if (AR.radar.enabled) { 			AR.radar.notifyUpdateRadarPosition(); 		} 	},  	// you may define some custom action when user pressed radar,  	// e.g. display distance, custom filtering etc. 	clickedRadar: function clickedRadarFn() { 		alert(\&quot;Radar Clicked\&quot;); 	},  	setMaxDistance: function setMaxDistanceFn(maxDistanceMeters) { 		AR.radar.maxDistance = maxDistanceMeters; 	} }; ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_2_AddingRadar/js/radar.js#L1-L42\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt; 	 Call the `PoiRadar.show` function to activate the radar component. You may even define a click action if requested, compare **addingRadar.js**: ```js // show radar &amp; set click-listener PoiRadar.show(); $('#radarContainer').unbind('click'); $(\&quot;#radarContainer\&quot;).click(PoiRadar.clickedRadar); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_2_AddingRadar/js/addingRadar.js#L34-L38\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  &lt;a id=\&quot;limitingvisiblepois\&quot;&gt;&lt;/a&gt; "
});

documentTitles["browsingpois.html#limiting-visible-pois-36"] = "Limiting Visible POIs (3/6)";
index.add({
    url: "browsingpois.html#limiting-visible-pois-36",
    title: "Limiting Visible POIs (3/6)",
    body: "### Limiting Visible POIs (3/6) Users are sometimes only interested to see POIs within a certain range. This sample provides an additional button in the titlebar button to allow users to change the range of interest.  ![](images/sample_poi_range.jpg)   First of all add a button in the titlebar  **index.html**  	&lt;!-- header of UI holding feature buttons --&gt; 	&lt;div id =\&quot;header-status\&quot; data-role=\&quot;header\&quot; data-position=\&quot;fixed\&quot; data-theme=\&quot;c\&quot;&gt; 		&lt;a href=\&quot;javascript: World.showRange();\&quot; data-icon=\&quot;gear\&quot; data-inline=\&quot;true\&quot; data-mini=\&quot;true\&quot;&gt;Range&lt;/a&gt; 		&lt;h1&gt;&lt;/h1&gt; 	&lt;/div&gt; &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_3_LimitingRange/index.html#L43-L47\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt; 	 Afterwards define the panel layout for distance range. In this case the current range in meters and the number of visible POIs is shown in the panel.  **index.html** 	 	&lt;!-- range panel --&gt; 	&lt;div data-role=\&quot;panel\&quot; id=\&quot;panel-distance\&quot; data-position=\&quot;left\&quot; data-display=\&quot;overlay\&quot; style=\&quot;background-color:#F0F0F0;\&quot; data-theme=\&quot;c\&quot;&gt;  		&lt;!-- header with close button --&gt; 		&lt;div data-role=\&quot;header\&quot; data-theme=\&quot;c\&quot;&gt; 			&lt;h1&gt;Range&lt;/h1&gt; 			&lt;a href=\&quot;#header\&quot; data-rel=\&quot;close\&quot;&gt;Close&lt;/a&gt; 		&lt;/div&gt; 	 		&lt;!-- distance information, calculated/updated in code  --&gt; 		&lt;div data-role=\&quot;content\&quot;&gt;  		&lt;!-- Range in m/km--&gt; 		&lt;h4&gt; Range: &lt;a id=\&quot;panel-distance-value\&quot;&gt;&lt;/a&gt;&lt;/h4&gt;  		&lt;!-- Amount of visible places --&gt; 		&lt;h4&gt; Visible: &lt;a id=\&quot;panel-distance-places\&quot;&gt;&lt;/a&gt;&lt;/h4&gt;  		&lt;!-- default slider --&gt; 		&lt;input id=\&quot;panel-distance-range\&quot; type=\&quot;range\&quot; data-highlight=\&quot;true\&quot; name=\&quot;rangeSlider\&quot; min=\&quot;0\&quot; max=\&quot;100\&quot; value=\&quot;100\&quot; data-show-value=\&quot;false\&quot; step=\&quot;5\&quot; data-popup-enabled=\&quot;false\&quot;&gt; 		&lt;/div&gt; 	&lt;/div&gt; &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_3_LimitingRange/index.html#L94-L115\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The function `World.updateRangeValues` is executed every time a user changes the slider value. Besides proper calculation of the maximum distance and total number of visible places [`AR.context.scene.cullingDistance`](architectapi://reference/classes/context.html#property_scene.cullingDistance) and `PoiRadar.setMaxDistance` are executed to update rendering of markers and drawables in the radar, compare **limitingRange.js**  ```js 	// updates values show in \&quot;range panel\&quot; updateRangeValues: function updateRangeValuesFn() {  	// get current slider value (0..100); 	var slider_value = $(\&quot;#panel-distance-range\&quot;).val();  	// max range relative to the maximum distance of all visible places 	var maxRangeMeters = Math.round(World.getMaxDistance() * (slider_value / 100));  	// range in meters including metric m/km 	var maxRangeValue = (maxRangeMeters &gt; 999) ? ((maxRangeMeters / 1000).toFixed(2) + \&quot; km\&quot;) : (Math.round(maxRangeMeters) + \&quot; m\&quot;);  	// number of places within max-range 	var placesInRange = World.getNumberOfVisiblePlacesInRange(maxRangeMeters);  	// update UI labels accordingly 	$(\&quot;#panel-distance-value\&quot;).html(maxRangeValue); 	$(\&quot;#panel-distance-places\&quot;).html((placesInRange != 1) ? (placesInRange + \&quot; Places\&quot;) : (placesInRange + \&quot; Place\&quot;));  	// update culling distance, so only places within given range are rendered 	AR.context.scene.cullingDistance = Math.max(maxRangeMeters, 1);  	// update radar's maxDistance so radius of radar is updated too 	PoiRadar.setMaxDistance(Math.max(maxRangeMeters, 1)); },  // returns number of places with same or lower distance than given range getNumberOfVisiblePlacesInRange: function getNumberOfVisiblePlacesInRangeFn(maxRangeMeters) {  	// sort markers by distance 	World.markerList.sort(World.sortByDistanceSorting);  	// loop through list and stop once a placemark is out of range ( -&gt; very basic implementation ) 	for (var i = 0; i &lt; World.markerList.length; i++) { 		if (World.markerList[i].distanceToUser &gt; maxRangeMeters) { 			return i; 		} 	};  	// in case no placemark is out of range -&gt; all are visible 	return World.markerList.length; }, ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_3_LimitingRange/js/limitingRange.js#L162-L203\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt; 	 The position of the radar component can be updated using another CSS style (using e.g. `removeClass` and `addClass` of jQuery) and calling `PoiRadar.updatePosition();`. In this sample the radar element moves to the right when the distance panel. Compare **limitingRange.js** ```js handlePanelMovements: function handlePanelMovementsFn() {  	$(\&quot;#panel-distance\&quot;).on(\&quot;panelclose\&quot;, function(event, ui) { 		$(\&quot;#radarContainer\&quot;).addClass(\&quot;radarContainer_left\&quot;); 		$(\&quot;#radarContainer\&quot;).removeClass(\&quot;radarContainer_right\&quot;); 		PoiRadar.updatePosition(); 	});  	$(\&quot;#panel-distance\&quot;).on(\&quot;panelopen\&quot;, function(event, ui) { 		$(\&quot;#radarContainer\&quot;).removeClass(\&quot;radarContainer_left\&quot;); 		$(\&quot;#radarContainer\&quot;).addClass(\&quot;radarContainer_right\&quot;); 		PoiRadar.updatePosition(); 	}); }, ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_3_LimitingRange/js/limitingRange.js#L207-L217\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The `World.showRange` function is executed when a user presses the `Range` button. ```js // display range slider showRange: function showRangeFn() { 	if (World.markerList.length &gt; 0) {  		// update labels on every range movement 		$('#panel-distance-range').change(function() { 			World.updateRangeValues(); 		});  		World.updateRangeValues(); 		World.handlePanelMovements();  		// open panel 		$(\&quot;#panel-distance\&quot;).trigger(\&quot;updatelayout\&quot;); 		$(\&quot;#panel-distance\&quot;).panel(\&quot;open\&quot;, 1234); 	} else {  		// no places are visible, because the are not loaded yet 		World.updateStatusMessage('No places available yet', true); 	} } ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_3_LimitingRange/js/limitingRange.js#L221-L240\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  &lt;a id=\&quot;reloadingpoidata\&quot;&gt;&lt;/a&gt; "
});

documentTitles["browsingpois.html#reloading-poi-data-46"] = "Reloading POI Data (4/6)";
index.add({
    url: "browsingpois.html#reloading-poi-data-46",
    title: "Reloading POI Data (4/6)",
    body: "### Reloading POI Data (4/6) You may need to reload POI information because of user movements or manually for various reasons. In this example POIs are reloaded when user presses the refresh button. The button is defined in **index.html** and calls `World.reloadPlaces()` on click.  	&lt;a href=\&quot;javascript: World.reloadPlaces()\&quot; data-icon=\&quot;refresh\&quot; &gt;Reload&lt;/a&gt; &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_4_ReloadingContent/index.html#L46\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The implementation of `World.reloadPlaces()` is part of the ARchitect World (**reloadingPois.js**) and executes `World.requestDataFromServer` which retrieves data according to the user's current location from a web service.  Sidenote: In certain circumstances your web service may not be available or other connection issues can occur. To notify the user about connection problems a status message is updated, In your own implementation you may e.g. use an info popup or similar. ```js var World = {  	[…]  	// reload places from content source 	reloadPlaces: function reloadPlacesFn() { 		if (!World.isRequestingData) { 			if (World.userLocation) { 				World.requestDataFromServer(World.userLocation.latitude, 											World.userLocation.longitude); 			} else { 				World.updateStatusMessage('Unknown user-location.', true); 			} 		} else { 			World.updateStatusMessage('Already requesting places...', true); 		} 	} 	 	[…] } ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_4_ReloadingContent/js/reloadingPois.js#L251-L262\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  &lt;a id=\&quot;nativedetailscreen\&quot;&gt;&lt;/a&gt; "
});

documentTitles["browsingpois.html#displaying-native-detail-screen-56"] = "Displaying Native Detail Screen (5/6)";
index.add({
    url: "browsingpois.html#displaying-native-detail-screen-56",
    title: "Displaying Native Detail Screen (5/6)",
    body: "### Displaying Native Detail Screen (5/6)  It may make sense to display POI details in your native style. In this sample a very simple native screen opens when user presses the 'More' button in HTML. This demoes the interaction between JavaScript and native code.  ![](images/sample_poi_native.jpg)   A More button is added to **index.html** which calls the function `World.onPoiDetailMoreButtonClicked`.  	&lt;!-- more button--&gt; 	&lt;a href=\&quot;javascript: World.onPoiDetailMoreButtonClicked();\&quot;  	   data-role=\&quot;button\&quot; data-icon=\&quot;arrow-r\&quot; data-iconpos=\&quot;right\&quot; data-inline=\&quot;true\&quot;&gt; 		More 	&lt;/a&gt; &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_5_NativeDetailScreen/index.html#L96\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  `World.onPoiDetailMoreButtonClicked` is implemented in **nativePoiDetail.js** and executes `document.location = architectsdk://...`. The urlListener of the native project intercepts this call and parses the arguments. This is the only way to pass information from JavaScript to your native code. Ensure to properly encode and decode arguments.  ```js var World = { 	[…]  	// user clicked \&quot;More\&quot; button in POI-detail panel -&gt; fire event to open native screen 	onPoiDetailMoreButtonClicked: function onPoiDetailMoreButtonClickedFn() { 	 		var currentMarker = World.currentMarker; 		var architectSdkUrl = \&quot;architectsdk://markerselected?id=\&quot; + 							encodeURIComponent(currentMarker.poiData.id) +  							\&quot;&amp;title=\&quot; +  							encodeURIComponent(currentMarker.poiData.title) +  							\&quot;&amp;description=\&quot; +  							encodeURIComponent(currentMarker.poiData.description); 		document.location = architectSdkUrl; 		 	} 	 	[…] } ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_5_NativeDetailScreen/js/nativePoiDetail.js#L105-L117\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Please have a look at the [this](#nativedetailscreenplatform) section which describes the custom url scheme native part.  &lt;a id=\&quot;capturescreen\&quot;&gt;&lt;/a&gt; "
});

documentTitles["browsingpois.html#capture-screen-bonus-66"] = "Capture Screen Bonus (6/6)";
index.add({
    url: "browsingpois.html#capture-screen-bonus-66",
    title: "Capture Screen Bonus (6/6)",
    body: "### Capture Screen Bonus (6/6) This sample shows you how to use the function `captureScreen`  to share a snapshot with your friends. Concept of interaction between JavaScript and native code is same as in the POI Detail page sample but the `urlListener` now handles picture sharing instead. The \&quot;Snapshot\&quot;-button is on top right in the title bar. Once clicked the current screen is captured and user is prompted to share it.  	 &lt;!-- header of UI holding feature buttons --&gt;             &lt;div id =\&quot;header-status\&quot; data-role=\&quot;header\&quot; data-position=\&quot;fixed\&quot; data-theme=\&quot;c\&quot;&gt;                 &lt;a href=\&quot;javascript: World.showRange();\&quot; data-icon=\&quot;gear\&quot; data-inline=\&quot;true\&quot; data-mini=\&quot;true\&quot;&gt;Range&lt;/a&gt;                 &lt;a href=\&quot;javascript: World.captureScreen()\&quot; data-icon=\&quot;refresh\&quot; &gt;Snapshot&lt;/a&gt;                 &lt;h1&gt;&lt;/h1&gt;             &lt;/div&gt; &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_5_NativeDetailScreen/js/nativePoiDetail.js#L105-L117\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Handling of picture sharing is done in native code.       ```js 	// tell native (urlListener) that user pressed 'Snapshot' button 	captureScreen: function captureScreenFn() { 		document.location = \&quot;architectsdk://button?action=captureScreen\&quot;; 	}, ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/5_BrowsingPois_6_CaptureScreenBonus/js/captureScreen.js#L275-L280\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  ![](images/sample_poi_snapshot.jpg)## Browsing POIs Android  "
});

documentTitles["browsingpois.html#displaying-native-detail-screen-56"] = "Displaying Native Detail Screen (5/6)";
index.add({
    url: "browsingpois.html#displaying-native-detail-screen-56",
    title: "Displaying Native Detail Screen (5/6)",
    body: "### Displaying Native Detail Screen (5/6)  The `ArchitectUrlListener` interface allows you to exchange information between the JavaScript and the native code. It needs to be implemented whenever you want to communicate from JavaScript wicht the native code.   The method  `urlWasInvoked(String uriString)` is called whenever the document.location in the Javascript file is the to the scheme `architectsdk://` with any additional information encoded as URI components. The parameter *uriString* represents the information as a string and can be parsed e.g. with `Uri invokedUri = Uri.parse(uriString);`  "
});

documentTitles["browsingpois.html#sample-usage"] = "Sample usage:";
index.add({
    url: "browsingpois.html#sample-usage",
    title: "Sample usage:",
    body: "##### Sample usage:  ``` 			// fetch e.g. document.location = \&quot;architectsdk://markerselected?id=1\&quot;; 			public boolean urlWasInvoked(String uriString) { 				Uri invokedUri = Uri.parse(uriString); 				if (\&quot;markerselected\&quot;.equalsIgnoreCase(invokedUri.getHost())) { 						final Intent poiDetailIntent = new Intent(SampleCamHandlePoiDetailActivity.this, SamplePoiDetailActivity.class); 						poiDetailIntent.putExtra(SamplePoiDetailActivity.EXTRAS_KEY_POI_ID, String.valueOf(invokedUri.getQueryParameter(\&quot;id\&quot;)) ); 						poiDetailIntent.putExtra(SamplePoiDetailActivity.EXTRAS_KEY_POI_TITILE, String.valueOf(invokedUri.getQueryParameter(\&quot;title\&quot;)) ); 						poiDetailIntent.putExtra(SamplePoiDetailActivity.EXTRAS_KEY_POI_DESCR, String.valueOf(invokedUri.getQueryParameter(\&quot;description\&quot;)) ); 						SampleCamHandlePoiDetailActivity.this.startActivity(poiDetailIntent); 						return true; 				} 				return false; 			} ```    Please refer to the **presentingPoiDetails.js** file for more details about the JavaScript part. "
});



documentTitles["video.html#video-drawables"] = "Video Drawables";
index.add({
    url: "video.html#video-drawables",
    title: "Video Drawables",
    body: "## Video Drawables  Besides images, text and HTML content you are able to display videos in augmented reality using the Wikitude SDK. With the help of [`AR.VideoDrawables`](architectapi://reference/classes/VideoDrawable.html) you can add a video on top of any target image ([`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html)) or have it displayed at any geo location ([`AR.GeoObject`](architectapi://reference/classes/GeoObject.html)). Like any other drawable you can position, scale, rotate and change the opacity of the video drawable.  To view the sample you can use the image in [this PDF on page 2](images/target_images_examples.pdf)  "
});

documentTitles["video.html#supported-devices"] = "Supported Devices";
index.add({
    url: "video.html#supported-devices",
    title: "Supported Devices",
    body: "### Supported Devices  In general, video drawables are fully supported on devices running iOS 6+ and Android 4.0+. Other devices will still play back the video but only in fullscreen mode as a fall-back solution.   * iOS 6.0 or newer: full support * Android 4.0 or newer: full support * Android 3.x or older: only fullscreen videos  The Wikitude SDK is detecting the appropriate mode accordingly.   "
});

documentTitles["video.html#supported-video-codecs-and-hosting-services"] = "Supported Video Codecs and Hosting Services";
index.add({
    url: "video.html#supported-video-codecs-and-hosting-services",
    title: "Supported Video Codecs and Hosting Services",
    body: "### Supported Video Codecs and Hosting Services  To support all platforms make sure to use a H.264 encoded video with a maximum resolution of 720p (1280x720 pixel).  H.264 defines different profiles. Make sure that you are using either one of the following  * Baseline * Extended * Main  If the profile differs Android devices will most certainly misbehave (fail to play or crash entirely) when playing back those videos.   Keep in mind that URLs from video hosting services need to point directly to the H.264 encoded video file. Standard YouTube and Vimeo URLs (like http://www.youtube.com/watch?v=bX98XNv8VL4) will **not** work for this purpose.   If you like to add a YouTube video, which is then played full-screen in the native player, rather use an [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html) showing a poster or play-button and add the URL to the YouTube video to the [`onClick`](architectapi://reference/classes/ImageDrawable.html#event_onClick) trigger. Similar to what we do in the [image recognition sample](imagerecognition.html#interactivity).  "
});

documentTitles["video.html#video-sample"] = "Video Sample";
index.add({
    url: "video.html#video-sample",
    title: "Video Sample",
    body: "### Video Sample  The following examples will demonstrate how to choose a proper video and how to augment a target image. Furthermore it shows how to react on playback states and concludes with how to use transparent videos.  This sample consists of four parts  1. [Select a Video and add it to a Target Image](#choosingvideo) 2. [Control Video Playback](#playback) 3. [Snapping Video](#snappingvideo) 4. [Bonus: Transparent Video](#transparentvideo)   &lt;a id=\&quot;choosingvideo\&quot;&gt;&lt;/a&gt; "
});

documentTitles["video.html#select-a-video-and-add-it-to-a-target-image-14"] = "Select a Video and add it to a Target Image (1/4)";
index.add({
    url: "video.html#select-a-video-and-add-it-to-a-target-image-14",
    title: "Select a Video and add it to a Target Image (1/4)",
    body: "### Select a Video and add it to a Target Image (1/4)   The video we use for this example is \&quot;video.mp4\&quot;. As with all resources the video can be loaded locally from the application bundle or remotely from any server. In this example the video file is already bundled with the application.  To view the sample you can use the images in [this PDF on page 2 and page 3](images/target_images_examples.pdf).    With the video URL at hand the drawable is created as follows:  ```js // Create video drawable var video = new AR.VideoDrawable(\&quot;assets/video.mp4\&quot;, 0.5, {     offsetX: 0.2,     offsetY: 0.2 }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/6_Video_1_SimpleVideo/js/video.js#L23-L25\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;   The URL and the size are required when creating a new [`AR.VideoDrawable`](architectapi://reference/classes/VideoDrawable.html). Optionally the [`offsetX`](architectapi://reference/classes/VideoDrawable.html#property_offsetX) and [`offsetY`](architectapi://reference/classes/VideoDrawable.html#property_offsetY) parameters are set to position the video on the target. The values for the offsets are again in SDUs (more information on the concept of SDUs [here](sdu-dbs.html)).   Adding the video to the target image is straight forward and similar like adding any other drawable to an image target.  ```js var pageOne = new AR.Trackable2DObject(this.tracker, \&quot;*\&quot;, {     drawables: {         cam: video     },     onEnterFieldOfVision: function onEnterFieldOfVisionFn () {         video.play(-1);     } }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/6_Video_1_SimpleVideo/js/video.js#L34-L42\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  &lt;img src=\&quot;images/simple_videos.jpg\&quot; style=\&quot;width:300px;\&quot;&gt;&lt;/img&gt;   To start the video immediately after the target is recognized we call `play` inside the [`onEnterFieldOfVision`](architectapi://reference/classes/Trackable2DObject.html#event_onEnterFieldOfVision) trigger. Supplying `-1` to `play` tells the Wikitude SDK to loop the video infinitely. Choose any positive number to re-play it multiple times.  Note that we're using the wildcard `*`as the target name. This indicates that the trackable will match any target that is defined in the supplied tracker.  &lt;a id=\&quot;playback\&quot;&gt;&lt;/a&gt; "
});

documentTitles["video.html#control-video-playback-24"] = "Control Video Playback (2/4)";
index.add({
    url: "video.html#control-video-playback-24",
    title: "Control Video Playback (2/4)",
    body: "### Control Video Playback (2/4)  The class [`AR.VideoDrawable`](architectapi://reference/classes/VideoDrawable.html) offers functions and triggers to control playback of the video and get notified of playback states. The following example makes use of the triggers and states to display an image of a play button on top of the target. Once the user clicks the play button the video starts to play. Additionally we pause and resume the video whenever the target is lost so the user does not miss any video content when looking away.  To view the sample you can use the image in [this PDF on page 2](images/target_images_examples.pdf)  ```js // Create video drawable var video = new AR.VideoDrawable(\&quot;assets/video.mp4\&quot;, 0.5, {     offsetX: 0.2,     offsetY: 0.2,     onLoaded: function videoLoaded() {         playButton.enabled = true;     },     onPlaybackStarted: function videoPlaying () {         playButton.enabled = false;         video.enabled = true;     },     onFinishedPlaying: function videoFinished () {         playButton.enabled = true;         video.playing = false;         video.enabled = false;     },     onClick: function videoClicked () {         if (video.playing) {             video.pause();             video.playing = false;             playButton.enabled = true;         } else {             video.resume();             video.playing = true;             playButton.enabled = true;         }     } }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/6_Video_2_PlaybackStates/js/video.js#L42-L67\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  As before the video is positioned on the target with the [`offsetX`](architectapi://reference/classes/VideoDrawable.html#property_offsetX) and [`offsetY`](architectapi://reference/classes/VideoDrawable.html#property_offsetY) properties. Additionally functions are assigned to the [`onLoaded`](architectapi://reference/classes/VideoDrawable.html#event_onLoaded), [`onPlaybackStarted`](architectapi://reference/classes/VideoDrawable.html#event_onPlaybackStarted) and [`onFinishedPlaying`](architectapi://reference/classes/VideoDrawable.html#event_onFinishedPlaying) triggers. The [`onLoaded`](architectapi://reference/classes/VideoDrawable.html#event_onLoaded) trigger fires once the video is ready for playback and the `playButton` is enabled. The `playButton` is an [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html) defined as follows:  ```js // Create play button var playButtonImg = new AR.ImageResource(\&quot;assets/playButton.png\&quot;); var playButton = new AR.ImageDrawable(playButtonImg, 0.2, {     enabled: false,     onClick: function playButtonClicked() {         video.play(1);         video.playing = true;     },     offsetX: video.offsetX,     offsetY: video.offsetY }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/6_Video_2_PlaybackStates/js/video.js#L17-L27\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Once the user clicks the button the video is played once: `video.play(1)`. Starting the playback fires the [`onPlaybackStarted`](architectapi://reference/classes/VideoDrawable.html#event_onPlaybackStarted) trigger that in this example hides the `playButton`. When playback finishes the [`onFinishedPlaying`](architectapi://reference/classes/VideoDrawable.html#event_onFinishedPlaying) trigger is called that shows the `playButton` again.  To give the user the possibility to pause the video the [`AR.VideoDrawable's`](architectapi://reference/classes/VideoDrawable.html) click trigger is used. If the video is playing and the user is clicking the function `pause()` is called which then pauses playback. Clicking the video again resumes playback.  Similar to the user clicking on the video we want to pause/resume the playback if the target image is lost - as this means  the user is currently not actively watching the video. To  accomplish this the `onEnterFieldOfVision` and `onExitFieldOfVision` triggers of the [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html) are used:  ```js var pageOne = new AR.Trackable2DObject(this.tracker, \&quot;*\&quot;, {     drawables: {         cam: [video, playButton]     },     onEnterFieldOfVision: function onEnterFieldOfVisionFn () {         if (video.playing) {             vide.pause();         }     },     onExitFieldOfVision: function onExitFieldOfVisionFn () {         if (video.playing) {             video.resume();         }     } }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/6_Video_2_PlaybackStates/js/video.js#L78-L93\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  This concludes the example showing you how to control the playback of a [`AR.VideoDrawable`](architectapi://reference/classes/VideoDrawable.html). Have a look at the [API Reference](architectapi://reference) for more details on each of the functions and triggers.  &lt;a id=\&quot;snappingvideo\&quot;&gt;&lt;/a&gt; "
});

documentTitles["video.html#snapping-video-34"] = "Snapping Video (3/4)";
index.add({
    url: "video.html#snapping-video-34",
    title: "Snapping Video (3/4)",
    body: "### Snapping Video (3/4) In the [previous example](#playback) we used several triggers to pause and resume video playback when the target image is lost so that the user doesn't miss any video content while looking away. In this example we take this approach a little further and do not pause and resume video playback but instead snap the video onto the screen so that it is still visible even when the target image is lost. To do so the [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html) offers several `snapToScreen` settings. In this example we use the [`snapToScreen.enabledOnExitFieldOfVision`](architectapi://reference/classes/Trackable2DObject.html#property_snapToScreen.enableOnExitFieldOfVision) property to automatically snap all cam drawables onto the screen when the [`onExitFieldOfVision`](architectapi://reference/classes/Trackable2DObject.html#event_onExitFieldOfVision) event occurs. To disable snapping when the target image is visible again we use the [`snapToScreen.enabled`](architectapi://reference/classes/Trackable2DObject.html#property_snapToScreen.enabled) property and set it to `false` in the [`onEnterFieldOfVision`](architectapi://reference/classes/Trackable2DObject.html#event_onEnterFieldOfVision) event. Doing so will display all cam drawables on the target image again.  ```js this.pageOne = new AR.Trackable2DObject(this.tracker, \&quot;*\&quot;, { 	drawables: { 		cam: [this.video, playButton] 	}, 	onEnterFieldOfVision: function onEnterFieldOfVision() { 		World.pageOne.snapToScreen.enabled = false; 	}, 	snapToScreen: { 		enabledOnExitFieldOfVision: true, 		snapContainer: document.getElementById('snapContainer') 	} }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/6_Video_3_SnappingVideo/js/video.js#L80-L92\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;   The snap position is defined through a `div` element in your HTML source. The position and size of the `div` will affect the appearance of all cam drawables in the snapped state. It's important to update the `div` for both orientations, portrait and landscape, so that the augmentations will appear as expected. This example uses css to adopt the `div` for different device orientations.   &lt;a id=\&quot;transparentvideo\&quot;&gt;&lt;/a&gt; "
});

documentTitles["video.html#bonus-transparent-video-44"] = "Bonus: Transparent video (4/4)";
index.add({
    url: "video.html#bonus-transparent-video-44",
    title: "Bonus: Transparent video (4/4)",
    body: "### Bonus: Transparent video (4/4)  This bonus example shows you how to add transparent videos on top of a target. Transparent videos require some extra preparation work.  Summarizing the required steps, here is what you need to do in order to use transparent videos in a simple list. We are describing each of the steps in more detail.  1. Produce a green screen (chroma key) video 2. Edit that video using standard video processing software and remove the green screen. Export your result into a file format, which can handle alpha channel information (e.g. Apple PreRes 4444) 3. Convert the video from step 2 using the script in the tools folder 4. Add it to a target image  Producing a transparent video is usually done using a green screen for filming and a technique called chroma key to replace the green background with transparency. Extensive information is available on the internet that should help you get started on this topic.   There are different video codecs that support alpha channels for motion picture and most of them will work as your raw material. We have extensively tested Apple ProRes 4444 codec for our own development and were satisfied with the results.  The Wikitude SDK can only render H.264 encoded videos, which is a codec that in practice does not support an alpha channel. The solution here is to include in the alpha channel in a separate (visible) part of the video. The video is split vertically consisting of a color and a alpha channel in the final video below each other. The following image shows how the preprocessing result should look like.  ![](images/video_h264_transparent.png)  The upper half of the image transports the color information for the final video while the lower half includes a grayscale representation of the alpha layer. White areas will be fully opaque and black areas will be fully transparent. If you are familiar with Photoshop, think of the lower half as a mask. Resulting videos have an height that is exactly twice as big as the input video.  To convert your raw video to a valid input video for the SDK we need to re-encode the video and automatically create the alpha mask. The script below uses `ffmpeg` to do so and wraps the necessary commands. Follow these simple steps:  "
});

documentTitles["video.html#macos-x"] = "MacOS X";
index.add({
    url: "video.html#macos-x",
    title: "MacOS X",
    body: "#### MacOS X 1. Open the Terminal application 2. Input `cd &lt;SDK&gt;/tools/video/MacOSX`. Replace `&lt;SDK&gt;` with the path to the SDK folder 3. Execute `sh convert.sh &lt;input video&gt; &lt;output video&gt;`. Replace `&lt;input video&gt;` with the path to your transparent video and `&lt;output video&gt;` with the path where you want the output video to be stored.   "
});

documentTitles["video.html#windows"] = "Windows";
index.add({
    url: "video.html#windows",
    title: "Windows",
    body: "#### Windows 1. Open the Command Line 2. `cd &lt;SDK&gt;\tools\video\Windows`. Replace `&lt;SDK&gt;` with the path to the SDK folder 3. Execute `convert.bat &lt;input video&gt; &lt;output video&gt;`. Replace `&lt;input video&gt;` with the path to your transparent video and `&lt;output video&gt;` with the path where you want the output video to be stored.  This creates the required video with a vertically split color and alpha channel.   Adding the transparent H.264 video to a target image is easy and accomplished in the same way as any other video is added. Just make sure to set the [`isTransparent`](architectapi://reference/classes/VideoDrawable.html#method_isTransparent) property of the [`AR.VideoDrawable`](architectapi://reference/classes/VideoDrawable.html) to `true`.  To view the sample you can use the image in [this PDF on page 2](images/target_images_examples.pdf)  &lt;img src=\&quot;images/transparent_video_1.jpg\&quot; style=\&quot;width:300px;\&quot;&gt;&lt;/img&gt; &lt;img src=\&quot;images/transparent_video.jpg\&quot; style=\&quot;width:300px;\&quot;&gt;&lt;/img&gt;  ```js // Create a transparent video drawable var video = new AR.VideoDrawable(\&quot;assets/transparentVideo.mp4\&quot;, 0.7, {     offsetX: -0.2,     offsetY: -0.12,     isTransparent: true }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/6_Video_4_Bonus-TransparentVideo/js/video.js#L52-L56\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt; "
});



documentTitles["imagerecognitionandgeo.html#image-recognition-and-geo"] = "Image Recognition And Geo";
index.add({
    url: "imagerecognitionandgeo.html#image-recognition-and-geo",
    title: "Image Recognition And Geo",
    body: "## Image Recognition And Geo  The Wikitude SDK allows you to combine location based augmented reality scenes with vision baed scenes to create a seamless experience for users. This tutorial will show you how to accomplish this and will provide you with additional advices.   Let’s start by creating the  [`AR.Tracker`](architectapi://reference/classes/ImageDrawable.html) for recognizing a fictional store logo and assign it to an [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html).  ```js // Create the tracker to recognize a store logo var trackerDataSetPath = \&quot;assets/ShopLogo.wtc\&quot;; IrAndGeo.tracker = new AR.Tracker(trackerDataSetPath, {     onLoaded: IrAndGeo.loadingStepDone,     onError: IrAndGeo.errorLoading });  // Create drawables to display on the recognized image var logo = new AR.ImageDrawable(IrAndGeo.res.logo, 1.0, {     zOrder: -1 });  // ...  IrAndGeo.menuDrawables = [logo, buttonDeal, buttonWeb, buttonStores]; IrAndGeo.dealDrawable = new AR.ImageDrawable(IrAndGeo.res.deal, 1.0, {     enabled: false,     onClick: IrAndGeo.hideDeal });  // Create the object by defining the tracker, target name and its drawables var trackable2DObject = new AR.Trackable2DObject(IrAndGeo.tracker, \&quot;ShopLogo\&quot;, {     drawables: {         cam: [logo, buttonDeal, buttonWeb, buttonStores, IrAndGeo.dealDrawable, IrAndGeo.model]     },    // ... }); ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/99_Demo_1_ImageRecognitionAndGeo/js/irandgeo.js#L118-L156\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  ![Finally result of overlaid images on top of shop logo.](images/irangeo_screenshot.jpeg \&quot;Finally result of overlaid images on top of shop logo.\&quot;)  This is all it takes to display drawables on top of a recognized image. The locations based augmented reality part can be accomplished similarly to any other ARchitect World.    ```js IrAndGeo.createMarker = function(lat, lon, name) {     var loc = new AR.GeoLocation(lat, lon);     var imageDrawable = new AR.ImageDrawable(IrAndGeo.res.marker, 2, {         scale: 0.0,         onClick: function() {             alert(\&quot;clicked\&quot;);         }     });      IrAndGeo.markerAnimations.push(new AR.PropertyAnimation(imageDrawable, 'scale', 0.0, 1.0, 1000, {         type: AR.CONST.EASING_CURVE_TYPE.EASE_OUT_BOUNCE     }));     IrAndGeo.stores.push(new AR.GeoObject(loc, {         drawables: {             cam: imageDrawable         },         enabled: false     })); }; ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/99_Demo_1_ImageRecognitionAndGeo/js/irandgeo.js#L26-L49\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  The method above creates a marker at the passed latitude and longitude. As with any other [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html) the visual representation can be composed of various drawables. The [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html) is created with the value `enabled` set to `false` so it won’t be initially visible. To make it visible set the created GeoObjects to `enabled` when an element on the image target is clicked.  ![Shop location visualized.](images/irgeo4_s.jpg \&quot;Shop location visualized.\&quot;)    ```js IrAndGeo.showStores = function() {     // enable all GeoObjects     IrAndGeo.stores.forEach(function(x, idx) {         x.enabled = true;     });      // ... }; ``` &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/99_Demo_1_ImageRecognitionAndGeo/js/irandgeo.js#L51-L63\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Combining vision based and locations based augmented reality  is easy and straightforward. However, you should keep in mind that vision based augmented reality requires additional computing power (and thus battery power). Therefore, you should only create a  [`AR.Tracker`](architectapi://reference/classes/ImageDrawable.html) when it is actually needed. If it is no longer needed destroy it by calling [`AR.Tracker.destroy()`](architectapi://reference/classes/Tracker.html#method_destroy).  To view the sample you can use the image in [this PDF on page 5](images/target_images_examples.pdf) "
});



documentTitles["solarsystemir.html#solar-system-ir"] = "Solar System (IR)";
index.add({
    url: "solarsystemir.html#solar-system-ir",
    title: "Solar System (IR)",
    body: "## Solar System (IR)  In this demo we combined vision based augmented reality capabilities with 3D models to visualize our solar system in an unique way. The example allows viewers to look at several planets of the solar system and receive basic information for each planet.  ![Screenshot of the complete demo.](images/demo_solar_ir_1.jpg \&quot;Screenshot of the complete demo.\&quot;)  The augmentation consists of a backdrop that is used to darken the overlaid image and the planets of our solar system (still including Pluto). Each planet is loaded as a separate 3D model to allow it to be animated independently from each other.  ![3D model of the planet Jupiter.](images/demo_solar_ir_jupiter.png \&quot;3D model of the planet Jupiter.\&quot;)  Looking at the code of the example there are a few components worth noting. The detail information for each planet is stored in the `planetsInfo` array which is then used to create the [`AR.Model`](architectapi://reference/classes/Model.html) object for each planet. Depending on the size and distance from the sun each planet is placed on the target using the `translate` and `scale` properties.  The backdrop is a simple [`AR.ImageDrawable`](architectapi://reference/classes/ImageDrawable.html) that is added together with the planets to the [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html) drawables. 	 	var backdropImg = new AR.ImageResource(\&quot;assets/backdrop.png\&quot;);         var backdrop = [new AR.ImageDrawable(backdropImg, 2)];  &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/99_Demo_3_SolarSystem(ImageRecognition)/js/solarsystemir.js#L158-L159\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Animating the planets on a circle around the sun is accomplished by the utilizing multiple [`AR.PropertyAnimation`](architectapi://reference/classes/PropertyAnimation.html)s which are combined in [`AR.AnimationGroup`](architectapi://reference/classes/AnimationGroup.html)s. The function `createOrbitAnimation(planet, info)` creates the necessary animations for this action. The circle is divided in 4 quadrants which require different animations for the x and y axis. Animations for the x and y axis are combined in a parallel animation and are played sequentially  in order to achieve the desired circular movement.  Initially the planets are static and don't move. Once the user clicks the animate button the `toggleAnimatePlanets()` function is called. It checks the current state of the animations and starts, pauses, or resumes the animations accordingly.  Another part of the demo is the selection of planets and the displaying of a selected planet's information. Each planets [`AR.Model`](architectapi://reference/classes/Model.html) has an `onClick` trigger set which calls the `planetClicked()` function. This call displays a selected planet's information on the HUD. Helper functions `selectPlanet()` and `screenClicked()` activate and deactivate the selected animations and reset a previously selected planets `scale` property.  ![Target image](images/solar_system.jpg)  To view the sample you can use the image in [this PDF on page 5](images/target_images_examples.pdf) "
});



documentTitles["solarsystemgeo.html#solar-system-geo"] = "Solar System (Geo)";
index.add({
    url: "solarsystemgeo.html#solar-system-geo",
    title: "Solar System (Geo)",
    body: "## Solar System (Geo)   Similar to the [Solar System (IR) demo](solarsystemir.html) this demo displays the planets of our solar system, but positions them in the user's vicinity using a location based approach.  ![Screenshot of the complete demo.](images/demo_solar_geo_1.jpg \&quot;Screenshot of the complete demo.\&quot;)  The detail information of each planet is defined in the `init()` function. Factors are defined to scale the planets to a reasonable size and all planets are combined in the `planetsInfo` array.  	/* put sun, planets (and pluto) in an array */         this.planetsInfo = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptun, pluto];        &lt;div class=\&quot;githubnote\&quot;&gt; view source code on &lt;a target=\&quot;_blank\&quot; href=\&quot;https://github.com/Wikitude/wikitude-sdk-samples/blob/master/99_Demo_2_SolarSystem(Geo)/js/solarsystem.js#L149-L150\&quot;&gt;GitHub&lt;/a&gt; &lt;/div&gt;  Planets are represented by an [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html) that features the planets image and name indicated as drawables. The [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html) of each planet is positioned using a [`AR.RelativeLocation`](architectapi://reference/classes/RelativeLocation.html) that allows to placement of objects relative to the user's location. Therefore it is possible to position the solar system in northerly direction regardless of the actual longitude and latitude of the user's current position.  An indicator is added to the suns [`AR.GeoObject`](architectapi://reference/classes/GeoObject.html) so the user is continually guided to look in the \&quot;right\&quot; direction.  Animation of the planets is done similarly to the [3D Model sample](imagerecognitionand3d.html) where the circular movement is composed of multiple [`AR.PropertyAnimation`](architectapi://reference/classes/PropertyAnimation.html)s that are combined using [`AR.AnimationGroup`](architectapi://reference/classes/AnimationGroup.html)s. The `animate(planet)` function is responsible for creating these animations for a moving planet.  Again similar to the [3D Model sample](imagerecognitionand3d.html) the `planetClicked()` function, which is assigned to the `onClick` trigger, displays the planets information on the HUD."
});



documentTitles["workflow.html#development-workflow"] = "Development Workflow";
index.add({
    url: "workflow.html#development-workflow",
    title: "Development Workflow",
    body: "# Development Workflow  The following section describes a default development workflow for writing AR content using the ARchitect JavaScript API. It demonstrates the code test and debug cycle and provides useful tips for each step.  "
});

documentTitles["workflow.html#code-test-debug"] = "Code, Test, Debug";
index.add({
    url: "workflow.html#code-test-debug",
    title: "Code, Test, Debug",
    body: "## Code, Test, Debug  1. Write your HTML, JavaScript and CSS using the text editor of your choice 2. Test in your desktop browser 3. Debug in your desktop browser using e.g. WebInspector 4. Test on a physical device 5. Debug on a physical device 6. Rinse and repeat  You can use any editor for writing the ARchitect World. We particularly like [Sublime][link_sublime], which has a great selection of plugins for web developers.  The next step is to test it out in a desktop browser. To have the ARchitect JavaScript API available in the desktop browser you'll need to include the ARchitect Desktop Engine (ADE). See the chapter [ARchitect Desktop Engine][ADE] for instructions on how to use it. While this is limited in visualizing the experience, it greatly helps in finding errors in the JavaScript code and reduces the time it takes to see effects of changes you have made to the HTML and CSS parts. Desktop browsers come with great debugging tools (e.g. [Chrome's DevTools][chrome_dev_tools] ) that allow you to easily debug your JavaScript code and that you should make full use of when debugging ARchitect Worlds.  Once you have verified the JavaScript is working properly you should test it on the device of your choice. Either start your application that loads the ARchitect World or run it inside the Wikitude World Browser app.   [link_sublime]: http://www.sublimetext.com/ [ADE]: ade.html [chrome_dev_tools]: https://developers.google.com/chrome-developer-tools/### Run the ARchitect World within the Wikitude World Browser on Android  AR experiences can be tested on Android using the &lt;a href=\&quot;https://play.google.com/store/apps/details?id=com.wikitude\&quot; target=\&quot;_top\&quot;&gt;Wikitude World Browser for Android&lt;/a&gt;. Download the Wikitude app from Google Play. Launch the application and press the menu button in the upper left corner of the screen.  ![ ][Image_OpenMenu]  Then tap the `Developer` button to open the developer login page.  ![ ][Image_OpenDev]  Enter your username and password of your Wikitude developer account and tap the login button to get to your user account. If you don't have a developer account yet register at the &lt;a href='http://www.wikitude.com/developer/sign-in?p_p_id=58&amp;p_p_lifecycle=0&amp;p_p_state=maximized&amp;p_p_mode=view&amp;saveLastPath=0&amp;_58_struts_action=%2Flogin%2Fcreate_account' target='top'&gt;Wikitude developer page&lt;/a&gt;.  ![ ][Image_DevLogin]  In this view, tap on the text box below the `Launch via URL` label and enter the URL of your ARchitect World. After tapping the `Launch` button your AR experience will be opened in Wikitude.  ![ ][Image_TestWorld]  [Image_OpenMenu]: images/WT8_Android_OpenMenu.png [Image_OpenDev]: images/WT8_Android_DeveloperMenu.png [Image_DevLogin]: images/WT8_Android_DeveloperLogin.png [Image_TestWorld]: images/WT8_Android_TestWorld.png  &lt;a id=\&quot;on_device_debugging\&quot;&gt;&lt;/a&gt; "
});

documentTitles["workflow.html#on-device-debugging"] = "On-Device Debugging";
index.add({
    url: "workflow.html#on-device-debugging",
    title: "On-Device Debugging",
    body: "## On-Device Debugging  Remote debugging is only available for devices running Android 4.4  To enable remote debugging of a WebView add the following line to your CamActivity.  ```java if(Build.VERSION.SDK_INT &gt;= 19) {     WebView.setWebContentsDebuggingEnabled(true); } ```  `setWebContentsDebuggingEnabled` is available for Android 4.4+, you may need to capsule that to avoid runtime errors on devices running Android lower version 4.4. Additionally set `TargetSDK` to 19 in your Android Manifest.  To actually start debugging  follow the steps outlined on the official [Android Developer site](https://developers.google.com/chrome-developer-tools/docs/remote-debugging).   "
});



documentTitles["assetsworkflow.html#3d-assets-workflow"] = "3D Assets Workflow";
index.add({
    url: "assetsworkflow.html#3d-assets-workflow",
    title: "3D Assets Workflow",
    body: "## 3D Assets Workflow  "
});

documentTitles["assetsworkflow.html#prerequisites"] = "Prerequisites";
index.add({
    url: "assetsworkflow.html#prerequisites",
    title: "Prerequisites",
    body: "#### Prerequisites  -   A 3D model in FBX 2013 (.fbx) or Collada (.dae) file format -   Wikitude 3D Encoder for Windows or MacOS X  3D content within Wikitude can only be loaded from so-called *Wikitude 3D Format* files (.wt3).  This is a compressed binary format for describing 3D content, which is optimized for fast loading and handling of 3D content on a mobile devices. You still can use 3D models from your favorite 3D modeling tools (like Autodesk® Maya® or Blender) but need to convert them into wt3 file format. Wikitude offers a desktop application called Wikitude 3D Encoder, which takes over the task of encoding your 3D source file.  The Encoder can handle Autodesk® FBX® files (.fbx) and the open standard Collada (.dae) file formats for encoding to .wt3.  This section should give an overview on how to choose the right 3D models for displaying it in Wikitude's augmented reality SDK. As Wikitude is basing 3D support on a converted file format (.wt3) it is good to follow the best practices below.  "
});

documentTitles["assetsworkflow.html#input-format"] = "Input format";
index.add({
    url: "assetsworkflow.html#input-format",
    title: "Input format",
    body: "### Input format  "
});

documentTitles["assetsworkflow.html#supported-3d-model-files-for-encoding-it-into-wt3-files-are"] = "Supported 3D model files for encoding it into wt3 files are:";
index.add({
    url: "assetsworkflow.html#supported-3d-model-files-for-encoding-it-into-wt3-files-are",
    title: "Supported 3D model files for encoding it into wt3 files are:",
    body: "#### Supported 3D model files for encoding it into wt3 files are:  -   FBX (.fbx) - max version: FBX 2013 -   Collada (.dae)  We recommend using FBX wherever possible as tools support for FBX is widely available. Furthermore Collada allows to include customized attributes that might not be understood by the Wikitude 3D Encoder.   "
});

documentTitles["assetsworkflow.html#features-you-can-use-in-your-3d-model-source-files"] = "Features you can use in your 3D model source files:";
index.add({
    url: "assetsworkflow.html#features-you-can-use-in-your-3d-model-source-files",
    title: "Features you can use in your 3D model source files:",
    body: "#### Features you can use in your 3D model source files:  -   Static model (made-up of triangles)    -   [Animations](#working-with-3d-animations)     - Transformation Animations     - Skinning -   Materials     - Phong, Lambert, Blinn     - Transparency -   NURBS (will be tessellated on import)  "
});

documentTitles["assetsworkflow.html#features-that-are-not-yet-supported"] = "Features that are not (yet) supported";
index.add({
    url: "assetsworkflow.html#features-that-are-not-yet-supported",
    title: "Features that are not (yet) supported",
    body: "#### Features that are not (yet) supported  -   Normal Mapping -   Multi Textures -   FBX 2014  "
});

documentTitles["assetsworkflow.html#good-practice"] = "Good practice";
index.add({
    url: "assetsworkflow.html#good-practice",
    title: "Good practice",
    body: "### Good practice  "
});

documentTitles["assetsworkflow.html#use-png-textures"] = "Use png textures";
index.add({
    url: "assetsworkflow.html#use-png-textures",
    title: "Use png textures",
    body: "#### Use png textures  Textures are stored in png format within wt3 files. While Wikitude 3D Encoder takes care of automatically converting textures to png, it is good practice to use png textures in the source 3D Model file.  "
});

documentTitles["assetsworkflow.html#use-power-of-2-textures"] = "Use power of 2 textures";
index.add({
    url: "assetsworkflow.html#use-power-of-2-textures",
    title: "Use power of 2 textures",
    body: "#### Use power of 2 textures  The current rendering hardware on mobile devices requires certain texture attributes if the texture is not a power of 2 textures. This can result in unexpectedly textured models. Additionally using power of 2 textures yields to a better performance when running on the device. A power of 2 textures has a width and height of 2&lt;sup&gt;x&lt;/sup&gt; - like. 64x64, 128x128, and so on.  "
});

documentTitles["assetsworkflow.html#validate-texture-paths"] = "Validate texture paths";
index.add({
    url: "assetsworkflow.html#validate-texture-paths",
    title: "Validate texture paths",
    body: "#### Validate texture paths  If your opened model appears without textures, very often the texture paths are not set correctly. Make sure your texture paths are valid and accessible. For example check that they reference the texture files in a relative way and that all required textures exist and are accessible.  "
});

documentTitles["assetsworkflow.html#keep-texture-size-as-low-as-possible"] = "Keep texture size as low as possible";
index.add({
    url: "assetsworkflow.html#keep-texture-size-as-low-as-possible",
    title: "Keep texture size as low as possible",
    body: "#### Keep texture size as low as possible  Keeping texture sizes as low as possible, while maintaining the required details has several benefits. The exported .wt3 file will be smaller and therefore quicker to load over the network or from the application bundle. Additionally it will take up less graphics memory thus freeing up space for additional models or content.  "
});

documentTitles["assetsworkflow.html#use-only-one-light"] = "Use only one light";
index.add({
    url: "assetsworkflow.html#use-only-one-light",
    title: "Use only one light",
    body: "#### Use only one light  To maintain a good rendering performance each part of your model (node) is only affected by a single light source. You may use multiple lights in the source file but at render time only a single node is selected to affect a mesh part. We make a best guess, utilizing the scene graph to assign a light to the node. If lighting is not required simply remove the lights from your source 3D model file and/or set the corresponding material properties. This helps to speed up rendering.  "
});

documentTitles["assetsworkflow.html#resolving-problems"] = "Resolving problems";
index.add({
    url: "assetsworkflow.html#resolving-problems",
    title: "Resolving problems",
    body: "### Resolving problems  "
});

documentTitles["assetsworkflow.html#3d-model-which-uses-joints-bones-is-distorted"] = "3D Model which uses joints (bones) is distorted";
index.add({
    url: "assetsworkflow.html#3d-model-which-uses-joints-bones-is-distorted",
    title: "3D Model which uses joints (bones) is distorted",
    body: "#### 3D Model which uses joints (bones) is distorted Create a master joint where all other joints are attached to.  "
});

documentTitles["assetsworkflow.html#3d-model-shows-up-correctly-in-wikitude-3d-encoder-but-does-not-show-on-the-device"] = "3D Model shows up correctly in Wikitude 3D Encoder but does not show on the device.";
index.add({
    url: "assetsworkflow.html#3d-model-shows-up-correctly-in-wikitude-3d-encoder-but-does-not-show-on-the-device",
    title: "3D Model shows up correctly in Wikitude 3D Encoder but does not show on the device.",
    body: "#### 3D Model shows up correctly in Wikitude 3D Encoder but does not show on the device.  Check that your textures have a reasonable size. Limiting the textures to the lowest size that maintains the required details is recommended.  "
});

documentTitles["assetsworkflow.html#textures-are-missing"] = "Textures are missing";
index.add({
    url: "assetsworkflow.html#textures-are-missing",
    title: "Textures are missing",
    body: "#### Textures are missing  Check the error/warning dialog during the import process of the model it will give you detailed information on which textures are problematic. Make sure the texture paths are valid and accessible.  &lt;a id=\&quot;working-with-3d-animations\&quot;&gt;&lt;/a&gt;  "
});

documentTitles["assetsworkflow.html#working-with-3d-animations"] = "Working with 3D Animations";
index.add({
    url: "assetsworkflow.html#working-with-3d-animations",
    title: "Working with 3D Animations",
    body: "## Working with 3D Animations ####Quick start Export a model that contains one or more animations from your preferred 3D modeling tool to a DAE or FBX file. After you load the 3D model into the Wikitude 3D Encoder the animations are displayed in a list on the right side of your application window.  ![Animation listed in Wikitude 3D Encoder](images/encoder_animation_01.png)  Each row of the list contains the ID of the animation, a control button and the time that passed after you started the animation. Clicking the play button  will start the animation  from the beginning and play back the animation in the 3D view of the application. The stop button will stop animation and displays the frame, that was drawn last.  Check if your model looks and animates as expected and export it to a wt3 file. You need the  IDs of the animations you want to use in your application. The IDs are displayed next to the animation control button (on the screenshot the animation ID is *butterfly_animation*). In your code you start an animation like this.  ```js // instantiate the model object var model = new AR.Model(\&quot;butterfly.wt3\&quot;);  // instantiate the model animation with the animation id var animation = new AR.ModelAnimation(model, \&quot;butterfly_animation\&quot;);  // start the animation animation.start(); ```  ####Export Animations The Wikitude 3D Encoder supports animation of joints and transformation animations. This includes transformation animations along motion paths.  When exporting the model from the 3D modeling tool you have to **bake** your animations. As an example Maya bakes all unsupported constraints, including Maya-supported and FBX constraints, into animation curves.  ####Grouping Animations Animations will be grouped automatically to a top level node. In order to create two separate animations you need to group them in your modeling tool accordingly.  To illustrate that let's create an example with 3 spheres and 3 cylinders with different translation animations. In the scene graph this example looks like the following:  ``` • sphere1 • sphere2 • sphere3 • cylinder1 • cylinder2 • cylinder3 ```  Once the example is exported into a DAE or FBX file and imported into the Wikitude 3D Encoder  six separate animations, one for each object, will be generated.  Let's assume we want to group all sphere animations into one animation and all cylinders into a second animation. This can achieved by creating two separate groups. One group containing all spheres and another one containing all cylinders. In the scene graph this is going to look like this:  ``` • all_spheres_group   • sphere1   • sphere2   • sphere3 • all_cylinders_group   • cylinder1   • cylinder2   • cylinder3    ```  Once we export this into a DAE or an FBX file and import it into the Wikitude 3D Encoder we would get the desired result: one animation that animates all spheres and another animation animating all cylinders.   *Note: Do not group joints, especially when they were already skinned to a mesh.*  ####Known Issues * Baking animations doesn’t work in Blender as of version 2.66a and 2.67a when exporting the 3D model as DAE file.&lt;/br&gt;&lt;/br&gt; *Reason: Blender 2.66a does not offer a baking option. There is a new option in Blender 2.67a when exporting to Collada DAE files among the Collada Options which is called \&quot;Transformation Type\&quot;. You can bake transformations to one transformation matrix but for some reason the channel is still referring to the separate matrices (translation, rotation, scale)  instead of the baked matrix. For this reason the animations will not be encoded on import to the Wikitude 3D Encoder.* &lt;/br&gt;&lt;/br&gt; * In Blender avoid transformations on bones before you skin them to a mesh and export it to an FBX file. * Exporting a model (with animations) as FBX from Blender creates additional animations for camera, lights or motion paths. These can be safely ignored."
});



documentTitles["triallicense.html#free-trial-license"] = "Free Trial License";
index.add({
    url: "triallicense.html#free-trial-license",
    title: "Free Trial License",
    body: "# Free Trial License  "
});

documentTitles["triallicense.html#how-to-obtain-a-free-trial-license"] = "How to obtain a free trial license";
index.add({
    url: "triallicense.html#how-to-obtain-a-free-trial-license",
    title: "How to obtain a free trial license",
    body: "## How to obtain a free trial license  The Wikitude SDK requires a valid license key to be able to run properly. An empty license key will block the augmented reality view from showing any meaningful content.   When downloading the Wikitude SDK 4.0 you will be forwarded to the [license generation page](http://www.wikitude.com/developer/sdk-licenses), where a trial license key is automatically generated for you.   It is also possible to generate a trial license key manually by opening the same [license generation page](http://www.wikitude.com/developer/sdk-licenses) and click the `Generate Trial License`.   Copy the key into your app, which will unlock the trial mode of the Wikitude SDK. The trial mode of the Wikitude SDK contains the full feature set of the Wikitude SDK but will show a `Trial` watermark across the screen.  Each trial license key is valid for every application ID on every operating system. You can use the same trial license key in multiple apps.  Using the Wikitude SDK without any license key will only enable the camera with a `Unlicensed SDK` watermark rendered. All JavaScript API calls will be ignored and not interpreted.  "
});

documentTitles["triallicense.html#where-should-i-enter-the-license-key"] = "Where should I enter the license key";
index.add({
    url: "triallicense.html#where-should-i-enter-the-license-key",
    title: "Where should I enter the license key",
    body: "## Where should I enter the license key  "
});

documentTitles["triallicense.html#android"] = "Android";
index.add({
    url: "triallicense.html#android",
    title: "Android",
    body: "### Android To use the Wikitude Android SDK you need to provide a valid license key to the `onCreate` lifecycle-method of the ArchitectView. This can either be done directly by providing the key as a string and the call the `onCreate(final String key)` method or creating an `ArchitectConfig` object, passing it the license as a string and then call the `onCreate(final ArchitectConfig config)` method. Please refer to the `AbstractArchitectCamActivity` of the SDK Examples project for a practical example of how to set the license key.  "
});

documentTitles["triallicense.html#epson-moverio"] = "Epson Moverio";
index.add({
    url: "triallicense.html#epson-moverio",
    title: "Epson Moverio",
    body: "### Epson Moverio To use the Wikitude Epson Moverio SDK you need to provide a valid license key to the `onCreate` lifecycle-method of the ArchitectView. This can either be done directly by providing the key as a string and the call the `onCreate(final String key)` method or creating an `ArchitectConfig` object, passing it the license as a string and then call the `onCreate(final ArchitectConfig config)` method. Please refer to the `AbstractArchitectCamActivity` of the SDK Examples project for a practical example of how to set the license key.  "
});

documentTitles["triallicense.html#ios"] = "iOS";
index.add({
    url: "triallicense.html#ios",
    title: "iOS",
    body: "### iOS To use the Wikitude iOS SDK with a certain license key, use the method `-setLicenseKey:` defined in `WTArchitectView.h` and provide a valid license key. The SDK Example application demonstrates the license handling in the file `WTStandardARViewController.m`. The license key is defined in line 17 and used in line 71.  "
});

documentTitles["triallicense.html#google-glass"] = "Google Glass";
index.add({
    url: "triallicense.html#google-glass",
    title: "Google Glass",
    body: "### Google Glass To use the Google Glass SDK you need to provide a valid license key to the `onCreate` lifecycle-method of the ArchitectView. This can either be done directly by providing the key as a string and the call the `onCreate(final String key)` method or creating an `ArchitectConfig` object, passing it the license as a string and then call the `onCreate(final ArchitectConfig config)` method. Please refer to the `AbstractArchitectCamActivity` of the SDK Examples project for a practical example of how to set the license key.  "
});

documentTitles["triallicense.html#phonegap-plugin"] = "PhoneGap Plugin";
index.add({
    url: "triallicense.html#phonegap-plugin",
    title: "PhoneGap Plugin",
    body: "### PhoneGap Plugin To use the Wikitude PhoneGap Plugin with a certain license key, use the `this._sdkKey` property defined in `WikitudePlugin.js` line `12`.  Please make sure that the license key is set in the appropriate `WikitudePlugin.js` file since PhoneGap is duplicating this particular file in both `www` folder.  "
});

documentTitles["triallicense.html#titanium-module"] = "Titanium Module";
index.add({
    url: "triallicense.html#titanium-module",
    title: "Titanium Module",
    body: "### Titanium Module To use the Wikitude Titanium Module with a certain license key, enter the key while calling the Wikitude Module function `createWikitudeView`. This is demonstrated in the Wikitude Titanium sample application file `ARchitectWindow.js` line `31` and the key is defined in `MainWindow.js` line `14`.  "
});

documentTitles["triallicense.html#vuzix"] = "Vuzix";
index.add({
    url: "triallicense.html#vuzix",
    title: "Vuzix",
    body: "### Vuzix To use the Wikitude Vuzix SDK you need to provide a valid license key to the `onCreate` lifecycle-method of the ArchitectView. This can either be done directly by providing the key as a string and the call the `onCreate(final String key)` method or creating an `ArchitectConfig` object, passing it the license as a string and then call the `onCreate(final ArchitectConfig config)` method. Please refer to the `AbstractArchitectCamActivity` of the SDK Examples project for a practical example of how to set the license key.  "
});

documentTitles["triallicense.html#xamarin-component"] = "Xamarin Component";
index.add({
    url: "triallicense.html#xamarin-component",
    title: "Xamarin Component",
    body: "### Xamarin Component "
});

documentTitles["triallicense.html#xamarinios"] = "Xamarin.iOS";
index.add({
    url: "triallicense.html#xamarinios",
    title: "Xamarin.iOS",
    body: "##### Xamarin.iOS To use the Wikitude iOS SDK with a certain license key, use the method `-setLicenseKey:` defined in the Xamarin Binding and provide a valid license key. The Wikitude Xamarin Example application demonstrates the license handling in the file `ARViewController.cs` line 34.  "
});

documentTitles["triallicense.html#xamarinandroid"] = "Xamarin.Android";
index.add({
    url: "triallicense.html#xamarinandroid",
    title: "Xamarin.Android",
    body: "##### Xamarin.Android To use the Wikitude iOS SDK with a certain license key, create a `ArchitectConfig` with your license key and pass this config object to the `ArchitectView.OnCreate` method. The Wikitude Xamarin Example application demonstrates the license handling in the file `BasicArchitectActivity.cs` line 49 - 51."
});



documentTitles["tools.html#tools"] = "Tools";
index.add({
    url: "tools.html#tools",
    title: "Tools",
    body: "# Tools  In this section of the documentation we are covering tools shipped with the Wikitude SDK, which help you in your development.   1. [ADE](ade.html) 2. [Logger](logger.html) 3. [Target Manager](targetmanagement.html#target-management) 4. [Best practice for target images](targetguide.html) 5. [Wikitude 3D Encoder](encoder.html) "
});



documentTitles["ade.html#ade"] = "ADE";
index.add({
    url: "ade.html#ade",
    title: "ADE",
    body: "## ADE  The ARchitect Desktop Environment (ADE) allows you to simulate the behavior of your ARchitect file on an ordinary web browser, and observe the properties of your AR objects and simulate user interaction and events.  "
});

documentTitles["ade.html#how-can-i-enable-the-ade-for-my-architect-file"] = "How can I enable the ADE for my ARchitect file?";
index.add({
    url: "ade.html#how-can-i-enable-the-ade-for-my-architect-file",
    title: "How can I enable the ADE for my ARchitect file?",
    body: "### How can I enable the ADE for my ARchitect file?  To enable ADE functionality, simply add the ade.js file included in the ARchitect Tools to the list of imported scripts in the header-section of your ARchitect file:  ```html &lt;html&gt; 	&lt;head&gt; 		&lt;script src=\&quot;architect://architect.js\&quot;&gt;&lt;/script&gt; 		&lt;script src=\&quot;[your_path_to_the_ade_file]/ade.js\&quot;&gt;&lt;/script&gt; 	&lt;/head&gt; 	&lt;body&gt; 	... 	&lt;/body&gt; &lt;/html&gt; ```  Next, open the ARchitect file in an ordinary web browser. Your browser will immediately render the HTML content specified in your ARchitect file, as well as starting to execute the provided JavaScript functionality.  When the file was successfully loaded, you will see your specified HTML content at top of the page. Immediately below your HTML content, you will see the list of ARchitect objects that you have  created (if you did not yet create any ARchitect objects, you will only see the automatically generated \&quot;context\&quot; object). This list represents all ARchitect objects known to the system, and the list will be automatically updated as soon as new objects are created or existing ones are modified.  The list will always specify the type of the ARchitect object (for example `GeoLocation`) and the id of the object, which is stored in the immutable `__id` property.  ![An example of an ADE tree](images/image05.png \&quot;Example of ADE tree\&quot;)  For instance, the second line in the list represents a GeoLocation with the `__id` property set to `a_0`.  "
});

documentTitles["ade.html#how-can-i-use-the-ade"] = "How can I use the ADE?";
index.add({
    url: "ade.html#how-can-i-use-the-ade",
    title: "How can I use the ADE?",
    body: "### How can I use the ADE?  As soon as you create new ARchitect objects, they will appear in the list. Click on the '+' symbol next to the object's description to expand it and observe the values of the object's properties defined in the ARchitect specification.  ![Example of ADE tree with an expanded object](images/image04.png \&quot;Example of ADE tree with expanded object\&quot;)  Blue color-coding of a property indicates that the trigger or function is defined and can be executed; black color-coding indicates that the trigger or function is undefined and thus can not be executed. In the example above, we have defined an onExitFieldOfVision trigger. Clicking on the trigger will execute the specified function. If your trigger changes a certain property of the GeoObject, you will immediately see the change in the above list of properties.  Additionally, you can simulate other events occurring in regards to certain objects. For a GeoObject, you can simulate that the GeoObject is in, or outside of the field of vision, of the user. Clicking on `Toggle Visibility` will simulate that the GeoObject is coming into the field of vision, or is leaving the field of vision respectively. Associated triggers will automatically be triggered (just as they are triggered on the mobile device), and the artificial property `visible changes its value. Artificial properties are properties that do not exist on a mobile device; they are solely used in the ADE to simulate the status of the ARchitect object.  ARchitect objects, triggers and events will behave in the exact same way in the ADE as they would on a mobile device. The only exception is the PropertyAnimation object, which will not change the value over time and according to the specified EasingCurve in the ADE, PropertyAnimations will change the value only once at the end of the Animation, rather than continuously.  "
});



documentTitles["logger.html#logger"] = "Logger";
index.add({
    url: "logger.html#logger",
    title: "Logger",
    body: "## Logger  ARchitect Tools come equipped with a logging console that is shared by the system and the developer.   On start up of each world, the ARchitect library creates a singleton `AR.logger` instance, which can be used by the developer to log messages.  To see the log messages, you need to call the JavaScript function `AR.logger.activateDebugMode()`. For example in the `body.onLoad trigger:  ```html &lt;html&gt; &lt;body onLoad=\&quot;javascript:AR.logger.activateDebugMode();\&quot;&gt; 	&lt;!-- your body content --&gt; &lt;/body&gt; &lt;/html&gt; ```  When `activateDebugMode()` is called, it automatically creates a button at the bottom of your display, which allows you to open the Logging console. When you click the button, the logging window appears. Within this window, you can select the log-levels you would like to see, as well as  close the logging console again.  Bear in mind that the system itself will also use the logging framework to log messages, thus allowing you to debug if anything unexpected happens.  Please remember to deactivate the logging framework before you actually publish your world by removing the call to `AR.logger.activateDebugMode()`. Otherwise, the users of your ARchitect world will always see the button at the bottom of the page, and would be able to follow debug messages.  "
});



documentTitles["targetmanagement.html#target-management"] = "Target Management";
index.add({
    url: "targetmanagement.html#target-management",
    title: "Target Management",
    body: "## Target Management   This guide gives you an overview of how to create a target collection that you can use to detect and track images within your ARchitect World.  "
});

documentTitles["targetmanagement.html#add-a-new-project"] = "Add a new project";
index.add({
    url: "targetmanagement.html#add-a-new-project",
    title: "Add a new project",
    body: "### Add a new project  - Open &lt;a href=\&quot;http://www.wikitude.com/developer/tools/target-manager\&quot; target=\&quot;_top\&quot;&gt;http://www.wikitude.com/developer/tools/target-manager&lt;/a&gt; and login with your Wikitude Developer account - Add a new project to your project collection  ![Add new project](images/tmt_CreateProject.png)   "
});

documentTitles["targetmanagement.html#add-target-images-to-your-own-project"] = "Add target images to your own project";
index.add({
    url: "targetmanagement.html#add-target-images-to-your-own-project",
    title: "Add target images to your own project",
    body: "### Add target images to your own project  - Enter the newly created project  - Add new target images to the project either by clicking on `Add images` or drag  &amp; drop them on the gray area. Supported file formats include PNG and JPEG. If you are using PNG images, please make sure that it does not contain any transparent pixels, only solid colored images are supported.  ![Target images](images/tmt_Targets.png)	  - The file name will be set as the `target name` that will later be used to reference a particular target in your ARchitect World. If the `target name` is not completely visible, hover over it to reveal the full name.  - The target management tool will take a couple of seconds to calculate how suitable the provided target images are for detection and tracking purposes and generate a 3-star rating for each of them. Hover over the star rating to get additional information.  &lt;div class=\&quot;warning\&quot;&gt; **Important** &lt;br /&gt; If you add your own target images  you need the target name to set them in  [`AR.Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html).&lt;/div&gt;   "
});

documentTitles["targetmanagement.html#star-rating-explained"] = "Star rating explained";
index.add({
    url: "targetmanagement.html#star-rating-explained",
    title: "Star rating explained",
    body: "### Star rating explained - **0 stars:** Not suitable for tracking. This target image cannot be tracked because it lacks textured features with high local contrast. Please consider choosing another target image. - **1 star:**  Limited tracking ability. This target image provides basic tracking performance in good lightning conditions. Please consider improving the image - **2 stars:** Good tracking ability. This target image will track well in most conditions. - **3 stars:** Very good tracking ability. This target image will track very well in most conditions.  General advice for reference images  - Good image characteristics: 	- Diversely textured image with high local contrast - Bad image characteristics: 	- Large areas with solid color or smooth color transitions 	- Repetitive patterns 	- Logos, signs		  "
});

documentTitles["targetmanagement.html#create-a-target-collection"] = "Create a target collection";
index.add({
    url: "targetmanagement.html#create-a-target-collection",
    title: "Create a target collection",
    body: "### Create a target collection  - Select all desired targets you want to recognize/track, enter a name for the target collection and click on *Generate target collection*. Depending on the number of selected targets, it can take a moment to generate the target collection.  ![Target images](images/tmt_CreateTargetCollection.png)  - After the target collection has been generated, it will be listed in the target collections page. Here you can review all target collections you've created. Use the provided download link to load the target collection directly from the Wikitude server or download it to package it together with your application for offline usage.  ![Target images](images/tmt_TargetCollections.png)   "
});

documentTitles["targetmanagement.html#use-the-target-collection-in-your-architect-world"] = "Use the target collection in your ARchitect World";
index.add({
    url: "targetmanagement.html#use-the-target-collection-in-your-architect-world",
    title: "Use the target collection in your ARchitect World",
    body: "### Use the target collection in your ARchitect World   Look at one of the image recognition [examples][ir_example] or refer to the JavaScript API reference of [`AR.Tracker`](architectapi://reference/classes/Tracker.html) for instructions on how to use the created target collection for augmentations in your ARchitect Worlds.  [ir_example]: imagerecognition.html      "
});



documentTitles["targetguide.html#best-practice-for-target-images"] = "Best practice for target images";
index.add({
    url: "targetguide.html#best-practice-for-target-images",
    title: "Best practice for target images",
    body: "## Best practice for target images  This guide gives you an overview of how to create a target collection that you can use to detect and track images within your ARchitect World.  "
});

documentTitles["targetguide.html#summary"] = "Summary";
index.add({
    url: "targetguide.html#summary",
    title: "Summary",
    body: "### Summary  **Preferred images have:**  - between 500 to 1000 pixels in each dimension - Rich contrast - Evenly distributed textured areas - Many corner like structures  **Unsuitable images have:**  - Smaller dimensions than 500 pixels - Larger than 1000 pixels as they do not provide more accurate results - Large amounts of text - Many repetitive patterns - Large single-colored areas  - Color contrast only e.g. green to red edge), because all images are processed as grayscale images   "
});

documentTitles["targetguide.html#optimal-image-dimensions"] = "Optimal Image Dimensions";
index.add({
    url: "targetguide.html#optimal-image-dimensions",
    title: "Optimal Image Dimensions",
    body: "### Optimal Image Dimensions  - Optimal images are sized between 500 and 1000 pixels in each dimension - Small images do not contain enough graphical information to extract so called feature points. The uniqueness, amount and distribution of features points are the key indicators for good detection and tracking quality - Larger images do not improve the tracking quality ![Target image too small](images/guide_dimension_wrong.png) ![Optimal size of target image](images/guide_dimension_good.png)  "
});

documentTitles["targetguide.html#low-contrast-images"] = "Low contrast images";
index.add({
    url: "targetguide.html#low-contrast-images",
    title: "Low contrast images",
    body: "### Low contrast images  - Images with high local contrast and large amount of rich textured areas is best suited for reliable detection and tracking - Color contrast only (i.e. green to red edge) appears as high contrast to the human eye but is not discriminative to computer vision algorithms as they are operating on grayscale images ***Tip***: For low contrast images, try to increase the contrast of your target image with an image editing tool like Gimp or PhotoShop to improve detection and tracking quality  ![Target image with low contrast](images/low_contrast_wrong.png) ![Target image with good contrast](images/low_contrast_good.png)  "
});

documentTitles["targetguide.html#distribution-of-textured-areas"] = "Distribution of textured areas";
index.add({
    url: "targetguide.html#distribution-of-textured-areas",
    title: "Distribution of textured areas",
    body: "### Distribution of textured areas  - Images with evenly distributed textured areas are good candidates for reliable detection and tracking - This might be the hardest part to be in control of and often can’t be changed. ***Tip***: Try to crop the most prominent part of your image and use only this as target image.  ![Target image with not optimal distribution](images/texture_distribution_wrong.png) ![Even distribution of features](images/texture_distribution_good.png)  "
});

documentTitles["targetguide.html#images-with-whitespace"] = "Images with whitespace";
index.add({
    url: "targetguide.html#images-with-whitespace",
    title: "Images with whitespace",
    body: "### Images with whitespace  - Single-colored areas or smooth color transitions often found in backgrounds do not exhibit graphical information suitable for detection and tracking.  ***Tip***: Try to crop the most prominent part of your image and use only this as target image.  ![Too much whitespace](images/whitespace_wrong.png) ![Image reduced to the most relevant part](images/whitespace_good.png)  "
});

documentTitles["targetguide.html#vector-based-graphics"] = "Vector-based graphics";
index.add({
    url: "targetguide.html#vector-based-graphics",
    title: "Vector-based graphics",
    body: "### Vector-based graphics   - Logos and vector-based graphics usually consist of very few areas with high local contrast and textured structures and are therefore hard to detect and track.   ***Tip***: Try to add additional elements to the graphic like your logotype or any other specific elements, which can go along with your graphic.  ![Vector-based image](images/vector_wrong.png) ![Target image mixed with graphic elements](images/vector_good.png)  "
});

documentTitles["targetguide.html#images-with-a-lot-of-text"] = "Images with a lot of text";
index.add({
    url: "targetguide.html#images-with-a-lot-of-text",
    title: "Images with a lot of text",
    body: "### Images with a lot of text - Images consisting primarily of large areas of text are hard to detect and track.  ***Tip***: Try to have at least some graphical material and images next to your text for your target image.  ![Pure text](images/text_wrong.png) ![Text mixed with graphic elements](images/text_good.png)  "
});

documentTitles["targetguide.html#repetitive-patterns"] = "Repetitive patterns";
index.add({
    url: "targetguide.html#repetitive-patterns",
    title: "Repetitive patterns",
    body: "### Repetitive patterns  - Repetitive patterns exhibit the same graphical information information at each feature point and therefore cannot be localized reliably - Images with slightly irregular structures can convey a similar information to the target audience while providing enough unique feature points to be detected (second image)  ***Tip***: Try a different selection of your image including non pattern parts or use images with irregular patterns  ![Reptetive patterns that do not track](images/patterns_wrong.png) ![Pattern with irregular structures](images/patterns_good.png)       "
});



documentTitles["encoder.html#wikitude-3d-encoder"] = "Wikitude 3D Encoder";
index.add({
    url: "encoder.html#wikitude-3d-encoder",
    title: "Wikitude 3D Encoder",
    body: "## Wikitude 3D Encoder  3D content within Wikitude can only be loaded from so-called *Wikitude 3D Format* files (.wt3).  This is a compressed binary format for describing 3D content, which is optimized for fast loading and handling of 3D content on a mobile devices. You still can use 3D models from your favorite 3D modeling tools (such as Autodesk® Maya® or Blender) but you'll need to convert them to the wt3 file format. Wikitude offers a desktop application called the Wikitude 3D Encoder, which handles the task of encoding your 3D source file.  The Encoder is compatible with Autodesk® FBX® files (.fbx) and the open standard Collada (.dae) file formats for encoding to .wt3.  Each step for getting a .wt3 file from your 3D content is explained in more detail below.  1.  How to install the Wikitude 3D Encoder 2.  Supported 3D Models 3.  The Wikitude 3D Encoder user interface 4.  First Steps Using the Wikitude 3D Encoder 5.  Working with 3D Models  "
});

documentTitles["encoder.html#how-to-install-wikitude-3d-encoder-on-windows-xp-windows-7-windows-8"] = "How to install Wikitude 3D Encoder on Windows XP/ Windows 7/ Windows 8";
index.add({
    url: "encoder.html#how-to-install-wikitude-3d-encoder-on-windows-xp-windows-7-windows-8",
    title: "How to install Wikitude 3D Encoder on Windows XP/ Windows 7/ Windows 8",
    body: "### How to install Wikitude 3D Encoder on Windows XP/ Windows 7/ Windows 8  -   Download the Encoder from &lt;a href=\&quot;http://www.wikitude.com/download\&quot; target=\&quot;_top\&quot;&gt;www.wikitude.com/download&lt;/a&gt; -   Run the setup.exe installation file and follow the installation wizard  "
});

documentTitles["encoder.html#how-to-install-wikitude-3d-encoder-on-mac-os-x"] = "How to install Wikitude 3D Encoder on Mac OS X";
index.add({
    url: "encoder.html#how-to-install-wikitude-3d-encoder-on-mac-os-x",
    title: "How to install Wikitude 3D Encoder on Mac OS X",
    body: "### How to install Wikitude 3D Encoder on Mac OS X  -   Download the Encoder from &lt;a href=\&quot;http://www.wikitude.com/download\&quot; target=\&quot;_top\&quot;&gt;www.wikitude.com/download&lt;/a&gt; -   Open the .dmg installation image and drag the Wikitude 3D Encoder application to your Applications folder.  "
});

documentTitles["encoder.html#supported-3d-models"] = "Supported 3D Models";
index.add({
    url: "encoder.html#supported-3d-models",
    title: "Supported 3D Models",
    body: "### Supported 3D Models  The Wikitude 3D Encoder can import Autodesk® FBX® and Collada files. FBX is the preferred way as Collada's open standard allows for customized tags that might not be supported.  Features you can use in your 3D model source files:  -   Static model (made-up of triangles)    -   [Animations](assetsworkflow.html#working-with-3d-animations)     - Transformation Animations     - Skinning -   Materials     - Phong, Lambert, Blinn     - Transparency -   NURBS (will be tessellated on import)  Features that are not (yet) supported  -   Normal Mapping -   Multi Textures  If you are not sure whether the 3D model at hand fits the requirements, try to encode it. You will receive a list of warnings and errors that tell you if the 3D content will work within Wikitude or uses unsupported features.  "
});

documentTitles["encoder.html#the-wikitude-3d-encoder-user-interface"] = "The Wikitude 3D Encoder user interface";
index.add({
    url: "encoder.html#the-wikitude-3d-encoder-user-interface",
    title: "The Wikitude 3D Encoder user interface",
    body: "### The Wikitude 3D Encoder user interface  On startup you are presented with the following interface.  1.  Toolbar for frequently used functions 2.  3D working area to view your 3D content. 3.  Scene graph that lists all 3D content in a tree view 4.  A properties area that shows details about a selected node from the scene graph 5.  Status bar  ![Wikitude 3D Encoder Interface](images/Wikitude3DEncoderInterface.png)    "
});

documentTitles["encoder.html#first-steps-using-the-wikitude-3d-encoder"] = "First steps using the Wikitude 3D Encoder";
index.add({
    url: "encoder.html#first-steps-using-the-wikitude-3d-encoder",
    title: "First steps using the Wikitude 3D Encoder",
    body: "### First steps using the Wikitude 3D Encoder  Start by opening a supported 3D model file (.fbx, .dae). Select `Open` from the toolbar or drag and drop a supported file onto the 3D working area. Depending on the size of the file this can take a while. Once finished, the 3D content will be shown in the 3D working area.  In case the Wikitude 3D Encoder encounters features not supported in your file, it will present a list of errors or warnings in a dialog box. The popup window summarizes the issues found during the import process. You can bring up this information again at a later time via `Window-&gt;Show Logging Window`. Check the message and details carefully to identify areas that need to be altered in your 3D model file, ensuring that it can be encoded properly.  The 3D working area shows your encoded 3D model file in the exact way as it would show in Wikitude. Drag, pan and zoom to verify that your model looks ok.  If you need to check specific properties (e.g. materials or lights) select the corresponding node in the scene graph. The details of a selected node are displayed in the properties view.  "
});

documentTitles["encoder.html#export-files-to-wt3"] = "Export files to .wt3";
index.add({
    url: "encoder.html#export-files-to-wt3",
    title: "Export files to .wt3",
    body: "### Export files to .wt3  Once you are satisfied with the encoded file, choose `Export` from the toolbar. Then choose the location where the exported file should be saved. Exported .wt3 files can be used directly in an augmented reality experience using Wikitude. If you want to view a .wt3 file on the desktop, simply choose `Open` or drag and drop it into the Wikitude 3D Encoder.  More information on the workflow with 3D content can be found in the dedicated chapter called [3D Asset Workflow](assetsworkflow.html).    "
});



documentTitles["referenceandroid.html#reference"] = "Reference";
index.add({
    url: "referenceandroid.html#reference",
    title: "Reference",
    body: "# Reference  "
});

documentTitles["referenceandroid.html#javascript-api"] = "JavaScript API";
index.add({
    url: "referenceandroid.html#javascript-api",
    title: "JavaScript API",
    body: "## JavaScript API Goto [JavaScript API Reference][ArchitectApi] for a complete reference of all JavaScript API objects and functions.  [ARchitectApi]:  architectapi://reference/index.html  "
});

documentTitles["referenceandroid.html#android-javadocs"] = "Android JavaDocs";
index.add({
    url: "referenceandroid.html#android-javadocs",
    title: "Android JavaDocs",
    body: "## Android JavaDocs  Goto [Android JavaDoc Reference](../Reference/Android%20Reference/html/index.html) for a complete reference of all Android Wikitude API objects and functions. "
});



documentTitles["sdu-dbs.html#sdu-and-dbs"] = "SDU and DBS";
index.add({
    url: "sdu-dbs.html#sdu-and-dbs",
    title: "SDU and DBS",
    body: "## SDU and DBS  "
});

documentTitles["sdu-dbs.html#scaled-distance-units-sdus"] = "Scaled Distance Units (SDUs)";
index.add({
    url: "sdu-dbs.html#scaled-distance-units-sdus",
    title: "Scaled Distance Units (SDUs)",
    body: "### Scaled Distance Units (SDUs)  In AR applications, the term \&quot;size of an object\&quot; cannot be defined just in pixels or similar size measurements. Unlike in 2-dimensional applications, such as maps, the size of an object inherently depends on the distance from the viewer to the object.  Imagine a virtual 2-dimensional logo which should be placed right on top of a certain store location. In a map-based application, the size can easily be defined by specifying the width and height of the logo in pixels. In AR applications, the logo should appear as big as the building itself, which is dependent on the distance in a natural way. Additionally for geobased usecases objects should be readable even if far away. We use a distance based scaling (see below) to accomplish this.  The term \&quot;pixels\&quot; or physical units cannot be used in AR applications, as they are defined in a static way and do not allow the application to scale the objects in the desired way. Thus, the Wikitude ARchitect introduces Scaled Distance Units (SDU). SDUs are defined not only in relation to the object's size itself, but also in relation to the distance from the viewer to the object itself.  For drawables attached to `GeoObjects`, 1 SDU is defined as the screen-size of an object which is exactly 1 meter high and located 10 meters away from the viewer. If a drawable's width is defined as 5 SDU, it will exactly overlap an object which is 5 meters wide and is located in 10 meters distance. For drawables attached to `Trackable2DObjects`, SDUs are determined by the underlying trackable's size. The drawables anchor point will be set to the center of the `Trackable2DObject`, and 1 SDU is defined to be the height of the image, as described in the figure below:  ![](images/sdu_Trackable2DDrawables.jpg)   A circle with radius set to 0.25 will then be rendered accordingly like shown in the image below: ![](images/sdu_circleInTrackable.jpg)  "
});

documentTitles["sdu-dbs.html#distance-based-scaling-dbs"] = "Distance Based Scaling (DBS)";
index.add({
    url: "sdu-dbs.html#distance-based-scaling-dbs",
    title: "Distance Based Scaling (DBS)",
    body: "### Distance Based Scaling (DBS)  Another important concept of an AR application is \&quot;Distance Based Scaling\&quot;. Think about the logo again, which represents the store location of a certain brand. If the viewer is about 10 meters away and looking at the store, the logo will perfectly overlap the building, given that we have set the drawable's width and height to the right SDUs. Now, let's put the view further away from the store location. Without the concept of DSB, the logo will quickly vanish from the screen, as it will be too small to see - especially when the SDUs are not set to a high value. A similar situation appears when we are moving towards the location - the logo will soon appear very big and obstruct the entire screen.  To avoid situations, where drawables are only clearly visible in a certain viewing distance or are otherwise too big or too small to recognize respectively, the Wikitude ARchitect introduces  a concept called Distance Based Scaling (DBS). It ensures that drawables do not exceed certain limits of their original appearance.  We define two values, `cutoff_min` and `cutoff_max`.  `cutoff_min` is set to 10 meters and defines the viewing distance at which the drawables will not be scaled anymore. Regardless whether the viewing distance is 10 meters or even closer to the original location, the drawable will still have the same size on the screen. This avoids drawables obstructing the entire screen.  `cutoff_max` is set to 20 kilometers and defines the viewing distance beyond which the drawables will not be scaled anymore. The drawable will still appear in the same size on the screen, regardless if the distance to the object is 20 kilometers, or even more. This avoids drawables getting too small to see on the screen.  The `cutoff_max` size of the drawable is set to 10% of its size at cutoff_min (the defined SDU-value), resulting in any drawable not appearing smaller than 10% of its size if the object was only 10 meters away.  Between `cutoff_min` and `cutoff_max`, the objects are scaled based on a scaling function of x^(0.2). The effect of this particular scaling function is that drawables representing near objects are downscaled fairly quickly as the user is moving away from the object. The further the user moves away from the object, the lesser the loss of size will be visible for the user, to allow a smooth user experience."
});



documentTitles["migration-android.html#migration"] = "Migration";
index.add({
    url: "migration-android.html#migration",
    title: "Migration",
    body: "# Migration "
});

documentTitles["migration-android.html#migrate-from-33-to-40"] = "Migrate from 3.3 to 4.0";
index.add({
    url: "migration-android.html#migrate-from-33-to-40",
    title: "Migrate from 3.3 to 4.0",
    body: "## Migrate from 3.3 to 4.0 * Make sure to set the required permissions for your application when using the new `AR.context.hardware.flashlight` API. * Starting with Wikitude SDK 4.0 a valid license key is mandatory for starting the SDK. An empty license key will block the SDK. A free trial key can be generated on the [license page](http://www.wikitude.com/developer/sdk-licenses) (free account required). * The Wikitude SDK 4.0 introduces a new file format for target collections (wtc). In order to unleash the full power of the new Wikitude SDK 4.0 read [this section](migration-common.html#upgrading-targets-for-sdk-4x) and re-generate your targets.   "
});

documentTitles["migration-android.html#migrate-from-32-to-33"] = "Migrate from 3.2 to 3.3";
index.add({
    url: "migration-android.html#migrate-from-32-to-33",
    title: "Migrate from 3.2 to 3.3",
    body: "## Migrate from 3.2 to 3.3 The SDK is compatible with Android 4.4, so we recommend to update ADT to the latest version and set the target SDK version to '19' in your Android Manifest XML file.  "
});

documentTitles["migration-android.html#migrate-from-31-to-32"] = "Migrate from 3.1 to 3.2";
index.add({
    url: "migration-android.html#migrate-from-31-to-32",
    title: "Migrate from 3.1 to 3.2",
    body: "## Migrate from 3.1 to 3.2 `ArchitectUrlListener` and `SensorAccuracyChangeListener` are now inner interfaces of the `ArchitectView` class. Update your imports in your Android code accordingly to get rid of compile time errors (`ArchitectUrlListener` becomes `ArchitectView.ArchitectUrlListener`).  "
});

documentTitles["migration-android.html#migrate-from-30-to-31"] = "Migrate from 3.0 to 3.1";
index.add({
    url: "migration-android.html#migrate-from-30-to-31",
    title: "Migrate from 3.0 to 3.1",
    body: "## Migrate from 3.0 to 3.1 "
});

documentTitles["migration-android.html#image-recognition-and-tracking"] = "Image Recognition and Tracking";
index.add({
    url: "migration-android.html#image-recognition-and-tracking",
    title: "Image Recognition and Tracking",
    body: "### Image Recognition and Tracking The image recognition engine of Wikitude SDK 3.1 has been updated resulting in shorter time interval to successfully recognize a target image. As a consequence the format of the digital footprint of target image has changed. The format is backward compatible. Developers still can use target collections (.wtc) generated with Wikitude SDK 3.0 (prior to 27th August 2013) together with the SDK 3.1 and vice versa.  However we recommend to generate your target collections again in the Target Manager Tool and update the files when you are using Wikitude SDK 3.1  "
});

documentTitles["migration-android.html#html-drawables"] = "HTML Drawables";
index.add({
    url: "migration-android.html#html-drawables",
    title: "HTML Drawables",
    body: "### HTML Drawables Developers using HTML Drawables in projects prior to Wikitude SDK 3.1 and like to upgrade to 3.1 need to define the `viewportHeight` similar to the already defined `viewportWidth`. In addition HTML Drawables do not have to be created as static or dynamic anymore. All are created as dynamic ones.  "
});

documentTitles["migration-android.html#migrate-from-20-to-30"] = "Migrate from 2.0 to 3.0";
index.add({
    url: "migration-android.html#migrate-from-20-to-30",
    title: "Migrate from 2.0 to 3.0",
    body: "## Migrate from 2.0 to 3.0 Wikitude SDK version 3.0 introduces Wikitude's own image recognition and tracking solution and removes support for the Vuforia Plugin.   If you are not using image recognition features in your app you only need to update the jar file and are good to go.  In case you are making use of image recognition features and want to switch from 2.0 to 3.x version remove any Qualcomm/Vuforia related assets (QCAR.so, QCAR.lib) from your project. Also the `READ_PHONE_STATE` permission is no longer required in your AndroidManifest.xml.  Find a step-by-step guide about how to convert your existing target collection from Vuforia to Wikitude [here](targetmanagement.html#migrate_targets).  "
});



documentTitles["migration-common.html#upgrading-targets-for-sdk-4x"] = "Upgrading targets for SDK 4.x";
index.add({
    url: "migration-common.html#upgrading-targets-for-sdk-4x",
    title: "Upgrading targets for SDK 4.x",
    body: "## Upgrading targets for SDK 4.x The Wikitude SDK 4.0 introduces an updated format for the target collection. The new format improves the tracking quality and recognition phase. The updated format is not backward compatible with Wikitude SDK 3.x and can not be used in projects using Wikitude SDK 3.x. You can use the old format in projects using Wikitude SDK 4.x though.  To use the new format you need to re-create your target collection in the &lt;a href=\&quot;http://www.wikitude.com/developer/tools/target-manager\&quot; target=\&quot;_top\&quot;&gt;target manager&lt;/a&gt; and dwonload the `.wtc` file under the `Download 4.x` link. Put this `.wtc` file in your app and replace the previous one.  &lt;div class=\&quot;warning\&quot;&gt;     It is not possible to use a wtc 4.x file together with Wikitude SDK 3.x &lt;/div&gt;  &lt;table&gt;     &lt;tr&gt;         &lt;th&gt;&lt;/th&gt;         &lt;th&gt;Wikitude SDK 3.x&lt;/th&gt;         &lt;th&gt;Wikitude SDK 4.x&lt;/th&gt;     &lt;/tr&gt;     &lt;tr&gt;         &lt;td&gt;wtc 3.x&lt;/td&gt;         &lt;td&gt;supported&lt;/td&gt;         &lt;td&gt;supported&lt;/td&gt;     &lt;/tr&gt;     &lt;tr&gt;         &lt;td&gt;wtc 4.x&lt;/td&gt;         &lt;td&gt;not supported&lt;/td&gt;         &lt;td&gt;supported&lt;/td&gt;         &lt;/tr&gt;  &lt;/table&gt;   "
});

documentTitles["migration-common.html#migrating-targets-from-sdk-1x"] = "Migrating targets from SDK 1.x";
index.add({
    url: "migration-common.html#migrating-targets-from-sdk-1x",
    title: "Migrating targets from SDK 1.x",
    body: "## Migrating targets from SDK 1.x  If you have been using a dataset from the Qualcomm Vuforia target management, please follow these steps to convert your ARchitect World to the new approach:  1. Create a new project with the Wikitude target management tool and upload your targets (see instructions above) 2. Create a target collection and store it in the same location as the previously used *dataset* 3. In your ARchitect World, update the  [`AR.Tracker`](architectapi://reference/classes/Tracker.html) initialization to point to the URL of your new target collection  "
});



documentTitles["changelog.html#wikitude-sdk-android-release-notes"] = "Wikitude SDK Android Release Notes";
index.add({
    url: "changelog.html#wikitude-sdk-android-release-notes",
    title: "Wikitude SDK Android Release Notes",
    body: "# Wikitude SDK Android Release Notes "
});

documentTitles["changelog.html#wikitude-sdk-40"] = "Wikitude SDK 4.0";
index.add({
    url: "changelog.html#wikitude-sdk-40",
    title: "Wikitude SDK 4.0",
    body: "## Wikitude SDK 4.0  "
});

documentTitles["changelog.html#wikitude-sdk-403"] = "Wikitude SDK 4.0.3";
index.add({
    url: "changelog.html#wikitude-sdk-403",
    title: "Wikitude SDK 4.0.3",
    body: "### Wikitude SDK 4.0.3 Release Date: 28.10.14  "
});

documentTitles["changelog.html#fixed"] = "Fixed";
index.add({
    url: "changelog.html#fixed",
    title: "Fixed",
    body: "#### Fixed - Compatibility with Android 5.0  "
});

documentTitles["changelog.html#wikitude-sdk-402"] = "Wikitude SDK 4.0.2";
index.add({
    url: "changelog.html#wikitude-sdk-402",
    title: "Wikitude SDK 4.0.2",
    body: "### Wikitude SDK 4.0.2 Release Date: 09.10.14  "
});

documentTitles["changelog.html#new"] = "New";
index.add({
    url: "changelog.html#new",
    title: "New",
    body: "#### New - Android L compliance, according to the new guidelines - AR Mode configurable on startup (default is IR+Geo)  "
});

documentTitles["changelog.html#improved"] = "Improved";
index.add({
    url: "changelog.html#improved",
    title: "Improved",
    body: "#### Improved - Image target recognition - Optimized SDK for Android 2.3+ by removing fallbacks for older Android versions  "
});

documentTitles["changelog.html#fixed"] = "Fixed";
index.add({
    url: "changelog.html#fixed",
    title: "Fixed",
    body: "#### Fixed - Fixes an issue with flickering augmentations for certain image targets - Fixes an issue where the 'onSnappedToScreen' function was not called when using the 'enabledOnExitFieldOfVision' property - It is safe to call normal lifecycle events of the ARchitectView even if initialization fails - ARchitect WebView lifecycle doesn't interfere with other WebViews in the same application  "
});

documentTitles["changelog.html#wikitude-sdk-401"] = "Wikitude SDK 4.0.1";
index.add({
    url: "changelog.html#wikitude-sdk-401",
    title: "Wikitude SDK 4.0.1",
    body: "### Wikitude SDK 4.0.1  Release Date: 07.08.14  "
});

documentTitles["changelog.html#fixed"] = "Fixed";
index.add({
    url: "changelog.html#fixed",
    title: "Fixed",
    body: "#### Fixed - Fixes Videodrawable crash related to code obfuscation when creating a Play Store application - Fixes Videodrawable loop behaviour on Samsung devices.  "
});

documentTitles["changelog.html#wikitude-sdk-400"] = "Wikitude SDK 4.0.0";
index.add({
    url: "changelog.html#wikitude-sdk-400",
    title: "Wikitude SDK 4.0.0",
    body: "### Wikitude SDK 4.0.0  Release Date: 29.07.14  "
});

documentTitles["changelog.html#new"] = "New";
index.add({
    url: "changelog.html#new",
    title: "New",
    body: "#### New - Support for x86 architecture - \&quot;Snap-to-screen\&quot; feature (see samples [3D Model](imagerecognitionand3d.html#snapToScreen) and [Video](video.html#snappedvideo) for implementation) - Wildcard support for the [`targetName`](architectapi://reference/classes/Trackable2DObject.html#property_targetName) property of [`Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html) - New tracking engine with increased performance  - Control flash light from augmented reality scene ([`AR.context.hardware.flashlight`](architectapi://reference/classes/context.html#property_hardware.flashlight)) - SDK version number is now accessible from JS ([`AR.context.versionNumber`](architectapi://reference/classes/context.html#property_versionNumber)) - Updates OpenSSL version to 1.0.1h - Required license key  "
});

documentTitles["changelog.html#fixed"] = "Fixed";
index.add({
    url: "changelog.html#fixed",
    title: "Fixed",
    body: "#### Fixed - A potential issue that caused rendering artifacts when objects were created outside of the current culling distance - Fixes a problem with wrong camera orientation - Fixes various problems with VideoDrawables - Fixes a potential issue with 3D models that were not deleted correctly from a temporary directory - Fixes a potential issue with 3D models that were not destroyed correctly when using the JS `destroy()` API - Transparent videos on PowerVR SGX 540 devices - Can load the same 3D model more than once - VideoDrawables crash on pause / resume - Load and show more than one video in a single AR world  "
});

documentTitles["changelog.html#improved"] = "Improved";
index.add({
    url: "changelog.html#improved",
    title: "Improved",
    body: "#### Improved - Samples to reflect Snap-to-screen feature and wildcard support - Comments in sample apps source code  "
});

documentTitles["changelog.html#wikitude-sdk-33"] = "Wikitude SDK 3.3";
index.add({
    url: "changelog.html#wikitude-sdk-33",
    title: "Wikitude SDK 3.3",
    body: "## Wikitude SDK 3.3  "
});

documentTitles["changelog.html#wikitude-sdk-332"] = "Wikitude SDK 3.3.2";
index.add({
    url: "changelog.html#wikitude-sdk-332",
    title: "Wikitude SDK 3.3.2",
    body: "### Wikitude SDK 3.3.2  Release Date: 29.07.14  "
});

documentTitles["changelog.html#fixed"] = "Fixed";
index.add({
    url: "changelog.html#fixed",
    title: "Fixed",
    body: "#### Fixed - Fixes various problems with VideoDrawables - Fixes a potential issue with 3D models that were not deleted correctly from a temporary directory - Updates OpenSSL version to 1.0.1h - Transparent videos on PowerVR SGX 540 devices - Can load the same 3D model more than once - VideoDrawables crash on pause / resume - Load and show more than one video in a single AR world  "
});

documentTitles["changelog.html#wikitude-sdk-331"] = "Wikitude SDK 3.3.1";
index.add({
    url: "changelog.html#wikitude-sdk-331",
    title: "Wikitude SDK 3.3.1",
    body: "### Wikitude SDK 3.3.1  Release Date: 24.04.2014  "
});

documentTitles["changelog.html#new"] = "New";
index.add({
    url: "changelog.html#new",
    title: "New",
    body: "#### New - Listener for PageLoaded Event  "
});

documentTitles["changelog.html#fixed"] = "Fixed";
index.add({
    url: "changelog.html#fixed",
    title: "Fixed",
    body: "#### Fixed - Possible memory allocation issues during application close - Possible error where screenshot was not captured - Crash when exiting and reentering the same architect world - Some PNG images couldn't be loaded  "
});

documentTitles["changelog.html#wikitude-sdk-330"] = "Wikitude SDK 3.3.0";
index.add({
    url: "changelog.html#wikitude-sdk-330",
    title: "Wikitude SDK 3.3.0",
    body: "### Wikitude SDK 3.3.0  Release Date: 01.04.2014  "
});

documentTitles["changelog.html#new"] = "New";
index.add({
    url: "changelog.html#new",
    title: "New",
    body: "#### New - Multiple AR views supported - URL scheme support for `tel:`, `sms:` and `mailto:` - Scaling mode: Global Scene (See [JavaScript API Reference][ArchitectApi] for more details) - Method getSupportedARModeForDevice to retrieve suitable AR mode for device  [ARchitectApi]:  architectapi://reference/classes/context.html  "
});

documentTitles["changelog.html#fixed"] = "Fixed";
index.add({
    url: "changelog.html#fixed",
    title: "Fixed",
    body: "#### Fixed - JavaScript error reported at start-up (Uncaught ReferenceError) - Possible mix-up of 3D textures with the same name in different 3D models - Possible exception when using Video Drawable (ConcurrentModificationException) fixed - Possible crash when sending app to background and back when playing video - Loading of worlds from SD card on Android 3.0 (and earlier) and sound loading from SD card  "
});

documentTitles["changelog.html#improved"] = "Improved";
index.add({
    url: "changelog.html#improved",
    title: "Improved",
    body: "#### Improved - Camera View on low-end devices - Injection of JavaScript API on Android 3.0+ - Compatibility with Android 4.4 and SDK 19  "
});

documentTitles["changelog.html#wikitude-sdk-32"] = "Wikitude SDK 3.2";
index.add({
    url: "changelog.html#wikitude-sdk-32",
    title: "Wikitude SDK 3.2",
    body: "## Wikitude SDK 3.2 "
});

documentTitles["changelog.html#wikitude-sdk-321"] = "Wikitude SDK 3.2.1";
index.add({
    url: "changelog.html#wikitude-sdk-321",
    title: "Wikitude SDK 3.2.1",
    body: "### Wikitude SDK 3.2.1  Release Date: 04.12.2013  "
});

documentTitles["changelog.html#fixed"] = "Fixed";
index.add({
    url: "changelog.html#fixed",
    title: "Fixed",
    body: "#### Fixed  - Compilation error preventing gif files to be shown in AR scene - Animation loops of 3D models - onError trigger not called for images in not supported format - Rare cases where Android UI becomes unresponsive when opening an activity on top of Wikitude SDK   "
});

documentTitles["changelog.html#wikitude-sdk-320"] = "Wikitude SDK 3.2.0";
index.add({
    url: "changelog.html#wikitude-sdk-320",
    title: "Wikitude SDK 3.2.0",
    body: "### Wikitude SDK 3.2.0 Release Date: 10.10.2013  "
});

documentTitles["changelog.html#new"] = "New";
index.add({
    url: "changelog.html#new",
    title: "New",
    body: "#### New  - VideoDrawables to display videos on top of image targets or as part of `GeoObjects` - Taking screenshot of AR scene - Examples for VideoDrawables  "
});

documentTitles["changelog.html#fixed"] = "Fixed";
index.add({
    url: "changelog.html#fixed",
    title: "Fixed",
    body: "#### Fixed  - `AR.context.startVideoPlayer` was unable to play videos from asset folder - ADE.js interfered with architect.js under certain circumstances when loaded from bundle/assets - Rare case of crashing in `onDestroy` - Under certain circumstances the sensors where not paused  - Camera uses auto focus for better recognition performance - Fixed loading worlds from any source - Changing viewport of HTML drawable after creation results in crash  "
});

documentTitles["changelog.html#improved"] = "Improved";
index.add({
    url: "changelog.html#improved",
    title: "Improved",
    body: "#### Improved - Resource loading and caching of images, 3D models and tracker files - Images can be loaded from any source - Loading time of image recognition tracker - Radar position and size is now defined as a DOM element (e.g. div-tag styled in CSS). That way you can define scale and position in HTML instead of defining offsets in SDU unit. - Browse POI samples  "
});

documentTitles["changelog.html#wikitude-sdk-31"] = "Wikitude SDK 3.1";
index.add({
    url: "changelog.html#wikitude-sdk-31",
    title: "Wikitude SDK 3.1",
    body: "## Wikitude SDK 3.1 "
});

documentTitles["changelog.html#wikitude-sdk-310"] = "Wikitude SDK 3.1.0";
index.add({
    url: "changelog.html#wikitude-sdk-310",
    title: "Wikitude SDK 3.1.0",
    body: "### Wikitude SDK 3.1.0 Release Date: 27.08.2013  "
});

documentTitles["changelog.html#fixed"] = "Fixed";
index.add({
    url: "changelog.html#fixed",
    title: "Fixed",
    body: "#### Fixed  - Problem with included ade.js on device interfered with ARchitect API - AnimatedImageDrawable's frame rate was ignored after resume. - Executing onDocumentLocationChanged trigger for HTML Drawable in ADE was broken. - Under certain circumstances SDK didn't pause when switched to background.  "
});

documentTitles["changelog.html#improved"] = "Improved";
index.add({
    url: "changelog.html#improved",
    title: "Improved",
    body: "#### Improved - HTML Drawables work correctly with dynamic content - Image detection two times faster - Better support for target images with low contrast - More reliable tracking, especially for difficult target images - Optimized texture memory usage for non square images  "
});

documentTitles["changelog.html#wikitude-sdk-30"] = "Wikitude SDK 3.0";
index.add({
    url: "changelog.html#wikitude-sdk-30",
    title: "Wikitude SDK 3.0",
    body: "## Wikitude SDK 3.0 "
});

documentTitles["changelog.html#wikitude-sdk-301"] = "Wikitude SDK 3.0.1";
index.add({
    url: "changelog.html#wikitude-sdk-301",
    title: "Wikitude SDK 3.0.1",
    body: "### Wikitude SDK 3.0.1 Release Date: 25.07.2013  "
});

documentTitles["changelog.html#fixed"] = "Fixed";
index.add({
    url: "changelog.html#fixed",
    title: "Fixed",
    body: "####  Fixed  - Orientation issue for Android tablets  "
});

documentTitles["changelog.html#wikitude-sdk-300"] = "Wikitude SDK 3.0.0";
index.add({
    url: "changelog.html#wikitude-sdk-300",
    title: "Wikitude SDK 3.0.0",
    body: "### Wikitude SDK 3.0.0 Release Date: 18.06.2013  "
});

documentTitles["changelog.html#new"] = "New";
index.add({
    url: "changelog.html#new",
    title: "New",
    body: "#### New  - Integrated image recognition and tracking engine - Examples application - Support for 3D model animations - Support for transparent materials, textures and colors on 3D models - API method for setting distance based scaling parameters. See reference on AR.context.scene  "
});

documentTitles["changelog.html#fixed"] = "Fixed";
index.add({
    url: "changelog.html#fixed",
    title: "Fixed",
    body: "#### Fixed  - Under certain circumstances the light of a 3D model was ignored - Issue when locking screen and radar is visible - Possible crash when using wrong license key - Possible crash when returning to an ArchitectView that uses HTMLDrawables - Aspect ratio in camera for devices with image recognition capability  "
});

documentTitles["changelog.html#improved"] = "Improved";
index.add({
    url: "changelog.html#improved",
    title: "Improved",
    body: "#### Improved - Image recognition supports up to 1000 targets - Rewritten, extended and improved SDK documentation. - Significant increase of performance at start up and general performance increase - Minor fixes  "
});

documentTitles["changelog.html#removed"] = "Removed";
index.add({
    url: "changelog.html#removed",
    title: "Removed",
    body: "#### Removed - Support for Vuforia SDK  "
});

documentTitles["changelog.html#wikitude-sdk-20"] = "Wikitude SDK 2.0";
index.add({
    url: "changelog.html#wikitude-sdk-20",
    title: "Wikitude SDK 2.0",
    body: "## Wikitude SDK 2.0 "
});

documentTitles["changelog.html#wikitude-sdk-200"] = "Wikitude SDK 2.0.0";
index.add({
    url: "changelog.html#wikitude-sdk-200",
    title: "Wikitude SDK 2.0.0",
    body: "### Wikitude SDK 2.0.0 Release Date: 26.02.2013  "
});

documentTitles["changelog.html#new"] = "New";
index.add({
    url: "changelog.html#new",
    title: "New",
    body: "#### New - Support for 3D models via new ARchitect class Model   "
});

documentTitles["changelog.html#fixed"] = "Fixed";
index.add({
    url: "changelog.html#fixed",
    title: "Fixed",
    body: "#### Fixed  - Missing SD card prevented image recognition from running successfully.  "
});

documentTitles["changelog.html#improved"] = "Improved";
index.add({
    url: "changelog.html#improved",
    title: "Improved",
    body: "#### Improved - Minor fixes and performance improvements  "
});

documentTitles["changelog.html#wikitude-sdk-12"] = "Wikitude SDK 1.2";
index.add({
    url: "changelog.html#wikitude-sdk-12",
    title: "Wikitude SDK 1.2",
    body: "## Wikitude SDK 1.2 "
});

documentTitles["changelog.html#wikitude-sdk-120"] = "Wikitude SDK 1.2.0";
index.add({
    url: "changelog.html#wikitude-sdk-120",
    title: "Wikitude SDK 1.2.0",
    body: "### Wikitude SDK 1.2.0 Release Date: 18.12.2012  "
});

documentTitles["changelog.html#new"] = "New";
index.add({
    url: "changelog.html#new",
    title: "New",
    body: "#### New  - Improved bridge performance (SteelBridge and Weasel) - onFinish trigger for AnimatedImageDrawables - ImageResource onLoad() reports width and height of loaded image - PropertyAnimation can be paused and resumed - Customize clicking behavior (click, touch down, touch up) - Set culling distance from JavaScript - Support for Vuforia SDK v2.0  "
});

documentTitles["changelog.html#improved"] = "Improved";
index.add({
    url: "changelog.html#improved",
    title: "Improved",
    body: "#### Improved - Architect Desktop Engine (ADE) now overlays world  "
});

documentTitles["changelog.html#wikitude-sdk-11"] = "Wikitude SDK 1.1";
index.add({
    url: "changelog.html#wikitude-sdk-11",
    title: "Wikitude SDK 1.1",
    body: "## Wikitude SDK 1.1 "
});

documentTitles["changelog.html#wikitude-sdk-111"] = "Wikitude SDK 1.1.1";
index.add({
    url: "changelog.html#wikitude-sdk-111",
    title: "Wikitude SDK 1.1.1",
    body: "### Wikitude SDK 1.1.1 Release Date: 26.09.2012  "
});

documentTitles["changelog.html#fixed"] = "Fixed";
index.add({
    url: "changelog.html#fixed",
    title: "Fixed",
    body: "#### Fixed  - Possible crash when using openInBorwser or startVideoPlayer while IR is active - Possible crash when calling start / stop while IR is active  "
});

documentTitles["changelog.html#improved"] = "Improved";
index.add({
    url: "changelog.html#improved",
    title: "Improved",
    body: "#### Improved - Minor performance increase for rendering HTML drawables. - Handling of images with semi transparency    "
});

documentTitles["changelog.html#wikitude-sdk-110"] = "Wikitude SDK 1.1.0";
index.add({
    url: "changelog.html#wikitude-sdk-110",
    title: "Wikitude SDK 1.1.0",
    body: "### Wikitude SDK 1.1.0 Release Date: 16.08.2012  "
});

documentTitles["changelog.html#new"] = "New";
index.add({
    url: "changelog.html#new",
    title: "New",
    body: "#### New  - HTML Drawables  - Relative locations  - Customizable AR radar - Sprite Animations - 3D Transformation - Animation Groups - Extension for Qualcomm Vuforia SDK for Image Recognition - Possibility to turn off camera and sensors - Possibility to add a single drawable to multiple GeoObjects      "
});

documentTitles["changelog.html#improved"] = "Improved";
index.add({
    url: "changelog.html#improved",
    title: "Improved",
    body: "#### Improved - New tutorials and snippets - Library Reference examples and texts - New simple IR example - Streamlined trigger properties - Rendering performance in general - Performance of AR.logger output on device  "
});

documentTitles["changelog.html#wikitude-sdk-10"] = "Wikitude SDK 1.0";
index.add({
    url: "changelog.html#wikitude-sdk-10",
    title: "Wikitude SDK 1.0",
    body: "## Wikitude SDK 1.0  "
});

documentTitles["changelog.html#wikitude-sdk-105"] = "Wikitude SDK 1.0.5";
index.add({
    url: "changelog.html#wikitude-sdk-105",
    title: "Wikitude SDK 1.0.5",
    body: "### Wikitude SDK 1.0.5  "
});

documentTitles["changelog.html#new"] = "New";
index.add({
    url: "changelog.html#new",
    title: "New",
    body: "#### New  - Added setCullingDistance to ArchitectView (SDK) - Added possibility for better error handling when loading an ARchitect World (SDK) - Improved SimpleARBrowser example  "
});

documentTitles["changelog.html#note"] = "Note";
index.add({
    url: "changelog.html#note",
    title: "Note",
    body: "#### Note - Including a viewport meta-tag in your ARchitect World is recommended if you target different screen resolutions (see ARchitectTools/Hello World/Hello World.html for more details)  "
});

documentTitles["changelog.html#wikitude-sdk-104"] = "Wikitude SDK 1.0.4";
index.add({
    url: "changelog.html#wikitude-sdk-104",
    title: "Wikitude SDK 1.0.4",
    body: "### Wikitude SDK 1.0.4 - Licensable SDK    "
});

documentTitles["changelog.html#wikitude-sdk-103"] = "Wikitude SDK 1.0.3";
index.add({
    url: "changelog.html#wikitude-sdk-103",
    title: "Wikitude SDK 1.0.3",
    body: "### Wikitude SDK 1.0.3 - Initial Public SDK Release "
});

