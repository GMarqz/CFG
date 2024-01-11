"Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec." 
-Basically, when I use a function that has yet to be imported, vscode import it automatically, but it import only the folder, not  the file, or, when it import the file it doesnnt include the '.js' in the end, so its read as file and that creates a conflict with the type.

When I was trying to ref an img path on CreateImage class, it would always return 404 error. I tried finding the path in css (background-image: url()) and just paste the path (/CFG-main/assets/images/icon-check.svg) on the class' src and it worked.. after almost 5 hours trying to deal with the 404 error.

I made ButtonCheck.js so I could make the index.js code smaller, however, browser's console would always return an error saying that the parent element wasnt defined, and thats probably because the function makeRules() would call createButtonCheck() before creating the elements, so the createButtonCheck proprieties that needed makeRules elements in order to work wouldnt exist. To fix that, I set parentElement as paramms for createButtoCheck().

Also never forget to add '.element'. For example: header.element.appendChild(div.element), see even on paramms you have to state element.