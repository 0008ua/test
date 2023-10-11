Check differences between original and fixed file. Then write them in original.diff file

`diff -u original.js original_fixed.js > original.diff`

Patch (update) original file using differences. Copy of original file automatically saved to original.js.orig

`patch original.js < original.diff`