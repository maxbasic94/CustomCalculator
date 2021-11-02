# CustomCalculator

This application represents simple calculator, which does one operation at a time. \
You can check how it works here: https://custom-calc.netlify.app/

## Task

link on the document: https://docs.google.com/document/d/1j8DnTnRSNoRBdYtKu3Rgk1STLso4X5Rev2-oEyxMsK8/edit#

## How to use

Press buttons 1 - 9 to enter a numbers. \
Press "AC" to completely erase an expression or end result. \
Press ![alt text](https://img.icons8.com/ios-glyphs/12/ffffff/clear-symbol.png) to erase part of the expression. \
Press "M+" to add the displayed value to the existing number in memory. \
Press "M-" to subtract the displayed value from the number in memory. \
Press "MC" to clear memory. \
Press "MR" to read number from memory.

Basic operations:
| Operation | Description |
| :---: | :---: |
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| ^ | Exponentiation |
| x² | "x" to square |
| x³ | "x" to cube |
| xʸ | "x" to the power of "y" |
| √ | Square root |
| ³√ | Cube root |
| ʸ√ | "y" root |
| e | Exhibitor |
| eˣ | Exhibitor to power "x" |
| ln | Natural logarithm |
| log | Decimal logarithm |
| % | Percent |

## Folder structure

1. The project build is located in the folder "dist". The build consists of 3 files: 
* index.html - contains html markup. 
* style.css - contains style sheets. 
* bundle.js - contains JavaScript code.  
2. Folder "src" contains folder "classes" and some files: 
* folder "classes" - contains files with classes.
* app.js - contains main JavaScrip code.
* fuctions.js - contains secondary functions.
* functions.test.js - contains unit tests for classes.