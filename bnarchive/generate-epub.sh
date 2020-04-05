#!/usr/bin/env bash


## Want to exclude <img> tags: doing this crudely for now, but should
## ideally write a pandoc filter? There is unfortunately no option to
## remove all images when generating epubs.

for MDFILE in *_*.md
do
    EPUBFILE=${MDFILE/.md/.epub}
    TMPFILE=${MDFILE/.md/.tmp}
    echo "Generating ${EPUBFILE}"
    grep -v "^<img" ${MDFILE} > ${TMPFILE}
    pandoc -f markdown -o ${EPUBFILE} ${TMPFILE}
    rm ${TMPFILE}
done


