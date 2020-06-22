---
title: Public Domain Bengali Literature
language: bn
layout: landing
---


This site represents a reorganization of the Public Domain Bengali
Literature Archive previously hosted at

<https://www.isid.ac.in/~deepayan/bengalionline.net/>.

The main change is to move the "source" from a an ad-hoc XML
representation to markdown, and provide EPUB versions for
download. The impetus to revive this project is the recent
availability of practical OCR using [Google cloud
vision](https://cloud.google.com/vision/docs/ocr).

Many of these will be incomplete works-in-progress. The primary
editable sources are hosted at
<https://github.com/majantali/bnarchive>, including ones in very early
stages (e.g., direct OCR output without proofreading).  More-or-less
readable versions will be copied over to
<https://majantali.github.io/bnarchive>. Edits / pull requests should
be against the [primary
archive](https://github.com/majantali/bnarchive).


## Notes

- Processing XML into markdown will produce a spurious blank line
  before a closing code tag. These may be replaced (but it is not 
  absolutely necessary to do so).


- Bitmap Images can be converted into vector graphics using

potrace -b svg -o out.svg -k 0.5 in.bmp 


## Special characters:

jekyll / kramdown seems to convert ASCII quotes to smart quotes
(always?), but is not completely equivalent to pandoc. Here are some
special characters that may be useful to set in the source:

- Quotation marks: “  ”  ‘ ’

- Apostrophe: ’

- Dashes: –	—


