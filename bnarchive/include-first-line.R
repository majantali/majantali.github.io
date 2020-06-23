#!/usr/local/bin/Rscript --vanilla

## FIXME: improve detection of first line. Currently assumes exactly
## one blank line between title and ````; should search for first ^```
## instead.

args <- commandArgs(TRUE)
if (length(args) != 1)
{
    cat("\nUsage: ./include-first-line.R <FILE>\n\n")
    q()
} 


## This is only (so far) for Tagore songs, which don't have titles as
## such, and are traditionally identified both by sequence number and
## first line.

## We eventually need to figure out how to make a useful index, but
## for now, this script just tries to extract the first line and maybe
## add it to the title.

## title lines (initially containing just the serial number) are
## identified by a hash (#), and should be followed by a blank line,
## ````, and then the first line.


infile <- args[1]
outfile <- paste0(args[1], ".out") # rename explicitly

input <- readLines(infile, encoding = "UTF-8")

title.lines <- grep("^#", input)

titles <- input[title.lines]
## FIXME: keep only first 'word'?
serialnum <- sapply(strsplit(titles, "[ \t]"), "[", 2)
firstlines <- input[title.lines + 3]


normalize <- function(s)
    ## trim whitespace, and also replace multiple spaces by 1
{
    p <- strsplit(trimws(s), "[ \t,;-?—।॥!]+")
    sapply(p, function(x) paste(x, collapse = " "))
}

input[title.lines] <- paste0("# ", serialnum, " :: ", normalize(firstlines))

writeLines(input, con = outfile, sep = "\n")

