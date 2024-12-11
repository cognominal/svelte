I attempt to create a filetree component that is inspired from the tutorial by stealing and adpating its code.
Also the look and feel should be like vscode.

The route to acess this experiment is /RouteExplorer.

Goals : 
  * support sticky headers. Current experiment : https://svelte.dev/playground/c8dcf3712f4f42b58735c337e6380a5e?version=5.11.0
  * use chokidar to watch for changes in the visible parts of the filtetree
  * make sure the sticky parts does not occupy all the filetree pane
  * vertical line of alignment like vscode
  * support renaming and drag and drop
  * support enfilade (that is when a folder as only one child, display them as one line)
  * support sticky enfilade (to minimize the number of sticky lines)
  * eventually features should be dependant on config vars