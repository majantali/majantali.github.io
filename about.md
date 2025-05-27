
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


## Listing of Tagore songs

Songs of Rabindranath Tagore do not have titles and are traditionally
identified by both by sequence number (within category) and first
their first line. This is potentially true for other large song
collections as well.

The R script [`include-first-line.R`](include-first-line.R) attempts
to extract the first line of each song and adds it to the title,
deleting everything after the first word, which is assumed to be the
serial number.
 
A full listing of first lines with relative links is maintained in
<RabindranathTagore_SongList.csv>, which is eventually meant to serve
as input for a sortable dynamic table. The initial input for this
table is manually cut-and-pasted from the TOC of jekyll-processed HTML
sources, which is then easily transformed by a few search and replace
operations. Automating this does not seem worth the effort at this
point.
