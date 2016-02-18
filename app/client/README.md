Any files here are only served to the client. This is a good place to keep your HTML, CSS, and UI-related JavaScript code.

There are several load ordering rules. They are applied sequentially to all applicable files in the application, in the priority given below:

HTML template files are *always* loaded before everything else
Files beginning with `main.` are loaded last
Files inside *any* `lib/` directory are loaded next
Files with deeper paths are loaded next
Files are then loaded in alphabetical order of the entire path
