# Wikitude SDK Android Release Notes
## Wikitude SDK 4.0

### Wikitude SDK 4.0.3
Release Date: 28.10.14

#### Fixed
- Compatibility with Android 5.0

### Wikitude SDK 4.0.2
Release Date: 09.10.14

#### New
- Android L compliance, according to the new guidelines
- AR Mode configurable on startup (default is IR+Geo)

#### Improved
- Image target recognition
- Optimized SDK for Android 2.3+ by removing fallbacks for older Android versions

#### Fixed
- Fixes an issue with flickering augmentations for certain image targets
- Fixes an issue where the 'onSnappedToScreen' function was not called when using the 'enabledOnExitFieldOfVision' property
- It is safe to call normal lifecycle events of the ARchitectView even if initialization fails
- ARchitect WebView lifecycle doesn't interfere with other WebViews in the same application

### Wikitude SDK 4.0.1 
Release Date: 07.08.14

#### Fixed
- Fixes Videodrawable crash related to code obfuscation when creating a Play Store application
- Fixes Videodrawable loop behaviour on Samsung devices.

### Wikitude SDK 4.0.0 
Release Date: 29.07.14

#### New
- Support for x86 architecture
- "Snap-to-screen" feature (see samples [3D Model](imagerecognitionand3d.html#snapToScreen) and [Video](video.html#snappedvideo) for implementation)
- Wildcard support for the [`targetName`](architectapi://reference/classes/Trackable2DObject.html#property_targetName) property of [`Trackable2DObject`](architectapi://reference/classes/Trackable2DObject.html)
- New tracking engine with increased performance 
- Control flash light from augmented reality scene ([`AR.context.hardware.flashlight`](architectapi://reference/classes/context.html#property_hardware.flashlight))
- SDK version number is now accessible from JS ([`AR.context.versionNumber`](architectapi://reference/classes/context.html#property_versionNumber))
- Updates OpenSSL version to 1.0.1h
- Required license key

#### Fixed
- A potential issue that caused rendering artifacts when objects were created outside of the current culling distance
- Fixes a problem with wrong camera orientation
- Fixes various problems with VideoDrawables
- Fixes a potential issue with 3D models that were not deleted correctly from a temporary directory
- Fixes a potential issue with 3D models that were not destroyed correctly when using the JS `destroy()` API
- Transparent videos on PowerVR SGX 540 devices
- Can load the same 3D model more than once
- VideoDrawables crash on pause / resume
- Load and show more than one video in a single AR world

#### Improved
- Samples to reflect Snap-to-screen feature and wildcard support
- Comments in sample apps source code

## Wikitude SDK 3.3

### Wikitude SDK 3.3.2 
Release Date: 29.07.14

#### Fixed
- Fixes various problems with VideoDrawables
- Fixes a potential issue with 3D models that were not deleted correctly from a temporary directory
- Updates OpenSSL version to 1.0.1h
- Transparent videos on PowerVR SGX 540 devices
- Can load the same 3D model more than once
- VideoDrawables crash on pause / resume
- Load and show more than one video in a single AR world

### Wikitude SDK 3.3.1 
Release Date: 24.04.2014

#### New
- Listener for PageLoaded Event

#### Fixed
- Possible memory allocation issues during application close
- Possible error where screenshot was not captured
- Crash when exiting and reentering the same architect world
- Some PNG images couldn't be loaded

### Wikitude SDK 3.3.0 
Release Date: 01.04.2014

#### New
- Multiple AR views supported
- URL scheme support for `tel:`, `sms:` and `mailto:`
- Scaling mode: Global Scene (See [JavaScript API Reference][ArchitectApi] for more details)
- Method getSupportedARModeForDevice to retrieve suitable AR mode for device

[ARchitectApi]:  architectapi://reference/classes/context.html

#### Fixed
- JavaScript error reported at start-up (Uncaught ReferenceError)
- Possible mix-up of 3D textures with the same name in different 3D models
- Possible exception when using Video Drawable (ConcurrentModificationException) fixed
- Possible crash when sending app to background and back when playing video
- Loading of worlds from SD card on Android 3.0 (and earlier) and sound loading from SD card

#### Improved
- Camera View on low-end devices
- Injection of JavaScript API on Android 3.0+
- Compatibility with Android 4.4 and SDK 19

## Wikitude SDK 3.2
### Wikitude SDK 3.2.1 
Release Date: 04.12.2013

#### Fixed 
- Compilation error preventing gif files to be shown in AR scene
- Animation loops of 3D models
- onError trigger not called for images in not supported format
- Rare cases where Android UI becomes unresponsive when opening an activity on top of Wikitude SDK


### Wikitude SDK 3.2.0
Release Date: 10.10.2013

#### New 
- VideoDrawables to display videos on top of image targets or as part of `GeoObjects`
- Taking screenshot of AR scene
- Examples for VideoDrawables

#### Fixed 
- `AR.context.startVideoPlayer` was unable to play videos from asset folder
- ADE.js interfered with architect.js under certain circumstances when loaded from bundle/assets
- Rare case of crashing in `onDestroy`
- Under certain circumstances the sensors where not paused 
- Camera uses auto focus for better recognition performance
- Fixed loading worlds from any source
- Changing viewport of HTML drawable after creation results in crash

#### Improved
- Resource loading and caching of images, 3D models and tracker files
- Images can be loaded from any source
- Loading time of image recognition tracker
- Radar position and size is now defined as a DOM element (e.g. div-tag styled in CSS). That way you can define scale and position in HTML instead of defining offsets in SDU unit.
- Browse POI samples

## Wikitude SDK 3.1
### Wikitude SDK 3.1.0
Release Date: 27.08.2013

#### Fixed 
- Problem with included ade.js on device interfered with ARchitect API
- AnimatedImageDrawable's frame rate was ignored after resume.
- Executing onDocumentLocationChanged trigger for HTML Drawable in ADE was broken.
- Under certain circumstances SDK didn't pause when switched to background.

#### Improved
- HTML Drawables work correctly with dynamic content
- Image detection two times faster
- Better support for target images with low contrast
- More reliable tracking, especially for difficult target images
- Optimized texture memory usage for non square images

## Wikitude SDK 3.0
### Wikitude SDK 3.0.1
Release Date: 25.07.2013

####  Fixed
 - Orientation issue for Android tablets

### Wikitude SDK 3.0.0
Release Date: 18.06.2013

#### New 
- Integrated image recognition and tracking engine
- Examples application
- Support for 3D model animations
- Support for transparent materials, textures and colors on 3D models
- API method for setting distance based scaling parameters. See reference on AR.context.scene

#### Fixed 
- Under certain circumstances the light of a 3D model was ignored
- Issue when locking screen and radar is visible
- Possible crash when using wrong license key
- Possible crash when returning to an ArchitectView that uses HTMLDrawables
- Aspect ratio in camera for devices with image recognition capability

#### Improved
- Image recognition supports up to 1000 targets
- Rewritten, extended and improved SDK documentation.
- Significant increase of performance at start up and general performance increase
- Minor fixes

#### Removed
- Support for Vuforia SDK

## Wikitude SDK 2.0
### Wikitude SDK 2.0.0
Release Date: 26.02.2013

#### New
- Support for 3D models via new ARchitect class Model 

#### Fixed 
- Missing SD card prevented image recognition from running successfully.

#### Improved
- Minor fixes and performance improvements

## Wikitude SDK 1.2
### Wikitude SDK 1.2.0
Release Date: 18.12.2012

#### New 
- Improved bridge performance (SteelBridge and Weasel)
- onFinish trigger for AnimatedImageDrawables
- ImageResource onLoad() reports width and height of loaded image
- PropertyAnimation can be paused and resumed
- Customize clicking behavior (click, touch down, touch up)
- Set culling distance from JavaScript
- Support for Vuforia SDK v2.0

#### Improved
- Architect Desktop Engine (ADE) now overlays world

## Wikitude SDK 1.1
### Wikitude SDK 1.1.1
Release Date: 26.09.2012

#### Fixed 
- Possible crash when using openInBorwser or startVideoPlayer while IR is active
- Possible crash when calling start / stop while IR is active

#### Improved
- Minor performance increase for rendering HTML drawables.
- Handling of images with semi transparency
  
### Wikitude SDK 1.1.0
Release Date: 16.08.2012

#### New 
- HTML Drawables 
- Relative locations 
- Customizable AR radar
- Sprite Animations
- 3D Transformation
- Animation Groups
- Extension for Qualcomm Vuforia SDK for Image Recognition
- Possibility to turn off camera and sensors
- Possibility to add a single drawable to multiple GeoObjects
 
  
#### Improved
- New tutorials and snippets
- Library Reference examples and texts
- New simple IR example
- Streamlined trigger properties
- Rendering performance in general
- Performance of AR.logger output on device

## Wikitude SDK 1.0 
### Wikitude SDK 1.0.5

#### New 
- Added setCullingDistance to ArchitectView (SDK)
- Added possibility for better error handling when loading an ARchitect World (SDK)
- Improved SimpleARBrowser example

#### Note
- Including a viewport meta-tag in your ARchitect World is recommended if you target different screen resolutions (see ARchitectTools/Hello World/Hello World.html for more details)

### Wikitude SDK 1.0.4
- Licensable SDK
  
### Wikitude SDK 1.0.3
- Initial Public SDK Release
