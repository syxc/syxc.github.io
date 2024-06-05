---
pubDatetime: 2014-12-23T15:22:00+08:00
title: 在 OSX 上面安装 Jenkins
slug: install-jenkins-on-macos
featured: false
draft: false
description: ""
tags:
  - Jenkins
  - macOS
---

Starting/stopping the service

- To manually start the daemon:  
  `sudo launchctl load /Library/LaunchDaemons/org.jenkins-ci.plist`
- To manually stop the daemon:  
  `sudo launchctl unload /Library/LaunchDaemons/org.jenkins-ci.plist`

**How to uninstall Jenkins?**

[http://stackoverflow.com/questions/11608996/how-to-uninstall-jenkins](http://stackoverflow.com/questions/11608996/how-to-uninstall-jenkins)

There instructions apply if you installed using the official Jenkins Mac installer from [http://jenkins-ci.org](http://jenkins-ci.org)

Execute from terminal

`/Library/Application Support/Jenkins/Uninstall.command`

If the uninstallation script cannot be found, use:

```bash
sudo launchctl unload /Library/LaunchDaemons/org.jenkins-ci.plist
sudo rm /Library/LaunchDaemons/org.jenkins-ci.plist
sudo rm -rf /Applications/Jenkins "/Library/Application Support/Jenkins" /Library/Documentation/Jenkins
```

and if you want to get rid of all the jobs and builds:

`sudo rm -rf /Users/Shared/Jenkins`

and to delete the jenkins user and group (if you chose to use them):

```bash
sudo dscl . -delete /Users/jenkins
sudo dscl . -delete /Groups/jenkins
```

I think that should cover it. Maybe that could be included with the Jenkins installer... But how would people find it? There is no standard place for uninstallers on Mac.
