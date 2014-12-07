#!/bin/sh

if [[ $# -ne 2 ]]; then
    echo "Usage: convert.sh <input video> <output video>"
    exit 1
fi

 ffmpeg -i "$1" -vf 'split[a][b]; [a]pad=iw:ih*2[src]; [b]format=rgba,alphaextract[filt]; [src][filt]overlay=0:h' "$2"