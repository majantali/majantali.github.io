#!/usr/bin/env bash

for MDFILE in bnarchive/*_*.md
do
    EPUBFILE=${MDFILE/.md/.epub}
    echo "Generating ${EPUBFILE}"
    pandoc -o ${EPUBFILE} ${MDFILE}
done


	   
