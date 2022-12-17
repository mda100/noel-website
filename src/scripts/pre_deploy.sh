DIR=$(dirname "$0")

node $DIR/imageFileWriter.js
# TODO: compression script runs, then file write runs on OLD folder
# need to be run twice for successful deployment
# this is a quick harmless hack for now, but ideally we can figure out why we have that behavior
node $DIR/imageFileWriter.js